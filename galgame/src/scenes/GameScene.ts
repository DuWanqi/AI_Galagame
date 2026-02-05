/**
 * 游戏主场景 - 故事互动界面
 * 基于 stitch 的 story_interaction_screen 样式
 */

import type { GameManager } from '../core/GameManager';
import type { CharacterId, Choice, DialogLine, FreeChatConfig } from '../types';
import { getCharacter, CHARACTER_SPRITES, BACKGROUNDS, getCharacterColor } from '../data/characters';
import { EffectsManager } from '../effects/EffectsManager';
import { getAIService } from '../services/AIService';

export function renderGameScene(container: HTMLElement, gameManager: GameManager): void {
  const storyEngine = gameManager.getStoryEngine();
  const affectionSystem = gameManager.getAffectionSystem();
  const currentNode = storyEngine.getCurrentNode();
  
  if (!currentNode) {
    gameManager.showScene('home');
    return;
  }

  const characterId = currentNode.characterId || 'su_wanqing';
  const character = getCharacter(characterId as CharacterId);
  const affectionLevel = affectionSystem.getCharacterLevel(characterId as CharacterId);
  const affectionValue = gameManager.getAffection(characterId as CharacterId);
  const background = currentNode.background ? BACKGROUNDS[currentNode.background as keyof typeof BACKGROUNDS] : BACKGROUNDS.classroom;
  const spriteUrl = CHARACTER_SPRITES[characterId as CharacterId]?.[affectionLevel] || CHARACTER_SPRITES.su_wanqing.familiar;

  container.innerHTML = `
    <div class="bg-background-light font-display overflow-hidden w-full h-screen fixed inset-0">
      <!-- Background Layer -->
      <div class="absolute inset-0 z-0">
        <div id="game-background" class="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out" 
          style="background-image: url('${background}'); filter: blur(2px);">
          <div class="absolute inset-0 bg-white/10 bg-blend-overlay"></div>
        </div>
      </div>
      
      <!-- Main Game Container -->
      <div class="relative z-10 flex flex-col h-full w-full max-w-[1920px] mx-auto">
        <!-- Header / Location indicator -->
        <div class="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none z-30">
          <div class="glass-panel px-6 py-2 rounded-full flex items-center gap-2 pointer-events-auto">
            <span class="material-symbols-outlined text-primary text-xl">location_on</span>
            <span class="text-sm font-bold text-gray-700 uppercase tracking-wider">${currentNode.background || '教室'}</span>
          </div>
          
          <!-- Affection Indicator -->
          <div class="glass-panel px-4 py-2 rounded-full flex items-center gap-3 pointer-events-auto">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
            <div class="flex flex-col">
              <span class="text-xs text-gray-500">${character?.name || '???'}</span>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="affection-bar h-full rounded-full" style="width: ${affectionValue}%"></div>
                </div>
                <span class="text-xs font-bold text-primary">${affectionValue}</span>
              </div>
            </div>
          </div>
          
          <!-- Menu Button -->
          <div class="glass-panel px-4 py-2 rounded-full pointer-events-auto cursor-pointer hover:bg-white transition-colors" id="btn-menu">
            <span class="material-symbols-outlined text-gray-500">menu</span>
          </div>
        </div>
        
        <!-- Center Stage: Character Sprite & Choices -->
        <div class="flex-1 flex flex-col items-center justify-end relative pb-[280px]">
          <!-- Character Sprite -->
          <div id="character-sprite-container" class="sprite-animate absolute bottom-0 z-10 w-auto h-[85vh] max-h-[900px] pointer-events-none drop-shadow-2xl">
            <img id="character-sprite" class="h-full w-auto object-contain sprite-mask" 
              alt="${character?.name || '角色'}" 
              src="${spriteUrl}"/>
          </div>
          
          <!-- Choice Container -->
          <div id="choices-container" class="absolute right-[10%] top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 w-full max-w-sm hidden">
            <!-- Choices will be rendered here -->
          </div>
        </div>
        
        <!-- Bottom Interface Layer -->
        <div class="absolute bottom-0 w-full z-20 px-4 pb-8 md:px-12 md:pb-10 flex justify-center">
          <div class="relative w-full max-w-[1000px]">
            <!-- Quick Menu Bar -->
            <div class="absolute -top-14 right-0 flex gap-2">
              <button id="btn-history" class="glass-panel hover:bg-primary hover:text-white transition-all duration-200 text-gray-600 h-10 px-4 rounded-full flex items-center gap-2 text-sm font-bold shadow-sm">
                <span class="material-symbols-outlined text-[18px]">history</span>
                记录
              </button>
              <button id="btn-auto" class="glass-panel hover:bg-primary hover:text-white transition-all duration-200 text-gray-600 h-10 px-4 rounded-full flex items-center gap-2 text-sm font-bold shadow-sm">
                <span class="material-symbols-outlined text-[18px]">play_circle</span>
                自动
              </button>
              <button id="btn-skip" class="glass-panel hover:bg-primary hover:text-white transition-all duration-200 text-gray-600 h-10 px-4 rounded-full flex items-center gap-2 text-sm font-bold shadow-sm">
                <span class="material-symbols-outlined text-[18px]">fast_forward</span>
                跳过
              </button>
              <button id="btn-save" class="glass-panel hover:bg-primary hover:text-white transition-all duration-200 text-gray-600 h-10 px-4 rounded-full flex items-center gap-2 text-sm font-bold shadow-sm">
                <span class="material-symbols-outlined text-[18px]">save</span>
                存档
              </button>
            </div>
            
            <!-- Name Tag -->
            <div id="speaker-tag" class="absolute -top-6 left-8 z-30">
              <div class="bg-primary text-white px-8 py-2 rounded-full shadow-lg border-2 border-white flex items-center gap-2 transform -rotate-2 origin-bottom-left hover:rotate-0 transition-transform cursor-default">
                <span class="material-symbols-outlined text-[18px]">star</span>
                <span id="speaker-name" class="text-xl font-extrabold tracking-wide">${character?.name || '???'}</span>
              </div>
            </div>
            
            <!-- Dialogue Box -->
            <div id="dialog-box" class="glass-panel rounded-3xl p-8 pt-10 min-h-[180px] border border-white/40 relative overflow-hidden group cursor-pointer">
              <!-- Decorative Background -->
              <div class="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <span class="material-symbols-outlined text-[150px] text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
              </div>
              
              <!-- Text Content -->
              <div id="dialog-text-container" class="relative z-10">
                <p id="dialog-text" class="text-gray-800 text-lg md:text-xl font-medium leading-relaxed tracking-wide">
                  <!-- Dialog text will be rendered here -->
                </p>
                <span id="typing-cursor" class="typewriter-cursor hidden"></span>
              </div>
              
              <!-- Next Indicator -->
              <div id="next-indicator" class="absolute bottom-6 right-8 animate-bounce text-primary cursor-pointer hidden">
                <span class="material-symbols-outlined text-3xl">expand_more</span>
              </div>
            </div>
            
            <!-- Free Chat Input (for free_chat nodes) -->
            <div id="free-chat-panel" class="hidden mt-4">
              <div class="glass-panel rounded-2xl p-4 border border-white/40">
                <div class="flex gap-3">
                  <input
                    type="text"
                    id="free-chat-input"
                    placeholder="输入你想说的话..."
                    class="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-800"
                  />
                  <button id="free-chat-send" class="px-6 py-3 rounded-xl bg-primary text-white font-bold flex items-center gap-2 hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200">
                    <span class="material-symbols-outlined text-[18px]">send</span>
                    发送
                  </button>
                </div>
                <div class="flex justify-between items-center mt-3 text-sm">
                  <span id="free-chat-rounds" class="text-gray-500"></span>
                  <button id="free-chat-exit" class="text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                    <span class="material-symbols-outlined text-[16px]">logout</span>
                    <span id="free-chat-exit-text">结束对话</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Menu Panel -->
        <div id="menu-panel" class="fixed inset-0 z-50 hidden">
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="menu-backdrop"></div>
          <div class="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 flex flex-col gap-4">
            <h3 class="text-xl font-bold text-gray-900 mb-4">菜单</h3>
            <button id="menu-save" class="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-primary hover:text-white transition-colors text-left font-medium flex items-center gap-3">
              <span class="material-symbols-outlined">save</span>
              保存游戏
            </button>
            <button id="menu-load" class="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-primary hover:text-white transition-colors text-left font-medium flex items-center gap-3">
              <span class="material-symbols-outlined">folder_open</span>
              读取存档
            </button>
            <button id="menu-settings" class="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-primary hover:text-white transition-colors text-left font-medium flex items-center gap-3">
              <span class="material-symbols-outlined">settings</span>
              设置
            </button>
            <button id="menu-title" class="w-full py-3 px-4 rounded-xl bg-gray-100 hover:bg-primary hover:text-white transition-colors text-left font-medium flex items-center gap-3">
              <span class="material-symbols-outlined">home</span>
              返回标题
            </button>
            <div class="flex-1"></div>
            <button id="menu-close" class="w-full py-3 px-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">close</span>
              关闭菜单
            </button>
          </div>
        </div>
        
        <!-- History Panel -->
        <div id="history-panel" class="fixed inset-0 z-50 hidden">
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" id="history-backdrop"></div>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] bg-white rounded-3xl shadow-2xl p-6 flex flex-col">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">history</span>
              对话记录
            </h3>
            <div id="history-content" class="flex-1 overflow-y-auto space-y-4 pr-2">
              <!-- History entries will be rendered here -->
            </div>
            <button id="history-close" class="mt-4 w-full py-3 px-4 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">close</span>
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // State
  let isTyping = false;
  let isAutoPlay = false;
  let autoPlayTimer: number | null = null;
  let currentText = '';
  let currentCharIndex = 0;
  
  // Free chat state
  let isFreeChatMode = false;
  let freeChatConfig: FreeChatConfig | null = null;
  let freeChatRound = 0;
  let freeChatCharacterId: CharacterId = 'su_wanqing';

  // Elements
  const dialogText = container.querySelector('#dialog-text') as HTMLElement;
  const typingCursor = container.querySelector('#typing-cursor') as HTMLElement;
  const nextIndicator = container.querySelector('#next-indicator') as HTMLElement;
  const speakerName = container.querySelector('#speaker-name') as HTMLElement;
  const speakerTag = container.querySelector('#speaker-tag') as HTMLElement;
  const dialogBox = container.querySelector('#dialog-box') as HTMLElement;
  const choicesContainer = container.querySelector('#choices-container') as HTMLElement;
  const characterSprite = container.querySelector('#character-sprite') as HTMLImageElement;
  const menuPanel = container.querySelector('#menu-panel') as HTMLElement;
  const historyPanel = container.querySelector('#history-panel') as HTMLElement;
  const historyContent = container.querySelector('#history-content') as HTMLElement;
  
  // Free chat elements
  const freeChatPanel = container.querySelector('#free-chat-panel') as HTMLElement;
  const freeChatInput = container.querySelector('#free-chat-input') as HTMLInputElement;
  const freeChatSend = container.querySelector('#free-chat-send') as HTMLElement;
  const freeChatExit = container.querySelector('#free-chat-exit') as HTMLElement;
  const freeChatRoundsEl = container.querySelector('#free-chat-rounds') as HTMLElement;
  const freeChatExitText = container.querySelector('#free-chat-exit-text') as HTMLElement;

  // Typing effect
  const typeText = (text: string, speed: number = 50) => {
    isTyping = true;
    currentText = text;
    currentCharIndex = 0;
    dialogText.innerHTML = '';
    typingCursor.classList.remove('hidden');
    nextIndicator.classList.add('hidden');

    const type = () => {
      if (currentCharIndex < currentText.length) {
        dialogText.innerHTML = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        setTimeout(type, speed);
      } else {
        isTyping = false;
        typingCursor.classList.add('hidden');
        nextIndicator.classList.remove('hidden');
        
        if (isAutoPlay) {
          const autoSpeed = gameManager.getSettings().autoPlaySpeed;
          autoPlayTimer = window.setTimeout(() => advanceDialog(), 2000 + (10 - autoSpeed) * 200);
        }
      }
    };

    type();
  };

  // Show text immediately
  const showTextImmediately = () => {
    if (isTyping) {
      dialogText.innerHTML = currentText;
      currentCharIndex = currentText.length;
      isTyping = false;
      typingCursor.classList.add('hidden');
      nextIndicator.classList.remove('hidden');
    }
  };

  // Update speaker
  const updateSpeaker = (dialog: DialogLine) => {
    if (dialog.characterId === 'narrator') {
      speakerTag.classList.add('hidden');
    } else if (dialog.characterId === 'player') {
      speakerTag.classList.remove('hidden');
      speakerName.textContent = gameManager.getPlayerName();
    } else {
      speakerTag.classList.remove('hidden');
      const char = getCharacter(dialog.characterId as CharacterId);
      speakerName.textContent = char?.name || '???';
    }
  };

  // Render choices
  const renderChoices = (choices: Choice[]) => {
    choicesContainer.innerHTML = choices.map(choice => `
      <button class="choice-btn group relative w-full overflow-hidden rounded-xl bg-white/90 p-1 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/40 hover:shadow-xl text-left border-2 border-transparent hover:border-primary" data-choice-id="${choice.id}">
        <div class="relative flex items-center justify-between rounded-lg bg-background-light px-6 py-4 transition-colors group-hover:bg-primary/5">
          <span class="font-bold text-gray-800 group-hover:text-primary transition-colors">${choice.text.replace('{playerName}', gameManager.getPlayerName())}</span>
          <span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">${choice.icon || 'arrow_forward'}</span>
        </div>
      </button>
    `).join('');

    choicesContainer.classList.remove('hidden');

    // Add event listeners
    choicesContainer.querySelectorAll('.choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const choiceId = btn.getAttribute('data-choice-id');
        const choice = choices.find(c => c.id === choiceId);
        if (choice) {
          makeChoice(choice);
        }
      });
    });
  };

  // Make choice
  const makeChoice = (choice: Choice) => {
    choicesContainer.classList.add('hidden');
    
    // Apply effects and play animation
    if (choice.effects) {
      choice.effects.forEach(effect => {
        if (effect.type === 'affection' && effect.characterId && effect.value > 0) {
          // Play heart effect
          const rect = characterSprite.getBoundingClientRect();
          EffectsManager.getInstance().playHeartEffect(
            rect.left + rect.width / 2,
            rect.top + rect.height / 3,
            Math.min(effect.value, 15)
          );
        }
      });
    }

    const newNode = storyEngine.makeChoice(choice);
    if (newNode) {
      renderNode();
    } else {
      // End of chapter
      gameManager.showScene('character_select');
    }
  };

  // Advance dialog
  const advanceDialog = () => {
    if (autoPlayTimer) {
      clearTimeout(autoPlayTimer);
      autoPlayTimer = null;
    }

    if (isTyping) {
      showTextImmediately();
      return;
    }

    const node = storyEngine.getCurrentNode();
    if (!node) return;

    if (node.type === 'dialog' && node.dialogs) {
      const nextDialog = storyEngine.advanceDialog();
      if (nextDialog) {
        renderDialog(nextDialog);
      } else if (node.nextNodeId) {
        storyEngine.advanceToNextNode();
        renderNode();
      } else {
        // End of story
        gameManager.showScene('character_select');
      }
    } else if (node.type === 'choice') {
      // Wait for choice
    }
  };

  // Render dialog
  const renderDialog = (dialog: DialogLine) => {
    updateSpeaker(dialog);
    
    // Add to history
    const charName = dialog.characterId === 'narrator' ? '旁白' : 
                     dialog.characterId === 'player' ? gameManager.getPlayerName() :
                     getCharacter(dialog.characterId as CharacterId)?.name || '???';
    gameManager.addDialogHistory(dialog.characterId, charName, dialog.text);

    // Type text
    const textSpeed = gameManager.getSettings().textSpeed;
    const speed = Math.max(10, 100 - textSpeed * 10);
    typeText(dialog.text.replace('{playerName}', gameManager.getPlayerName()), speed);

    // Update sprite if character changed
    if (dialog.characterId && dialog.characterId !== 'narrator' && dialog.characterId !== 'player') {
      const charId = dialog.characterId as CharacterId;
      const level = affectionSystem.getCharacterLevel(charId);
      characterSprite.src = CHARACTER_SPRITES[charId]?.[level] || CHARACTER_SPRITES.su_wanqing.familiar;
    }
  };

  // Enter free chat mode
  const enterFreeChatMode = (config: FreeChatConfig, charId: CharacterId) => {
    isFreeChatMode = true;
    freeChatConfig = config;
    freeChatRound = 0;
    freeChatCharacterId = charId;
    
    freeChatPanel.classList.remove('hidden');
    freeChatInput.placeholder = config.placeholderText || '输入你想说的话...';
    freeChatExitText.textContent = config.exitText;
    freeChatRoundsEl.textContent = `对话 ${freeChatRound}/${config.maxRounds}`;
    freeChatInput.value = '';
    freeChatInput.focus();
    
    // Show initial prompt as dialog
    if (config.prompt) {
      const char = getCharacter(charId);
      speakerTag.classList.remove('hidden');
      speakerName.textContent = char?.name || '???';
      const textSpeed = gameManager.getSettings().textSpeed;
      const speed = Math.max(10, 100 - textSpeed * 10);
      typeText(config.prompt, speed);
    }
  };
  
  // Exit free chat mode
  const exitFreeChatMode = () => {
    isFreeChatMode = false;
    freeChatConfig = null;
    freeChatRound = 0;
    freeChatPanel.classList.add('hidden');
    
    // Advance to next node
    const node = storyEngine.getCurrentNode();
    if (node?.nextNodeId) {
      storyEngine.advanceToNextNode();
      renderNode();
    } else {
      gameManager.showScene('character_select');
    }
  };
  
  // Send free chat message
  const sendFreeChatMessage = async () => {
    if (!freeChatConfig || !isFreeChatMode) return;
    
    const playerInput = freeChatInput.value.trim();
    if (!playerInput) return;
    
    freeChatInput.value = '';
    freeChatRound++;
    freeChatRoundsEl.textContent = `对话 ${freeChatRound}/${freeChatConfig.maxRounds}`;
    
    // Add player input to history
    gameManager.addDialogHistory('player', gameManager.getPlayerName(), playerInput);
    
    // Show player message
    speakerTag.classList.remove('hidden');
    speakerName.textContent = gameManager.getPlayerName();
    dialogText.innerHTML = playerInput;
    nextIndicator.classList.add('hidden');
    
    // Disable input while waiting
    freeChatInput.disabled = true;
    freeChatSend.classList.add('opacity-50');
    
    // Get AI response (or fallback)
    const aiService = getAIService();
    const currentAffection = gameManager.getAffection(freeChatCharacterId);
    
    try {
      const response = await aiService.generateResponse({
        characterId: freeChatCharacterId,
        playerInput,
        currentAffection,
        recentHistory: gameManager.getDialogHistory().slice(-5),
      });
      
      // Wait a bit for natural feel
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show character response
      const char = getCharacter(freeChatCharacterId);
      speakerTag.classList.remove('hidden');
      speakerName.textContent = char?.name || '???';
      
      const textSpeed = gameManager.getSettings().textSpeed;
      const speed = Math.max(10, 100 - textSpeed * 10);
      typeText(response.text, speed);
      
      // Add to history
      gameManager.addDialogHistory(freeChatCharacterId, char?.name || '???', response.text);
      
      // Apply affection change
      if (response.affectionChange && response.affectionChange !== 0) {
        gameManager.changeAffection(freeChatCharacterId, response.affectionChange);
        
        if (response.affectionChange > 0) {
          const rect = characterSprite.getBoundingClientRect();
          EffectsManager.getInstance().playHeartEffect(
            rect.left + rect.width / 2,
            rect.top + rect.height / 3,
            Math.min(response.affectionChange, 5)
          );
        }
      }
      
      // Update sprite based on emotion
      if (response.emotion) {
        const level = affectionSystem.getCharacterLevel(freeChatCharacterId);
        characterSprite.src = CHARACTER_SPRITES[freeChatCharacterId]?.[level] || CHARACTER_SPRITES.su_wanqing.familiar;
      }
    } catch (error) {
      console.error('[FreeChat] Error:', error);
    } finally {
      // Re-enable input
      freeChatInput.disabled = false;
      freeChatSend.classList.remove('opacity-50');
      freeChatInput.focus();
    }
    
    // Check if max rounds reached
    if (freeChatRound >= freeChatConfig.maxRounds) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      exitFreeChatMode();
    }
  };
  
  // Render current node
  const renderNode = () => {
    const node = storyEngine.getCurrentNode();
    if (!node) {
      gameManager.showScene('character_select');
      return;
    }

    choicesContainer.classList.add('hidden');
    freeChatPanel.classList.add('hidden');

    if (node.type === 'dialog' && node.dialogs && node.dialogs.length > 0) {
      const currentDialog = node.dialogs[storyEngine.getCurrentDialogIndex()];
      if (currentDialog) {
        renderDialog(currentDialog);
      }
    } else if (node.type === 'choice' && node.choices) {
      const availableChoices = storyEngine.getAvailableChoices();
      renderChoices(availableChoices);
      nextIndicator.classList.add('hidden');
    } else if (node.type === 'free_chat' && node.freeChatConfig) {
      // Enter free chat mode
      enterFreeChatMode(node.freeChatConfig, (node.characterId || characterId) as CharacterId);
    }

    // Update background if specified
    if (node.background) {
      const bg = BACKGROUNDS[node.background as keyof typeof BACKGROUNDS];
      if (bg) {
        const bgEl = container.querySelector('#game-background') as HTMLElement;
        bgEl.style.backgroundImage = `url('${bg}')`;
      }
    }
  };

  // Show history
  const showHistory = () => {
    const history = gameManager.getDialogHistory();
    historyContent.innerHTML = history.map(entry => `
      <div class="flex gap-3">
        <div class="text-sm font-bold text-primary whitespace-nowrap">${entry.characterName}:</div>
        <div class="text-sm text-gray-700">${entry.text}</div>
      </div>
    `).join('');
    historyPanel.classList.remove('hidden');
    historyContent.scrollTop = historyContent.scrollHeight;
  };

  // Free chat event listeners
  freeChatSend.addEventListener('click', sendFreeChatMessage);
  
  freeChatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendFreeChatMessage();
    }
  });
  
  freeChatExit.addEventListener('click', exitFreeChatMode);

  // Event Listeners
  dialogBox.addEventListener('click', advanceDialog);

  container.querySelector('#btn-menu')?.addEventListener('click', () => {
    menuPanel.classList.remove('hidden');
  });

  container.querySelector('#menu-backdrop')?.addEventListener('click', () => {
    menuPanel.classList.add('hidden');
  });

  container.querySelector('#menu-close')?.addEventListener('click', () => {
    menuPanel.classList.add('hidden');
  });

  container.querySelector('#menu-title')?.addEventListener('click', () => {
    gameManager.showScene('home');
  });

  container.querySelector('#menu-save')?.addEventListener('click', () => {
    gameManager.getSaveSystem().autoSave();
    menuPanel.classList.add('hidden');
    // Show toast
    showToast('游戏已保存');
  });

  container.querySelector('#menu-load')?.addEventListener('click', () => {
    menuPanel.classList.add('hidden');
    gameManager.showScene('save_load');
  });

  container.querySelector('#menu-settings')?.addEventListener('click', () => {
    menuPanel.classList.add('hidden');
    gameManager.showScene('settings');
  });

  container.querySelector('#btn-save')?.addEventListener('click', () => {
    gameManager.getSaveSystem().autoSave();
    showToast('游戏已保存');
  });

  container.querySelector('#btn-history')?.addEventListener('click', showHistory);

  container.querySelector('#history-backdrop')?.addEventListener('click', () => {
    historyPanel.classList.add('hidden');
  });

  container.querySelector('#history-close')?.addEventListener('click', () => {
    historyPanel.classList.add('hidden');
  });

  container.querySelector('#btn-auto')?.addEventListener('click', (e) => {
    isAutoPlay = !isAutoPlay;
    const btn = e.currentTarget as HTMLElement;
    if (isAutoPlay) {
      btn.classList.add('bg-primary', 'text-white');
      if (!isTyping) {
        const autoSpeed = gameManager.getSettings().autoPlaySpeed;
        autoPlayTimer = window.setTimeout(() => advanceDialog(), 2000 + (10 - autoSpeed) * 200);
      }
    } else {
      btn.classList.remove('bg-primary', 'text-white');
      if (autoPlayTimer) {
        clearTimeout(autoPlayTimer);
        autoPlayTimer = null;
      }
    }
  });

  container.querySelector('#btn-skip')?.addEventListener('click', () => {
    // Skip to next choice or end
    let safety = 100;
    while (safety > 0) {
      const node = storyEngine.getCurrentNode();
      if (!node || node.type === 'choice') break;
      
      if (!storyEngine.hasMoreDialogs()) {
        if (node.nextNodeId) {
          storyEngine.advanceToNextNode();
        } else {
          break;
        }
      } else {
        storyEngine.advanceDialog();
      }
      safety--;
    }
    renderNode();
  });

  // Toast function
  const showToast = (message: string) => {
    const toast = document.createElement('div');
    toast.className = 'fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-lg font-bold animate-bounce';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  };

  // Keyboard controls
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      advanceDialog();
    } else if (e.key === 'Escape') {
      if (!menuPanel.classList.contains('hidden')) {
        menuPanel.classList.add('hidden');
      } else if (!historyPanel.classList.contains('hidden')) {
        historyPanel.classList.add('hidden');
      } else {
        menuPanel.classList.remove('hidden');
      }
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  // Cleanup on scene change
  gameManager.on('scene_change', () => {
    document.removeEventListener('keydown', handleKeyDown);
    if (autoPlayTimer) {
      clearTimeout(autoPlayTimer);
    }
  });

  // Initial render
  renderNode();
}
