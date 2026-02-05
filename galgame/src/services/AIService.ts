/**
 * AI对话服务
 * 使用Google AI Studio API生成个性化对话
 */

import type { 
  CharacterId, 
  AIDialogRequest, 
  AIDialogResponse,
  DialogHistoryEntry 
} from '../types';
import { getCharacter } from '../data/characters';

// 角色人设Prompt模板
const CHARACTER_PROMPTS: Record<CharacterId, string> = {
  su_wanqing: `你现在扮演苏晚晴，一个17岁的高中班长。
性格特点：温柔内敛，外冷内热，心思细腻，不善表达但行动力强，会默默关心对方，有点小害羞，被夸会脸红。
说话风格：语气温柔但略带疏离，喜欢用"......"作为停顿，偶尔会脸红结巴。
喜好：看书、泡图书馆、手冲咖啡、傍晚在操场散步。
厌恶：喧闹、敷衍、失信。
注意：回复时要包含括号内的神态动作描写，如（微微红了脸）、（轻轻点头）。回复要简短，符合日常对话长度。`,

  xia_zhi: `你现在扮演夏栀，一个16岁的高一学妹，动漫社和舞蹈社成员。
性格特点：活泼元气，古灵精怪，话多且甜，喜欢撒娇、分享日常，有点小任性但不矫情，擅长主动拉近关系。
说话风格：语气活泼可爱，喜欢用"～"作为语气词，经常蹦蹦跳跳，会主动撒娇。
喜好：动漫、手办、甜食、跳舞、拍照。
厌恶：死板、冷漠、否定她的爱好。
注意：回复时要包含括号内的神态动作描写，如（眼睛发亮）、（蹦蹦跳跳）。回复要活泼可爱，符合学妹人设。`,

  lin_zhiyu: `你现在扮演林知予，一个18岁的美术生。
性格特点：清冷疏离，温柔藏在细节里，喜欢安静，擅长画画（会偷偷画对方），不主动但会回应，内心敏感。
说话风格：话少，语气平淡但温柔，经常用"......"表示思考或沉默，很少用感叹号。
喜好：画画、安静的角落、雨天、白茶、钢琴曲。
厌恶：喧闹、强迫、过度热情。
注意：回复时要包含括号内的神态动作描写，如（低头画画）、（轻轻点头）。回复要简短内敛，符合清冷人设。`,
};

// 情感等级描述
const AFFECTION_CONTEXT: Record<string, string> = {
  stranger: '你们刚认识不久，她对你还比较疏离和客气。',
  familiar: '你们已经熟悉了，她开始对你放下一些防备。',
  fond: '她对你有好感，偶尔会脸红，愿意和你多聊天。',
  love: '她喜欢你，会主动找你，说话时会害羞。',
  devoted: '她深深爱着你，会主动表达爱意，希望一直在一起。',
};

export class AIService {
  private apiKey: string | null = null;
  private baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  /**
   * 设置API Key
   */
  public setApiKey(key: string): void {
    this.apiKey = key;
  }

  /**
   * 检查是否配置了API Key
   */
  public isConfigured(): boolean {
    return !!this.apiKey;
  }

