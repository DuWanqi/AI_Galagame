/**
 * 夏栀AI驱动剧情数据
 * 第二章：动漫社的约定
 * 第三章：夏日祭的告白
 * 
 * 剧情骨架固定，对话和选项由AI根据好感度动态生成
 * 无AI时使用预设内容降级运行
 */

import type { StoryChapter, StoryNode, DialogLine, Choice } from '../types';

// ============ 第二章：动漫社的约定 ============

/**
 * 第二章剧情梗概：
 * - 场景：动漫社活动室、学校天台
 * - 核心事件：夏栀邀请参加动漫展
 * - 好感度分支：
 *   - 低好感（<25）：普通社团活动，关系疏远
 *   - 中好感（25-50）：一起看动漫，增进了解
 *   - 高好感（>50）：主动邀请约会，表露心意
 */

// 第二章预设对话 - 用于降级
const XZ_CH2_FALLBACK_DIALOGS = {
  // 社团室相遇
  clubMeet_low: [
    { id: 'f_d001', characterId: 'xia_zhi' as const, text: '（看到你进来）啊，学长也来动漫社啦～', emotion: 'happy' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（歪头）不过学长好像对动漫不太感兴趣的样子......', emotion: 'neutral' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '没关系！让夏栀来给学长安利一下！', emotion: 'excited' },
  ],
  clubMeet_mid: [
    { id: 'f_d001', characterId: 'xia_zhi' as const, text: '（眼睛发亮）学长！你来啦～我一直在等你呢！', emotion: 'happy' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（蹦蹦跳跳）今天社团要讨论下个月的动漫展，学长要一起去吗？', emotion: 'excited' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '（撒娇）人家想和学长一起去嘛～', emotion: 'blush' },
  ],
  clubMeet_high: [
    { id: 'f_d001', characterId: 'xia_zhi' as const, text: '（看到你立刻扑过来）学长～我好想你！', emotion: 'happy' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（脸红）其实......今天夏栀有件重要的事想跟学长说......', emotion: 'blush' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '（小声）下个月的动漫展......学长能陪我一起去吗？就、就我们两个人！', emotion: 'blush' },
  ],

  // 天台谈心
  rooftopTalk_low: [
    { id: 'f_d001', characterId: 'narrator' as const, text: '放学后，你在天台发现了夏栀的身影。' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（看着夕阳）学长......你觉得追逐梦想很傻吗？', emotion: 'sad' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '有人说我喜欢动漫是幼稚......', emotion: 'sad' },
  ],
  rooftopTalk_mid: [
    { id: 'f_d001', characterId: 'narrator' as const, text: '夏栀邀请你来到天台，夕阳把天空染成了橘红色。' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（转过身微笑）学长，谢谢你愿意了解我喜欢的东西。', emotion: 'happy' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '（看着远方）其实夏栀一直希望能遇到一个......理解我的人。', emotion: 'blush' },
  ],
  rooftopTalk_high: [
    { id: 'f_d001', characterId: 'narrator' as const, text: '天台上只有你们两个人，晚风轻轻吹过夏栀的发丝。' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（靠近你）学长......你知道吗，夏栀最喜欢和你在一起的时候了。', emotion: 'blush' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '（脸红得像苹果）因为......因为学长对夏栀来说很特别！', emotion: 'blush' },
  ],
};

// 第二章预设选项 - 用于降级
const XZ_CH2_FALLBACK_CHOICES = {
  // 社团邀请回应
  clubInvite: [
    {
      id: 'fc_001a',
      text: '"当然要去！和夏栀一起去动漫展肯定很有趣！"',
      icon: 'favorite',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 8 }],
      nextNodeId: 'xz_ch2_003a',
    },
    {
      id: 'fc_001b',
      text: '"我考虑一下......"',
      icon: 'sentiment_neutral',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 0 }],
      nextNodeId: 'xz_ch2_003b',
    },
    {
      id: 'fc_001c',
      text: '"动漫展？好像不太感兴趣......"',
      icon: 'close',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: -5 }],
      nextNodeId: 'xz_ch2_003c',
    },
  ],
  // 天台安慰回应
  rooftopComfort: [
    {
      id: 'fc_002a',
      text: '"喜欢动漫很棒啊，我觉得夏栀很可爱。"',
      icon: 'favorite',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 10 }],
      nextNodeId: 'xz_ch2_005a',
    },
    {
      id: 'fc_002b',
      text: '"每个人都有自己的爱好，不用在意别人的看法。"',
      icon: 'emoji_emotions',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 5 }],
      nextNodeId: 'xz_ch2_005b',
    },
    {
      id: 'fc_002c',
      text: '"......确实有点幼稚吧。"',
      icon: 'close',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: -8 }],
      nextNodeId: 'xz_ch2_005c',
    },
  ],
};

