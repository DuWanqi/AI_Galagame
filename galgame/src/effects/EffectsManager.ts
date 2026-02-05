/**
 * PixiJS 特效管理器
 */

import { Application, Container, Graphics, Ticker } from 'pixi.js';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  alpha: number;
  graphics: Graphics;
}

export class EffectsManager {
  private static instance: EffectsManager;
  private app: Application | null = null;
  private container: HTMLElement | null = null;
  private particleContainer: Container | null = null;
  private sakuraParticles: Particle[] = [];
  private heartParticles: Particle[] = [];
  private isRunning: boolean = false;

  private constructor() {}

  public static getInstance(): EffectsManager {
    if (!EffectsManager.instance) {
      EffectsManager.instance = new EffectsManager();
    }
    return EffectsManager.instance;
  }

  /**
   * 初始化特效系统
   */
  public async initialize(): Promise<void> {
    this.container = document.getElementById('effects-container');
    if (!this.container) return;

    this.app = new Application();
    
    await this.app.init({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundAlpha: 0,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
    });

    this.app.canvas.style.position = 'fixed';
    this.app.canvas.style.top = '0';
    this.app.canvas.style.left = '0';
    this.app.canvas.style.pointerEvents = 'none';
    this.app.canvas.style.zIndex = '100';
    
    this.container.appendChild(this.app.canvas);

    this.particleContainer = new Container();
    this.app.stage.addChild(this.particleContainer);

    // 处理窗口调整
    window.addEventListener('resize', () => {
      if (this.app) {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
      }
    });

    console.log('[EffectsManager] 初始化完成');
  }

  /**
   * 启动樱花飘落特效
   */
  public startSakuraEffect(): void {
    if (this.isRunning || !this.app || !this.particleContainer) return;

    this.isRunning = true;
    
    // 创建初始粒子
    for (let i = 0; i < 30; i++) {
      this.createSakuraPetal();
    }

    // 更新循环
    this.app.ticker.add(this.updateSakura, this);

    // 定期添加新粒子
    setInterval(() => {
      if (this.isRunning && this.sakuraParticles.length < 50) {
        this.createSakuraPetal();
      }
    }, 500);
  }

  /**
   * 停止樱花特效
   */
  public stopSakuraEffect(): void {
    if (!this.app) return;
    
    this.isRunning = false;
    this.app.ticker.remove(this.updateSakura, this);
    
    // 清除所有粒子
    for (const particle of this.sakuraParticles) {
      particle.graphics.destroy();
    }
    this.sakuraParticles = [];
  }

  /**
   * 创建樱花花瓣
   */
  private createSakuraPetal(): void {
    if (!this.particleContainer) return;

    const graphics = new Graphics();
    
    // 绘制花瓣形状
    const size = 8 + Math.random() * 8;
    graphics.ellipse(0, 0, size, size / 2);
    graphics.fill({ color: 0xffb7c5, alpha: 0.7 + Math.random() * 0.3 });

    const particle: Particle = {
      x: Math.random() * window.innerWidth,
      y: -20,
      vx: (Math.random() - 0.5) * 2,
      vy: 1 + Math.random() * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1,
      size,
      alpha: 0.7 + Math.random() * 0.3,
      graphics,
    };

    this.particleContainer.addChild(graphics);
    this.sakuraParticles.push(particle);
  }

  /**
   * 更新樱花粒子
   */
  private updateSakura = (ticker: Ticker): void => {
    const deltaTime = ticker.deltaMS / 1000;

    for (let i = this.sakuraParticles.length - 1; i >= 0; i--) {
      const p = this.sakuraParticles[i];

      // 更新位置
      p.x += p.vx + Math.sin(Date.now() / 1000 + i) * 0.5;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;

      // 应用到图形
      p.graphics.x = p.x;
      p.graphics.y = p.y;
      p.graphics.rotation = p.rotation;

      // 移除超出屏幕的粒子
      if (p.y > window.innerHeight + 50 || p.x < -50 || p.x > window.innerWidth + 50) {
        p.graphics.destroy();
        this.sakuraParticles.splice(i, 1);
      }
    }
  };