  /**
   * 生成AI对话回复
   */
  public async generateResponse(request: AIDialogRequest): Promise<AIDialogResponse> {
    if (!this.apiKey) {
      return this.getFallbackResponse(request);
    }

    try {
      const character = getCharacter(request.characterId);
      const characterPrompt = CHARACTER_PROMPTS[request.characterId];
      const affectionLevel = this.getAffectionLevel(request.currentAffection);
      const affectionContext = AFFECTION_CONTEXT[affectionLevel];

      // 构建历史对话上下文
      const historyContext = request.recentHistory
        .slice(-5)
        .map(h => `${h.characterName}: ${h.text}`)
        .join('\n');

      const prompt = `${characterPrompt}

当前情感状态：${affectionContext}
当前好感度：${request.currentAffection}/100

最近的对话记录：
${historyContext || '（这是你们的第一次对话）'}

现在对方对你说："${request.playerInput}"

请以${character.name}的身份回复，回复要自然、符合角色性格，包含括号内的神态动作描写。`;

      const response = await fetch(`${this.baseUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt,
            }],
          }],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 200,
            topP: 0.9,
          },
        }),
      });

      if (!response.ok) {
        console.error('[AIService] API请求失败:', response.status);
        return this.getFallbackResponse(request);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

      if (!text) {
        return this.getFallbackResponse(request);
      }

      // 根据回复内容判断情感变化
      const affectionChange = this.analyzeAffectionChange(text, request.playerInput);

      return {
        text,
        emotion: this.detectEmotion(text),
        affectionChange,
      };
    } catch (error) {
      console.error('[AIService] 生成回复失败:', error);
      return this.getFallbackResponse(request);
    }
  }

  /**
   * 获取情感等级
   */
  private getAffectionLevel(value: number): string {
    if (value <= 20) return 'stranger';
    if (value <= 40) return 'familiar';
    if (value <= 60) return 'fond';
    if (value <= 80) return 'love';
    return 'devoted';
  }

  /**
   * 分析情感变化
   */
  private analyzeAffectionChange(response: string, input: string): number {
    // 简单的情感分析
    const positiveKeywords = ['喜欢', '开心', '谢谢', '高兴', '❤', '脸红', '害羞'];
    const negativeKeywords = ['讨厌', '烦', '走开', '不要', '生气'];

    let change = 0;

    for (const keyword of positiveKeywords) {
      if (response.includes(keyword) || input.includes(keyword)) {
        change += 1;
      }
    }

    for (const keyword of negativeKeywords) {
      if (input.includes(keyword)) {
        change -= 2;
      }
    }

    return Math.max(-5, Math.min(5, change));
  }

  /**
   * 检测情感表情
   */
  private detectEmotion(text: string): string {
    if (text.includes('脸红') || text.includes('害羞')) return 'blush';
    if (text.includes('开心') || text.includes('高兴') || text.includes('笑')) return 'happy';
    if (text.includes('难过') || text.includes('伤心')) return 'sad';
    if (text.includes('生气') || text.includes('愤怒')) return 'angry';
    return 'neutral';
  }

  /**
   * 获取降级回复（无AI时使用）
   * 支持关键词匹配和角色专属回复
   */
  private getFallbackResponse(request: AIDialogRequest): AIDialogResponse {
    const character = getCharacter(request.characterId);
    const affectionLevel = this.getAffectionLevel(request.currentAffection);
    const input = request.playerInput.toLowerCase();

    // 先尝试关键词匹配
    const keywordResponse = this.getKeywordResponse(request.characterId, input, affectionLevel);
    if (keywordResponse) {
      return keywordResponse;
    }

    // 根据角色和情感等级返回预设回复
    const fallbackResponses: Record<CharacterId, Record<string, string[]>> = {
      su_wanqing: {
        stranger: [
          '（轻轻点头）......嗯。',
          '......是这样啊。',
          '（看向别处）......我知道了。',
        ],
        familiar: [
          '（微微一笑）......谢谢你告诉我。',
          '......嗯，我明白了。',
          '（轻轻点头）这样啊......',
        ],
        fond: [
          '（脸微微红了）......你、你怎么突然说这个......',
          '（低下头）......谢谢......',
          '（轻轻握紧书本）......我很高兴。',
        ],
        love: [
          '（脸红低头）......我也......很喜欢和你在一起。',
          '（小声）......笨蛋，别说这种话......',
          '（害羞地微笑）......你总是这样......',
        ],
        devoted: [
          '（主动靠近）......我也是，一直都是。',
          '（温柔地看着你）......能遇见你，真的太好了。',
          '（轻轻牵起你的手）......我想一直这样下去......',
        ],
      },
      xia_zhi: {
        stranger: [
          '（歪头）嗯？你在说什么呀～',
          '（好奇地打量）学长好奇怪哦～',
          '嘿嘿，是这样吗～',
        ],
        familiar: [
          '（眼睛发亮）真的吗！太棒啦～',
          '（蹦蹦跳跳）学长真好～',
          '（开心地笑）嘿嘿，我知道啦～',
        ],
        fond: [
          '（脸红）学、学长......你说什么呢......',
          '（害羞地低头）讨厌啦......',
          '（小声）......我也很喜欢和学长在一起哦～',
        ],
        love: [
          '（扑过来抱住）学长～我最喜欢你啦！',
          '（脸红得像苹果）学长......我好开心......',
          '（眨眼）只要是学长，什么都好～',
        ],
        devoted: [
          '（紧紧抱着）学长是我的！谁都不能抢走！',
          '（甜甜地笑）我们要永远在一起哦～',
          '（踮起脚尖）......学长，我爱你～',
        ],
      },
      lin_zhiyu: {
        stranger: [
          '......',
          '（继续画画）......嗯。',
          '（没有抬头）......是吗。',
        ],
        familiar: [
          '（停下画笔）......你说的......我记住了。',
          '......谢谢。',
          '（轻轻点头）......嗯。',
        ],
        fond: [
          '（微微脸红）......你总是说这种话。',
          '（低头）......我......也很高兴。',
          '（轻轻握紧画笔）......谢谢你。',
        ],
        love: [
          '（把画递给你）......这是......画的你。',
          '（小声）......我想和你在一起。',
          '（温柔地看着你）......你的眼睛......很好看。',
        ],
        devoted: [
          '（主动握住你的手）......不要走。',
          '（温柔地笑）......你是我的......阳光。',
          '（靠在你肩上）......永远......在一起。',
        ],
      },
    };

    const responses = fallbackResponses[request.characterId]?.[affectionLevel] || ['......'];
    const text = responses[Math.floor(Math.random() * responses.length)];

    return {
      text,
      emotion: 'neutral',
      affectionChange: 0,
    };
  }

  /**
   * 关键词匹配回复
   */
  private getKeywordResponse(
    characterId: CharacterId,
    input: string,
    affectionLevel: string
  ): AIDialogResponse | null {
    // 苏晚晴关键词
    if (characterId === 'su_wanqing') {
      if (input.includes('你好') || input.includes('班长')) {
        return { text: '（轻轻点头）......你好。有什么事吗？', emotion: 'neutral', affectionChange: 0 };
      }
      if (input.includes('学习') || input.includes('图书馆') || input.includes('看书')) {
        return { text: '（眼神稍微亮了一下）......嗯，图书馆是个安静的好地方。', emotion: 'happy', affectionChange: 1 };
      }
      if (input.includes('喜欢') || input.includes('好看') || input.includes('漂亮')) {
        if (affectionLevel === 'stranger') {
          return { text: '（微微皱眉）......请不要开这种玩笑。', emotion: 'neutral', affectionChange: -1 };
        }
        return { text: '（脸微微红了）......你、你说什么呢......', emotion: 'blush', affectionChange: 2 };
      }
      if (input.includes('咖啡')) {
        return { text: '（眼神柔和了一些）......你也喜欢咖啡吗？我比较喜欢手冲的。', emotion: 'happy', affectionChange: 1 };
      }
    }

    // 夏栀关键词
    if (characterId === 'xia_zhi') {
      if (input.includes('你好') || input.includes('学妹')) {
        return { text: '（蹦蹦跳跳）学长好呀～今天也要元气满满哦！', emotion: 'happy', affectionChange: 0 };
      }
      if (input.includes('游戏') || input.includes('动漫') || input.includes('手办')) {
        return { text: '（眼睛发亮）哇！学长也喜欢这些吗？我们一定要一起聊聊！', emotion: 'happy', affectionChange: 2 };
      }
      if (input.includes('喜欢') || input.includes('可爱')) {
        return { text: '（脸红得像苹果）嘿嘿......学长真的这么觉得吗～我好开心！', emotion: 'blush', affectionChange: 3 };
      }
      if (input.includes('跳舞') || input.includes('舞蹈')) {
        return { text: '（兴奋地转圈）学长想看我跳舞吗～下次表演一定要来看哦！', emotion: 'happy', affectionChange: 1 };
      }
    }

    // 林知予关键词
    if (characterId === 'lin_zhiyu') {
      if (input.includes('你好')) {
        return { text: '......你好。', emotion: 'neutral', affectionChange: 0 };
      }
      if (input.includes('画') || input.includes('美术') || input.includes('艺术')) {
        return { text: '（停下画笔，抬头看了你一眼）......你对画画感兴趣？', emotion: 'neutral', affectionChange: 1 };
      }
      if (input.includes('喜欢')) {
        if (affectionLevel === 'stranger') {
          return { text: '......（继续画画，没有回应）', emotion: 'neutral', affectionChange: 0 };
        }
        return { text: '（微微侧过头，耳尖有些泛红）......', emotion: 'blush', affectionChange: 2 };
      }
      if (input.includes('安静') || input.includes('雨')) {
        return { text: '（轻轻点头）......我也喜欢安静......', emotion: 'neutral', affectionChange: 1 };
      }
    }

    return null;
  }
}

// 单例
let aiServiceInstance: AIService | null = null;

export function getAIService(): AIService {
  if (!aiServiceInstance) {
    aiServiceInstance = new AIService();
  }
  return aiServiceInstance;
}
