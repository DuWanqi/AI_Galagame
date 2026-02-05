/**
 * 剧情章节数据
 * 苏晚晴主线 - 第一章：初次相遇
 */

import type { StoryChapter } from '../types';

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
];
