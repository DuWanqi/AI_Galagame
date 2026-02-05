/**
 * 游戏管理器 - 核心控制中心
 */

import type { 
  GameState, 
  SceneType, 
  CharacterId, 
  GameSettings,
  GameEvent,
  GameEventListener,
  GameEventType
} from '../types';
import { AffectionSystem } from './AffectionSystem';
import { SaveSystem } from './SaveSystem';
import { StoryEngine } from './StoryEngine';
import { renderHomePage } from '../scenes/HomePage';
import { renderCharacterSelectPage } from '../scenes/CharacterSelectPage';
import { renderGameScene } from '../scenes/GameScene';
import { renderSaveLoadPage } from '../scenes/SaveLoadPage';
import { renderSettingsPage } from '../scenes/SettingsPage';
import { renderDateScene } from '../scenes/DateScene';

const DEFAULT_SETTINGS: GameSettings = {
  textSpeed: 5,
  autoPlaySpeed: 5,
  bgmVolume: 70,
  sfxVolume: 80,
  voiceVolume: 100,
  enableEffects: true,
  enableAI: false,
  aiApiKey: undefined,
};

const DEFAULT_STATE: GameState = {
  currentScene: 'home',
  currentChapterId: null,
  currentNodeId: null,
  playerName: '玩家',
  affections: {
    su_wanqing: 0,
    xia_zhi: 0,
    lin_zhiyu: 0,
  },
  flags: {},
  unlockedEndings: [],
  dialogHistory: [],
  settings: DEFAULT_SETTINGS,
};

export class GameManager {
  private static instance: GameManager;
  private state: GameState;
  private eventListeners: Map<GameEventType, GameEventListener[]> = new Map();
  private affectionSystem: AffectionSystem;
  private saveSystem: SaveSystem;
  private storyEngine: StoryEngine;
  private appContainer: HTMLElement | null = null;

  private constructor() {
    this.state = { ...DEFAULT_STATE };
    this.affectionSystem = new AffectionSystem(this);
    this.saveSystem = new SaveSystem(this);
    this.storyEngine = new StoryEngine(this);
  }