// 第二章节点定义
export const XIA_ZHI_CHAPTER_2: StoryChapter = {
  id: 'xia_zhi_ch2',
  title: '第二章：动漫社的约定',
  characterId: 'xia_zhi',
  startNodeId: 'xz_ch2_001',
  nodes: [
    // 开场 - 动漫社相遇
    {
      id: 'xz_ch2_001',
      type: 'dialog',
      characterId: 'xia_zhi',
      background: 'clubroom',
      dialogs: [
        { id: 'd001', characterId: 'narrator', text: '放学后，你来到了动漫社活动室。' },
        { id: 'd002', characterId: 'narrator', text: '推开门的瞬间，一个熟悉的声音传来——' },
      ],
      nextNodeId: 'xz_ch2_002',
    },
    // AI对话节点 - 社团室相遇
    {
      id: 'xz_ch2_002',
      type: 'ai_dialog',
      characterId: 'xia_zhi',
      background: 'clubroom',
      storyContext: {
        scene: '动漫社活动室，放学后，室内贴满了动漫海报',
        event: '夏栀看到学长来到动漫社，非常开心',
        mood: '活泼欢快，带有一丝期待',
        keyPoints: ['打招呼', '提到动漫展', '邀请学长一起去'],
        dialogCount: 3,
      },
      fallback: {
        dialogs: XZ_CH2_FALLBACK_DIALOGS.clubMeet_mid,
      },
      nextNodeId: 'xz_ch2_choice1',
    },
    // AI选项节点 - 社团邀请回应
    {
      id: 'xz_ch2_choice1',
      type: 'ai_choice',
      characterId: 'xia_zhi',
      storyContext: {
        scene: '动漫社活动室',
        event: '夏栀邀请学长一起去动漫展',
        mood: '期待',
        keyPoints: ['接受邀请', '犹豫考虑', '委婉拒绝'],
        choiceCount: 3,
      },
      fallback: {
        choices: XZ_CH2_FALLBACK_CHOICES.clubInvite,
      },
      nextNodeId: 'xz_ch2_003a', // 默认下一节点
    },
    // 选择A后续 - 接受邀请
    {
      id: 'xz_ch2_003a',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（眼睛闪闪发亮）真的吗真的吗！学长太好啦！', emotion: 'excited' },
        { id: 'd002', characterId: 'xia_zhi', text: '（蹦蹦跳跳）那我们说好了哦！到时候夏栀要穿cos服，学长也要配合！', emotion: 'happy' },
        { id: 'd003', characterId: 'narrator', text: '看着夏栀开心的样子，你不禁也跟着笑了起来。' },
      ],
      nextNodeId: 'xz_ch2_004',
    },
    // 选择B后续 - 犹豫
    {
      id: 'xz_ch2_003b',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（有些失落）是......是吗......', emotion: 'sad' },
        { id: 'd002', characterId: 'xia_zhi', text: '（很快又振作起来）没关系！学长慢慢考虑，夏栀等你的答复！', emotion: 'neutral' },
      ],
      nextNodeId: 'xz_ch2_004',
    },
    // 选择C后续 - 拒绝
    {
      id: 'xz_ch2_003c',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（表情黯淡下来）......这样啊。', emotion: 'sad' },
        { id: 'd002', characterId: 'xia_zhi', text: '（勉强笑了笑）没关系......学长有自己的事情要忙吧。', emotion: 'sad' },
        { id: 'd003', characterId: 'narrator', text: '你注意到夏栀的眼眶似乎有些泛红。' },
      ],
      nextNodeId: 'xz_ch2_004',
    },
    // 天台场景过渡
    {
      id: 'xz_ch2_004',
      type: 'ai_dialog',
      characterId: 'xia_zhi',
      background: 'rooftop',
      storyContext: {
        scene: '学校天台，夕阳西下，橘红色的光芒洒满天空',
        event: '夏栀在天台谈心，分享自己对动漫的热爱',
        mood: '温馨感性，略带忧愁',
        keyPoints: ['夕阳', '谈论梦想', '希望被理解'],
        dialogCount: 4,
      },
      fallback: {
        dialogs: XZ_CH2_FALLBACK_DIALOGS.rooftopTalk_mid,
      },
      nextNodeId: 'xz_ch2_choice2',
    },
    // AI选项节点 - 天台安慰
    {
      id: 'xz_ch2_choice2',
      type: 'ai_choice',
      characterId: 'xia_zhi',
      storyContext: {
        scene: '学校天台，夕阳下',
        event: '夏栀谈到有人说她喜欢动漫很幼稚',
        mood: '需要安慰和支持',
        keyPoints: ['支持她的爱好', '表示理解', '或冷漠回应'],
        choiceCount: 3,
      },
      fallback: {
        choices: XZ_CH2_FALLBACK_CHOICES.rooftopComfort,
      },
      nextNodeId: 'xz_ch2_005a',
    },
    // 安慰后续A - 夸她可爱
    {
      id: 'xz_ch2_005a',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（脸一下子红透了）学、学长说我可爱......！', emotion: 'blush' },
        { id: 'd002', characterId: 'xia_zhi', text: '（捂住脸）讨厌......学长突然说这种话......', emotion: 'blush' },
        { id: 'd003', characterId: 'xia_zhi', text: '（从指缝中偷看你）但是......夏栀好开心......', emotion: 'happy' },
        { id: 'd004', characterId: 'narrator', text: '夕阳的余晖洒在夏栀身上，她的笑容比阳光还要灿烂。' },
      ],
      nextNodeId: 'xz_ch2_end',
    },
    // 安慰后续B - 理解支持
    {
      id: 'xz_ch2_005b',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（微微一笑）谢谢学长......', emotion: 'happy' },
        { id: 'd002', characterId: 'xia_zhi', text: '学长说的对！夏栀要勇敢做自己！', emotion: 'excited' },
        { id: 'd003', characterId: 'narrator', text: '夏栀的眼中重新燃起了光芒。' },
      ],
      nextNodeId: 'xz_ch2_end',
    },
    // 安慰后续C - 冷漠
    {
      id: 'xz_ch2_005c',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '......', emotion: 'sad' },
        { id: 'd002', characterId: 'xia_zhi', text: '（低下头）......原来学长也这么觉得啊......', emotion: 'sad' },
        { id: 'd003', characterId: 'narrator', text: '夏栀没有再说话，只是静静地看着远方的夕阳。' },
        { id: 'd004', characterId: 'narrator', text: '气氛变得有些尴尬。' },
      ],
      nextNodeId: 'xz_ch2_end',
    },
    // 第二章结束
    {
      id: 'xz_ch2_end',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'narrator', text: '夕阳渐渐落下，第二章到此结束。' },
        { id: 'd002', characterId: 'narrator', text: '你和夏栀的故事还在继续......' },
      ],
      nextNodeId: 'xz_ch2_freechat',
    },
    // 自由对话环节
    {
      id: 'xz_ch2_freechat',
      type: 'free_chat',
      characterId: 'xia_zhi',
      freeChatConfig: {
        maxRounds: 5,
        prompt: '（看着你微笑）学长，今天谢谢你陪我聊天～还有什么想和夏栀说的吗？',
        exitText: '结束对话',
        placeholderText: '和夏栀说些什么吧...',
      },
      nextNodeId: 'xz_ch2_to_ch3',
    },
    // 第二章到第三章的过渡
    {
      id: 'xz_ch2_to_ch3',
      type: 'scene_change',
      characterId: 'xia_zhi',
      sceneId: 'xia_zhi_ch3', // 跳转到第三章
    },
  ],
};

