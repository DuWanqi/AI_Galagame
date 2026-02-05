/**
 * 星见告白 - 类型定义
 */

// 情感状态等级
export type AffectionLevel = 'stranger' | 'familiar' | 'fond' | 'love' | 'devoted';

// 情感状态配置
export interface AffectionConfig {
  level: AffectionLevel;
  minValue: number;
  maxValue: number;
  label: string;
  labelEn: string;
}

// 角色ID
export type CharacterId = 'su_wanqing' | 'xia_zhi' | 'lin_zhiyu';

// 角色基本信息
export interface CharacterInfo {
  id: CharacterId;
  name: string;
  age: number;
  role: string;
  personality: string;
  likes: string[];
  dislikes: string[];
  keywords: string[];
  voiceActor?: string;
}

// 立绘信息
export interface SpriteInfo {
  characterId: CharacterId;
  level: AffectionLevel;
  url: string;
  description: string;
}

// 对话内容
export interface DialogLine {
  id: string;
  characterId: CharacterId | 'narrator' | 'player';
  text: string;
  emotion?: string;
  voicePath?: string;
}

// 选项
export interface Choice {
  id: string;
  text: string;
  icon?: string;
  effects: ChoiceEffect[];
  nextNodeId: string;
  condition?: ChoiceCondition;
}

// 选项效果
export interface ChoiceEffect {
  type: 'affection' | 'flag' | 'item';
  characterId?: CharacterId;
  value: number;
  flagName?: string;
}

// 选项条件
export interface ChoiceCondition {
  type: 'affection' | 'flag';
  characterId?: CharacterId;
  operator: '>=' | '<=' | '==' | '>' | '<';
  value: number | string;
  flagName?: string;
}

// 剧情节点
export interface StoryNode {
  id: string;
  type: 'dialog' | 'choice' | 'scene_change' | 'ending' | 'free_chat';
  characterId?: CharacterId;
  background?: string;
  bgm?: string;
  dialogs?: DialogLine[];
  choices?: Choice[];
  nextNodeId?: string;
  sceneId?: string;
  endingType?: 'normal' | 'perfect' | 'hidden';
  // 自由对话节点专用
  freeChatConfig?: FreeChatConfig;
}

// 自由对话配置
export interface FreeChatConfig {
  maxRounds: number;
  prompt?: string;
  exitText: string;
  placeholderText?: string;
}

// 剧情章节
export interface StoryChapter {
  id: string;
  title: string;
  characterId: CharacterId;
  nodes: StoryNode[];
  startNodeId: string;
}

// 游戏状态
export interface GameState {
  currentScene: SceneType;
  currentChapterId: string | null;
  currentNodeId: string | null;
  playerName: string;
  affections: Record<CharacterId, number>;
  flags: Record<string, boolean | number | string>;
  unlockedEndings: string[];
  dialogHistory: DialogHistoryEntry[];
  settings: GameSettings;
}

// 对话历史
export interface DialogHistoryEntry {
  timestamp: number;
  characterId: CharacterId | 'narrator' | 'player';
  characterName: string;
  text: string;
}

// 游戏设置
export interface GameSettings {
  textSpeed: number; // 1-10
  autoPlaySpeed: number; // 1-10
  bgmVolume: number; // 0-100
  sfxVolume: number; // 0-100
  voiceVolume: number; // 0-100
  enableEffects: boolean;
  enableAI: boolean;
  aiApiKey?: string;
}

// 场景类型
export type SceneType = 'home' | 'character_select' | 'game' | 'save_load' | 'settings' | 'gallery' | 'date';

// 约会地点
export type DateLocation = 'cafe' | 'library' | 'park' | 'rooftop' | 'artRoom' | 'arcade';

// 约会地点配置
export interface DateLocationConfig {
  id: DateLocation;
  name: string;
  icon: string;
  background: string;
  description: string;
  unlockCondition?: {
    characterId: CharacterId;
    minAffection: number;
  };
}

// 存档槽位
export interface SaveSlot {
  id: number;
  timestamp: number;
  screenshot?: string;
  chapterId: string;
  nodeId: string;
  playerName: string;
  affections: Record<CharacterId, number>;
  flags: Record<string, boolean | number | string>;
  playTime: number;
}

// AI对话请求
export interface AIDialogRequest {
  characterId: CharacterId;
  playerInput: string;
  currentAffection: number;
  recentHistory: DialogHistoryEntry[];
}

// AI对话响应
export interface AIDialogResponse {
  text: string;
  emotion?: string;
  affectionChange?: number;
}

// 事件类型
export type GameEventType = 
  | 'scene_change'
  | 'affection_change'
  | 'dialog_complete'
  | 'choice_made'
  | 'chapter_complete'
  | 'ending_unlocked'
  | 'save_complete'
  | 'load_complete';

// 游戏事件
export interface GameEvent {
  type: GameEventType;
  data?: any;
}

// 事件监听器
export type GameEventListener = (event: GameEvent) => void;