  public static getInstance(): GameManager {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  /**
   * 初始化游戏
   */
  public async initialize(): Promise<void> {
    this.appContainer = document.getElementById('app');
    
    // 加载保存的设置
    const savedSettings = this.saveSystem.loadSettings();
    if (savedSettings) {
      this.state.settings = { ...DEFAULT_SETTINGS, ...savedSettings };
    }
    
    // 初始化剧情引擎
    await this.storyEngine.loadChapters();
    
    console.log('[GameManager] 初始化完成');
  }

  /**
   * 显示场景
   */
  public showScene(scene: SceneType): void {
    this.state.currentScene = scene;
    this.renderCurrentScene();
    this.emit({ type: 'scene_change', data: { scene } });
  }

  /**
   * 渲染当前场景
   */
  private renderCurrentScene(): void {
    if (!this.appContainer) return;

    switch (this.state.currentScene) {
      case 'home':
        renderHomePage(this.appContainer, this);
        break;
      case 'character_select':
        renderCharacterSelectPage(this.appContainer, this);
        break;
      case 'game':
        renderGameScene(this.appContainer, this);
        break;
      case 'save_load':
        renderSaveLoadPage(this.appContainer, this);
        break;
      case 'settings':
        renderSettingsPage(this.appContainer, this);
        break;
      case 'date':
        renderDateScene(this.appContainer, this);
        break;
      default:
        renderHomePage(this.appContainer, this);
    }
  }

  /**
   * 开始新游戏
   */
  public startNewGame(playerName: string): void {
    this.state = {
      ...DEFAULT_STATE,
      playerName,
      settings: this.state.settings, // 保留设置
    };
    this.showScene('character_select');
  }

  /**
   * 选择角色并开始剧情
   */
  public selectCharacter(characterId: CharacterId): void {
    const chapter = this.storyEngine.getFirstChapter(characterId);
    if (chapter) {
      this.state.currentChapterId = chapter.id;
      this.state.currentNodeId = chapter.startNodeId;
      this.showScene('game');
    }
  }

  /**
   * 继续游戏
   */
  public continueGame(): void {
    const lastSave = this.saveSystem.getAutoSave();
    if (lastSave) {
      this.loadFromSave(lastSave);
    } else {
      this.showScene('character_select');
    }
  }

  /**
   * 从存档加载
   */
  public loadFromSave(save: any): void {
    this.state.currentChapterId = save.chapterId;
    this.state.currentNodeId = save.nodeId;
    this.state.playerName = save.playerName;
    this.state.affections = save.affections;
    this.state.flags = save.flags;
    this.showScene('game');
    this.emit({ type: 'load_complete', data: save });
  }

  // Getters
  public getState(): GameState {
    return this.state;
  }

  public getSettings(): GameSettings {
    return this.state.settings;
  }

  public getPlayerName(): string {
    return this.state.playerName;
  }

  public getAffection(characterId: CharacterId): number {
    return this.state.affections[characterId];
  }

  public getCurrentChapterId(): string | null {
    return this.state.currentChapterId;
  }

  public getCurrentNodeId(): string | null {
    return this.state.currentNodeId;
  }

  public getFlag(name: string): boolean | number | string | undefined {
    return this.state.flags[name];
  }

  // Setters
  public setPlayerName(name: string): void {
    this.state.playerName = name;
  }

  public setCurrentNode(nodeId: string): void {
    this.state.currentNodeId = nodeId;
  }

  public setFlag(name: string, value: boolean | number | string): void {
    this.state.flags[name] = value;
  }

  public updateSettings(settings: Partial<GameSettings>): void {
    this.state.settings = { ...this.state.settings, ...settings };
    this.saveSystem.saveSettings(this.state.settings);
  }

  // 系统访问
  public getAffectionSystem(): AffectionSystem {
    return this.affectionSystem;
  }

  public getSaveSystem(): SaveSystem {
    return this.saveSystem;
  }

  public getStoryEngine(): StoryEngine {
    return this.storyEngine;
  }

  // 事件系统
  public on(type: GameEventType, listener: GameEventListener): void {
    if (!this.eventListeners.has(type)) {
      this.eventListeners.set(type, []);
    }
    this.eventListeners.get(type)!.push(listener);
  }

  public off(type: GameEventType, listener: GameEventListener): void {
    const listeners = this.eventListeners.get(type);
    if (listeners) {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  public emit(event: GameEvent): void {
    const listeners = this.eventListeners.get(event.type);
    if (listeners) {
      listeners.forEach(listener => listener(event));
    }
  }

  /**
   * 修改羁绊值
   */
  public changeAffection(characterId: CharacterId, delta: number): void {
    const oldValue = this.state.affections[characterId];
    const newValue = Math.max(0, Math.min(100, oldValue + delta));
    this.state.affections[characterId] = newValue;
    
    const oldLevel = this.affectionSystem.getLevel(oldValue);
    const newLevel = this.affectionSystem.getLevel(newValue);
    
    this.emit({
      type: 'affection_change',
      data: {
        characterId,
        oldValue,
        newValue,
        delta,
        levelChanged: oldLevel !== newLevel,
        oldLevel,
        newLevel,
      },
    });
  }

  /**
   * 添加对话历史
   */
  public addDialogHistory(characterId: string, characterName: string, text: string): void {
    this.state.dialogHistory.push({
      timestamp: Date.now(),
      characterId: characterId as any,
      characterName,
      text,
    });
    
    // 只保留最近100条
    if (this.state.dialogHistory.length > 100) {
      this.state.dialogHistory = this.state.dialogHistory.slice(-100);
    }
  }

  /**
   * 获取对话历史
   */
  public getDialogHistory() {
    return this.state.dialogHistory;
  }
}
