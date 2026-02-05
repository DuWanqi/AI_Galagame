/**
 * 约会模式场景
 * 独立的约会模式，可以自由选择角色和地点进行对话
 */

import type { GameManager } from '../core/GameManager';
import type { CharacterId, DateLocation, DateLocationConfig } from '../types';
import { getCharacter, getAllCharacters, CHARACTER_SPRITES, BACKGROUNDS } from '../data/characters';
import { getAIService } from '../services/AIService';
import { EffectsManager } from '../effects/EffectsManager';

// 约会地点配置
const DATE_LOCATIONS: DateLocationConfig[] = [
  {
    id: 'cafe',
    name: '咖啡厅',
    icon: 'local_cafe',
    background: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920',
    description: '安静的咖啡厅，适合悠闲地聊天',
  },
  {
    id: 'park',
    name: '公园',
    icon: 'park',
    background: 'https://images.unsplash.com/photo-1585938389612-a552a28d6914?w=1920',
    description: '阳光明媚的公园，绿树成荫',
  },
  {
    id: 'library',
    name: '图书馆',
    icon: 'menu_book',
    background: BACKGROUNDS.library,
    description: '安静的图书馆，书香四溢',
    unlockCondition: { characterId: 'su_wanqing', minAffection: 20 },
  },
  {
    id: 'rooftop',
    name: '天台',
    icon: 'roofing',
    background: BACKGROUNDS.rooftop,
    description: '学校天台，可以俯瞰整个校园',
    unlockCondition: { characterId: 'su_wanqing', minAffection: 40 },
  },
  {
    id: 'artRoom',
    name: '美术室',
    icon: 'palette',
    background: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920',
    description: '安静的美术室，充满艺术气息',
    unlockCondition: { characterId: 'lin_zhiyu', minAffection: 30 },
  },
  {
    id: 'arcade',
    name: '游戏厅',
    icon: 'sports_esports',
    background: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920',
    description: '热闹的游戏厅，充满欢声笑语',
    unlockCondition: { characterId: 'xia_zhi', minAffection: 20 },
  },
];