  /**
   * 播放心形粒子特效（羁绊值提升时）
   */
  public playHeartEffect(x: number, y: number, count: number = 10): void {
    if (!this.particleContainer) return;

    for (let i = 0; i < count; i++) {
      const graphics = new Graphics();
      
      // 绘制心形
      const size = 6 + Math.random() * 6;
      this.drawHeart(graphics, size, 0xf4258c);

      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const speed = 100 + Math.random() * 100;

      const particle: Particle = {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 50,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        size,
        alpha: 1,
        graphics,
      };

      this.particleContainer.addChild(graphics);
      this.heartParticles.push(particle);
    }

    // 更新心形粒子
    const updateHearts = (ticker: Ticker) => {
      const deltaTime = ticker.deltaMS / 1000;

      for (let i = this.heartParticles.length - 1; i >= 0; i--) {
        const p = this.heartParticles[i];

        p.x += p.vx * deltaTime;
        p.y += p.vy * deltaTime;
        p.vy += 200 * deltaTime; // 重力
        p.alpha -= deltaTime * 0.8;
        p.rotation += p.rotationSpeed;

        p.graphics.x = p.x;
        p.graphics.y = p.y;
        p.graphics.alpha = p.alpha;
        p.graphics.rotation = p.rotation;

        if (p.alpha <= 0) {
          p.graphics.destroy();
          this.heartParticles.splice(i, 1);
        }
      }

      if (this.heartParticles.length === 0 && this.app) {
        this.app.ticker.remove(updateHearts);
      }
    };

    if (this.app) {
      this.app.ticker.add(updateHearts);
    }
  }

  /**
   * 绘制心形
   */
  private drawHeart(graphics: Graphics, size: number, color: number): void {
    graphics.moveTo(0, -size * 0.3);
    graphics.bezierCurveTo(
      size * 0.5, -size,
      size, -size * 0.3,
      0, size * 0.7
    );
    graphics.bezierCurveTo(
      -size, -size * 0.3,
      -size * 0.5, -size,
      0, -size * 0.3
    );
    graphics.fill({ color, alpha: 0.8 });
  }

  /**
   * 播放闪光特效
   */
  public playSparkleEffect(x: number, y: number): void {
    if (!this.particleContainer) return;

    for (let i = 0; i < 8; i++) {
      const graphics = new Graphics();
      
      // 绘制星形
      const size = 4 + Math.random() * 4;
      graphics.star(0, 0, 4, size, size / 2, Math.random() * Math.PI);
      graphics.fill({ color: 0xffd700, alpha: 1 });

      const angle = (Math.PI * 2 * i) / 8;
      const speed = 50 + Math.random() * 50;

      graphics.x = x;
      graphics.y = y;
      
      this.particleContainer.addChild(graphics);

      // 动画
      const startTime = Date.now();
      const duration = 500 + Math.random() * 300;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        if (progress >= 1) {
          graphics.destroy();
          return;
        }

        graphics.x = x + Math.cos(angle) * speed * progress;
        graphics.y = y + Math.sin(angle) * speed * progress;
        graphics.alpha = 1 - progress;
        graphics.scale.set(1 - progress * 0.5);

        requestAnimationFrame(animate);
      };

      animate();
    }
  }

  /**
   * 屏幕闪白效果
   */
  public flashScreen(duration: number = 300): void {
    const flashDiv = document.createElement('div');
    flashDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      pointer-events: none;
      z-index: 1000;
      opacity: 0.8;
      transition: opacity ${duration}ms ease;
    `;
    
    document.body.appendChild(flashDiv);
    
    requestAnimationFrame(() => {
      flashDiv.style.opacity = '0';
      setTimeout(() => {
        flashDiv.remove();
      }, duration);
    });
  }

  /**
   * 销毁特效系统
   */
  public destroy(): void {
    this.stopSakuraEffect();
    
    if (this.app) {
      this.app.destroy(true);
      this.app = null;
    }
  }
}
