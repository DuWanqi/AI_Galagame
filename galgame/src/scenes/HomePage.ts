/**
 * 主页/落地页
 * 基于 stitch 的 galgame_home_landing_page 样式
 */

import type { GameManager } from '../core/GameManager';
import { getAllCharacters, CHARACTER_SPRITES } from '../data/characters';

export function renderHomePage(container: HTMLElement, gameManager: GameManager): void {
  const characters = getAllCharacters();
  
  container.innerHTML = `
    <div class="relative flex min-h-screen w-full flex-col bg-background-light font-display overflow-x-hidden text-text-main">
      <!-- Decorative Background Blobs -->
      <div class="floating-blob w-96 h-96 bg-pink-200/50 top-[-100px] left-[-100px]"></div>
      <div class="floating-blob w-[500px] h-[500px] bg-blue-100/40 bottom-0 right-[-100px]"></div>
      <div class="floating-blob w-64 h-64 bg-primary/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <!-- Layout Container -->
      <div class="layout-container flex h-full grow flex-col relative z-10">
        <!-- Navbar -->
        <div class="flex justify-center w-full px-4 pt-4 sticky top-0 z-50">
          <header class="glass-card flex items-center justify-between whitespace-nowrap rounded-full px-6 py-3 w-full max-w-[1080px] shadow-sm">
            <div class="flex items-center gap-3 text-text-main">
              <div class="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">favorite</span>
              </div>
              <h2 class="text-lg font-extrabold leading-tight tracking-tight text-primary">星见告白</h2>
            </div>
            <!-- Desktop Nav -->
            <div class="hidden md:flex flex-1 justify-center gap-8">
              <a class="text-sm font-bold hover:text-primary transition-colors cursor-pointer" id="nav-home">首页</a>
              <a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 cursor-pointer" id="nav-characters">角色</a>
              <a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 cursor-pointer" id="nav-gallery">图鉴</a>
              <a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 cursor-pointer" id="nav-settings">设置</a>
              <a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 cursor-pointer flex items-center gap-1" id="nav-tutorial">
                <span class="material-symbols-outlined text-[16px]">school</span>
                教程
              </a>
            </div>
            <div class="flex items-center gap-4">
              <button id="btn-start-game" class="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary hover:bg-pink-600 text-white text-sm font-bold shadow-lg shadow-pink-200 transition-all hover:scale-105 active:scale-95">
                <span class="material-symbols-outlined mr-2 text-[18px]">play_arrow</span>
                <span class="truncate">开始游戏</span>
              </button>
            </div>
          </header>
        </div>
        
        <main class="flex-1 flex flex-col items-center w-full">
          <!-- Hero Section -->
          <div class="w-full max-w-[1200px] px-4 md:px-8 py-10 lg:py-20">
            <div class="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
              <!-- Left: Content -->
              <div class="flex flex-col gap-8 flex-1 items-center lg:items-start text-center lg:text-left z-20">
                <!-- Tag -->
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-pink-200 shadow-sm">
                  <span class="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                  <span class="text-xs font-bold text-primary uppercase tracking-wider">AI增强版 · 纯爱向</span>
                </div>
                <div class="flex flex-col gap-4">
                  <h1 class="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900">
                    星见告白<br/>
                    <span class="text-primary inline-block transform hover:rotate-3 transition-transform">与她的专属羁绊</span>
                  </h1>
                  <p class="text-base md:text-lg text-gray-600 max-w-[500px] leading-relaxed">
                    在校园与都市的交织中，与三位性格迥异的二次元女生相遇。每一次选择都会影响你们的情感羁绊，最终解锁专属的恋爱结局。
                  </p>
                </div>
                <div class="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
                  <button id="btn-new-game" class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-pink-600 text-white text-base font-bold shadow-xl shadow-pink-300/50 transition-all hover:-translate-y-1">
                    <span class="material-symbols-outlined mr-2">favorite</span>
                    <span>新的邂逅</span>
                  </button>
                  <button id="btn-continue" class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-white hover:bg-gray-50 text-gray-900 border-2 border-pink-100 text-base font-bold shadow-sm transition-all hover:-translate-y-1">
                    <span class="material-symbols-outlined mr-2 text-primary">history</span>
                    <span>继续游戏</span>
                  </button>
                  <button id="btn-date" class="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-14 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-bold shadow-lg shadow-purple-200/50 transition-all hover:-translate-y-1 hover:shadow-xl">
                    <span class="material-symbols-outlined mr-2">local_cafe</span>
                    <span>约会</span>
                  </button>
                </div>
                <!-- Features Icons -->
                <div class="flex items-center gap-6 mt-4 opacity-70 hover:opacity-100 transition-all">
                  <div class="flex flex-col items-center gap-1">
                    <span class="material-symbols-outlined text-primary">psychology</span>
                    <span class="text-[10px] font-bold uppercase">AI对话</span>
                  </div>
                  <div class="flex flex-col items-center gap-1">
                    <span class="material-symbols-outlined text-primary">route</span>
                    <span class="text-[10px] font-bold uppercase">多分支</span>
                  </div>
                  <div class="flex flex-col items-center gap-1">
                    <span class="material-symbols-outlined text-primary">auto_awesome</span>
                    <span class="text-[10px] font-bold uppercase">立绘切换</span>
                  </div>
                  <div class="flex flex-col items-center gap-1">
                    <span class="material-symbols-outlined text-primary">favorite</span>
                    <span class="text-[10px] font-bold uppercase">羁绊系统</span>
                  </div>
                </div>
              </div>
              <!-- Right: Hero Image (Character) -->
              <div class="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-pink-200 to-blue-100 rounded-[3rem] rotate-3 transform scale-90 -z-10 opacity-60"></div>
                <div class="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] max-w-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-pink-100 border-4 border-white">
                  <img alt="苏晚晴" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    src="${CHARACTER_SPRITES.su_wanqing.familiar}"/>
                  <!-- Floating UI Element -->
                  <div class="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center gap-3 animate-float">
                    <div class="h-2 w-2 rounded-full bg-green-500"></div>
                    <p class="text-sm font-bold text-gray-800">苏晚晴正在图书馆等你...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Features Section -->
          <div class="w-full bg-white/50 py-16 backdrop-blur-sm">
            <div class="w-full max-w-[1080px] px-4 mx-auto flex flex-col gap-10">
              <div class="text-center flex flex-col gap-2 items-center">
                <span class="text-primary font-bold tracking-widest text-sm uppercase">游戏特色</span>
                <h2 class="text-3xl md:text-4xl font-black text-gray-900">为什么选择这款游戏？</h2>
                <div class="h-1 w-20 bg-primary rounded-full mt-2"></div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Feature 1 -->
                <div class="flex flex-col items-center text-center gap-4 rounded-3xl border border-pink-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow group">
                  <div class="h-16 w-16 rounded-2xl bg-pink-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-[32px]">psychology</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h3 class="text-xl font-bold text-gray-900">AI增强对话</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">
                      基于Google AI Studio的个性化对话，每位角色都能记住你的互动，给出独特回应。
                    </p>
                  </div>
                </div>
                <!-- Feature 2 -->
                <div class="flex flex-col items-center text-center gap-4 rounded-3xl border border-pink-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow group">
                  <div class="h-16 w-16 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-[32px]">auto_awesome</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h3 class="text-xl font-bold text-gray-900">情感立绘切换</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">
                      5种情感状态对应不同立绘，羁绊值变化时立绘自动切换，沉浸感拉满。
                    </p>
                  </div>
                </div>
                <!-- Feature 3 -->
                <div class="flex flex-col items-center text-center gap-4 rounded-3xl border border-pink-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow group">
                  <div class="h-16 w-16 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span class="material-symbols-outlined text-[32px]">favorite</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <h3 class="text-xl font-bold text-gray-900">多结局分支</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">
                      每位女主角都有3种结局，你的每一个选择都会影响最终走向。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Character Carousel Section -->
          <div class="w-full max-w-[1200px] px-4 py-16 flex flex-col gap-8">
            <div class="flex justify-between items-end px-4">
              <div class="flex flex-col gap-2">
                <h2 class="text-3xl md:text-4xl font-black text-gray-900">可攻略角色</h2>
                <p class="text-gray-500">选择你想要邂逅的女孩</p>
              </div>
            </div>
            <!-- Cards -->
            <div class="flex overflow-x-auto no-scrollbar gap-6 px-4 pb-10 snap-x snap-mandatory">
              ${characters.map(char => `
                <div class="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer character-card" data-character="${char.id}">
                  <div class="relative h-[420px] w-full rounded-[2rem] overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <div class="absolute bottom-0 left-0 p-6 z-20">
                      <div class="bg-primary text-white text-xs font-bold px-2 py-1 rounded-md inline-block mb-2">${char.role}</div>
                      <h3 class="text-2xl font-bold text-white">${char.name}</h3>
                      <p class="text-pink-100 text-sm mt-1">"${char.keywords.join(' · ')}"</p>
                    </div>
                    <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                      style="background-image: url('${CHARACTER_SPRITES[char.id].familiar}');"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </main>
        
        <!-- Footer -->
        <footer class="w-full bg-white py-8 border-t border-gray-100 z-20">
          <div class="max-w-[1080px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div class="flex items-center gap-2 opacity-50">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
              <span class="text-xs font-medium">© 2026 星见告白 · 与她的专属羁绊</span>
            </div>
            <div class="flex gap-6">
              <a class="text-xs font-medium text-gray-500 hover:text-primary cursor-pointer" id="link-settings">设置</a>
              <a class="text-xs font-medium text-gray-500 hover:text-primary cursor-pointer" id="link-save">存档</a>
            </div>
          </div>
        </footer>
      </div>
      
      <!-- Name Input Modal -->
      <div id="name-modal" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/50 backdrop-blur-sm">
        <div class="glass-card rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl">
          <h3 class="text-2xl font-bold text-gray-900 mb-4 text-center">请输入你的名字</h3>
          <input type="text" id="player-name-input" placeholder="你的名字" 
            class="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-primary focus:outline-none text-center text-lg mb-4"/>
          <div class="flex gap-4">
            <button id="btn-cancel-name" class="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors">
              取消
            </button>
            <button id="btn-confirm-name" class="flex-1 py-3 rounded-xl bg-primary text-white font-bold hover:bg-pink-600 transition-colors">
              确定
            </button>
          </div>
        </div>
      </div>
      
      <!-- Tutorial Modal -->
      <div id="tutorial-modal" class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/60 backdrop-blur-sm">
        <div class="glass-card rounded-3xl p-0 max-w-lg w-full mx-4 shadow-2xl overflow-hidden animate-fade-in">
          <!-- Header -->
          <div class="bg-gradient-to-r from-primary to-pink-400 px-6 py-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-white text-2xl">school</span>
              <h3 class="text-xl font-bold text-white">新手教程</h3>
            </div>
            <button id="btn-close-tutorial" class="text-white/80 hover:text-white transition-colors">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <!-- Scrollable Content -->
          <div class="p-6 max-h-[60vh] overflow-y-auto space-y-6 text-gray-700">
            <!-- Welcome -->
            <div class="text-center pb-4 border-b border-gray-100">
              <h4 class="text-lg font-bold text-gray-900 mb-2">欢迎来到「星见告白」！</h4>
              <p class="text-sm text-gray-500">这是一款融合了AI技术的恋爱模拟游戏</p>
            </div>
            
            <!-- 苏晚晴 -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-blue-500">menu_book</span>
              </div>
              <div>
                <h5 class="font-bold text-gray-900 mb-1">📖 苏晚晴的故事</h5>
                <p class="text-sm leading-relaxed">
                  晚晴的剧情是<span class="text-primary font-bold">作者精心编写</span>的完整故事线，包含多分支和多结局。
                  每章结尾有<span class="text-primary font-bold">AI开放式对话</span>环节，你可以和她自由聊天，增进好感度！
                </p>
              </div>
            </div>
            
            <!-- 夏栀 -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-pink-500">auto_awesome</span>
              </div>
              <div>
                <h5 class="font-bold text-gray-900 mb-1">✨ 夏栀的故事</h5>
                <p class="text-sm leading-relaxed">
                  夏栀的第一章是预设剧情，但<span class="text-primary font-bold">第二章开始完全由AI实时生成</span>！
                  对话内容、选项、甚至剧情走向都会根据你的好感度和之前的互动动态变化。每次游玩都是独一无二的体验！
                </p>
              </div>
            </div>
            
            <!-- 降级模式 -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-gray-500">settings</span>
              </div>
              <div>
                <h5 class="font-bold text-gray-900 mb-1">⚙️ 无AI模式</h5>
                <p class="text-sm leading-relaxed">
                  没有配置API Key？没关系！游戏会自动使用<span class="font-bold">预设对话内容</span>，
                  确保你可以完整体验所有剧情。前往<span class="text-primary font-bold">设置</span>页面开启AI增强功能。
                </p>
              </div>
            </div>
            
            <!-- 约会模式 -->
            <div class="flex gap-4 items-start">
              <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-purple-500">local_cafe</span>
              </div>
              <div>
                <h5 class="font-bold text-gray-900 mb-1">💜 约会模式</h5>
                <p class="text-sm leading-relaxed">
                  想要更多互动？点击首页的<span class="text-purple-500 font-bold">「约会」</span>按钮，
                  可以带角色去不同的地点约会！咖啡厅、图书馆、公园……随着好感度提升，还会解锁更多约会地点哦！
                </p>
              </div>
            </div>
            
            <!-- Tips -->
            <div class="bg-pink-50 rounded-xl p-4 border border-pink-100">
              <h5 class="font-bold text-primary mb-2 flex items-center gap-2">
                <span class="material-symbols-outlined text-sm">lightbulb</span>
                小提示
              </h5>
              <ul class="text-sm space-y-1 text-gray-600">
                <li>• 好感度会影响角色立绘和对话态度</li>
                <li>• 记得经常存档，探索不同的选择</li>
                <li>• 每位角色都有隐藏结局等你发现</li>
              </ul>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <label class="flex items-center gap-2 cursor-pointer text-sm text-gray-500">
              <input type="checkbox" id="tutorial-dont-show" class="rounded border-gray-300 text-primary focus:ring-primary">
              <span>下次不再显示</span>
            </label>
            <button id="btn-start-tutorial" class="px-6 py-2 rounded-full bg-primary text-white font-bold hover:bg-pink-600 transition-colors">
              开始游戏
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event Listeners
  const newGameBtn = container.querySelector('#btn-new-game');
  const startGameBtn = container.querySelector('#btn-start-game');
  const continueBtn = container.querySelector('#btn-continue');
  const nameModal = container.querySelector('#name-modal') as HTMLElement;
  const nameInput = container.querySelector('#player-name-input') as HTMLInputElement;
  const confirmNameBtn = container.querySelector('#btn-confirm-name');
  const cancelNameBtn = container.querySelector('#btn-cancel-name');
  const navCharacters = container.querySelector('#nav-characters');
  const navSettings = container.querySelector('#nav-settings');
  const navTutorial = container.querySelector('#nav-tutorial');
  const linkSettings = container.querySelector('#link-settings');
  const linkSave = container.querySelector('#link-save');
  
  // Tutorial Modal Elements
  const tutorialModal = container.querySelector('#tutorial-modal') as HTMLElement;
  const closeTutorialBtn = container.querySelector('#btn-close-tutorial');
  const startTutorialBtn = container.querySelector('#btn-start-tutorial');
  const dontShowCheckbox = container.querySelector('#tutorial-dont-show') as HTMLInputElement;
  
  // Tutorial Modal Functions
  const TUTORIAL_SHOWN_KEY = 'galgame_tutorial_shown';
  
  const showTutorial = () => {
    tutorialModal.classList.remove('hidden');
    tutorialModal.classList.add('flex');
  };
  
  const hideTutorial = () => {
    tutorialModal.classList.add('hidden');
    tutorialModal.classList.remove('flex');
    if (dontShowCheckbox?.checked) {
      localStorage.setItem(TUTORIAL_SHOWN_KEY, 'true');
    }
  };
  
  // Check if tutorial should be shown on first load
  const shouldShowTutorial = !localStorage.getItem(TUTORIAL_SHOWN_KEY);
  if (shouldShowTutorial) {
    // Delay slightly for smooth animation
    setTimeout(() => showTutorial(), 500);
  }
  
  // Tutorial event listeners
  closeTutorialBtn?.addEventListener('click', hideTutorial);
  startTutorialBtn?.addEventListener('click', hideTutorial);
  navTutorial?.addEventListener('click', () => {
    dontShowCheckbox.checked = false; // Reset checkbox when manually opening
    showTutorial();
  });

  const showNameModal = () => {
    nameModal.classList.remove('hidden');
    nameModal.classList.add('flex');
    nameInput.focus();
  };

  const hideNameModal = () => {
    nameModal.classList.add('hidden');
    nameModal.classList.remove('flex');
  };

  newGameBtn?.addEventListener('click', showNameModal);
  startGameBtn?.addEventListener('click', showNameModal);

  confirmNameBtn?.addEventListener('click', () => {
    const name = nameInput.value.trim() || '玩家';
    gameManager.startNewGame(name);
    hideNameModal();
  });

  cancelNameBtn?.addEventListener('click', hideNameModal);

  nameInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      confirmNameBtn?.dispatchEvent(new Event('click'));
    }
  });

  continueBtn?.addEventListener('click', () => {
    gameManager.continueGame();
  });

  // Date button
  container.querySelector('#btn-date')?.addEventListener('click', () => {
    gameManager.showScene('date');
  });

  navCharacters?.addEventListener('click', () => {
    gameManager.showScene('character_select');
  });

  navSettings?.addEventListener('click', () => {
    gameManager.showScene('settings');
  });

  linkSettings?.addEventListener('click', () => {
    gameManager.showScene('settings');
  });

  linkSave?.addEventListener('click', () => {
    gameManager.showScene('save_load');
  });

  // Character card clicks
  container.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
      showNameModal();
    });
  });
}