export function renderDateScene(container: HTMLElement, gameManager: GameManager): void {
  const affectionSystem = gameManager.getAffectionSystem();
  const characters = getAllCharacters();

  container.innerHTML = `
    <div class="bg-background-light font-display min-h-screen overflow-y-auto">
      <!-- Header -->
      <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button id="btn-back" class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <span class="material-symbols-outlined">arrow_back</span>
            <span class="font-bold">返回</span>
          </button>
          <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">local_cafe</span>
            约会模式
          </h1>
          <div class="w-20"></div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="max-w-6xl mx-auto px-6 py-8">
        <!-- Selection Phase -->
        <div id="selection-phase">
          <!-- Character Selection -->
          <section class="mb-10">
            <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">person</span>
              选择约会对象
            </h2>
            <div id="character-cards" class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Character cards will be rendered here -->
            </div>
          </section>

          <!-- Location Selection -->
          <section class="mb-10">
            <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">location_on</span>
              选择约会地点
            </h2>
            <div id="location-cards" class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <!-- Location cards will be rendered here -->
            </div>
          </section>

          <!-- Start Button -->
          <div class="flex justify-center">
            <button id="btn-start-date" class="px-10 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-pink-200 hover:bg-pink-600 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-3" disabled>
              <span class="material-symbols-outlined">favorite</span>
              开始约会
            </button>
          </div>
        </div>

        <!-- Dating Phase (hidden initially) -->
        <div id="dating-phase" class="hidden">
          <div class="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
            <!-- Background -->
            <div id="date-background" class="absolute inset-0 bg-cover bg-center" style="filter: blur(2px);">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 min-h-[600px] flex flex-col">
              <!-- Header Info -->
              <div class="p-6 flex justify-between items-start">
                <div class="glass-panel px-4 py-2 rounded-full flex items-center gap-2">
                  <span id="date-location-icon" class="material-symbols-outlined text-primary"></span>
                  <span id="date-location-name" class="text-sm font-bold text-gray-700"></span>
                </div>
                <div class="glass-panel px-4 py-2 rounded-full flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
                  <span id="date-affection" class="text-sm font-bold text-primary">0</span>
                </div>
              </div>

              <!-- Character Sprite -->
              <div class="flex-1 flex items-end justify-center relative">
                <img id="date-character-sprite" class="h-[400px] object-contain drop-shadow-2xl" />
              </div>

              <!-- Dialog Area -->
              <div class="p-6">
                <div class="glass-panel rounded-2xl p-6 mb-4">
                  <div id="date-speaker" class="text-primary font-bold mb-2"></div>
                  <p id="date-dialog-text" class="text-gray-800 text-lg leading-relaxed"></p>
                </div>

                <!-- Chat Input -->
                <div class="glass-panel rounded-2xl p-4">
                  <div class="flex gap-3">
                    <input
                      type="text"
                      id="date-chat-input"
                      placeholder="和她说点什么吧..."
                      class="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-800"
                    />
                    <button id="date-chat-send" class="px-6 py-3 rounded-xl bg-primary text-white font-bold flex items-center gap-2 hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200">
                      <span class="material-symbols-outlined text-[18px]">send</span>
                      发送
                    </button>
                  </div>
                  <div class="flex justify-between items-center mt-3 text-sm">
                    <span id="date-rounds" class="text-gray-500"></span>
                    <button id="btn-end-date" class="text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                      <span class="material-symbols-outlined text-[16px]">logout</span>
                      结束约会
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;

  // State
  let selectedCharacter: CharacterId | null = null;
  let selectedLocation: DateLocationConfig | null = null;
  let dateRound = 0;
  const maxDateRounds = 10;

  // Elements
  const characterCards = container.querySelector('#character-cards') as HTMLElement;
  const locationCards = container.querySelector('#location-cards') as HTMLElement;
  const btnStartDate = container.querySelector('#btn-start-date') as HTMLButtonElement;
  const selectionPhase = container.querySelector('#selection-phase') as HTMLElement;
  const datingPhase = container.querySelector('#dating-phase') as HTMLElement;
  const dateBackground = container.querySelector('#date-background') as HTMLElement;
  const dateCharacterSprite = container.querySelector('#date-character-sprite') as HTMLImageElement;
  const dateSpeaker = container.querySelector('#date-speaker') as HTMLElement;
  const dateDialogText = container.querySelector('#date-dialog-text') as HTMLElement;
  const dateChatInput = container.querySelector('#date-chat-input') as HTMLInputElement;
  const dateChatSend = container.querySelector('#date-chat-send') as HTMLButtonElement;
  const dateRoundsEl = container.querySelector('#date-rounds') as HTMLElement;
  const dateAffection = container.querySelector('#date-affection') as HTMLElement;
  const dateLocationIcon = container.querySelector('#date-location-icon') as HTMLElement;
  const dateLocationName = container.querySelector('#date-location-name') as HTMLElement;

  // Render character cards
  const renderCharacterCards = () => {
    characterCards.innerHTML = characters.map(char => {
      const affection = gameManager.getAffection(char.id);
      const level = affectionSystem.getCharacterLevel(char.id);
      const isSelected = selectedCharacter === char.id;
      const spriteUrl = CHARACTER_SPRITES[char.id]?.[level] || CHARACTER_SPRITES[char.id].stranger;

      return `
        <div class="character-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${isSelected ? 'ring-4 ring-primary ring-offset-2 scale-105' : 'hover:shadow-xl hover:scale-102'}" data-character="${char.id}">
          <div class="h-48 bg-gradient-to-br from-pink-50 to-purple-50 flex items-end justify-center overflow-hidden">
            <img src="${spriteUrl}" alt="${char.name}" class="h-44 object-contain" />
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-900">${char.name}</h3>
            <p class="text-sm text-gray-500">${char.role}</p>
            <div class="mt-2 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">favorite</span>
              <div class="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-primary rounded-full" style="width: ${affection}%"></div>
              </div>
              <span class="text-xs font-bold text-primary">${affection}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Add click listeners
    characterCards.querySelectorAll('.character-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedCharacter = card.getAttribute('data-character') as CharacterId;
        renderCharacterCards();
        renderLocationCards();
        updateStartButton();
      });
    });
  };

  // Render location cards
  const renderLocationCards = () => {
    locationCards.innerHTML = DATE_LOCATIONS.map(loc => {
      let isLocked = false;
      let lockReason = '';

      if (loc.unlockCondition) {
        const affection = gameManager.getAffection(loc.unlockCondition.characterId);
        if (affection < loc.unlockCondition.minAffection) {
          isLocked = true;
          const char = getCharacter(loc.unlockCondition.characterId);
          lockReason = `需要${char?.name}好感度 ≥ ${loc.unlockCondition.minAffection}`;
        }
      }

      const isSelected = selectedLocation?.id === loc.id && !isLocked;

      return `
        <div class="location-card bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${isLocked ? 'opacity-50 cursor-not-allowed' : isSelected ? 'ring-4 ring-primary ring-offset-2' : 'hover:shadow-lg'}" data-location="${loc.id}" data-locked="${isLocked}">
          <div class="h-24 bg-cover bg-center relative" style="background-image: url('${loc.background}')">
            ${isLocked ? `
              <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span class="material-symbols-outlined text-white text-3xl">lock</span>
              </div>
            ` : ''}
          </div>
          <div class="p-3">
            <div class="flex items-center gap-2 mb-1">
              <span class="material-symbols-outlined text-primary text-lg">${loc.icon}</span>
              <h4 class="font-bold text-gray-900">${loc.name}</h4>
            </div>
            <p class="text-xs text-gray-500">${isLocked ? lockReason : loc.description}</p>
          </div>
        </div>
      `;
    }).join('');

    // Add click listeners
    locationCards.querySelectorAll('.location-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.getAttribute('data-locked') === 'true') return;
        const locId = card.getAttribute('data-location') as DateLocation;
        selectedLocation = DATE_LOCATIONS.find(l => l.id === locId) || null;
        renderLocationCards();
        updateStartButton();
      });
    });
  };

  // Update start button state
  const updateStartButton = () => {
    btnStartDate.disabled = !selectedCharacter || !selectedLocation;
  };

  // Start dating
  const startDating = () => {
    if (!selectedCharacter || !selectedLocation) return;

    dateRound = 0;
    selectionPhase.classList.add('hidden');
    datingPhase.classList.remove('hidden');

    // Set up dating UI
    const character = getCharacter(selectedCharacter);
    const level = affectionSystem.getCharacterLevel(selectedCharacter);
    const affection = gameManager.getAffection(selectedCharacter);

    dateBackground.style.backgroundImage = `url('${selectedLocation.background}')`;
    dateCharacterSprite.src = CHARACTER_SPRITES[selectedCharacter]?.[level] || CHARACTER_SPRITES[selectedCharacter].stranger;
    dateLocationIcon.textContent = selectedLocation.icon;
    dateLocationName.textContent = selectedLocation.name;
    dateAffection.textContent = String(affection);
    dateRoundsEl.textContent = `对话 ${dateRound}/${maxDateRounds}`;

    // Initial greeting
    const greetings: Record<CharacterId, string> = {
      su_wanqing: '（轻轻点头）......你来了。',
      xia_zhi: '（蹦蹦跳跳）学长！终于等到你啦～',
      lin_zhiyu: '......（抬头看了你一眼）',
    };

    dateSpeaker.textContent = character?.name || '???';
    dateDialogText.textContent = greetings[selectedCharacter] || '......';

    dateChatInput.focus();
  };

  // Send date message
  const sendDateMessage = async () => {
    if (!selectedCharacter) return;

    const playerInput = dateChatInput.value.trim();
    if (!playerInput) return;

    dateChatInput.value = '';
    dateRound++;
    dateRoundsEl.textContent = `对话 ${dateRound}/${maxDateRounds}`;

    // Add to history
    gameManager.addDialogHistory('player', gameManager.getPlayerName(), playerInput);

    // Show player message briefly
    dateSpeaker.textContent = gameManager.getPlayerName();
    dateDialogText.textContent = playerInput;

    // Disable input
    dateChatInput.disabled = true;
    dateChatSend.classList.add('opacity-50');

    // Get AI response
    const aiService = getAIService();
    const currentAffection = gameManager.getAffection(selectedCharacter);

    try {
      const response = await aiService.generateResponse({
        characterId: selectedCharacter,
        playerInput,
        currentAffection,
        recentHistory: gameManager.getDialogHistory().slice(-5),
      });

      await new Promise(resolve => setTimeout(resolve, 800));

      const character = getCharacter(selectedCharacter);
      dateSpeaker.textContent = character?.name || '???';
      dateDialogText.textContent = response.text;

      gameManager.addDialogHistory(selectedCharacter, character?.name || '???', response.text);

      // Apply affection change
      if (response.affectionChange && response.affectionChange !== 0) {
        gameManager.changeAffection(selectedCharacter, response.affectionChange);
        const newAffection = gameManager.getAffection(selectedCharacter);
        dateAffection.textContent = String(newAffection);

        if (response.affectionChange > 0) {
          EffectsManager.getInstance().playHeartEffect(
            window.innerWidth / 2,
            window.innerHeight / 3,
            Math.min(response.affectionChange, 5)
          );
        }

        // Update sprite
        const newLevel = affectionSystem.getCharacterLevel(selectedCharacter);
        dateCharacterSprite.src = CHARACTER_SPRITES[selectedCharacter]?.[newLevel] || dateCharacterSprite.src;
      }
    } catch (error) {
      console.error('[DateScene] Error:', error);
      dateSpeaker.textContent = '系统';
      dateDialogText.textContent = '发生了一些问题，请稍后再试...';
    } finally {
      dateChatInput.disabled = false;
      dateChatSend.classList.remove('opacity-50');
      dateChatInput.focus();
    }

    // Check if max rounds
    if (dateRound >= maxDateRounds) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      endDating();
    }
  };

  // End dating
  const endDating = () => {
    selectionPhase.classList.remove('hidden');
    datingPhase.classList.add('hidden');
    selectedCharacter = null;
    selectedLocation = null;
    renderCharacterCards();
    renderLocationCards();
    updateStartButton();
  };

  // Event listeners
  container.querySelector('#btn-back')?.addEventListener('click', () => {
    gameManager.showScene('home');
  });

  btnStartDate.addEventListener('click', startDating);

  dateChatSend.addEventListener('click', sendDateMessage);

  dateChatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendDateMessage();
    }
  });

  container.querySelector('#btn-end-date')?.addEventListener('click', endDating);

  // Initial render
  renderCharacterCards();
  renderLocationCards();
}
