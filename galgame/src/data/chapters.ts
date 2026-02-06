/**
 * 剧情章节数据
 * 苏晚晴主线 - 第一章：初次相遇
 */

import type { StoryChapter } from '../types';
import { XIA_ZHI_CHAPTERS } from './xia_zhi_story';

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'su_wanqing_ch1',
    title: '第一章：图书馆的邂逅',
    characterId: 'su_wanqing',
    startNodeId: 'sw_ch1_001',
    nodes: [
      // 开场
      {
        id: 'sw_ch1_001',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd001',
            characterId: 'narrator',
            text: '开学第一天，阳光透过教室的窗户洒落进来，空气中弥漫着新书本的清香。',
          },
          {
            id: 'd002',
            characterId: 'narrator',
            text: '作为刚刚转学来的学生，你正在寻找自己的座位。',
          },
          {
            id: 'd003',
            characterId: 'narrator',
            text: '这时，一个身影吸引了你的注意——',
          },
          {
            id: 'd004',
            characterId: 'su_wanqing',
            text: '......你好，请问你是新来的转学生吗？',
            emotion: 'neutral',
          },
          {
            id: 'd005',
            characterId: 'narrator',
            text: '一个扎着马尾的女生站在你面前，校服穿得整整齐齐，胸前别着班长的徽章。',
          },
          {
            id: 'd006',
            characterId: 'narrator',
            text: '她的眼神有些疏离，但语气很礼貌。',
          },
        ],
        nextNodeId: 'sw_ch1_002',
      },
      // 第一个选择
      {
        id: 'sw_ch1_002',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c001a',
            text: '认真回应："是的，我是{playerName}，请多指教！"',
            icon: 'handshake',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch1_003a',
          },
          {
            id: 'c001b',
            text: '敷衍地点点头："嗯......"',
            icon: 'sentiment_neutral',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: -2 },
            ],
            nextNodeId: 'sw_ch1_003b',
          },
          {
            id: 'c001c',
            text: '好奇地问："你是......班长吗？"',
            icon: 'help',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 3 },
            ],
            nextNodeId: 'sw_ch1_003c',
          },
        ],
      },
      // 选择A的后续
      {
        id: 'sw_ch1_003a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd007a',
            characterId: 'su_wanqing',
            text: '......嗯，请多指教。我是苏晚晴，这个班的班长。',
            emotion: 'slight_smile',
          },
          {
            id: 'd008a',
            characterId: 'narrator',
            text: '她的表情似乎柔和了一些，嘴角微微上扬。',
          },
          {
            id: 'd009a',
            characterId: 'su_wanqing',
            text: '你的座位在那边，第三排靠窗的位置。如果有什么不懂的，可以来问我。',
            emotion: 'neutral',
          },
        ],
        nextNodeId: 'sw_ch1_004',
      },
      // 选择B的后续
      {
        id: 'sw_ch1_003b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd007b',
            characterId: 'su_wanqing',
            text: '......我明白了。',
            emotion: 'cold',
          },
          {
            id: 'd008b',
            characterId: 'narrator',
            text: '她的眼神变得更加疏离了。',
          },
          {
            id: 'd009b',
            characterId: 'su_wanqing',
            text: '你的座位在第三排靠窗。有问题找我。',
            emotion: 'cold',
          },
        ],
        nextNodeId: 'sw_ch1_004',
      },
      // 选择C的后续
      {
        id: 'sw_ch1_003c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd007c',
            characterId: 'su_wanqing',
            text: '......是的。我是苏晚晴，班长。',
            emotion: 'neutral',
          },
          {
            id: 'd008c',
            characterId: 'narrator',
            text: '她低头看了看自己胸前的徽章，似乎有些不好意思。',
          },
          {
            id: 'd009c',
            characterId: 'su_wanqing',
            text: '这个......是老师让我带的。',
            emotion: 'slight_blush',
          },
        ],
        nextNodeId: 'sw_ch1_004',
      },
      // 共同后续
      {
        id: 'sw_ch1_004',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd010',
            characterId: 'narrator',
            text: '就这样，你在新学校的第一天开始了。',
          },
          {
            id: 'd011',
            characterId: 'narrator',
            text: '上课时，你时不时会偷偷瞥向那个认真听讲的班长。',
          },
          {
            id: 'd012',
            characterId: 'narrator',
            text: '她的字迹很漂亮，笔记也整理得井井有条。',
          },
        ],
        nextNodeId: 'sw_ch1_005',
      },
      // 午休
      {
        id: 'sw_ch1_005',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd013',
            characterId: 'narrator',
            text: '午休时间到了。大部分同学都去了食堂，教室里只剩下几个人。',
          },
          {
            id: 'd014',
            characterId: 'narrator',
            text: '苏晚晴还坐在座位上看书，手边放着一杯咖啡。',
          },
          {
            id: 'd015',
            characterId: 'narrator',
            text: '你注意到她的眉头时不时皱起来，似乎在思考什么难题。',
          },
        ],
        nextNodeId: 'sw_ch1_006',
      },
      // 第二个选择
      {
        id: 'sw_ch1_006',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c002a',
            text: '走过去问她："看的是什么书呀？"',
            icon: 'menu_book',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 8 },
              { type: 'flag', flagName: 'sw_talked_lunch', value: 1 },
            ],
            nextNodeId: 'sw_ch1_007a',
          },
          {
            id: 'c002b',
            text: '也去食堂吃饭',
            icon: 'restaurant',
            effects: [],
            nextNodeId: 'sw_ch1_007b',
          },
          {
            id: 'c002c',
            text: '安静地在自己座位上休息',
            icon: 'weekend',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 2 },
            ],
            nextNodeId: 'sw_ch1_007c',
          },
        ],
      },
      // 选择A后续 - 主动交流
      {
        id: 'sw_ch1_007a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd016a',
            characterId: 'su_wanqing',
            text: '......！',
            emotion: 'surprised',
          },
          {
            id: 'd017a',
            characterId: 'narrator',
            text: '她被突然的声音吓了一跳，手中的书差点掉下来。',
          },
          {
            id: 'd018a',
            characterId: 'su_wanqing',
            text: '......这是《人间失格》。太宰治的。',
            emotion: 'neutral',
          },
          {
            id: 'd019a',
            characterId: 'su_wanqing',
            text: '你......也喜欢看书吗？',
            emotion: 'curious',
          },
        ],
        nextNodeId: 'sw_ch1_008a',
      },
      {
        id: 'sw_ch1_008a',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c003a1',
            text: '"我很喜欢看书！最近在看三体。"',
            icon: 'auto_stories',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch1_009a',
          },
          {
            id: 'c003a2',
            text: '"偶尔会看一些，不过不太多......"',
            icon: 'sentiment_neutral',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 2 },
            ],
            nextNodeId: 'sw_ch1_009b',
          },
        ],
      },
      {
        id: 'sw_ch1_009a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd020a',
            characterId: 'su_wanqing',
            text: '......三体？刘慈欣的那本？',
            emotion: 'interested',
          },
          {
            id: 'd021a',
            characterId: 'narrator',
            text: '她的眼睛里闪过一丝光芒。',
          },
          {
            id: 'd022a',
            characterId: 'su_wanqing',
            text: '那是一本很棒的书......我也很喜欢。',
            emotion: 'slight_smile',
          },
          {
            id: 'd023a',
            characterId: 'su_wanqing',
            text: '如果......如果你想的话，放学后可以一起去图书馆？那里有很多书。',
            emotion: 'slight_blush',
          },
        ],
        nextNodeId: 'sw_ch1_010',
      },
      {
        id: 'sw_ch1_009b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd020b',
            characterId: 'su_wanqing',
            text: '......这样啊。',
            emotion: 'neutral',
          },
          {
            id: 'd021b',
            characterId: 'su_wanqing',
            text: '读书是很好的习惯......如果有时间的话，可以试着多看一些。',
            emotion: 'slight_smile',
          },
        ],
        nextNodeId: 'sw_ch1_010',
      },
      // 选择B后续 - 去食堂
      {
        id: 'sw_ch1_007b',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd016b',
            characterId: 'narrator',
            text: '你去了食堂吃饭，和新认识的同学聊了一会儿。',
          },
          {
            id: 'd017b',
            characterId: 'narrator',
            text: '回到教室时，苏晚晴已经不在座位上了。',
          },
        ],
        nextNodeId: 'sw_ch1_010',
      },
      // 选择C后续 - 安静休息
      {
        id: 'sw_ch1_007c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd016c',
            characterId: 'narrator',
            text: '你安静地趴在桌上休息。',
          },
          {
            id: 'd017c',
            characterId: 'narrator',
            text: '迷迷糊糊中，你感觉有人轻轻拍了拍你的肩膀。',
          },
          {
            id: 'd018c',
            characterId: 'su_wanqing',
            text: '......那个，上课要开始了。',
            emotion: 'neutral',
          },
          {
            id: 'd019c',
            characterId: 'narrator',
            text: '是苏晚晴。她提醒你之后，就回到了自己的座位。',
          },
          {
            id: 'd020c',
            characterId: 'narrator',
            text: '虽然只是简单的提醒，但她的动作很轻柔。',
          },
        ],
        nextNodeId: 'sw_ch1_010',
      },
      // 放学
      {
        id: 'sw_ch1_010',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd024',
            characterId: 'narrator',
            text: '放学的铃声响起，同学们陆续离开教室。',
          },
          {
            id: 'd025',
            characterId: 'narrator',
            text: '苏晚晴还在座位上整理东西，她的书包里塞满了书。',
          },
        ],
        nextNodeId: 'sw_ch1_011',
      },
      // 最后选择
      {
        id: 'sw_ch1_011',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c004a',
            text: '主动邀请她一起走',
            icon: 'directions_walk',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 10 },
            ],
            nextNodeId: 'sw_ch1_012a',
          },
          {
            id: 'c004b',
            text: '挥手告别后先走一步',
            icon: 'waving_hand',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 3 },
            ],
            nextNodeId: 'sw_ch1_012b',
          },
        ],
      },
      // 结局A - 一起走
      {
        id: 'sw_ch1_012a',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        dialogs: [
          {
            id: 'd026a',
            characterId: 'player',
            text: '苏同学，要一起走吗？',
          },
          {
            id: 'd027a',
            characterId: 'su_wanqing',
            text: '......嗯？',
            emotion: 'surprised',
          },
          {
            id: 'd028a',
            characterId: 'narrator',
            text: '她愣了一下，似乎没想到你会主动邀请她。',
          },
          {
            id: 'd029a',
            characterId: 'su_wanqing',
            text: '......好。',
            emotion: 'slight_blush',
          },
          {
            id: 'd030a',
            characterId: 'narrator',
            text: '就这样，你和苏晚晴一起走出了校门。',
          },
          {
            id: 'd031a',
            characterId: 'narrator',
            text: '傍晚的夕阳洒在她的侧脸上，她的表情比白天柔和了许多。',
          },
          {
            id: 'd032a',
            characterId: 'su_wanqing',
            text: '......谢谢你。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd033a',
            characterId: 'player',
            text: '嗯？谢什么？',
          },
          {
            id: 'd034a',
            characterId: 'su_wanqing',
            text: '......谢谢你愿意和我说话。其他人都......觉得我太严肃了。',
            emotion: 'sad_smile',
          },
          {
            id: 'd035a',
            characterId: 'narrator',
            text: '原来，看起来高冷的班长，内心其实是渴望交流的吗......',
          },
          {
            id: 'd036a',
            characterId: 'narrator',
            text: '你的心里，对这个女孩多了一丝好奇。',
          },
        ],
        nextNodeId: 'sw_ch1_free_chat',
      },
      // 自由对话节点
      {
        id: 'sw_ch1_free_chat',
        type: 'free_chat',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        freeChatConfig: {
          maxRounds: 5,
          prompt: '傍晚的夕阳下，你和苏晚晴并肩走着。难得的独处时间，你可以和她聊聊天......',
          exitText: '告别',
          placeholderText: '和苏晚晴说点什么吧...',
        },
        nextNodeId: 'sw_ch1_ending',
      },
      // 结局B - 先走一步
      {
        id: 'sw_ch1_012b',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        dialogs: [
          {
            id: 'd026b',
            characterId: 'player',
            text: '苏同学，我先走啦，再见！',
          },
          {
            id: 'd027b',
            characterId: 'su_wanqing',
            text: '......嗯，再见。',
            emotion: 'neutral',
          },
          {
            id: 'd028b',
            characterId: 'narrator',
            text: '她轻轻点了点头，继续整理自己的东西。',
          },
          {
            id: 'd029b',
            characterId: 'narrator',
            text: '走出教室时，你回头看了一眼，发现她正望着你离开的方向。',
          },
          {
            id: 'd030b',
            characterId: 'narrator',
            text: '目光相遇的瞬间，她迅速低下了头。',
          },
          {
            id: 'd031b',
            characterId: 'narrator',
            text: '......那是害羞吗？',
          },
        ],
        nextNodeId: 'sw_ch1_free_chat',
      },
      // 章节结束
      {
        id: 'sw_ch1_ending',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd_end1',
            characterId: 'narrator',
            text: '开学第一天就这样结束了。',
          },
          {
            id: 'd_end2',
            characterId: 'narrator',
            text: '和苏晚晴的故事，才刚刚开始......',
          },
          {
            id: 'd_end3',
            characterId: 'narrator',
            text: '【第一章 完】',
          },
        ],
        nextNodeId: 'sw_ch1_freechat',
      },
      // 第一章末尾自由对话
      {
        id: 'sw_ch1_freechat',
        type: 'free_chat',
        characterId: 'su_wanqing',
        background: 'library',
        freeChatConfig: {
          maxRounds: 5,
          prompt: '（轻轻点头）......今天认识你，是件好事。你......还有什么想说的吗？',
          exitText: '结束对话',
          placeholderText: '和晚晴聊聊吧...',
        },
        nextNodeId: 'sw_ch1_continue',
      },
      // 章节衔接选择
      {
        id: 'sw_ch1_continue',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'continue_ch2',
            text: '继续阅读第二章',
            icon: 'arrow_forward',
            effects: [],
            nextNodeId: 'sw_ch2_start',
          },
          {
            id: 'back_to_menu',
            text: '返回主菜单',
            icon: 'home',
            effects: [],
            nextNodeId: 'return_home',
          },
        ],
      },
      // 返回主页的特殊节点
      {
        id: 'return_home',
        type: 'scene_change',
        sceneId: 'home',
        nextNodeId: undefined,
      },
      // 跳转到第二章的中转节点
      {
        id: 'sw_ch2_start',
        type: 'scene_change',
        sceneId: 'su_wanqing_ch2',
        nextNodeId: undefined,
      },
    ],
  },
  // 夏栀第一章
  {
    id: 'xia_zhi_ch1',
    title: '第一章：社团的偶遇',
    characterId: 'xia_zhi',
    startNodeId: 'xz_ch1_001',
    nodes: [
      {
        id: 'xz_ch1_001',
        type: 'dialog',
        characterId: 'xia_zhi',
        background: 'classroom',
        dialogs: [
          {
            id: 'd001',
            characterId: 'narrator',
            text: '开学第一周，学校正在举办社团招新活动。',
          },
          {
            id: 'd002',
            characterId: 'narrator',
            text: '走廊里摆满了各种社团的展台，热闘非凡。',
          },
          {
            id: 'd003',
            characterId: 'narrator',
            text: '突然，一个活泼的声音从身后传来——',
          },
          {
            id: 'd004',
            characterId: 'xia_zhi',
            text: '学长学长！要不要来看看我们动漫社呀！',
            emotion: 'excited',
          },
          {
            id: 'd005',
            characterId: 'narrator',
            text: '回头一看，一个元气满满的女孩正拿着传单冲你招手。',
          },
          {
            id: 'd006',
            characterId: 'narrator',
            text: '她穿着校服，但衣领上别着一个可爱的动漫徽章，马尾随着她的动作轻轻晃动。',
          },
        ],
        nextNodeId: 'xz_ch1_002',
      },
      {
        id: 'xz_ch1_002',
        type: 'choice',
        characterId: 'xia_zhi',
        choices: [
          {
            id: 'c001a',
            text: '"动漫社？听起来很有趣！"',
            icon: 'emoji_emotions',
            effects: [
              { type: 'affection', characterId: 'xia_zhi', value: 8 },
            ],
            nextNodeId: 'xz_ch1_003a',
          },
          {
            id: 'c001b',
            text: '"我看看其他社团再说......"',
            icon: 'search',
            effects: [
              { type: 'affection', characterId: 'xia_zhi', value: -3 },
            ],
            nextNodeId: 'xz_ch1_003b',
          },
        ],
      },
      {
        id: 'xz_ch1_003a',
        type: 'dialog',
        characterId: 'xia_zhi',
        dialogs: [
          {
            id: 'd007a',
            characterId: 'xia_zhi',
            text: '真的吗！太好啦！',
            emotion: 'super_happy',
          },
          {
            id: 'd008a',
            characterId: 'narrator',
            text: '她开心得像只小兔子一样蹦蹦跳跳。',
          },
          {
            id: 'd009a',
            characterId: 'xia_zhi',
            text: '我叫夏栀，是高一的！学长你喜欢看什么动漫呀？',
            emotion: 'curious',
          },
        ],
        nextNodeId: 'xz_ch1_free_chat',
      },
      {
        id: 'xz_ch1_003b',
        type: 'dialog',
        characterId: 'xia_zhi',
        dialogs: [
          {
            id: 'd007b',
            characterId: 'xia_zhi',
            text: '诶......这样啊......',
            emotion: 'disappointed',
          },
          {
            id: 'd008b',
            characterId: 'narrator',
            text: '她的表情瞬间暗了下来，但很快又恢复了笑容。',
          },
          {
            id: 'd009b',
            characterId: 'xia_zhi',
            text: '那没关系！如果改变主意了随时来找我哦！我是夏栀！',
            emotion: 'hopeful',
          },
        ],
        nextNodeId: 'xz_ch1_free_chat',
      },
      // 自由对话节点
      {
        id: 'xz_ch1_free_chat',
        type: 'free_chat',
        characterId: 'xia_zhi',
        background: 'classroom',
        freeChatConfig: {
          maxRounds: 5,
          prompt: '夏栀热情地拉着你介绍动漫社，眼睛闪闪发亮。这个充满活力的学妹让你感到很亲切......',
          exitText: '下次再聊',
          placeholderText: '和夏栀聊聊吧～',
        },
        nextNodeId: 'xz_ch1_ending',
      },
      {
        id: 'xz_ch1_ending',
        type: 'dialog',
        characterId: 'xia_zhi',
        dialogs: [
          {
            id: 'd_end1',
            characterId: 'narrator',
            text: '和活泼的学妹夏栀的相遇，让平淡的社团招新变得有趣起来。',
          },
          {
            id: 'd_end2',
            characterId: 'narrator',
            text: '【第一章 完】',
          },
        ],
        nextNodeId: 'xz_ch1_chapter_select',
      },
      // 章节选择节点
      {
        id: 'xz_ch1_chapter_select',
        type: 'choice',
        characterId: 'xia_zhi',
        choices: [
          {
            id: 'c_continue',
            text: '继续下一章',
            icon: 'arrow_forward',
            effects: [],
            nextNodeId: 'xz_ch2_start',
          },
          {
            id: 'c_return',
            text: '返回主页',
            icon: 'home',
            effects: [],
            nextNodeId: 'xz_return_home',
          },
        ],
      },
      {
        id: 'xz_return_home',
        type: 'scene_change',
        sceneId: 'home',
        nextNodeId: undefined,
      },
      {
        id: 'xz_ch2_start',
        type: 'scene_change',
        sceneId: 'xia_zhi_ch2',
        nextNodeId: undefined,
      },
    ],
  },
  // 林知予第一章
  {
    id: 'lin_zhiyu_ch1',
    title: '第一章：画室的沉默',
    characterId: 'lin_zhiyu',
    startNodeId: 'lzy_ch1_001',
    nodes: [
      {
        id: 'lzy_ch1_001',
        type: 'dialog',
        characterId: 'lin_zhiyu',
        background: 'classroom',
        dialogs: [
          {
            id: 'd001',
            characterId: 'narrator',
            text: '下午的美术课，老师让大家自由创作。',
          },
          {
            id: 'd002',
            characterId: 'narrator',
            text: '你发现教室角落里有一个女生独自坐着，专注地画着什么。',
          },
          {
            id: 'd003',
            characterId: 'narrator',
            text: '她的周围仿佛有一道无形的屏障，没有人靠近她。',
          },
          {
            id: 'd004',
            characterId: 'narrator',
            text: '细看之下，她的画技非常出色，笔触流畅而细腻。',
          },
        ],
        nextNodeId: 'lzy_ch1_002',
      },
      {
        id: 'lzy_ch1_002',
        type: 'choice',
        characterId: 'lin_zhiyu',
        choices: [
          {
            id: 'c001a',
            text: '安静地走近，欣赏她的画',
            icon: 'visibility',
            effects: [
              { type: 'affection', characterId: 'lin_zhiyu', value: 5 },
            ],
            nextNodeId: 'lzy_ch1_003a',
          },
          {
            id: 'c001b',
            text: '热情地打招呼："你画得好棒啊！"',
            icon: 'campaign',
            effects: [
              { type: 'affection', characterId: 'lin_zhiyu', value: -5 },
            ],
            nextNodeId: 'lzy_ch1_003b',
          },
        ],
      },
      {
        id: 'lzy_ch1_003a',
        type: 'dialog',
        characterId: 'lin_zhiyu',
        dialogs: [
          {
            id: 'd005a',
            characterId: 'narrator',
            text: '你轻手轻脚地走近，站在她身后安静地看着。',
          },
          {
            id: 'd006a',
            characterId: 'narrator',
            text: '过了一会儿，她似乎察觉到了你的存在，微微侧过头。',
          },
          {
            id: 'd007a',
            characterId: 'lin_zhiyu',
            text: '......',
            emotion: 'neutral',
          },
          {
            id: 'd008a',
            characterId: 'narrator',
            text: '她没有说话，但也没有赶你走。',
          },
          {
            id: 'd009a',
            characterId: 'narrator',
            text: '也许......这就是她的方式。',
          },
        ],
        nextNodeId: 'lzy_ch1_free_chat',
      },
      {
        id: 'lzy_ch1_003b',
        type: 'dialog',
        characterId: 'lin_zhiyu',
        dialogs: [
          {
            id: 'd005b',
            characterId: 'lin_zhiyu',
            text: '......',
            emotion: 'annoyed',
          },
          {
            id: 'd006b',
            characterId: 'narrator',
            text: '她皱了皱眉，把画板往身侧移了移，遮住了你的视线。',
          },
          {
            id: 'd007b',
            characterId: 'narrator',
            text: '看来，她不太喜欢突然的热情......',
          },
        ],
        nextNodeId: 'lzy_ch1_free_chat',
      },
      // 自由对话节点
      {
        id: 'lzy_ch1_free_chat',
        type: 'free_chat',
        characterId: 'lin_zhiyu',
        background: 'classroom',
        freeChatConfig: {
          maxRounds: 3,
          prompt: '林知予继续画着她的画，但似乎默许了你留在这里。也许，这是和她交流的机会......',
          exitText: '离开',
          placeholderText: '轻声和林知予说......',
        },
        nextNodeId: 'lzy_ch1_ending',
      },
      {
        id: 'lzy_ch1_ending',
        type: 'dialog',
        characterId: 'lin_zhiyu',
        dialogs: [
          {
            id: 'd_end1',
            characterId: 'narrator',
            text: '这个沉默寡言的美术生叫林知予，是你的同班同学。',
          },
          {
            id: 'd_end2',
            characterId: 'narrator',
            text: '她像一幅未完成的画，等待着被慢慢读懂......',
          },
          {
            id: 'd_end3',
            characterId: 'narrator',
            text: '【第一章 完】',
          },
        ],
        nextNodeId: undefined,
      },
    ],
  },
  // ============================================================
  // 苏晚晴第二章：雨中的心意
  // ============================================================
  {
    id: 'su_wanqing_ch2',
    title: '第二章：雨中的心意',
    characterId: 'su_wanqing',
    startNodeId: 'sw_ch2_001',
    nodes: [
      // 开场：突如其来的暴雨
      {
        id: 'sw_ch2_001',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        dialogs: [
          {
            id: 'd001',
            characterId: 'narrator',
            text: '一周后的某天，放学时天色突然阴沉下来。',
          },
          {
            id: 'd002',
            characterId: 'narrator',
            text: '你刚走到校门口，豆大的雨点就劈头盖脸地砸了下来。',
          },
          {
            id: 'd003',
            characterId: 'narrator',
            text: '糟糕......今天又忘带伞了。',
          },
          {
            id: 'd004',
            characterId: 'narrator',
            text: '校门口的屋檐下挤满了避雨的同学，你只能缩在角落里等待。',
          },
          {
            id: 'd005',
            characterId: 'narrator',
            text: '这时，一把淡紫色的伞出现在你头顶——',
          },
          {
            id: 'd006',
            characterId: 'su_wanqing',
            text: '......你，又没带伞吗？',
            emotion: 'neutral',
          },
          {
            id: 'd007',
            characterId: 'narrator',
            text: '是苏晚晴。她站在你身边，神情依旧淡漠，但伞已经倾斜向你这边。',
          },
          {
            id: 'd008',
            characterId: 'narrator',
            text: '雨水打湿了她另一边的肩膀，她却浑然不觉。',
          },
        ],
        nextNodeId: 'sw_ch2_002',
      },
      // 第一个选择
      {
        id: 'sw_ch2_002',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c001a',
            text: '"谢谢班长！你人真好！"',
            icon: 'favorite',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 8 },
            ],
            nextNodeId: 'sw_ch2_003a',
          },
          {
            id: 'c001b',
            text: '"不用了，我等雨停就好......"',
            icon: 'block',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: -3 },
            ],
            nextNodeId: 'sw_ch2_003b',
          },
          {
            id: 'c001c',
            text: '（调皮地）"班长是专程来救我的吗？"',
            icon: 'mood',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch2_003c',
          },
        ],
      },
      // 选择A后续 - 真诚感谢
      {
        id: 'sw_ch2_003a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009a',
            characterId: 'su_wanqing',
            text: '......不用谢。',
            emotion: 'slight_blush',
          },
          {
            id: 'd010a',
            characterId: 'narrator',
            text: '她的耳尖微微泛红，视线避开了你。',
          },
          {
            id: 'd011a',
            characterId: 'su_wanqing',
            text: '只是......刚好路过而已。',
            emotion: 'neutral',
          },
          {
            id: 'd012a',
            characterId: 'narrator',
            text: '但她手中的伞明显是特意打开的，这谎话也太拙劣了吧。',
          },
        ],
        nextNodeId: 'sw_ch2_004',
      },
      // 选择B后续 - 拒绝
      {
        id: 'sw_ch2_003b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009b',
            characterId: 'su_wanqing',
            text: '......',
            emotion: 'cold',
          },
          {
            id: 'd010b',
            characterId: 'narrator',
            text: '她愣了一下，眼中闪过一丝失落。',
          },
          {
            id: 'd011b',
            characterId: 'su_wanqing',
            text: '......这样啊。那你小心。',
            emotion: 'neutral',
          },
          {
            id: 'd012b',
            characterId: 'narrator',
            text: '她转身要离开，但脚步有些迟疑。',
          },
          {
            id: 'd013b',
            characterId: 'player',
            text: '（看着她湿透的肩膀）......等等，我们一起走吧。',
          },
          {
            id: 'd014b',
            characterId: 'su_wanqing',
            text: '......嗯。',
            emotion: 'slight_smile',
          },
        ],
        nextNodeId: 'sw_ch2_004',
      },
      // 选择C后续 - 调皮
      {
        id: 'sw_ch2_003c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009c',
            characterId: 'su_wanqing',
            text: '......！',
            emotion: 'surprised',
          },
          {
            id: 'd010c',
            characterId: 'narrator',
            text: '她的脸一下子红了，连白皙的脖颈都染上了粉色。',
          },
          {
            id: 'd011c',
            characterId: 'su_wanqing',
            text: '才、才不是......只是刚好......',
            emotion: 'blush',
          },
          {
            id: 'd012c',
            characterId: 'narrator',
            text: '她拼命解释着，却越描越黑。',
          },
          {
            id: 'd013c',
            characterId: 'su_wanqing',
            text: '......你要不要一起走！',
            emotion: 'blush',
          },
          {
            id: 'd014c',
            characterId: 'narrator',
            text: '她似乎是为了掩饰尴尬，直接抛出了邀请。',
          },
        ],
        nextNodeId: 'sw_ch2_004',
      },
      // 共撑一把伞
      {
        id: 'sw_ch2_004',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        dialogs: [
          {
            id: 'd015',
            characterId: 'narrator',
            text: '雨势越来越大，你们共撑一把伞走在放学的路上。',
          },
          {
            id: 'd016',
            characterId: 'narrator',
            text: '伞不大，两个人挤在一起，肩膀时不时碰到一起。',
          },
          {
            id: 'd017',
            characterId: 'narrator',
            text: '你能闻到她身上淡淡的香味，像是洗衣液的清香。',
          },
          {
            id: 'd018',
            characterId: 'su_wanqing',
            text: '......雨太大了，去图书馆避一下吧。',
            emotion: 'neutral',
          },
          {
            id: 'd019',
            characterId: 'narrator',
            text: '她指了指前方不远处的市立图书馆。',
          },
        ],
        nextNodeId: 'sw_ch2_005',
      },
      // 图书馆
      {
        id: 'sw_ch2_005',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'library',
        dialogs: [
          {
            id: 'd020',
            characterId: 'narrator',
            text: '图书馆里很安静，只有雨水敲打窗户的声音。',
          },
          {
            id: 'd021',
            characterId: 'narrator',
            text: '苏晚晴找了一个靠窗的角落，熟练地坐下。',
          },
          {
            id: 'd022',
            characterId: 'su_wanqing',
            text: '......这是我常来的地方。',
            emotion: 'neutral',
          },
          {
            id: 'd023',
            characterId: 'narrator',
            text: '她从书包里拿出一本书，然后又拿出一本递给你。',
          },
          {
            id: 'd024',
            characterId: 'su_wanqing',
            text: '这本......你也许会喜欢。',
            emotion: 'slight_smile',
          },
          {
            id: 'd025',
            characterId: 'narrator',
            text: '是《挪威的森林》，村上春树的作品。',
          },
          {
            id: 'd026',
            characterId: 'narrator',
            text: '你翻开书，发现书页间夹着一张小纸条。',
          },
          {
            id: 'd027',
            characterId: 'narrator',
            text: '纸条上写着：「希望他今天过得好。」',
          },
          {
            id: 'd028',
            characterId: 'narrator',
            text: '......这是在说谁？',
          },
        ],
        nextNodeId: 'sw_ch2_006',
      },
      // 发现便签的选择
      {
        id: 'sw_ch2_006',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c002a',
            text: '（假装没看到，默默把纸条放回去）',
            icon: 'visibility_off',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 3 },
            ],
            nextNodeId: 'sw_ch2_007a',
          },
          {
            id: 'c002b',
            text: '"班长，这张纸条是......？"',
            icon: 'help',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 6 },
            ],
            nextNodeId: 'sw_ch2_007b',
          },
          {
            id: 'c002c',
            text: '（故意逗她）"希望\'他\'？班长有喜欢的人吗？"',
            icon: 'mood',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: -2 },
            ],
            nextNodeId: 'sw_ch2_007c',
          },
        ],
      },
      // 选择A - 假装没看到
      {
        id: 'sw_ch2_007a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd029a',
            characterId: 'narrator',
            text: '你假装什么都没看到，把纸条悄悄放回书页间。',
          },
          {
            id: 'd030a',
            characterId: 'narrator',
            text: '苏晚晴似乎松了一口气，但很快又露出一丝失落的表情。',
          },
          {
            id: 'd031a',
            characterId: 'su_wanqing',
            text: '......那本书，你觉得怎么样？',
            emotion: 'neutral',
          },
          {
            id: 'd032a',
            characterId: 'player',
            text: '还没看呢，不过看起来很有意思。',
          },
          {
            id: 'd033a',
            characterId: 'su_wanqing',
            text: '......嗯，希望你会喜欢。',
            emotion: 'slight_smile',
          },
        ],
        nextNodeId: 'sw_ch2_008',
      },
      // 选择B - 询问
      {
        id: 'sw_ch2_007b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd029b',
            characterId: 'su_wanqing',
            text: '......！那个......',
            emotion: 'surprised',
          },
          {
            id: 'd030b',
            characterId: 'narrator',
            text: '她的眼睛睁大，脸瞬间涨得通红。',
          },
          {
            id: 'd031b',
            characterId: 'su_wanqing',
            text: '那是......很久以前写的......没什么特别的意思......',
            emotion: 'blush',
          },
          {
            id: 'd032b',
            characterId: 'narrator',
            text: '她慌乱地想要解释，却越说越乱。',
          },
          {
            id: 'd033b',
            characterId: 'su_wanqing',
            text: '......就是，会在心里默默祝福一些人......',
            emotion: 'blush',
          },
          {
            id: 'd034b',
            characterId: 'player',
            text: '......是在祝福我吗？',
          },
          {
            id: 'd035b',
            characterId: 'su_wanqing',
            text: '......',
            emotion: 'blush',
          },
          {
            id: 'd036b',
            characterId: 'narrator',
            text: '她没有否认，只是低下头，耳尖红得像要滴血。',
          },
        ],
        nextNodeId: 'sw_ch2_008',
      },
      // 选择C - 逗她
      {
        id: 'sw_ch2_007c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd029c',
            characterId: 'su_wanqing',
            text: '......你在说什么！',
            emotion: 'blush',
          },
          {
            id: 'd030c',
            characterId: 'narrator',
            text: '她一把夺过书，把纸条塞进口袋。',
          },
          {
            id: 'd031c',
            characterId: 'su_wanqing',
            text: '没有什么喜欢的人......不要乱说......',
            emotion: 'cold',
          },
          {
            id: 'd032c',
            characterId: 'narrator',
            text: '她的语气有些生硬，但脸上的红晕却出卖了她。',
          },
          {
            id: 'd033c',
            characterId: 'player',
            text: '好好好，我不问了。',
          },
          {
            id: 'd034c',
            characterId: 'narrator',
            text: '气氛有些尴尬，你决定换个话题。',
          },
        ],
        nextNodeId: 'sw_ch2_008',
      },
      // 图书馆安静看书
      {
        id: 'sw_ch2_008',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'library',
        dialogs: [
          {
            id: 'd037',
            characterId: 'narrator',
            text: '你们在图书馆安静地看书，偶尔交换一下眼神。',
          },
          {
            id: 'd038',
            characterId: 'narrator',
            text: '不知不觉，雨渐渐小了。',
          },
          {
            id: 'd039',
            characterId: 'su_wanqing',
            text: '......雨停了。',
            emotion: 'neutral',
          },
          {
            id: 'd040',
            characterId: 'narrator',
            text: '她合上书，望向窗外。夕阳从乌云的缝隙中洒下，整个世界被染成了金色。',
          },
          {
            id: 'd041',
            characterId: 'su_wanqing',
            text: '......要去操场走走吗？傍晚的操场......很漂亮。',
            emotion: 'slight_blush',
          },
          {
            id: 'd042',
            characterId: 'narrator',
            text: '她难得主动发出邀请，虽然语气还是淡淡的。',
          },
        ],
        nextNodeId: 'sw_ch2_009',
      },
      // 操场选择
      {
        id: 'sw_ch2_009',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c003a',
            text: '"好啊，走吧！"',
            icon: 'directions_walk',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 10 },
              { type: 'flag', flagName: 'sw_ch2_playground', value: 1 },
            ],
            nextNodeId: 'sw_ch2_010',
          },
          {
            id: 'c003b',
            text: '"时间有点晚了，下次吧。"',
            icon: 'schedule',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: -5 },
            ],
            nextNodeId: 'sw_ch2_014',
          },
        ],
      },
      // 操场漫步
      {
        id: 'sw_ch2_010',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'park',
        dialogs: [
          {
            id: 'd043',
            characterId: 'narrator',
            text: '傍晚的操场沐浴在金色的夕阳中，雨后的空气格外清新。',
          },
          {
            id: 'd044',
            characterId: 'narrator',
            text: '苏晚晴走在你身边，步伐轻盈，和平时在教室里判若两人。',
          },
          {
            id: 'd045',
            characterId: 'su_wanqing',
            text: '......我很喜欢傍晚来这里。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd046',
            characterId: 'su_wanqing',
            text: '这个时候，人很少......很安静。',
            emotion: 'neutral',
          },
          {
            id: 'd047',
            characterId: 'narrator',
            text: '她抬头看着被晚霞染红的天空，眼中映着柔和的光。',
          },
          {
            id: 'd048',
            characterId: 'su_wanqing',
            text: '......其实，我有时候会羡慕那些能轻松交到朋友的人。',
            emotion: 'sad_smile',
          },
          {
            id: 'd049',
            characterId: 'su_wanqing',
            text: '大家都觉得我太严肃......太难接近了......',
            emotion: 'sad',
          },
          {
            id: 'd050',
            characterId: 'narrator',
            text: '她的声音有些低落，和平时冷淡的样子完全不同。',
          },
        ],
        nextNodeId: 'sw_ch2_011',
      },
      // 回应选择
      {
        id: 'sw_ch2_011',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c004a',
            text: '"我觉得班长很好相处啊。"',
            icon: 'sentiment_satisfied',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 8 },
            ],
            nextNodeId: 'sw_ch2_012a',
          },
          {
            id: 'c004b',
            text: '（开玩笑活跃气氛）"那我岂不是很特别？"',
            icon: 'star',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch2_012b',
          },
          {
            id: 'c004c',
            text: '"我可以做你的朋友。"',
            icon: 'handshake',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 12 },
              { type: 'flag', flagName: 'sw_friend_promise', value: 1 },
            ],
            nextNodeId: 'sw_ch2_012c',
          },
        ],
      },
      // 回应A - 夸她好相处
      {
        id: 'sw_ch2_012a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd051a',
            characterId: 'su_wanqing',
            text: '......真的吗？',
            emotion: 'surprised',
          },
          {
            id: 'd052a',
            characterId: 'narrator',
            text: '她停下脚步，转头看向你，眼里带着一丝惊讶。',
          },
          {
            id: 'd053a',
            characterId: 'player',
            text: '真的。你只是不太会表达而已，其实人很好。',
          },
          {
            id: 'd054a',
            characterId: 'su_wanqing',
            text: '......谢谢。',
            emotion: 'slight_smile',
          },
          {
            id: 'd055a',
            characterId: 'narrator',
            text: '她轻轻笑了，那是你第一次看到她如此柔和的表情。',
          },
        ],
        nextNodeId: 'sw_ch2_013',
      },
      // 回应B - 开玩笑
      {
        id: 'sw_ch2_012b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd051b',
            characterId: 'su_wanqing',
            text: '......哼。',
            emotion: 'slight_smile',
          },
          {
            id: 'd052b',
            characterId: 'narrator',
            text: '她轻哼一声，但嘴角却微微上扬。',
          },
          {
            id: 'd053b',
            characterId: 'su_wanqing',
            text: '......也许吧。你确实......挺特别的。',
            emotion: 'slight_blush',
          },
          {
            id: 'd054b',
            characterId: 'narrator',
            text: '她说完，又快步走到了你前面，不让你看到她的表情。',
          },
        ],
        nextNodeId: 'sw_ch2_013',
      },
      // 回应C - 承诺做朋友
      {
        id: 'sw_ch2_012c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd051c',
            characterId: 'su_wanqing',
            text: '......！',
            emotion: 'surprised',
          },
          {
            id: 'd052c',
            characterId: 'narrator',
            text: '她猛地转过头，眼睛睁得大大的。',
          },
          {
            id: 'd053c',
            characterId: 'su_wanqing',
            text: '......你，认真的？',
            emotion: 'blush',
          },
          {
            id: 'd054c',
            characterId: 'player',
            text: '当然认真。以后有什么事，都可以告诉我。',
          },
          {
            id: 'd055c',
            characterId: 'narrator',
            text: '她低下头，双手紧握着书包带。',
          },
          {
            id: 'd056c',
            characterId: 'su_wanqing',
            text: '......嗯。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd057c',
            characterId: 'narrator',
            text: '那一刻，夕阳正好洒在她脸上。她笑了，眼眶微微泛红。',
          },
          {
            id: 'd058c',
            characterId: 'su_wanqing',
            text: '......那，以后......请多指教了，朋友。',
            emotion: 'gentle_smile',
          },
        ],
        nextNodeId: 'sw_ch2_013',
      },
      // 分别场景
      {
        id: 'sw_ch2_013',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        dialogs: [
          {
            id: 'd059',
            characterId: 'narrator',
            text: '天色渐晚，你们慢慢走回校门口的岔路。',
          },
          {
            id: 'd060',
            characterId: 'su_wanqing',
            text: '......我家往那边走。',
            emotion: 'neutral',
          },
          {
            id: 'd061',
            characterId: 'narrator',
            text: '她顿了顿，然后从书包里拿出一把折叠伞。',
          },
          {
            id: 'd062',
            characterId: 'su_wanqing',
            text: '......这个，给你。',
            emotion: 'slight_blush',
          },
          {
            id: 'd063',
            characterId: 'player',
            text: '嗯？这是......？',
          },
          {
            id: 'd064',
            characterId: 'su_wanqing',
            text: '......你总是忘带伞。以防万一。',
            emotion: 'neutral',
          },
          {
            id: 'd065',
            characterId: 'narrator',
            text: '她把伞塞进你手里，然后迅速转身。',
          },
          {
            id: 'd066',
            characterId: 'su_wanqing',
            text: '（小声）......我注意到了。',
            emotion: 'blush',
          },
          {
            id: 'd067',
            characterId: 'narrator',
            text: '你看着手中的伞，发现这应该是她唯一的备用伞。',
          },
          {
            id: 'd068',
            characterId: 'narrator',
            text: '明明自己也需要，却还是想着别人......',
          },
          {
            id: 'd069',
            characterId: 'narrator',
            text: '原来，她一直在默默关心着你。',
          },
        ],
        nextNodeId: 'sw_ch2_free_chat',
      },
      // 拒绝去操场的分支
      {
        id: 'sw_ch2_014',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd070',
            characterId: 'su_wanqing',
            text: '......好。',
            emotion: 'sad',
          },
          {
            id: 'd071',
            characterId: 'narrator',
            text: '她的表情暗淡了一瞬，但很快恢复了平静。',
          },
          {
            id: 'd072',
            characterId: 'su_wanqing',
            text: '那......我先走了。再见。',
            emotion: 'neutral',
          },
          {
            id: 'd073',
            characterId: 'narrator',
            text: '她转身离开，背影看起来有些落寞。',
          },
          {
            id: 'd074',
            characterId: 'narrator',
            text: '也许......下次应该多陪陪她。',
          },
        ],
        nextNodeId: 'sw_ch2_free_chat',
      },
      // 自由对话节点
      {
        id: 'sw_ch2_free_chat',
        type: 'free_chat',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        freeChatConfig: {
          maxRounds: 5,
          prompt: '夕阳西下，你和苏晚晴站在岔路口。她今天展现了不一样的一面......',
          exitText: '回家',
          placeholderText: '和苏晚晴说点什么吧...',
        },
        nextNodeId: 'sw_ch2_ending',
      },
      // 章节结束
      {
        id: 'sw_ch2_ending',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd_end1',
            characterId: 'narrator',
            text: '回家的路上，你一直握着那把折叠伞。',
          },
          {
            id: 'd_end2',
            characterId: 'narrator',
            text: '雨后的空气清新，天边的晚霞绚烂。',
          },
          {
            id: 'd_end3',
            characterId: 'narrator',
            text: '那个看起来高冷的班长，原来有着这样温柔的一面......',
          },
          {
            id: 'd_end4',
            characterId: 'narrator',
            text: '你的心里，多了一丝期待。',
          },
          {
            id: 'd_end5',
            characterId: 'narrator',
            text: '【第二章 完】',
          },
        ],
        nextNodeId: 'sw_ch2_continue',
      },
      // 章节衔接选择
      {
        id: 'sw_ch2_continue',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'continue_ch3',
            text: '继续阅读第三章',
            icon: 'arrow_forward',
            effects: [],
            nextNodeId: 'sw_ch3_start',
          },
          {
            id: 'back_to_menu_ch2',
            text: '返回主菜单',
            icon: 'home',
            effects: [],
            nextNodeId: 'return_home_ch2',
          },
        ],
      },
      {
        id: 'return_home_ch2',
        type: 'scene_change',
        sceneId: 'home',
        nextNodeId: undefined,
      },
      {
        id: 'sw_ch3_start',
        type: 'scene_change',
        sceneId: 'su_wanqing_ch3',
        nextNodeId: undefined,
      },
    ],
  },
  // ============================================================
  // 苏晚晴第三章：心跳的距离
  // ============================================================
  {
    id: 'su_wanqing_ch3',
    title: '第三章：心跳的距离',
    characterId: 'su_wanqing',
    startNodeId: 'sw_ch3_001',
    nodes: [
      // 开场：考试周的压力
      {
        id: 'sw_ch3_001',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd001',
            characterId: 'narrator',
            text: '时间过得很快，转眼就到了期中考试周。',
          },
          {
            id: 'd002',
            characterId: 'narrator',
            text: '教室里的气氛变得紧张，每个人都在埋头复习。',
          },
          {
            id: 'd003',
            characterId: 'narrator',
            text: '你看着发回来的模拟考试成绩单，数学那一栏刺眼地写着不及格。',
          },
          {
            id: 'd004',
            characterId: 'narrator',
            text: '正当你发愁时，一个熟悉的声音从身后传来——',
          },
          {
            id: 'd005',
            characterId: 'su_wanqing',
            text: '......成绩出来了？',
            emotion: 'neutral',
          },
          {
            id: 'd006',
            characterId: 'narrator',
            text: '苏晚晴不知何时站在了你身边，视线落在你的成绩单上。',
          },
          {
            id: 'd007',
            characterId: 'su_wanqing',
            text: '......数学，需要帮忙吗？',
            emotion: 'neutral',
          },
          {
            id: 'd008',
            characterId: 'narrator',
            text: '她的语气依旧淡淡的，但主动提出帮忙这件事，对她来说已经很难得了。',
          },
        ],
        nextNodeId: 'sw_ch3_002',
      },
      // 第一个选择
      {
        id: 'sw_ch3_002',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c001a',
            text: '"真的可以吗？那太感谢了！"',
            icon: 'celebration',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 8 },
            ],
            nextNodeId: 'sw_ch3_003a',
          },
          {
            id: 'c001b',
            text: '（调侃）"班长终于肯主动理我了？"',
            icon: 'mood',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 3 },
            ],
            nextNodeId: 'sw_ch3_003b',
          },
          {
            id: 'c001c',
            text: '"会不会太麻烦你了......"',
            icon: 'sentiment_neutral',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch3_003c',
          },
        ],
      },
      // 选择A - 欣然接受
      {
        id: 'sw_ch3_003a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009a',
            characterId: 'su_wanqing',
            text: '......嗯。',
            emotion: 'slight_smile',
          },
          {
            id: 'd010a',
            characterId: 'narrator',
            text: '她点点头，嘴角微微上扬。',
          },
          {
            id: 'd011a',
            characterId: 'su_wanqing',
            text: '放学后，来我家吧。那里比较安静，适合学习。',
            emotion: 'neutral',
          },
          {
            id: 'd012a',
            characterId: 'narrator',
            text: '......去她家？！',
          },
          {
            id: 'd013a',
            characterId: 'narrator',
            text: '你的心跳不自觉地加速了。',
          },
        ],
        nextNodeId: 'sw_ch3_004',
      },
      // 选择B - 调侃
      {
        id: 'sw_ch3_003b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009b',
            characterId: 'su_wanqing',
            text: '......你想不想学？',
            emotion: 'cold',
          },
          {
            id: 'd010b',
            characterId: 'narrator',
            text: '她的眉头微微皱起，但眼里并没有真的生气。',
          },
          {
            id: 'd011b',
            characterId: 'player',
            text: '想想想！我开玩笑的，谢谢班长！',
          },
          {
            id: 'd012b',
            characterId: 'su_wanqing',
            text: '......哼。放学后，来我家。',
            emotion: 'slight_blush',
          },
          {
            id: 'd013b',
            characterId: 'narrator',
            text: '等等......她家？！',
          },
        ],
        nextNodeId: 'sw_ch3_004',
      },
      // 选择C - 担心麻烦
      {
        id: 'sw_ch3_003c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009c',
            characterId: 'su_wanqing',
            text: '......不麻烦。',
            emotion: 'neutral',
          },
          {
            id: 'd010c',
            characterId: 'narrator',
            text: '她摇摇头，语气很认真。',
          },
          {
            id: 'd011c',
            characterId: 'su_wanqing',
            text: '作为班长，帮助同学是应该的。',
            emotion: 'neutral',
          },
          {
            id: 'd012c',
            characterId: 'su_wanqing',
            text: '......而且，我也想帮你。',
            emotion: 'slight_blush',
          },
          {
            id: 'd013c',
            characterId: 'narrator',
            text: '她说完最后一句话时，声音小得几乎听不见。',
          },
          {
            id: 'd014c',
            characterId: 'su_wanqing',
            text: '放学后，来我家吧。',
            emotion: 'neutral',
          },
        ],
        nextNodeId: 'sw_ch3_004',
      },
      // 去她家的路上
      {
        id: 'sw_ch3_004',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        dialogs: [
          {
            id: 'd015',
            characterId: 'narrator',
            text: '放学后，你跟着苏晚晴走在回家的路上。',
          },
          {
            id: 'd016',
            characterId: 'narrator',
            text: '她走在前面，步伐有些快，似乎有些紧张。',
          },
          {
            id: 'd017',
            characterId: 'su_wanqing',
            text: '......我爸妈今天不在家，不用担心打扰到他们。',
            emotion: 'neutral',
          },
          {
            id: 'd018',
            characterId: 'narrator',
            text: '她说这话时，耳尖微微泛红。',
          },
          {
            id: 'd019',
            characterId: 'narrator',
            text: '......只有你们两个人吗？',
          },
          {
            id: 'd020',
            characterId: 'narrator',
            text: '你的心跳更快了。',
          },
        ],
        nextNodeId: 'sw_ch3_005',
      },
      // 到达她家
      {
        id: 'sw_ch3_005',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd021',
            characterId: 'narrator',
            text: '苏晚晴的家是一栋安静的公寓，布置得温馨而整洁。',
          },
          {
            id: 'd022',
            characterId: 'su_wanqing',
            text: '......进来吧。',
            emotion: 'slight_blush',
          },
          {
            id: 'd023',
            characterId: 'narrator',
            text: '她换上拖鞋，又拿了一双递给你。',
          },
          {
            id: 'd024',
            characterId: 'narrator',
            text: '她的房间在走廊尽头，推开门的那一刻——',
          },
          {
            id: 'd025',
            characterId: 'narrator',
            text: '淡淡的咖啡香气扑面而来。',
          },
          {
            id: 'd026',
            characterId: 'narrator',
            text: '房间很整洁，书架上摆满了各种书籍，靠窗处有一套手冲咖啡的器具。',
          },
          {
            id: 'd027',
            characterId: 'su_wanqing',
            text: '......坐吧。我去泡杯咖啡。',
            emotion: 'neutral',
          },
          {
            id: 'd028',
            characterId: 'narrator',
            text: '她的动作有些紧张，和平时在学校的沉稳判若两人。',
          },
        ],
        nextNodeId: 'sw_ch3_006',
      },
      // 咖啡时间
      {
        id: 'sw_ch3_006',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd029',
            characterId: 'narrator',
            text: '不一会儿，她端着两杯手冲咖啡回来。',
          },
          {
            id: 'd030',
            characterId: 'su_wanqing',
            text: '......给你。小心烫。',
            emotion: 'slight_smile',
          },
          {
            id: 'd031',
            characterId: 'narrator',
            text: '你接过杯子，咖啡的香气温润醇厚。',
          },
          {
            id: 'd032',
            characterId: 'player',
            text: '好香啊！班长的手艺真好！',
          },
          {
            id: 'd033',
            characterId: 'su_wanqing',
            text: '......还好。这是我比较擅长的事。',
            emotion: 'slight_blush',
          },
          {
            id: 'd034',
            characterId: 'narrator',
            text: '她的语气依旧淡淡的，但嘴角却藏着一丝笑意。',
          },
          {
            id: 'd035',
            characterId: 'su_wanqing',
            text: '好了......开始学习吧。',
            emotion: 'neutral',
          },
        ],
        nextNodeId: 'sw_ch3_007',
      },
      // 补习时间
      {
        id: 'sw_ch3_007',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd036',
            characterId: 'narrator',
            text: '苏晚晴拉来一把椅子，坐在你旁边开始讲解。',
          },
          {
            id: 'd037',
            characterId: 'narrator',
            text: '两个人的距离很近，近到能感受到她的呼吸。',
          },
          {
            id: 'd038',
            characterId: 'su_wanqing',
            text: '这道题，要先设未知数......',
            emotion: 'neutral',
          },
          {
            id: 'd039',
            characterId: 'narrator',
            text: '她讲解时非常专注，侧脸在台灯的光线下显得格外柔和。',
          },
          {
            id: 'd040',
            characterId: 'narrator',
            text: '长长的睫毛微微颤动，一缕发丝垂落在脸颊边。',
          },
          {
            id: 'd041',
            characterId: 'narrator',
            text: '你发现自己的注意力，渐渐从数学题上转移到了她的侧脸......',
          },
        ],
        nextNodeId: 'sw_ch3_008',
      },
      // 选择：认真学还是偷看
      {
        id: 'sw_ch3_008',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c002a',
            text: '（认真听讲，专心学习）',
            icon: 'school',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
              { type: 'flag', flagName: 'sw_studied_hard', value: 1 },
            ],
            nextNodeId: 'sw_ch3_009a',
          },
          {
            id: 'c002b',
            text: '（忍不住偷偷看她）',
            icon: 'visibility',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 8 },
            ],
            nextNodeId: 'sw_ch3_009b',
          },
          {
            id: 'c002c',
            text: '"班长讲得真好，谢谢你。"',
            icon: 'thumb_up',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 10 },
            ],
            nextNodeId: 'sw_ch3_009c',
          },
        ],
      },
      // 选择A - 认真学习
      {
        id: 'sw_ch3_009a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd042a',
            characterId: 'narrator',
            text: '你收回思绪，专心听她讲解。',
          },
          {
            id: 'd043a',
            characterId: 'narrator',
            text: '不得不说，苏晚晴讲得确实很好，条理清晰，通俗易懂。',
          },
          {
            id: 'd044a',
            characterId: 'su_wanqing',
            text: '......你学得很认真。',
            emotion: 'slight_smile',
          },
          {
            id: 'd045a',
            characterId: 'narrator',
            text: '她似乎很满意你的态度，眼里带着一丝欣慰。',
          },
          {
            id: 'd046a',
            characterId: 'su_wanqing',
            text: '继续保持......你一定可以的。',
            emotion: 'gentle_smile',
          },
        ],
        nextNodeId: 'sw_ch3_010',
      },
      // 选择B - 偷看
      {
        id: 'sw_ch3_009b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd042b',
            characterId: 'narrator',
            text: '你的目光不由自主地落在她的侧脸上。',
          },
          {
            id: 'd043b',
            characterId: 'narrator',
            text: '她认真讲解的样子，真的很好看......',
          },
          {
            id: 'd044b',
            characterId: 'su_wanqing',
            text: '......你在看哪里？',
            emotion: 'blush',
          },
          {
            id: 'd045b',
            characterId: 'narrator',
            text: '糟糕，被发现了！',
          },
          {
            id: 'd046b',
            characterId: 'player',
            text: '没、没有！我在认真听！',
          },
          {
            id: 'd047b',
            characterId: 'su_wanqing',
            text: '......骗子。',
            emotion: 'blush',
          },
          {
            id: 'd048b',
            characterId: 'narrator',
            text: '她轻哼一声，但脸却红得更厉害了。',
          },
        ],
        nextNodeId: 'sw_ch3_010',
      },
      // 选择C - 夸她
      {
        id: 'sw_ch3_009c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd042c',
            characterId: 'su_wanqing',
            text: '......！',
            emotion: 'surprised',
          },
          {
            id: 'd043c',
            characterId: 'narrator',
            text: '她愣了一下，手中的笔差点滑落。',
          },
          {
            id: 'd044c',
            characterId: 'su_wanqing',
            text: '......没什么，这是应该的。',
            emotion: 'blush',
          },
          {
            id: 'd045c',
            characterId: 'narrator',
            text: '她低下头，掩饰着自己的表情。',
          },
          {
            id: 'd046c',
            characterId: 'su_wanqing',
            text: '（小声）......能帮到你就好。',
            emotion: 'gentle_smile',
          },
        ],
        nextNodeId: 'sw_ch3_010',
      },
      // 意外的亲近
      {
        id: 'sw_ch3_010',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd049',
            characterId: 'narrator',
            text: '学习持续了很久，不知不觉天色已经暗了下来。',
          },
          {
            id: 'd050',
            characterId: 'narrator',
            text: '房间里只开着台灯，氛围变得安静而温馨。',
          },
          {
            id: 'd051',
            characterId: 'narrator',
            text: '也许是太累了，你的眼皮开始打架......',
          },
          {
            id: 'd052',
            characterId: 'narrator',
            text: '头一沉，不知不觉靠在了她的肩膀上。',
          },
          {
            id: 'd053',
            characterId: 'su_wanqing',
            text: '......！',
            emotion: 'surprised',
          },
          {
            id: 'd054',
            characterId: 'narrator',
            text: '她僵住了，不敢动弹。',
          },
          {
            id: 'd055',
            characterId: 'narrator',
            text: '过了很久......她没有推开你。',
          },
          {
            id: 'd056',
            characterId: 'narrator',
            text: '反而轻轻调整了一下姿势，让你靠得更舒服一些。',
          },
          {
            id: 'd057',
            characterId: 'su_wanqing',
            text: '（轻声）......真是的。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd058',
            characterId: 'narrator',
            text: '她的声音很轻很轻，带着一丝宠溺。',
          },
        ],
        nextNodeId: 'sw_ch3_011',
      },
      // 醒来
      {
        id: 'sw_ch3_011',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd059',
            characterId: 'narrator',
            text: '不知道过了多久，你迷迷糊糊地醒了过来。',
          },
          {
            id: 'd060',
            characterId: 'narrator',
            text: '第一眼看到的，是苏晚晴近在咫尺的脸。',
          },
          {
            id: 'd061',
            characterId: 'narrator',
            text: '她正低头看着手里的书，睫毛微微颤动。',
          },
          {
            id: 'd062',
            characterId: 'narrator',
            text: '发现你醒了，她立刻红了脸——',
          },
          {
            id: 'd063',
            characterId: 'su_wanqing',
            text: '你、你醒了......',
            emotion: 'blush',
          },
        ],
        nextNodeId: 'sw_ch3_012',
      },
      // 醒来后的选择
      {
        id: 'sw_ch3_012',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c003a',
            text: '（假装什么都不知道）"啊......我睡着了吗？"',
            icon: 'bedtime',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 3 },
            ],
            nextNodeId: 'sw_ch3_013a',
          },
          {
            id: 'c003b',
            text: '"对不起！我不是故意的......"',
            icon: 'sentiment_dissatisfied',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch3_013b',
          },
          {
            id: 'c003c',
            text: '"你的肩膀......很舒服。"',
            icon: 'favorite',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 12 },
            ],
            nextNodeId: 'sw_ch3_013c',
          },
        ],
      },
      // 选择A - 假装不知道
      {
        id: 'sw_ch3_013a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd064a',
            characterId: 'su_wanqing',
            text: '......嗯。睡了一会儿。',
            emotion: 'neutral',
          },
          {
            id: 'd065a',
            characterId: 'narrator',
            text: '她若无其事地点点头，但耳尖还是红的。',
          },
          {
            id: 'd066a',
            characterId: 'su_wanqing',
            text: '......时间不早了。今天就到这里吧。',
            emotion: 'slight_smile',
          },
        ],
        nextNodeId: 'sw_ch3_014',
      },
      // 选择B - 道歉
      {
        id: 'sw_ch3_013b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd064b',
            characterId: 'su_wanqing',
            text: '......没关系。',
            emotion: 'slight_blush',
          },
          {
            id: 'd065b',
            characterId: 'narrator',
            text: '她摇摇头，声音很轻。',
          },
          {
            id: 'd066b',
            characterId: 'su_wanqing',
            text: '你......看起来很累。休息一下也好。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd067b',
            characterId: 'narrator',
            text: '原来她一直让你靠着，没有打扰你......',
          },
        ],
        nextNodeId: 'sw_ch3_014',
      },
      // 选择C - 调情
      {
        id: 'sw_ch3_013c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd064c',
            characterId: 'su_wanqing',
            text: '......！！',
            emotion: 'blush',
          },
          {
            id: 'd065c',
            characterId: 'narrator',
            text: '她整张脸都红透了，连说话都开始结巴。',
          },
          {
            id: 'd066c',
            characterId: 'su_wanqing',
            text: '你、你在说什么啊......笨蛋......',
            emotion: 'blush',
          },
          {
            id: 'd067c',
            characterId: 'narrator',
            text: '她用书遮住自己的脸，但你能看到书本在微微颤抖。',
          },
          {
            id: 'd068c',
            characterId: 'su_wanqing',
            text: '（小声）......讨厌。',
            emotion: 'blush',
          },
          {
            id: 'd069c',
            characterId: 'narrator',
            text: '但她的嘴角，却藏着一丝笑意。',
          },
        ],
        nextNodeId: 'sw_ch3_014',
      },
      // 送你回家/深夜微信铺垫
      {
        id: 'sw_ch3_014',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        dialogs: [
          {
            id: 'd070',
            characterId: 'narrator',
            text: '苏晚晴送你到了门口。',
          },
          {
            id: 'd071',
            characterId: 'su_wanqing',
            text: '......路上小心。',
            emotion: 'slight_smile',
          },
          {
            id: 'd072',
            characterId: 'player',
            text: '嗯，今天真的很谢谢你。',
          },
          {
            id: 'd073',
            characterId: 'su_wanqing',
            text: '......不用谢。有不懂的......可以微信问我。',
            emotion: 'slight_blush',
          },
          {
            id: 'd074',
            characterId: 'narrator',
            text: '她递过来一张小纸条——上面写着她的微信号。',
          },
          {
            id: 'd075',
            characterId: 'su_wanqing',
            text: '只、只是为了方便问问题......',
            emotion: 'blush',
          },
          {
            id: 'd076',
            characterId: 'narrator',
            text: '你接过纸条，小心翼翼地收好。',
          },
        ],
        nextNodeId: 'sw_ch3_015',
      },
      // 深夜微信
      {
        id: 'sw_ch3_015',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd077',
            characterId: 'narrator',
            text: '晚上，你躺在床上，手机突然响了。',
          },
          {
            id: 'd078',
            characterId: 'narrator',
            text: '是苏晚晴发来的微信——',
          },
          {
            id: 'd079',
            characterId: 'su_wanqing',
            text: '【......今天学的内容，有不懂的地方吗？】',
            emotion: 'neutral',
          },
          {
            id: 'd080',
            characterId: 'narrator',
            text: '你笑了笑，回复她："都懂了，班长讲得很好！"',
          },
          {
            id: 'd081',
            characterId: 'su_wanqing',
            text: '【......那就好。】',
            emotion: 'slight_smile',
          },
          {
            id: 'd082',
            characterId: 'narrator',
            text: '聊着聊着，话题不知不觉从学习变成了日常。',
          },
          {
            id: 'd083',
            characterId: 'su_wanqing',
            text: '【......其实，我很少和别人聊这么久。】',
            emotion: 'neutral',
          },
          {
            id: 'd084',
            characterId: 'su_wanqing',
            text: '【大家都觉得我很难接近......】',
            emotion: 'sad',
          },
          {
            id: 'd085',
            characterId: 'su_wanqing',
            text: '【你是第一个不这么觉得的人。】',
            emotion: 'slight_smile',
          },
          {
            id: 'd086',
            characterId: 'narrator',
            text: '你看着这条消息，心里涌起一股暖流。',
          },
          {
            id: 'd087',
            characterId: 'su_wanqing',
            text: '【......谢谢你。】',
            emotion: 'gentle_smile',
          },
          {
            id: 'd088',
            characterId: 'narrator',
            text: '过了一会儿，她又发来一张照片——窗外的月亮。',
          },
          {
            id: 'd089',
            characterId: 'su_wanqing',
            text: '【......今晚的月亮很漂亮。】',
            emotion: 'gentle_smile',
          },
          {
            id: 'd090',
            characterId: 'narrator',
            text: '你走到窗边，抬头望向夜空。',
          },
          {
            id: 'd091',
            characterId: 'narrator',
            text: '同一轮月亮，此刻正照着你们两个人。',
          },
        ],
        nextNodeId: 'sw_ch3_free_chat',
      },
      // 自由对话节点
      {
        id: 'sw_ch3_free_chat',
        type: 'free_chat',
        characterId: 'su_wanqing',
        background: 'classroom',
        freeChatConfig: {
          maxRounds: 5,
          prompt: '深夜的微信聊天，她难得地敞开心扉。月光下，你们的距离似乎更近了......',
          exitText: '晚安',
          placeholderText: '回复苏晚晴...',
        },
        nextNodeId: 'sw_ch3_016',
      },
      // 考试结果
      {
        id: 'sw_ch3_016',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd092',
            characterId: 'narrator',
            text: '考试周结束了，成绩陆续公布。',
          },
          {
            id: 'd093',
            characterId: 'narrator',
            text: '你看着成绩单上的数学分数——比上次提高了三十多分！',
          },
          {
            id: 'd094',
            characterId: 'narrator',
            text: '正当你高兴时，一个熟悉的身影出现在身边——',
          },
          {
            id: 'd095',
            characterId: 'su_wanqing',
            text: '......恭喜。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd096',
            characterId: 'narrator',
            text: '苏晚晴站在你身后，脸上带着难得的笑容。',
          },
          {
            id: 'd097',
            characterId: 'su_wanqing',
            text: '......我就知道你可以的。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd098',
            characterId: 'narrator',
            text: '她的眼睛弯成月牙，语气里带着真心的欣慰。',
          },
          {
            id: 'd099',
            characterId: 'narrator',
            text: '然后，她悄悄把什么东西塞进你手里——',
          },
          {
            id: 'd100',
            characterId: 'narrator',
            text: '是一个精致的书签，上面画着一轮月亮和两个小人。',
          },
          {
            id: 'd101',
            characterId: 'su_wanqing',
            text: '......这是我自己做的。送给你。',
            emotion: 'blush',
          },
          {
            id: 'd102',
            characterId: 'su_wanqing',
            text: '（小声）......作为礼物。',
            emotion: 'blush',
          },
          {
            id: 'd103',
            characterId: 'narrator',
            text: '她说完就快步离开，不敢看你的反应。',
          },
          {
            id: 'd104',
            characterId: 'narrator',
            text: '你握着书签，看着她离去的背影，心跳得厉害。',
          },
        ],
        nextNodeId: 'sw_ch3_free_chat',
      },
      // 第三章自由对话
      {
        id: 'sw_ch3_free_chat',
        type: 'free_chat',
        characterId: 'su_wanqing',
        background: 'schoolGate',
        freeChatConfig: {
          maxRounds: 5,
          prompt: '夜色渐深，你手握着苏晚晴亲手做的书签。月光下，你回想着这些天发生的一切......',
          exitText: '回家',
          placeholderText: '在心里默默想着...',
        },
        nextNodeId: 'sw_ch3_ending',
      },
      // 章节结束
      {
        id: 'sw_ch3_ending',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd_end1',
            characterId: 'narrator',
            text: '手中的书签，承载着她的心意。',
          },
          {
            id: 'd_end2',
            characterId: 'narrator',
            text: '那个夜晚的月亮，那些深夜的对话......',
          },
          {
            id: 'd_end3',
            characterId: 'narrator',
            text: '你和苏晚晴的距离，越来越近了。',
          },
          {
            id: 'd_end4',
            characterId: 'narrator',
            text: '而心中那份悸动的情感，也越来越清晰......',
          },
          {
            id: 'd_end5',
            characterId: 'narrator',
            text: '【第三章 完】',
          },
        ],
        nextNodeId: 'sw_ch3_continue',
      },
      // 章节衔接选择
      {
        id: 'sw_ch3_continue',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'continue_ch4',
            text: '继续阅读第四章',
            icon: 'arrow_forward',
            effects: [],
            nextNodeId: 'sw_ch4_start',
          },
          {
            id: 'back_to_menu_ch3',
            text: '返回主菜单',
            icon: 'home',
            effects: [],
            nextNodeId: 'return_home_ch3',
          },
        ],
      },
      {
        id: 'return_home_ch3',
        type: 'scene_change',
        sceneId: 'home',
        nextNodeId: undefined,
      },
      {
        id: 'sw_ch4_start',
        type: 'scene_change',
        sceneId: 'su_wanqing_ch4',
        nextNodeId: undefined,
      },
    ],
  },
  // ============================================================
  // 苏晚晴第四章：星见之夜
  // ============================================================
  {
    id: 'su_wanqing_ch4',
    title: '第四章：星见之夜',
    characterId: 'su_wanqing',
    startNodeId: 'sw_ch4_001',
    nodes: [
      // 开场：文化祭筹备
      {
        id: 'sw_ch4_001',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd001',
            characterId: 'narrator',
            text: '学校一年一度的文化祭即将来临，整个校园都沉浸在忙碌而欢乐的气氛中。',
          },
          {
            id: 'd002',
            characterId: 'narrator',
            text: '你们班决定开设一家咖啡厅，而负责统筹的自然是——',
          },
          {
            id: 'd003',
            characterId: 'su_wanqing',
            text: '......装饰材料已经准备好了，菜单也确定下来了。',
            emotion: 'neutral',
          },
          {
            id: 'd004',
            characterId: 'narrator',
            text: '苏晚晴站在讲台上，条理清晰地分配着任务。',
          },
          {
            id: 'd005',
            characterId: 'narrator',
            text: '虽然表面上依旧冷淡，但你知道她为此付出了多少心血。',
          },
          {
            id: 'd006',
            characterId: 'narrator',
            text: '每天最早到教室，最晚离开。连午休时间都在整理资料。',
          },
          {
            id: 'd007',
            characterId: 'su_wanqing',
            text: '......接下来分组准备。有问题的可以来找我。',
            emotion: 'neutral',
          },
          {
            id: 'd008',
            characterId: 'narrator',
            text: '她合上笔记本，额头上沁出细密的汗珠。',
          },
        ],
        nextNodeId: 'sw_ch4_002',
      },
      // 第一个选择：是否主动帮忙
      {
        id: 'sw_ch4_002',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c001a',
            text: '主动走过去："班长，我来帮你吧！"',
            icon: 'volunteer_activism',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 10 },
              { type: 'flag', flagName: 'sw_helped_festival', value: 1 },
            ],
            nextNodeId: 'sw_ch4_003a',
          },
          {
            id: 'c001b',
            text: '在一旁默默观察，等她需要帮忙时再出手',
            icon: 'visibility',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch4_003b',
          },
          {
            id: 'c001c',
            text: '偷偷帮她分担一些工作，不让她发现',
            icon: 'sentiment_satisfied',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 8 },
              { type: 'flag', flagName: 'sw_secret_help', value: 1 },
            ],
            nextNodeId: 'sw_ch4_003c',
          },
        ],
      },
      // 选择A - 主动帮忙
      {
        id: 'sw_ch4_003a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009a',
            characterId: 'su_wanqing',
            text: '......嗯？',
            emotion: 'surprised',
          },
          {
            id: 'd010a',
            characterId: 'narrator',
            text: '她抬起头，眼中闪过一丝惊讶。',
          },
          {
            id: 'd011a',
            characterId: 'su_wanqing',
            text: '......不用，我可以——',
            emotion: 'neutral',
          },
          {
            id: 'd012a',
            characterId: 'player',
            text: '你一个人太累了。让我帮帮忙吧。',
          },
          {
            id: 'd013a',
            characterId: 'narrator',
            text: '你不由分说地拿过她手里的一叠资料。',
          },
          {
            id: 'd014a',
            characterId: 'su_wanqing',
            text: '......',
            emotion: 'slight_blush',
          },
          {
            id: 'd015a',
            characterId: 'narrator',
            text: '她愣了一下，然后轻轻点了点头。',
          },
          {
            id: 'd016a',
            characterId: 'su_wanqing',
            text: '......谢谢。',
            emotion: 'gentle_smile',
          },
        ],
        nextNodeId: 'sw_ch4_004',
      },
      // 选择B - 默默观察
      {
        id: 'sw_ch4_003b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009b',
            characterId: 'narrator',
            text: '你在一旁看着她忙碌的身影，等待着合适的时机。',
          },
          {
            id: 'd010b',
            characterId: 'narrator',
            text: '不一会儿，她拿着一摞重重的箱子往教室外走——',
          },
          {
            id: 'd011b',
            characterId: 'player',
            text: '我来帮你拿！',
          },
          {
            id: 'd012b',
            characterId: 'narrator',
            text: '你快步上前，接过她手里的箱子。',
          },
          {
            id: 'd013b',
            characterId: 'su_wanqing',
            text: '......啊，谢谢。',
            emotion: 'surprised',
          },
          {
            id: 'd014b',
            characterId: 'narrator',
            text: '她的表情有些惊讶，但很快化作了柔和的笑意。',
          },
        ],
        nextNodeId: 'sw_ch4_004',
      },
      // 选择C - 偷偷帮忙
      {
        id: 'sw_ch4_003c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd009c',
            characterId: 'narrator',
            text: '你默默地提前完成了自己负责的部分，然后悄悄把她负责的一些工作也做了。',
          },
          {
            id: 'd010c',
            characterId: 'narrator',
            text: '比如提前布置好教室的一角，整理好需要用的材料......',
          },
          {
            id: 'd011c',
            characterId: 'narrator',
            text: '苏晚晴发现时，愣在了原地。',
          },
          {
            id: 'd012c',
            characterId: 'su_wanqing',
            text: '......这是谁做的？',
            emotion: 'surprised',
          },
          {
            id: 'd013c',
            characterId: 'narrator',
            text: '旁边的同学指了指你的方向。',
          },
          {
            id: 'd014c',
            characterId: 'narrator',
            text: '她的目光转向你，眼里带着复杂的情绪。',
          },
          {
            id: 'd015c',
            characterId: 'su_wanqing',
            text: '......笨蛋。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd016c',
            characterId: 'narrator',
            text: '她嘴上这么说，但嘴角却微微上扬。',
          },
        ],
        nextNodeId: 'sw_ch4_004',
      },
      // 文化祭筹备中
      {
        id: 'sw_ch4_004',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd017',
            characterId: 'narrator',
            text: '文化祭筹备进入最后阶段，大家都在紧张地忙碌。',
          },
          {
            id: 'd018',
            characterId: 'narrator',
            text: '你注意到苏晚晴的黑眼圈越来越重，但她从不抱怨。',
          },
          {
            id: 'd019',
            characterId: 'narrator',
            text: '傍晚时分，你在天台找到了她——',
          },
        ],
        nextNodeId: 'sw_ch4_005',
      },
      // 天台场景
      {
        id: 'sw_ch4_005',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'park',
        dialogs: [
          {
            id: 'd020',
            characterId: 'narrator',
            text: '她独自坐在天台的角落，夕阳洒在她疲惫的脸上。',
          },
          {
            id: 'd021',
            characterId: 'narrator',
            text: '手中握着一杯已经凉了的咖啡，目光望着远方出神。',
          },
          {
            id: 'd022',
            characterId: 'player',
            text: '班长？你在这里啊。',
          },
          {
            id: 'd023',
            characterId: 'su_wanqing',
            text: '......啊。',
            emotion: 'surprised',
          },
          {
            id: 'd024',
            characterId: 'narrator',
            text: '她回过神来，连忙想要站起身。',
          },
          {
            id: 'd025',
            characterId: 'su_wanqing',
            text: '我就休息一下......马上回去工作——',
            emotion: 'neutral',
          },
          {
            id: 'd026',
            characterId: 'player',
            text: '不用急，坐一会儿吧。',
          },
          {
            id: 'd027',
            characterId: 'narrator',
            text: '你在她身边坐下，递给她一瓶温热的牛奶。',
          },
          {
            id: 'd028',
            characterId: 'su_wanqing',
            text: '......谢谢。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd029',
            characterId: 'narrator',
            text: '她接过牛奶，轻轻抿了一口。沉默了一会儿后，她开口了——',
          },
          {
            id: 'd030',
            characterId: 'su_wanqing',
            text: '......有时候会觉得，做班长很累。',
            emotion: 'sad',
          },
          {
            id: 'd031',
            characterId: 'narrator',
            text: '她的声音很轻，带着少有的脆弱。',
          },
          {
            id: 'd032',
            characterId: 'su_wanqing',
            text: '每个人都觉得我应该做好，但没有人问我累不累......',
            emotion: 'sad',
          },
          {
            id: 'd033',
            characterId: 'su_wanqing',
            text: '对不起，我不该说这些......',
            emotion: 'sad',
          },
        ],
        nextNodeId: 'sw_ch4_006',
      },
      // 安慰选择
      {
        id: 'sw_ch4_006',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c002a',
            text: '轻轻拍拍她的肩膀："辛苦了。你做得很好。"',
            icon: 'sentiment_satisfied',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 10 },
            ],
            nextNodeId: 'sw_ch4_007a',
          },
          {
            id: 'c002b',
            text: '安静地陪着她，什么都不说',
            icon: 'nights_stay',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 8 },
            ],
            nextNodeId: 'sw_ch4_007b',
          },
          {
            id: 'c002c',
            text: '"以后有我帮你。你不是一个人。"',
            icon: 'favorite',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 15 },
              { type: 'flag', flagName: 'sw_promise_together', value: 1 },
            ],
            nextNodeId: 'sw_ch4_007c',
          },
        ],
      },
      // 选择A - 安慰
      {
        id: 'sw_ch4_007a',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd034a',
            characterId: 'narrator',
            text: '你轻轻拍了拍她的肩膀，语气温柔而坚定。',
          },
          {
            id: 'd035a',
            characterId: 'su_wanqing',
            text: '......！',
            emotion: 'surprised',
          },
          {
            id: 'd036a',
            characterId: 'narrator',
            text: '她愣住了，眼眶微微泛红。',
          },
          {
            id: 'd037a',
            characterId: 'su_wanqing',
            text: '......谢谢你。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd038a',
            characterId: 'narrator',
            text: '她的声音有些颤抖，但嘴角浮起了真心的笑容。',
          },
        ],
        nextNodeId: 'sw_ch4_008',
      },
      // 选择B - 沉默陪伴
      {
        id: 'sw_ch4_007b',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd034b',
            characterId: 'narrator',
            text: '你什么都没说，只是安静地坐在她身边。',
          },
          {
            id: 'd035b',
            characterId: 'narrator',
            text: '夕阳渐渐西沉，晚风轻轻吹过。',
          },
          {
            id: 'd036b',
            characterId: 'narrator',
            text: '过了很久，她轻轻靠在了你的肩膀上——',
          },
          {
            id: 'd037b',
            characterId: 'su_wanqing',
            text: '......谢谢你，陪着我。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd038b',
            characterId: 'narrator',
            text: '她的声音很轻，却让你的心跳漏了一拍。',
          },
        ],
        nextNodeId: 'sw_ch4_008',
      },
      // 选择C - 承诺
      {
        id: 'sw_ch4_007c',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd034c',
            characterId: 'su_wanqing',
            text: '......什么？',
            emotion: 'surprised',
          },
          {
            id: 'd035c',
            characterId: 'narrator',
            text: '她猛地转过头，眼睛睁得大大的。',
          },
          {
            id: 'd036c',
            characterId: 'player',
            text: '我说，以后有什么事，都可以告诉我。我会帮你的。',
          },
          {
            id: 'd037c',
            characterId: 'narrator',
            text: '你认真地看着她的眼睛。',
          },
          {
            id: 'd038c',
            characterId: 'su_wanqing',
            text: '......',
            emotion: 'blush',
          },
          {
            id: 'd039c',
            characterId: 'narrator',
            text: '她的脸慢慢红了起来，眼眶也泛起了泪光。',
          },
          {
            id: 'd040c',
            characterId: 'su_wanqing',
            text: '......笨蛋。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd041c',
            characterId: 'narrator',
            text: '她低下头，轻轻靠在了你的肩膀上。',
          },
          {
            id: 'd042c',
            characterId: 'su_wanqing',
            text: '（轻声）......谢谢你。',
            emotion: 'gentle_smile',
          },
        ],
        nextNodeId: 'sw_ch4_008',
      },
      // 文化祭当天
      {
        id: 'sw_ch4_008',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'classroom',
        dialogs: [
          {
            id: 'd043',
            characterId: 'narrator',
            text: '文化祭当天，校园里热闹非凡。',
          },
          {
            id: 'd044',
            characterId: 'narrator',
            text: '你们班的咖啡厅大受欢迎，客人络绎不绝。',
          },
          {
            id: 'd045',
            characterId: 'narrator',
            text: '苏晚晴穿着女仆装，虽然表情依旧冷淡，却吸引了无数目光。',
          },
          {
            id: 'd046',
            characterId: 'su_wanqing',
            text: '......欢迎光临。',
            emotion: 'neutral',
          },
          {
            id: 'd047',
            characterId: 'narrator',
            text: '她机械地说着台词，耳尖却红红的。',
          },
          {
            id: 'd048',
            characterId: 'narrator',
            text: '看来，她真的很不擅长这种事情。',
          },
          {
            id: 'd049',
            characterId: 'narrator',
            text: '文化祭接近尾声时，你收到了她的微信——',
          },
          {
            id: 'd050',
            characterId: 'su_wanqing',
            text: '【......结束后，能来天台吗？有话想对你说。】',
            emotion: 'neutral',
          },
          {
            id: 'd051',
            characterId: 'narrator',
            text: '你的心跳不禁加速了。',
          },
        ],
        nextNodeId: 'sw_ch4_009',
      },
      // 好感度分支判断 (通过选择模拟)
      {
        id: 'sw_ch4_009',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c003a',
            text: '立刻回复："好，我一定去！"',
            icon: 'favorite',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 5 },
            ],
            nextNodeId: 'sw_ch4_010',
          },
          {
            id: 'c003b',
            text: '"有什么事吗？"',
            icon: 'help',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 2 },
            ],
            nextNodeId: 'sw_ch4_010',
          },
        ],
      },
      // 天台告白场景
      {
        id: 'sw_ch4_010',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'park',
        dialogs: [
          {
            id: 'd052',
            characterId: 'narrator',
            text: '文化祭结束后，你来到天台。',
          },
          {
            id: 'd053',
            characterId: 'narrator',
            text: '夜幕降临，漫天繁星闪烁。',
          },
          {
            id: 'd054',
            characterId: 'narrator',
            text: '苏晚晴站在栏杆边，望着星空出神。',
          },
          {
            id: 'd055',
            characterId: 'narrator',
            text: '月光洒在她的身上，将她的轮廓勾勒得如梦似幻。',
          },
          {
            id: 'd056',
            characterId: 'su_wanqing',
            text: '......你来了。',
            emotion: 'slight_smile',
          },
          {
            id: 'd057',
            characterId: 'narrator',
            text: '她转过身，目光中带着从未有过的柔和。',
          },
          {
            id: 'd058',
            characterId: 'player',
            text: '嗯。你说有话想对我说？',
          },
          {
            id: 'd059',
            characterId: 'narrator',
            text: '她低下头，双手紧握着胸前的什么东西。',
          },
          {
            id: 'd060',
            characterId: 'su_wanqing',
            text: '......我不太会说话。所以，写了下来。',
            emotion: 'blush',
          },
          {
            id: 'd061',
            characterId: 'narrator',
            text: '她颤抖着将一封信递给你。',
          },
          {
            id: 'd062',
            characterId: 'narrator',
            text: '你打开信，在月光下读着她工整而秀气的字迹——',
          },
        ],
        nextNodeId: 'sw_ch4_011',
      },
      // 告白信内容
      {
        id: 'sw_ch4_011',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd063',
            characterId: 'narrator',
            text: '『第一次见面那天，你主动和我说话。那是我第一次觉得，也许有人能理解我。』',
          },
          {
            id: 'd064',
            characterId: 'narrator',
            text: '『下雨天，你接过我的伞。那一刻，我觉得我们的距离近了一点。』',
          },
          {
            id: 'd065',
            characterId: 'narrator',
            text: '『在我家学习的那个晚上，你靠在我肩上睡着了。我没有叫醒你，因为......想让那一刻更长一些。』',
          },
          {
            id: 'd066',
            characterId: 'narrator',
            text: '『我知道，我不是那种会讨人喜欢的女生。不会撒娇，不会说甜言蜜语，连笑都很少......』',
          },
          {
            id: 'd067',
            characterId: 'narrator',
            text: '『但是，如果是你的话......』',
          },
          {
            id: 'd068',
            characterId: 'narrator',
            text: '『我想试着，变得更温柔一点。』',
          },
          {
            id: 'd069',
            characterId: 'narrator',
            text: '你抬起头，看向苏晚晴。',
          },
          {
            id: 'd070',
            characterId: 'narrator',
            text: '她的脸红得像要滴血，眼眶微微泛红，咬着嘴唇等待着你的回答。',
          },
          {
            id: 'd071',
            characterId: 'su_wanqing',
            text: '......我喜欢你。',
            emotion: 'blush',
          },
          {
            id: 'd072',
            characterId: 'narrator',
            text: '她的声音很轻，却坚定而真挚。',
          },
        ],
        nextNodeId: 'sw_ch4_012',
      },
      // 告白回应选择 - 多结局分支
      {
        id: 'sw_ch4_012',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'c004a',
            text: '"我也喜欢你。"',
            icon: 'favorite',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 20 },
            ],
            conditions: [
              { type: 'affection_min', characterId: 'su_wanqing', value: 60 },
            ],
            nextNodeId: 'sw_ch4_013_perfect',
          },
          {
            id: 'c004b',
            text: '"谢谢你，晚晴。我也......一直在等这句话。"',
            icon: 'favorite_border',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: 15 },
            ],
            nextNodeId: 'sw_ch4_013_normal',
          },
          {
            id: 'c004c',
            text: '"让我考虑一下......"',
            icon: 'schedule',
            effects: [
              { type: 'affection', characterId: 'su_wanqing', value: -10 },
            ],
            nextNodeId: 'sw_ch4_013_sad',
          },
        ],
      },
      // 完美告白回应
      {
        id: 'sw_ch4_013_perfect',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd073',
            characterId: 'su_wanqing',
            text: '......！',
            emotion: 'surprised',
          },
          {
            id: 'd074',
            characterId: 'narrator',
            text: '她愣住了，眼眶里的泪水终于夺眶而出。',
          },
          {
            id: 'd075',
            characterId: 'su_wanqing',
            text: '真......真的吗？',
            emotion: 'blush',
          },
          {
            id: 'd076',
            characterId: 'player',
            text: '真的。从那个雨天开始，我就一直在想......能不能离你更近一点。',
          },
          {
            id: 'd077',
            characterId: 'narrator',
            text: '你轻轻握住她的手。她的手在颤抖，却没有缩回去。',
          },
          {
            id: 'd078',
            characterId: 'su_wanqing',
            text: '（泪流满面）......笨蛋。为什么不早点说......',
            emotion: 'gentle_smile',
          },
          {
            id: 'd079',
            characterId: 'player',
            text: '因为......我一直在等你。',
          },
          {
            id: 'd080',
            characterId: 'narrator',
            text: '星光下，她踮起脚尖，轻轻吻上了你的嘴唇。',
          },
          {
            id: 'd081',
            characterId: 'narrator',
            text: '那一刻，繁星见证了你们的约定。',
          },
        ],
        nextNodeId: 'sw_ch4_free_chat',
      },
      // 普通告白回应
      {
        id: 'sw_ch4_013_normal',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd073',
            characterId: 'su_wanqing',
            text: '......',
            emotion: 'blush',
          },
          {
            id: 'd074',
            characterId: 'narrator',
            text: '她的眼泪夺眶而出，却是幸福的泪水。',
          },
          {
            id: 'd075',
            characterId: 'su_wanqing',
            text: '......一直？',
            emotion: 'gentle_smile',
          },
          {
            id: 'd076',
            characterId: 'player',
            text: '嗯。一直。',
          },
          {
            id: 'd077',
            characterId: 'narrator',
            text: '你伸出手，轻轻擦去她脸上的泪水。',
          },
          {
            id: 'd078',
            characterId: 'su_wanqing',
            text: '......谢谢你。',
            emotion: 'gentle_smile',
          },
          {
            id: 'd079',
            characterId: 'narrator',
            text: '她轻轻握住你的手，脸上带着从未有过的笑容。',
          },
          {
            id: 'd080',
            characterId: 'narrator',
            text: '星空下，你们的手紧紧相握，开始了新的故事。',
          },
        ],
        nextNodeId: 'sw_ch4_free_chat',
      },
      // 拒绝/犹豫回应
      {
        id: 'sw_ch4_013_sad',
        type: 'dialog',
        characterId: 'su_wanqing',
        dialogs: [
          {
            id: 'd073',
            characterId: 'su_wanqing',
            text: '......',
            emotion: 'sad',
          },
          {
            id: 'd074',
            characterId: 'narrator',
            text: '她的表情僵住了，眼里的光慢慢黯淡下去。',
          },
          {
            id: 'd075',
            characterId: 'su_wanqing',
            text: '......好。',
            emotion: 'sad',
          },
          {
            id: 'd076',
            characterId: 'narrator',
            text: '她勉强挤出一个笑容，但嘴角在颤抖。',
          },
          {
            id: 'd077',
            characterId: 'su_wanqing',
            text: '对不起，是我太唐突了......请你......慢慢考虑。',
            emotion: 'sad',
          },
          {
            id: 'd078',
            characterId: 'narrator',
            text: '她转身快步离开，背影看起来无比落寞。',
          },
          {
            id: 'd079',
            characterId: 'narrator',
            text: '你望着她消失在楼梯口，心里涌起一股说不清的感觉......',
          },
        ],
        nextNodeId: 'sw_ch4_free_chat_normal',
      },
      // 普通结局分支的自由对话
      {
        id: 'sw_ch4_free_chat_normal',
        type: 'free_chat',
        characterId: 'su_wanqing',
        background: 'rooftop',
        freeChatConfig: {
          maxRounds: 3,
          prompt: '夜风中，你独自站在天台上，回想着刚才发生的一切。苏晚晴的背影还在脑海中挥之不去......',
          exitText: '离开天台',
          placeholderText: '心里默默想着...',
        },
        nextNodeId: 'sw_ch4_ending_normal',
      },
      // 告白成功的自由对话节点
      {
        id: 'sw_ch4_free_chat',
        type: 'free_chat',
        characterId: 'su_wanqing',
        background: 'park',
        freeChatConfig: {
          maxRounds: 5,
          prompt: '星空下，你和苏晚晴成为了恋人。她难得地靠在你肩膀上，脸上带着幸福的笑容......',
          exitText: '一起回家',
          placeholderText: '和她说点什么吧...',
        },
        nextNodeId: 'sw_ch4_ending_check',
      },
      // 结局判断节点
      {
        id: 'sw_ch4_ending_check',
        type: 'choice',
        characterId: 'su_wanqing',
        choices: [
          {
            id: 'ending_perfect',
            text: '【解锁完美结局】',
            icon: 'stars',
            effects: [],
            conditions: [
              { type: 'affection_min', characterId: 'su_wanqing', value: 80 },
            ],
            nextNodeId: 'sw_ch4_ending_perfect',
          },
          {
            id: 'ending_hidden',
            text: '【解锁隐藏结局】',
            icon: 'auto_awesome',
            effects: [],
            conditions: [
              { type: 'affection_min', characterId: 'su_wanqing', value: 100 },
              { type: 'flag', flagName: 'sw_friend_promise', value: 1 },
              { type: 'flag', flagName: 'sw_promise_together', value: 1 },
            ],
            nextNodeId: 'sw_ch4_ending_hidden',
          },
          {
            id: 'ending_normal',
            text: '【普通结局】',
            icon: 'favorite',
            effects: [],
            nextNodeId: 'sw_ch4_ending_normal',
          },
        ],
      },
      // ============================================================
      // 普通结局
      // ============================================================
      {
        id: 'sw_ch4_ending_normal',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'library',
        dialogs: [
          {
            id: 'end_n1',
            characterId: 'narrator',
            text: '从那天起，你和苏晚晴成为了恋人。',
          },
          {
            id: 'end_n2',
            characterId: 'narrator',
            text: '她还是那个不善言辞的班长，但在你面前，她学会了微笑。',
          },
          {
            id: 'end_n3',
            characterId: 'su_wanqing',
            text: '......今天放学，去图书馆吗？',
            emotion: 'slight_blush',
          },
          {
            id: 'end_n4',
            characterId: 'narrator',
            text: '她站在你身边，虽然还是习惯性地看向别处，但手却悄悄握上了你的。',
          },
          {
            id: 'end_n5',
            characterId: 'player',
            text: '好啊。一起走吧，晚晴。',
          },
          {
            id: 'end_n6',
            characterId: 'narrator',
            text: '她的耳尖红了，但嘴角浮起了幸福的笑容。',
          },
          {
            id: 'end_n7',
            characterId: 'narrator',
            text: '【普通结局 - 图书馆的约定】',
          },
          {
            id: 'end_n8',
            characterId: 'narrator',
            text: '你们的故事，才刚刚开始......',
          },
          {
            id: 'end_n9',
            characterId: 'narrator',
            text: '【第四章 完】',
          },
        ],
        nextNodeId: undefined,
      },
      // ============================================================
      // 完美结局
      // ============================================================
      {
        id: 'sw_ch4_ending_perfect',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'park',
        dialogs: [
          {
            id: 'end_p1',
            characterId: 'narrator',
            text: '时光飞逝，转眼到了樱花盛开的季节。',
          },
          {
            id: 'end_p2',
            characterId: 'narrator',
            text: '一年来，你和苏晚晴的感情越来越深。',
          },
          {
            id: 'end_p3',
            characterId: 'narrator',
            text: '今天，她要带你去见她的家人。',
          },
          {
            id: 'end_p4',
            characterId: 'su_wanqing',
            text: '......紧张吗？',
            emotion: 'slight_smile',
          },
          {
            id: 'end_p5',
            characterId: 'player',
            text: '有一点......你呢？',
          },
          {
            id: 'end_p6',
            characterId: 'su_wanqing',
            text: '......我很开心。',
            emotion: 'gentle_smile',
          },
          {
            id: 'end_p7',
            characterId: 'narrator',
            text: '她的脸上带着温柔的笑容，和一年前的她判若两人。',
          },
          {
            id: 'end_p8',
            characterId: 'su_wanqing',
            text: '这是......我准备的礼物。',
            emotion: 'blush',
          },
          {
            id: 'end_p9',
            characterId: 'narrator',
            text: '她递给你一本相册，里面记录着你们一起走过的每一天。',
          },
          {
            id: 'end_p10',
            characterId: 'narrator',
            text: '雨天的那把伞、图书馆的角落、天台的星空、文化祭的微笑......',
          },
          {
            id: 'end_p11',
            characterId: 'su_wanqing',
            text: '......谢谢你出现在我的生命里。',
            emotion: 'gentle_smile',
          },
          {
            id: 'end_p12',
            characterId: 'narrator',
            text: '樱花纷飞中，她踮起脚尖，轻轻吻上了你的脸颊。',
          },
          {
            id: 'end_p13',
            characterId: 'narrator',
            text: '【完美结局 - 樱花树下的承诺】',
          },
          {
            id: 'end_p14',
            characterId: 'narrator',
            text: '这一刻，你们约定——永远在一起。',
          },
          {
            id: 'end_p15',
            characterId: 'narrator',
            text: '【第四章 完】',
          },
        ],
        nextNodeId: undefined,
      },
      // ============================================================
      // 隐藏结局
      // ============================================================
      {
        id: 'sw_ch4_ending_hidden',
        type: 'dialog',
        characterId: 'su_wanqing',
        background: 'park',
        dialogs: [
          {
            id: 'end_h1',
            characterId: 'narrator',
            text: '跨年夜，你们相约来到天台。',
          },
          {
            id: 'end_h2',
            characterId: 'narrator',
            text: '这是第一次约定"做朋友"的地方，也是她告白的地方。',
          },
          {
            id: 'end_h3',
            characterId: 'narrator',
            text: '夜空中，烟花绽放，将整个世界染成了梦幻的颜色。',
          },
          {
            id: 'end_h4',
            characterId: 'su_wanqing',
            text: '......还记得吗？',
            emotion: 'gentle_smile',
          },
          {
            id: 'end_h5',
            characterId: 'player',
            text: '记得。那天你说，想做我的朋友。',
          },
          {
            id: 'end_h6',
            characterId: 'su_wanqing',
            text: '......那时候，我很害怕。害怕你会拒绝我。',
            emotion: 'slight_smile',
          },
          {
            id: 'end_h7',
            characterId: 'su_wanqing',
            text: '但你没有......',
            emotion: 'gentle_smile',
          },
          {
            id: 'end_h8',
            characterId: 'narrator',
            text: '她转过身，眼里映着烟花的光芒。',
          },
          {
            id: 'end_h9',
            characterId: 'su_wanqing',
            text: '遇见你，是我人生最幸运的事。',
            emotion: 'gentle_smile',
          },
          {
            id: 'end_h10',
            characterId: 'narrator',
            text: '烟花绽放的瞬间，你紧紧拥抱住她。',
          },
          {
            id: 'end_h11',
            characterId: 'su_wanqing',
            text: '（轻声）......我爱你。',
            emotion: 'blush',
          },
          {
            id: 'end_h12',
            characterId: 'player',
            text: '我也爱你，晚晴。',
          },
          {
            id: 'end_h13',
            characterId: 'narrator',
            text: '新年的钟声响起，烟火照亮了整个夜空。',
          },
          {
            id: 'end_h14',
            characterId: 'narrator',
            text: '在这浪漫的星见之夜，你们许下了永恒的誓言。',
          },
          {
            id: 'end_h15',
            characterId: 'narrator',
            text: '【隐藏结局 - 星见之夜的誓言】',
          },
          {
            id: 'end_h16',
            characterId: 'narrator',
            text: '从今往后，无论晴天还是雨天......',
          },
          {
            id: 'end_h17',
            characterId: 'narrator',
            text: '都要一起走下去。',
          },
          {
            id: 'end_h18',
            characterId: 'narrator',
            text: '【第四章 完】',
          },
          {
            id: 'end_h19',
            characterId: 'narrator',
            text: '【恭喜你解锁了苏晚晴的全部故事！】',
          },
        ],
        nextNodeId: undefined,
      },
    ],
  },
  // 添加夏栀AI驱动剧情章节(第2-3章)
  ...XIA_ZHI_CHAPTERS,
];
