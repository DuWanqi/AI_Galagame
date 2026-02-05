/**
 * 情感羁绊值系统
 */

import type { 
  AffectionLevel, 
  AffectionConfig, 
  CharacterId,
  SpriteInfo
} from '../types';
import type { GameManager } from './GameManager';

// 情感等级配置
const AFFECTION_LEVELS: AffectionConfig[] = [
  { level: 'stranger', minValue: 0, maxValue: 20, label: '陌生', labelEn: 'Stranger' },
  { level: 'familiar', minValue: 21, maxValue: 40, label: '熟悉', labelEn: 'Familiar' },
  { level: 'fond', minValue: 41, maxValue: 60, label: '好感', labelEn: 'Fond' },
  { level: 'love', minValue: 61, maxValue: 80, label: '喜欢', labelEn: 'Love' },
  { level: 'devoted', minValue: 81, maxValue: 100, label: '深爱', labelEn: 'Devoted' },
];

// 立绘描述配置
const SPRITE_DESCRIPTIONS: Record<CharacterId, Record<AffectionLevel, string>> = {
  su_wanqing: {
    stranger: '面无表情，眼神疏离，站姿挺拔（班长气场），穿搭整洁校服',
    familiar: '轻微微笑，眼神柔和，双手自然下垂，穿搭休闲校服',
    fond: '脸红微笑，眼神带光，双手轻握衣角，带轻微光影特效',
    love: '眉眼弯弯，主动靠近姿态，带腮红、微光特效',
    devoted: '害羞低头/主动对视，带温柔笑意，柔光特效，姿态亲昵',
  },
  xia_zhi: {
    stranger: '好奇打量，嘴角微扬，站姿活泼，穿搭元气校服+动漫徽章',
    familiar: '大笑，双手叉腰/挥手，眼神灵动，发丝飘动',
    fond: '歪头笑，眨眼，主动靠近，带腮红，加小发夹装饰',
    love: '蹦蹦跳跳，双手挽住衣角，眉眼弯弯，带爱心特效',
    devoted: '脸红抱臂/踮脚靠近，眼神羞涩又主动，柔光特效拉满',
  },
  lin_zhiyu: {
    stranger: '眼神冷淡，面无表情，双手抱胸/握画笔，简约校服+画笔袋',
    familiar: '轻微点头，眼神柔和，双手自然握笔，嘴角微抿',
    fond: '眼神温柔，嘴角轻扬，手中握有画着玩家的草稿',
    love: '低头浅笑，脸红，主动递出画稿，姿态轻微拘谨',
    devoted: '抬头对视，温柔浅笑，眼神坚定，柔光特效，主动轻碰手',
  },
};

export class AffectionSystem {
  private gameManager: GameManager;

  constructor(gameManager: GameManager) {
    this.gameManager = gameManager;
  }

  /**
   * 根据数值获取情感等级
   */
  public getLevel(value: number): AffectionLevel {
    for (const config of AFFECTION_LEVELS) {
      if (value >= config.minValue && value <= config.maxValue) {
        return config.level;
      }
    }
    return 'stranger';
  }

  /**
   * 获取等级配置
   */
  public getLevelConfig(level: AffectionLevel): AffectionConfig {
    return AFFECTION_LEVELS.find(c => c.level === level) || AFFECTION_LEVELS[0];
  }

  /**
   * 获取所有等级配置
   */
  public getAllLevels(): AffectionConfig[] {
    return AFFECTION_LEVELS;
  }

  /**
   * 获取角色当前等级
   */
  public getCharacterLevel(characterId: CharacterId): AffectionLevel {
    const value = this.gameManager.getAffection(characterId);
    return this.getLevel(value);
  }

  /**
   * 获取角色当前立绘URL
   */
  public getCurrentSpriteUrl(characterId: CharacterId): string {
    const level = this.getCharacterLevel(characterId);
    return this.getSpriteUrl(characterId, level);
  }

  /**
   * 获取指定等级的立绘URL
   */
  public getSpriteUrl(characterId: CharacterId, level: AffectionLevel): string {
    // 实际项目中这里返回真实的立绘URL
    // 这里使用占位图片
    return `/sprites/${characterId}/${level}.png`;
  }

  /**
   * 获取立绘描述（用于AI生成立绘）
   */
  public getSpriteDescription(characterId: CharacterId, level: AffectionLevel): string {
    return SPRITE_DESCRIPTIONS[characterId]?.[level] || '';
  }

  /**
   * 获取所有立绘信息
   */
  public getAllSprites(characterId: CharacterId): SpriteInfo[] {
    return AFFECTION_LEVELS.map(config => ({
      characterId,
      level: config.level,
      url: this.getSpriteUrl(characterId, config.level),
      description: this.getSpriteDescription(characterId, config.level),
    }));
  }

  /**
   * 计算等级进度百分比
   */
  public getLevelProgress(characterId: CharacterId): number {
    const value = this.gameManager.getAffection(characterId);
    const config = this.getLevelConfig(this.getLevel(value));
    const range = config.maxValue - config.minValue;
    const progress = value - config.minValue;
    return Math.round((progress / range) * 100);
  }

  /**
   * 检查是否可以解锁结局
   */
  public canUnlockEnding(characterId: CharacterId, endingType: 'normal' | 'perfect' | 'hidden'): boolean {
    const value = this.gameManager.getAffection(characterId);
    
    switch (endingType) {
      case 'normal':
        return value >= 61 && value <= 80;
      case 'perfect':
        return value >= 81;
      case 'hidden':
        return value === 100 && this.hasAllHolidayFlags(characterId);
      default:
        return false;
    }
  }

  /**
   * 检查是否有所有节日标记
   */
  private hasAllHolidayFlags(characterId: CharacterId): boolean {
    const flags = [
      `${characterId}_birthday`,
      `${characterId}_valentine`,
      `${characterId}_christmas`,
    ];
    return flags.every(flag => this.gameManager.getFlag(flag) === true);
  }

  /**
   * 获取等级对应的UI颜色
   */
  public getLevelColor(level: AffectionLevel): string {
    const colors: Record<AffectionLevel, string> = {
      stranger: '#9ca3af', // gray
      familiar: '#60a5fa', // blue
      fond: '#f472b6', // pink
      love: '#f43f5e', // rose
      devoted: '#ec4899', // primary pink with glow
    };
    return colors[level];
  }

  /**
   * 获取等级图标
   */
  public getLevelIcon(level: AffectionLevel): string {
    const icons: Record<AffectionLevel, string> = {
      stranger: 'person',
      familiar: 'handshake',
      fond: 'favorite_border',
      love: 'favorite',
      devoted: 'auto_awesome',
    };
    return icons[level];
  }
}