// ============ 第三章：夏日祭的告白 ============

/**
 * 第三章剧情梗概：
 * - 场景：夏日祭、烟火大会
 * - 核心事件：夏日祭上的告白
 * - 结局分支：
 *   - 普通结局（<40）：保持朋友关系
 *   - 好感结局（40-70）：成功告白
 *   - 完美结局（>70）：双向表白 + 隐藏剧情
 */

// 第三章预设对话 - 用于降级
const XZ_CH3_FALLBACK_DIALOGS = {
  // 夏日祭相遇
  festivalMeet: [
    { id: 'f_d001', characterId: 'narrator' as const, text: '夏日祭的夜晚，到处都是热闹的人群和彩色的灯笼。' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（穿着浴衣出现）学长！夏栀在这里～', emotion: 'happy' },
    { id: 'f_d003', characterId: 'narrator' as const, text: '夏栀今晚穿着粉色的浴衣，头上还别着一朵白色的栀子花。' },
    { id: 'f_d004', characterId: 'xia_zhi' as const, text: '（转了一圈）学长觉得......怎么样？', emotion: 'blush' },
  ],
  // 烟火大会
  fireworks_low: [
    { id: 'f_d001', characterId: 'narrator' as const, text: '烟火升上夜空，绽放出绚丽的光芒。' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（看着烟火）好漂亮......', emotion: 'happy' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '（转向你）学长，谢谢你今天陪我来。', emotion: 'neutral' },
    { id: 'f_d004', characterId: 'xia_zhi' as const, text: '虽然......我们可能只是普通朋友，但夏栀很开心。', emotion: 'sad' },
  ],
  fireworks_mid: [
    { id: 'f_d001', characterId: 'narrator' as const, text: '烟火升上夜空，将你们的脸庞照得通红。' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（突然抓住你的衣角）学长......夏栀有话想说......', emotion: 'blush' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '（深呼吸）我......我一直很喜欢学长！', emotion: 'blush' },
    { id: 'f_d004', characterId: 'narrator' as const, text: '此刻最绚丽的烟火在她身后绽放，映照着她真挚的眼神。' },
  ],
  fireworks_high: [
    { id: 'f_d001', characterId: 'narrator' as const, text: '你们找到了一个僻静的角落，可以看到整片烟火。' },
    { id: 'f_d002', characterId: 'xia_zhi' as const, text: '（紧紧握着你的手）学长......', emotion: 'blush' },
    { id: 'f_d003', characterId: 'xia_zhi' as const, text: '（认真地看着你）夏栀不想只做学长的学妹了......', emotion: 'blush' },
    { id: 'f_d004', characterId: 'xia_zhi' as const, text: '（鼓起勇气）我喜欢你！请和我交往吧！', emotion: 'blush' },
    { id: 'f_d005', characterId: 'narrator' as const, text: '烟火在这一刻仿佛停滞，整个世界只剩下你们两个人。' },
  ],
};

// 第三章预设选项 - 用于降级
const XZ_CH3_FALLBACK_CHOICES = {
  // 浴衣评价
  yukataReaction: [
    {
      id: 'fc_001a',
      text: '"非常漂亮！夏栀今晚像公主一样。"',
      icon: 'favorite',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 10 }],
      nextNodeId: 'xz_ch3_003a',
    },
    {
      id: 'fc_001b',
      text: '"很好看，浴衣很适合你。"',
      icon: 'emoji_emotions',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 5 }],
      nextNodeId: 'xz_ch3_003b',
    },
    {
      id: 'fc_001c',
      text: '"......还行吧。"',
      icon: 'sentiment_neutral',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: -3 }],
      nextNodeId: 'xz_ch3_003c',
    },
  ],
  // 告白回应
  confessionResponse: [
    {
      id: 'fc_002a',
      text: '"我也喜欢你，夏栀。"',
      icon: 'favorite',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 15 }],
      nextNodeId: 'xz_ch3_end_perfect',
    },
    {
      id: 'fc_002b',
      text: '"让我好好考虑一下......"',
      icon: 'sentiment_neutral',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: 0 }],
      nextNodeId: 'xz_ch3_end_normal',
    },
    {
      id: 'fc_002c',
      text: '"抱歉，我只把你当妹妹......"',
      icon: 'close',
      effects: [{ type: 'affection' as const, characterId: 'xia_zhi' as const, value: -10 }],
      nextNodeId: 'xz_ch3_end_bad',
    },
  ],
};

