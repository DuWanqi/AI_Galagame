/**
 * 星见告白：与她的专属羁绊
 * 主入口文件
 */

import './styles/main.css';
import { GameManager } from './core/GameManager';
import { EffectsManager } from './effects/EffectsManager';

async function main() {
  console.log('[StarConfession] 游戏初始化中...');

  // 初始化游戏管理器
  const gameManager = GameManager.getInstance();
  
  // 初始化特效管理器
  const effectsManager = EffectsManager.getInstance();
  
  try {
    // 初始化游戏
    await gameManager.initialize();
    
    // 初始化特效层
    await effectsManager.initialize();
    
    // 移除加载屏幕
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
    
    // 显示主页
    gameManager.showScene('home');
    
    // 启动特效
    if (gameManager.getSettings().enableEffects) {
      effectsManager.startSakuraEffect();
    }
    
    console.log('[StarConfession] 游戏初始化完成！');
  } catch (error) {
    console.error('[StarConfession] 初始化失败:', error);
  }
}

// 启动游戏
main().catch(console.error);

// 导出全局访问
declare global {
  interface Window {
    gameManager: GameManager;
    effectsManager: EffectsManager;
  }
}

window.gameManager = GameManager.getInstance();
window.effectsManager = EffectsManager.getInstance();
