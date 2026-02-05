/**
 * 角色选择页面
 * 基于 stitch 的 character_introduction_page 样式
 */

import type { GameManager } from '../core/GameManager';
import type { CharacterId } from '../types';
import { getAllCharacters, getCharacter, CHARACTER_SPRITES, getCharacterColor } from '../data/characters';

export function renderCharacterSelectPage(container: HTMLElement, gameManager: GameManager): void {
  const characters = getAllCharacters();
  const firstChar = characters[0];

  container.innerHTML = `
    <div class="bg-background-light font-display text-text-main overflow-x-hidden overflow-y-auto min-h-screen">
      <!-- Background Pattern -->
      <div class="fixed inset-0 pointer-events-none z-0 bg-stripe-pattern opacity-100"></div>
      
      <div class="relative flex flex-col min-h-screen w-full z-10">
        <!-- Navigation -->
        <header class="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-pink-100 px-6 py-4 transition-all duration-300">
          <div class="max-w-7xl mx-auto flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center gap-3 group cursor-pointer" id="btn-back-home">
              <div class="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                <span class="material-symbols-outlined text-2xl">arrow_back</span>
              </div>
              <div>
                <h1 class="text-xl font-extrabold tracking-tight text-text-main leading-none">返回</h1>
                <p class="text-xs font-bold text-primary tracking-widest uppercase">主页</p>
              </div>
            </div>
            
            <!-- Title -->
            <div class="hidden md:flex items-center gap-2">
              <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
              <span class="text-lg font-bold text-primary">选择你的邂逅对象</span>
            </div>
            
            <!-- Player Name -->
            <div class="flex items-center gap-2 bg-white/50 px-4 py-2 rounded-full border border-pink-100">
              <span class="material-symbols-outlined text-primary">person</span>
              <span class="text-sm font-bold">${gameManager.getPlayerName()}</span>
            </div>
          </div>
        </header>
        
        <!-- Main Content -->
        <main class="flex-grow container mx-auto px-4 py-8 lg:px-8 max-w-7xl">
          <!-- Page Heading -->
          <div class="flex flex-col items-center text-center mb-12">
            <span class="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">角色选择</span>
            <h2 class="text-4xl md:text-5xl font-black text-text-main tracking-tight mb-4">
              选择你的 <span class="text-primary relative inline-block">命运</span>
            </h2>
            <p class="text-text-muted max-w-xl text-lg">点击角色卡片，开始与她的专属故事</p>
          </div>
          
          <!-- Character Showcase Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <!-- Left Column: Visual Stage (Sprite) -->
            <div class="lg:col-span-5 relative order-2 lg:order-1">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 via-pink-200/20 to-blue-200/20 rounded-full blur-3xl -z-10"></div>
              <div class="relative z-10 flex flex-col items-center">
                <div class="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/5] max-h-[800px]">
                  <img id="character-sprite" alt="角色立绘" 
                    class="w-full h-full object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-in-out" 
                    src="${CHARACTER_SPRITES[firstChar.id].familiar}"/>
                  <div class="absolute -top-4 -right-4 size-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce duration-[3000ms]">
                    <span class="material-symbols-outlined text-3xl text-primary">auto_awesome</span>
                  </div>
                  <div class="absolute bottom-12 -left-4 size-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce delay-700">
                    <span class="material-symbols-outlined text-2xl text-pink-400" style="font-variation-settings: 'FILL' 1;">favorite</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right Column: Info & Selection -->
            <div class="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
              <!-- Detail Card -->
              <div class="bg-white backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 relative overflow-hidden group">
                <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-300 via-primary to-pink-300"></div>
                
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <div class="flex items-center gap-3 mb-1">
                      <h3 id="character-name" class="text-4xl font-black text-text-main tracking-tight">${firstChar.name}</h3>
                    </div>
                    <p id="character-role" class="text-lg font-medium text-text-muted flex items-center gap-2">
                      <span class="material-symbols-outlined text-base">school</span>
                      ${firstChar.role}
                    </p>
                  </div>
                  <!-- Start Button -->
                  <button id="btn-start-story" class="flex items-center gap-3 bg-primary hover:bg-pink-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-pink-200 hover:shadow-xl" data-character="${firstChar.id}">
                    <span class="material-symbols-outlined text-lg">play_arrow</span>
                    <span class="text-sm font-bold pr-1">开始故事</span>
                  </button>
                </div>
                
                <!-- Bio -->
                <div class="relative bg-background-light p-6 rounded-lg border border-pink-100 mb-8">
                  <span class="material-symbols-outlined absolute -top-3 -left-2 text-4xl text-primary/20 rotate-12">format_quote</span>
                  <p id="character-personality" class="text-text-main leading-relaxed relative z-10">
                    ${firstChar.personality}
                  </p>
                </div>
                
                <!-- Stats Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                  <div class="flex flex-col p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                    <span class="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">年龄</span>
                    <span id="character-age" class="text-lg font-bold text-text-main">${firstChar.age}岁</span>
                  </div>
                  <div class="flex flex-col p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                    <span class="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">喜好</span>
                    <span id="character-likes" class="text-lg font-bold text-text-main">${firstChar.likes[0]}</span>
                  </div>
                  <div class="flex flex-col p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                    <span class="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">关键词</span>
                    <span id="character-keyword" class="text-lg font-bold text-text-main">${firstChar.keywords[0]}</span>
                  </div>
                  <div class="flex flex-col p-3 rounded-lg bg-white shadow-sm border border-gray-100">
                    <span class="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">声优</span>
                    <span id="character-va" class="text-lg font-bold text-text-main">${firstChar.voiceActor || '未公开'}</span>
                  </div>
                </div>
              </div>
              
              <!-- Character Selector -->
              <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between px-2">
                  <h4 class="text-xl font-bold text-text-main">选择角色</h4>
                  <div class="h-[1px] flex-1 bg-pink-200 ml-4"></div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                  ${characters.map((char, index) => `
                    <button class="character-select-btn group relative aspect-square rounded-2xl p-2 cursor-pointer transition-all hover:-translate-y-1 hover:bg-pink-50 ${index === 0 ? 'ring-2 ring-primary ring-offset-2' : ''}" data-character="${char.id}">
                      <img alt="${char.name}" class="w-full h-full object-cover rounded-xl border-2 ${index === 0 ? 'border-primary' : 'border-transparent group-hover:border-primary/50'}" 
                        src="${CHARACTER_SPRITES[char.id].familiar}"/>
                      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-xl p-2">
                        <span class="text-white text-sm font-bold">${char.name}</span>
                      </div>
                      ${index === 0 ? `
                        <div class="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                          已选择
                        </div>
                      ` : ''}
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <!-- Footer -->
        <footer class="bg-white border-t border-pink-100 py-8">
          <div class="container mx-auto px-4 text-center">
            <p class="text-sm text-text-muted">选择一位角色，开始你们的专属故事</p>
          </div>
        </footer>
      </div>
    </div>
  `;

  // State
  let selectedCharacter: CharacterId = firstChar.id;

  // Elements
  const spriteImg = container.querySelector('#character-sprite') as HTMLImageElement;
  const nameEl = container.querySelector('#character-name') as HTMLElement;
  const roleEl = container.querySelector('#character-role') as HTMLElement;
  const personalityEl = container.querySelector('#character-personality') as HTMLElement;
  const ageEl = container.querySelector('#character-age') as HTMLElement;
  const likesEl = container.querySelector('#character-likes') as HTMLElement;
  const keywordEl = container.querySelector('#character-keyword') as HTMLElement;
  const vaEl = container.querySelector('#character-va') as HTMLElement;
  const startBtn = container.querySelector('#btn-start-story') as HTMLButtonElement;
  const backBtn = container.querySelector('#btn-back-home');

  // Update character info
  const updateCharacterInfo = (charId: CharacterId) => {
    const char = getCharacter(charId);
    selectedCharacter = charId;

    spriteImg.src = CHARACTER_SPRITES[charId].familiar;
    nameEl.textContent = char.name;
    roleEl.innerHTML = `<span class="material-symbols-outlined text-base">school</span> ${char.role}`;
    personalityEl.textContent = char.personality;
    ageEl.textContent = `${char.age}岁`;
    likesEl.textContent = char.likes[0];
    keywordEl.textContent = char.keywords[0];
    vaEl.textContent = char.voiceActor || '未公开';
    startBtn.dataset.character = charId;

    // Update selection state
    container.querySelectorAll('.character-select-btn').forEach(btn => {
      const isSelected = btn.getAttribute('data-character') === charId;
      btn.classList.toggle('ring-2', isSelected);
      btn.classList.toggle('ring-primary', isSelected);
      btn.classList.toggle('ring-offset-2', isSelected);
      
      const indicator = btn.querySelector('.absolute.-top-2');
      if (indicator) indicator.remove();
      
      if (isSelected) {
        const newIndicator = document.createElement('div');
        newIndicator.className = 'absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm';
        newIndicator.textContent = '已选择';
        btn.appendChild(newIndicator);
      }

      const img = btn.querySelector('img');
      if (img) {
        img.classList.toggle('border-primary', isSelected);
        img.classList.toggle('border-transparent', !isSelected);
      }
    });
  };

  // Event Listeners
  container.querySelectorAll('.character-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const charId = btn.getAttribute('data-character') as CharacterId;
      updateCharacterInfo(charId);
    });
  });

  startBtn?.addEventListener('click', () => {
    const charId = startBtn.dataset.character as CharacterId;
    gameManager.selectCharacter(charId);
  });

  backBtn?.addEventListener('click', () => {
    gameManager.showScene('home');
  });
}