// 第三章节点定义
export const XIA_ZHI_CHAPTER_3: StoryChapter = {
  id: 'xia_zhi_ch3',
  title: '第三章：夏日祭的告白',
  characterId: 'xia_zhi',
  startNodeId: 'xz_ch3_001',
  nodes: [
    // 开场 - 夏日祭入口
    {
      id: 'xz_ch3_001',
      type: 'dialog',
      characterId: 'xia_zhi',
      background: 'festival',
      dialogs: [
        { id: 'd001', characterId: 'narrator', text: '夏日祭的夜晚终于到来了。' },
        { id: 'd002', characterId: 'narrator', text: '神社前的参道上挤满了人，两旁的摊位灯火通明。' },
        { id: 'd003', characterId: 'narrator', text: '你在约定的地点等待着夏栀的到来。' },
      ],
      nextNodeId: 'xz_ch3_002',
    },
    // AI对话节点 - 夏日祭相遇
    {
      id: 'xz_ch3_002',
      type: 'ai_dialog',
      characterId: 'xia_zhi',
      background: 'festival',
      storyContext: {
        scene: '夏日祭神社入口，灯笼高挂，人群熙攘',
        event: '夏栀穿着浴衣出现，非常紧张又期待',
        mood: '浪漫甜蜜，夏日祭典氛围',
        keyPoints: ['穿着粉色浴衣', '头上别着栀子花', '问学长觉得怎么样'],
        dialogCount: 4,
      },
      fallback: {
        dialogs: XZ_CH3_FALLBACK_DIALOGS.festivalMeet,
      },
      nextNodeId: 'xz_ch3_choice1',
    },
    // AI选项节点 - 浴衣评价
    {
      id: 'xz_ch3_choice1',
      type: 'ai_choice',
      characterId: 'xia_zhi',
      storyContext: {
        scene: '夏日祭，夏栀穿着浴衣',
        event: '夏栀问学长觉得自己的浴衣怎么样',
        mood: '紧张期待',
        keyPoints: ['热情赞美', '普通赞美', '敷衍回应'],
        choiceCount: 3,
      },
      fallback: {
        choices: XZ_CH3_FALLBACK_CHOICES.yukataReaction,
      },
      nextNodeId: 'xz_ch3_003a',
    },
    // 浴衣反应A - 热情赞美
    {
      id: 'xz_ch3_003a',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（脸红到耳朵根）公、公主......！学长你说什么呢......！', emotion: 'blush' },
        { id: 'd002', characterId: 'xia_zhi', text: '（害羞地低头）但是......好开心......', emotion: 'happy' },
        { id: 'd003', characterId: 'xia_zhi', text: '（牵起你的手）那、那我们走吧！夏栀要吃章鱼烧！', emotion: 'excited' },
      ],
      nextNodeId: 'xz_ch3_004',
    },
    // 浴衣反应B - 普通赞美
    {
      id: 'xz_ch3_003b',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（微微脸红）谢谢学长～', emotion: 'happy' },
        { id: 'd002', characterId: 'xia_zhi', text: '这是夏栀精心挑选的哦！花了好久呢！', emotion: 'happy' },
        { id: 'd003', characterId: 'xia_zhi', text: '走吧走吧，我们去逛夏日祭～', emotion: 'excited' },
      ],
      nextNodeId: 'xz_ch3_004',
    },
    // 浴衣反应C - 敷衍
    {
      id: 'xz_ch3_003c',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（表情有些黯淡）......还行吗......', emotion: 'sad' },
        { id: 'd002', characterId: 'xia_zhi', text: '（小声）夏栀还以为学长会喜欢......', emotion: 'sad' },
        { id: 'd003', characterId: 'xia_zhi', text: '（勉强打起精神）算了，我们去逛吧。', emotion: 'neutral' },
      ],
      nextNodeId: 'xz_ch3_004',
    },
    // 逛夏日祭过渡
    {
      id: 'xz_ch3_004',
      type: 'dialog',
      characterId: 'xia_zhi',
      dialogs: [
        { id: 'd001', characterId: 'narrator', text: '你们一起逛了许多摊位，玩了捞金鱼，吃了苹果糖。' },
        { id: 'd002', characterId: 'narrator', text: '夏栀一直笑着，仿佛今晚是世界上最幸福的人。' },
        { id: 'd003', characterId: 'narrator', text: '不知不觉，烟火大会即将开始。' },
        { id: 'd004', characterId: 'xia_zhi', text: '（拉着你的手）学长！烟火要开始了！我们去那边看！', emotion: 'excited' },
      ],
      nextNodeId: 'xz_ch3_005',
    },
    // AI对话节点 - 烟火告白
    {
      id: 'xz_ch3_005',
      type: 'ai_dialog',
      characterId: 'xia_zhi',
      background: 'fireworks',
      storyContext: {
        scene: '烟火大会，绚丽的烟火在夜空绽放',
        event: '夏栀鼓起勇气向学长告白',
        mood: '浪漫感动，命运般的时刻',
        keyPoints: ['烟火背景', '紧张的告白', '真挚的感情'],
        dialogCount: 5,
      },
      fallback: {
        dialogs: XZ_CH3_FALLBACK_DIALOGS.fireworks_mid,
      },
      nextNodeId: 'xz_ch3_choice2',
    },
    // AI选项节点 - 告白回应
    {
      id: 'xz_ch3_choice2',
      type: 'ai_choice',
      characterId: 'xia_zhi',
      storyContext: {
        scene: '烟火大会，夏栀刚刚告白',
        event: '夏栀说喜欢学长，等待回应',
        mood: '紧张期待，命运的抉择',
        keyPoints: ['接受告白', '需要时间考虑', '婉拒'],
        choiceCount: 3,
      },
      fallback: {
        choices: XZ_CH3_FALLBACK_CHOICES.confessionResponse,
      },
      nextNodeId: 'xz_ch3_end_perfect',
    },
    // 完美结局
    {
      id: 'xz_ch3_end_perfect',
      type: 'ending',
      characterId: 'xia_zhi',
      endingType: 'perfect',
      background: 'fireworks',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（眼眶泛红）学长......！真的吗......！', emotion: 'happy' },
        { id: 'd002', characterId: 'xia_zhi', text: '（扑进你怀里）我好开心......好开心......！', emotion: 'happy' },
        { id: 'd003', characterId: 'narrator', text: '烟火在你们头顶绽放，见证着这个美好的时刻。' },
        { id: 'd004', characterId: 'xia_zhi', text: '（抬起头）从今天起，学长就是夏栀的......', emotion: 'blush' },
        { id: 'd005', characterId: 'xia_zhi', text: '（小声）......男朋友了～', emotion: 'blush' },
        { id: 'd006', characterId: 'narrator', text: '【完美结局：栀子花开】' },
        { id: 'd007', characterId: 'narrator', text: '在那个夏日祭的夜晚，你们的故事正式开始了。' },
      ],
    },
    // 普通结局
    {
      id: 'xz_ch3_end_normal',
      type: 'ending',
      characterId: 'xia_zhi',
      endingType: 'normal',
      background: 'fireworks',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '（点点头）嗯......夏栀明白的。', emotion: 'neutral' },
        { id: 'd002', characterId: 'xia_zhi', text: '（挤出一个微笑）学长慢慢考虑就好......', emotion: 'sad' },
        { id: 'd003', characterId: 'narrator', text: '夏栀的笑容有些勉强，但她努力不让你看出来。' },
        { id: 'd004', characterId: 'xia_zhi', text: '不管怎样，今天夏栀很开心。谢谢学长。', emotion: 'neutral' },
        { id: 'd005', characterId: 'narrator', text: '【普通结局：等待的栀子】' },
        { id: 'd006', characterId: 'narrator', text: '也许，还需要更多的时间......' },
      ],
    },
    // 坏结局
    {
      id: 'xz_ch3_end_bad',
      type: 'ending',
      characterId: 'xia_zhi',
      endingType: 'normal',
      background: 'fireworks',
      dialogs: [
        { id: 'd001', characterId: 'xia_zhi', text: '......', emotion: 'sad' },
        { id: 'd002', characterId: 'xia_zhi', text: '（低下头）......我明白了。', emotion: 'sad' },
        { id: 'd003', characterId: 'narrator', text: '夏栀的声音在颤抖，烟火的声音似乎也变得遥远。' },
        { id: 'd004', characterId: 'xia_zhi', text: '（擦了擦眼角）谢谢学长......今天陪我来。', emotion: 'sad' },
        { id: 'd005', characterId: 'xia_zhi', text: '（转身离开）......再见。', emotion: 'sad' },
        { id: 'd006', characterId: 'narrator', text: '【失落结局：凋零的花】' },
        { id: 'd007', characterId: 'narrator', text: '那朵栀子花，悄然落在了地上......' },
      ],
    },
  ],
};

// 导出所有夏栀章节
export const XIA_ZHI_CHAPTERS = [XIA_ZHI_CHAPTER_2, XIA_ZHI_CHAPTER_3];
