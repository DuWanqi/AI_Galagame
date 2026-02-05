/**
 * 存档系统
 */

import type { GameSettings, SaveSlot, CharacterId } from '../types';
import type { GameManager } from './GameManager';

const STORAGE_KEYS = {
  SETTINGS: 'starconfession_settings',
  SAVES: 'starconfession_saves',
  AUTO_SAVE: 'starconfession_autosave',
};

const MAX_SAVE_SLOTS = 10;

export class SaveSystem {
  private gameManager: GameManager;

  constructor(gameManager: GameManager) {
    this.gameManager = gameManager;
  }

  /**
   * 保存游戏到指定槽位
   */
  public saveGame(slotId: number): SaveSlot | null {
    try {
      const state = this.gameManager.getState();
      
      const saveData: SaveSlot = {
        id: slotId,
        timestamp: Date.now(),
        chapterId: state.currentChapterId || '',
        nodeId: state.currentNodeId || '',
        playerName: state.playerName,
        affections: { ...state.affections },
        flags: { ...state.flags },
        playTime: this.calculatePlayTime(),
      };

      const saves = this.getAllSaves();
      const existingIndex = saves.findIndex(s => s.id === slotId);
      
      if (existingIndex >= 0) {
        saves[existingIndex] = saveData;
      } else {
        saves.push(saveData);
      }

      localStorage.setItem(STORAGE_KEYS.SAVES, JSON.stringify(saves));
      
      this.gameManager.emit({ type: 'save_complete', data: saveData });
      
      return saveData;
    } catch (error) {
      console.error('[SaveSystem] 保存失败:', error);
      return null;
    }
  }

  /**
   * 自动存档
   */
  public autoSave(): SaveSlot | null {
    try {
      const state = this.gameManager.getState();
      
      const saveData: SaveSlot = {
        id: -1, // 自动存档使用-1作为ID
        timestamp: Date.now(),
        chapterId: state.currentChapterId || '',
        nodeId: state.currentNodeId || '',
        playerName: state.playerName,
        affections: { ...state.affections },
        flags: { ...state.flags },
        playTime: this.calculatePlayTime(),
      };

      localStorage.setItem(STORAGE_KEYS.AUTO_SAVE, JSON.stringify(saveData));
      
      return saveData;
    } catch (error) {
      console.error('[SaveSystem] 自动存档失败:', error);
      return null;
    }
  }

  /**
   * 加载指定槽位的存档
   */
  public loadSave(slotId: number): SaveSlot | null {
    try {
      const saves = this.getAllSaves();
      return saves.find(s => s.id === slotId) || null;
    } catch (error) {
      console.error('[SaveSystem] 加载存档失败:', error);
      return null;
    }
  }

  /**
   * 获取自动存档
   */
  public getAutoSave(): SaveSlot | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.AUTO_SAVE);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('[SaveSystem] 获取自动存档失败:', error);
      return null;
    }
  }

  /**
   * 清除自动存档
   */
  public clearAutoSave(): boolean {
    try {
      localStorage.removeItem(STORAGE_KEYS.AUTO_SAVE);
      return true;
    } catch (error) {
      console.error('[SaveSystem] 清除自动存档失败:', error);
      return false;
    }
  }

  /**
   * 获取所有存档
   */
  public getAllSaves(): SaveSlot[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVES);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('[SaveSystem] 获取存档列表失败:', error);
      return [];
    }
  }

  /**
   * 删除存档
   */
  public deleteSave(slotId: number): boolean {
    try {
      const saves = this.getAllSaves();
      const filtered = saves.filter(s => s.id !== slotId);
      localStorage.setItem(STORAGE_KEYS.SAVES, JSON.stringify(filtered));
      return true;
    } catch (error) {
      console.error('[SaveSystem] 删除存档失败:', error);
      return false;
    }
  }

  /**
   * 保存设置
   */
  public saveSettings(settings: GameSettings): boolean {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
      return true;
    } catch (error) {
      console.error('[SaveSystem] 保存设置失败:', error);
      return false;
    }
  }

  /**
   * 加载设置
   */
  public loadSettings(): GameSettings | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('[SaveSystem] 加载设置失败:', error);
      return null;
    }
  }

  /**
   * 获取空闲槽位
   */
  public getEmptySlots(): number[] {
    const saves = this.getAllSaves();
    const usedSlots = saves.map(s => s.id);
    const emptySlots: number[] = [];
    
    for (let i = 1; i <= MAX_SAVE_SLOTS; i++) {
      if (!usedSlots.includes(i)) {
        emptySlots.push(i);
      }
    }
    
    return emptySlots;
  }

  /**
   * 格式化时间戳
   */
  public formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  }

  /**
   * 格式化游玩时间
   */
  public formatPlayTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}小时${minutes}分钟`;
    }
    return `${minutes}分钟`;
  }

  /**
   * 计算游玩时间（简化版，实际需要跟踪）
   */
  private calculatePlayTime(): number {
    // 这里简化处理，实际应该跟踪游玩时间
    return 0;
  }

  /**
   * 清除所有数据
   */
  public clearAllData(): boolean {
    try {
      localStorage.removeItem(STORAGE_KEYS.SAVES);
      localStorage.removeItem(STORAGE_KEYS.AUTO_SAVE);
      localStorage.removeItem(STORAGE_KEYS.SETTINGS);
      return true;
    } catch (error) {
      console.error('[SaveSystem] 清除数据失败:', error);
      return false;
    }
  }

  /**
   * 导出存档为JSON
   */
  public exportSave(slotId: number): string | null {
    const save = this.loadSave(slotId);
    if (save) {
      return JSON.stringify(save, null, 2);
    }
    return null;
  }

  /**
   * 从JSON导入存档
   */
  public importSave(jsonString: string, targetSlotId: number): boolean {
    try {
      const saveData = JSON.parse(jsonString) as SaveSlot;
      saveData.id = targetSlotId;
      saveData.timestamp = Date.now();
      
      const saves = this.getAllSaves();
      const existingIndex = saves.findIndex(s => s.id === targetSlotId);
      
      if (existingIndex >= 0) {
        saves[existingIndex] = saveData;
      } else {
        saves.push(saveData);
      }

      localStorage.setItem(STORAGE_KEYS.SAVES, JSON.stringify(saves));
      return true;
    } catch (error) {
      console.error('[SaveSystem] 导入存档失败:', error);
      return false;
    }
  }
}
