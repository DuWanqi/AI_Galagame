/**
 * 剧情引擎
 */

import type { 
  StoryChapter, 
  StoryNode, 
  CharacterId, 
  Choice,
  DialogLine
} from '../types';
import type { GameManager } from './GameManager';
import { STORY_CHAPTERS } from '../data/chapters';

export class StoryEngine {
  private gameManager: GameManager;
  private chapters: Map<string, StoryChapter> = new Map();
  private currentDialogIndex: number = 0;

  constructor(gameManager: GameManager) {
    this.gameManager = gameManager;
  }

  /**
   * 加载所有章节
   */
  public async loadChapters(): Promise<void> {
    // 加载内置剧情数据
    for (const chapter of STORY_CHAPTERS) {
      this.chapters.set(chapter.id, chapter);
    }
    
    console.log(`[StoryEngine] 已加载 ${this.chapters.size} 个章节`);
  }

  /**
   * 获取角色的第一章
   */
  public getFirstChapter(characterId: CharacterId): StoryChapter | null {
    for (const chapter of this.chapters.values()) {
      if (chapter.characterId === characterId) {
        return chapter;
      }
    }
    return null;
  }

  /**
   * 获取章节
   */
  public getChapter(chapterId: string): StoryChapter | null {
    return this.chapters.get(chapterId) || null;
  }

  /**
   * 获取当前节点
   */
  public getCurrentNode(): StoryNode | null {
    const chapterId = this.gameManager.getCurrentChapterId();
    const nodeId = this.gameManager.getCurrentNodeId();
    
    if (!chapterId || !nodeId) return null;
    
    const chapter = this.chapters.get(chapterId);
    if (!chapter) return null;
    
    return chapter.nodes.find(n => n.id === nodeId) || null;
  }

  /**
   * 获取节点
   */
  public getNode(chapterId: string, nodeId: string): StoryNode | null {
    const chapter = this.chapters.get(chapterId);
    if (!chapter) return null;
    
    return chapter.nodes.find(n => n.id === nodeId) || null;
  }

  /**
   * 前进到下一个节点
   */
  public advanceToNextNode(): StoryNode | null {
    const currentNode = this.getCurrentNode();
    if (!currentNode) return null;

    if (currentNode.nextNodeId) {
      this.gameManager.setCurrentNode(currentNode.nextNodeId);
      this.currentDialogIndex = 0;
      return this.getCurrentNode();
    }

    return null;
  }

  /**
   * 执行选择
   */
  public makeChoice(choice: Choice): StoryNode | null {
    // 应用选择效果
    for (const effect of choice.effects) {
      switch (effect.type) {
        case 'affection':
          if (effect.characterId) {
            this.gameManager.changeAffection(effect.characterId, effect.value);
          }
          break;
        case 'flag':
          if (effect.flagName) {
            this.gameManager.setFlag(effect.flagName, effect.value);
          }
          break;
      }
    }

    // 发送事件
    this.gameManager.emit({
      type: 'choice_made',
      data: { choice },
    });

    // 跳转到下一个节点
    this.gameManager.setCurrentNode(choice.nextNodeId);
    this.currentDialogIndex = 0;
    
    // 自动存档
    this.gameManager.getSaveSystem().autoSave();

    return this.getCurrentNode();
  }

  /**
   * 检查选项条件
   */
  public checkChoiceCondition(choice: Choice): boolean {
    if (!choice.condition) return true;

    const { type, characterId, operator, value, flagName } = choice.condition;

    let currentValue: number | string | boolean | undefined;

    if (type === 'affection' && characterId) {
      currentValue = this.gameManager.getAffection(characterId);
    } else if (type === 'flag' && flagName) {
      currentValue = this.gameManager.getFlag(flagName);
    }

    if (currentValue === undefined) return false;

    switch (operator) {
      case '>=':
        return Number(currentValue) >= Number(value);
      case '<=':
        return Number(currentValue) <= Number(value);
      case '==':
        return currentValue === value;
      case '>':
        return Number(currentValue) > Number(value);
      case '<':
        return Number(currentValue) < Number(value);
      default:
        return true;
    }
  }

  /**
   * 获取可用选项（过滤条件不满足的）
   */
  public getAvailableChoices(): Choice[] {
    const node = this.getCurrentNode();
    if (!node || !node.choices) return [];

    return node.choices.filter(choice => this.checkChoiceCondition(choice));
  }

  /**
   * 获取当前对话索引
   */
  public getCurrentDialogIndex(): number {
    return this.currentDialogIndex;
  }

  /**
   * 设置当前对话索引
   */
  public setCurrentDialogIndex(index: number): void {
    this.currentDialogIndex = index;
  }

  /**
   * 前进到下一句对话
   */
  public advanceDialog(): DialogLine | null {
    const node = this.getCurrentNode();
    if (!node || !node.dialogs) return null;

    this.currentDialogIndex++;
    
    if (this.currentDialogIndex < node.dialogs.length) {
      return node.dialogs[this.currentDialogIndex];
    }

    return null;
  }

  /**
   * 获取当前对话
   */
  public getCurrentDialog(): DialogLine | null {
    const node = this.getCurrentNode();
    if (!node || !node.dialogs) return null;

    return node.dialogs[this.currentDialogIndex] || null;
  }

  /**
   * 检查是否还有更多对话
   */
  public hasMoreDialogs(): boolean {
    const node = this.getCurrentNode();
    if (!node || !node.dialogs) return false;

    return this.currentDialogIndex < node.dialogs.length - 1;
  }

  /**
   * 重置对话索引
   */
  public resetDialogIndex(): void {
    this.currentDialogIndex = 0;
  }

  /**
   * 获取所有章节
   */
  public getAllChapters(): StoryChapter[] {
    return Array.from(this.chapters.values());
  }

  /**
   * 获取角色所有章节
   */
  public getCharacterChapters(characterId: CharacterId): StoryChapter[] {
    return this.getAllChapters().filter(c => c.characterId === characterId);
  }
}
