# 星见告白 - 开发者指南

本指南将帮助您理解游戏的剧情系统，并教您如何修改和扩展剧情内容。

---

## 目录

1. [项目结构概览](#项目结构概览)
2. [剧情系统架构](#剧情系统架构)
3. [如何修改剧情](#如何修改剧情)
4. [节点类型详解](#节点类型详解)
5. [好感度系统](#好感度系统)
6. [AI对话系统](#ai对话系统)
7. [添加新角色](#添加新角色)
8. [常见问题](#常见问题)

---

## 项目结构概览

```
galgame/
├── src/
│   ├── core/                 # 核心系统
│   │   ├── GameManager.ts    # 游戏管理器（中央控制）
│   │   ├── StoryEngine.ts    # 剧情引擎（处理剧情流程）
│   │   ├── AffectionSystem.ts # 好感度系统
│   │   └── SaveSystem.ts     # 存档系统
│   │
│   ├── data/                 # 数据文件 ⭐ 主要编辑这里
│   │   ├── chapters.ts       # 剧情章节数据
│   │   └── characters.ts     # 角色数据
│   │
│   ├── scenes/               # 场景渲染
│   │   ├── HomePage.ts       # 主页
│   │   ├── GameScene.ts      # 游戏场景
│   │   ├── DateScene.ts      # 约会模式
│   │   └── ...
│   │
│   ├── services/             # 服务
│   │   └── AIService.ts      # AI对话服务
│   │
│   ├── types/                # TypeScript类型定义
│   │   └── index.ts          # 所有类型定义
│   │
│   └── main.ts               # 入口文件
│
├── public/                   # 静态资源
│   ├── sprites/              # 角色立绘
│   └── backgrounds/          # 背景图片
│
└── index.html                # HTML入口
```

---

## 剧情系统架构

### 核心概念

游戏剧情由以下层级组成：

```
章节 (Chapter)
  └── 节点 (Node)
        ├── 对话节点 (dialog)
        │     └── 对话行 (DialogLine[])
        ├── 选择节点 (choice)
        │     └── 选项 (Choice[])
        ├── 自由对话节点 (free_chat)
        │     └── AI/关键词对话
        └── 场景切换/结局节点
```

### 数据流

```
用户操作 → GameManager → StoryEngine → 获取当前节点 → GameScene渲染
                ↓
         AffectionSystem（好感度变化）
                ↓
         AIService（AI对话，可选）
```

---

## 如何修改剧情

### 剧情文件位置

所有剧情数据都在 `src/data/chapters.ts` 文件中。

### 剧情章节结构

```typescript
// src/data/chapters.ts

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 'su_wanqing_ch1',           // 章节唯一ID
    title: '第一章：图书馆的邂逅',    // 章节标题
    characterId: 'su_wanqing',      // 主角色ID
    startNodeId: 'sw_ch1_001',      // 起始节点ID
    nodes: [                        // 节点数组
      // ... 节点定义
    ],
  },
];
```

### 添加新章节示例

```typescript
// 在 STORY_CHAPTERS 数组中添加新章节
{
  id: 'su_wanqing_ch2',
  title: '第二章：雨中的约定',
  characterId: 'su_wanqing',
  startNodeId: 'sw_ch2_001',
  nodes: [
    // 开场对话
    {
      id: 'sw_ch2_001',
      type: 'dialog',
      characterId: 'su_wanqing',
      background: 'classroom',  // 背景场景
      dialogs: [
        {
          id: 'd001',
          characterId: 'narrator',  // 旁白
          text: '放学后，天空突然下起了雨。',
        },
        {
          id: 'd002',
          characterId: 'su_wanqing',
          text: '......你没带伞吗？',
          emotion: 'concerned',  // 表情（可选）
        },
      ],
      nextNodeId: 'sw_ch2_002',  // 下一个节点
    },
    // 选择节点
    {
      id: 'sw_ch2_002',
      type: 'choice',
      characterId: 'su_wanqing',
      choices: [
        {
          id: 'c001',
          text: '"是啊，我忘带了..."',
          icon: 'sentiment_dissatisfied',
          effects: [
            { type: 'affection', characterId: 'su_wanqing', value: 3 },
          ],
          nextNodeId: 'sw_ch2_003a',
        },
        {
          id: 'c002',
          text: '"没关系，我跑回去就好"',
          icon: 'directions_run',
          effects: [],
          nextNodeId: 'sw_ch2_003b',
        },
      ],
    },
    // ... 更多节点
  ],
}
```

---

## 节点类型详解

### 1. 对话节点 (dialog)

用于显示对话文本。

```typescript
{
  id: 'unique_node_id',
  type: 'dialog',
  characterId: 'su_wanqing',     // 当前场景角色
  background: 'classroom',        // 背景（可选）
  bgm: 'peaceful',                // 背景音乐（可选）
  dialogs: [
    {
      id: 'd001',
      characterId: 'narrator',    // 'narrator' = 旁白, 'player' = 玩家
      text: '这是旁白文字',
    },
    {
      id: 'd002',
      characterId: 'su_wanqing',
      text: '这是苏晚晴说的话',
      emotion: 'happy',           // 表情（可选）
    },
  ],
  nextNodeId: 'next_node_id',     // 下一个节点ID
}
```

**characterId 特殊值：**
- `narrator` - 旁白（不显示角色名）
- `player` - 玩家（显示玩家输入的名字）
- 角色ID - 显示对应角色名

**文本中的占位符：**
- `{playerName}` - 会被替换为玩家输入的名字

### 2. 选择节点 (choice)

让玩家做出选择，影响剧情走向和好感度。

```typescript
{
  id: 'choice_node_id',
  type: 'choice',
  characterId: 'su_wanqing',
  choices: [
    {
      id: 'choice_1',
      text: '选项文字（支持{playerName}）',
      icon: 'favorite',           // Material Icons图标名
      effects: [                  // 选择效果
        { 
          type: 'affection',      // 好感度变化
          characterId: 'su_wanqing', 
          value: 5                // 正数增加，负数减少
        },
        { 
          type: 'flag',           // 设置标记
          flagName: 'helped_晚晴', 
          value: 1 
        },
      ],
      nextNodeId: 'next_node_after_choice',
      condition: {                // 显示条件（可选）
        type: 'affection',
        characterId: 'su_wanqing',
        operator: '>=',
        value: 30,
      },
    },
  ],
}
```

**选项效果类型：**
- `affection` - 改变好感度
- `flag` - 设置/修改标记（用于条件判断）
- `item` - 获得物品（待实现）

**条件类型：**
- `affection` - 好感度条件
- `flag` - 标记条件

### 3. 自由对话节点 (free_chat)

让玩家自由输入文字与角色对话，支持AI增强。

```typescript
{
  id: 'free_chat_node_id',
  type: 'free_chat',
  characterId: 'su_wanqing',
  background: 'schoolGate',
  freeChatConfig: {
    maxRounds: 5,                           // 最大对话轮数
    prompt: '傍晚的夕阳下，你可以和她聊聊...', // 开场提示
    exitText: '告别',                        // 退出按钮文字
    placeholderText: '和苏晚晴说点什么...',   // 输入框占位符
  },
  nextNodeId: 'next_node_after_chat',
}
```

### 4. 场景切换节点 (scene_change)

切换到其他游戏场景。

```typescript
{
  id: 'scene_change_node',
  type: 'scene_change',
  sceneId: 'character_select',  // 目标场景
}
```

### 5. 结局节点 (ending)

触发结局。

```typescript
{
  id: 'ending_node',
  type: 'ending',
  endingType: 'normal',  // 'normal' | 'perfect' | 'hidden'
}
```

---

## 好感度系统

### 好感度等级

| 等级 | 范围 | 英文 | 说明 |
|------|------|------|------|
| 陌生 | 0-20 | stranger | 初始状态，角色比较疏离 |
| 熟悉 | 21-40 | familiar | 开始放下防备 |
| 好感 | 41-60 | fond | 有好感，偶尔脸红 |
| 喜欢 | 61-80 | love | 主动接近，明显害羞 |
| 挚爱 | 81-100 | devoted | 深情，主动表达爱意 |

### 好感度影响

- **立绘切换**：不同好感度显示不同立绘
- **对话内容**：AI回复会根据好感度调整
- **解锁内容**：某些选项/地点需要达到一定好感度

### 在剧情中修改好感度

```typescript
effects: [
  { type: 'affection', characterId: 'su_wanqing', value: 10 },  // +10
  { type: 'affection', characterId: 'su_wanqing', value: -5 },  // -5
]
```

---

## AI对话系统

### 配置AI

在设置页面输入 Google AI Studio API Key 即可启用AI功能。

### AI如何工作

1. **角色Prompt**：每个角色有专属人设提示词（在 `AIService.ts` 中定义）
2. **情感上下文**：AI会知道当前好感度等级
3. **对话历史**：AI会参考最近5条对话记录
4. **情感分析**：AI回复会影响好感度变化

### 无AI降级回复

当AI不可用时，系统会使用关键词匹配：

```typescript
// AIService.ts 中的降级逻辑
if (input.includes('喜欢')) {
  return { text: '（脸微微红了）......', emotion: 'blush', affectionChange: 2 };
}
```

### 自定义角色Prompt

编辑 `src/services/AIService.ts` 中的 `CHARACTER_PROMPTS`：

```typescript
const CHARACTER_PROMPTS: Record<CharacterId, string> = {
  su_wanqing: `你现在扮演苏晚晴，一个17岁的高中班长。
性格特点：温柔内敛，外冷内热...
说话风格：语气温柔但略带疏离...
注意：回复要包含括号内的神态动作描写`,
  // ...
};
```

---

## 添加新角色

### 步骤1：定义角色数据

编辑 `src/data/characters.ts`：

```typescript
// 1. 添加角色ID类型（在 types/index.ts）
export type CharacterId = 'su_wanqing' | 'xia_zhi' | 'lin_zhiyu' | 'new_character';

// 2. 添加角色数据（在 characters.ts）
export const CHARACTERS: Record<CharacterId, CharacterInfo> = {
  // ... 现有角色
  new_character: {
    id: 'new_character',
    name: '新角色名',
    age: 17,
    role: '角色身份',
    personality: '性格描述',
    likes: ['喜好1', '喜好2'],
    dislikes: ['厌恶1'],
    keywords: ['关键词1', '关键词2'],
  },
};

// 3. 添加立绘URL
export const CHARACTER_SPRITES: Record<CharacterId, Record<AffectionLevel, string>> = {
  // ... 现有角色
  new_character: {
    stranger: '/sprites/new_character/stranger.png',
    familiar: '/sprites/new_character/familiar.png',
    fond: '/sprites/new_character/fond.png',
    love: '/sprites/new_character/love.png',
    devoted: '/sprites/new_character/devoted.png',
  },
};
```

### 步骤2：添加角色立绘

将立绘图片放入 `public/sprites/new_character/` 目录。

### 步骤3：添加角色章节

在 `src/data/chapters.ts` 中添加新角色的剧情章节。

### 步骤4：添加AI人设

在 `src/services/AIService.ts` 中添加角色的AI提示词。

---

## 可用的背景场景

在 `characters.ts` 中定义的背景：

| ID | 说明 |
|----|------|
| `classroom` | 教室 |
| `library` | 图书馆 |
| `rooftop` | 天台 |
| `schoolGate` | 校门口 |
| `cafe` | 咖啡厅 |
| `park` | 公园 |

添加新背景：

```typescript
export const BACKGROUNDS: Record<string, string> = {
  // ... 现有背景
  newLocation: 'https://example.com/new-background.jpg',
  // 或本地文件
  newLocation: '/backgrounds/new-location.jpg',
};
```

---

## Material Icons 图标

选项的 `icon` 属性使用 Google Material Symbols。

常用图标：
- `favorite` - 爱心
- `handshake` - 握手
- `sentiment_satisfied` - 开心
- `sentiment_neutral` - 中性
- `sentiment_dissatisfied` - 不满
- `help` - 问号
- `directions_walk` - 行走
- `menu_book` - 书本
- `local_cafe` - 咖啡

查找更多图标：https://fonts.google.com/icons

---

## 常见问题

### Q: 如何让某个选项只在特定条件下显示？

```typescript
{
  id: 'secret_choice',
  text: '（特殊选项）告诉她你的心意',
  condition: {
    type: 'affection',
    characterId: 'su_wanqing',
    operator: '>=',
    value: 50,
  },
  // ...
}
```

### Q: 如何实现剧情分支合并？

让不同分支的节点最终指向同一个 `nextNodeId`：

```typescript
// 分支A
{ id: 'branch_a', ..., nextNodeId: 'merge_point' }
// 分支B  
{ id: 'branch_b', ..., nextNodeId: 'merge_point' }
// 合并点
{ id: 'merge_point', type: 'dialog', ... }
```

### Q: 如何调试剧情？

1. 打开浏览器开发者工具 (F12)
2. 在 Console 中可以看到剧情流转日志
3. 使用 `localStorage.clear()` 清除存档重新开始

### Q: 节点ID命名规范？

建议格式：`{角色缩写}_ch{章节号}_{序号}`

例如：
- `sw_ch1_001` - 苏晚晴第1章第1个节点
- `xz_ch2_005` - 夏栀第2章第5个节点

---

## 运行项目

```bash
# 安装依赖
cd galgame
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

---

## 联系与贡献

如有问题或建议，欢迎提交Issue或PR！

Happy Coding! 💕
