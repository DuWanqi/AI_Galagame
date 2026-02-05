/**
 * 设置页面
 */

import type { GameManager } from '../core/GameManager';
import { EffectsManager } from '../effects/EffectsManager';

export function renderSettingsPage(container: HTMLElement, gameManager: GameManager): void {
  const settings = gameManager.getSettings();

  container.innerHTML = `
    <div class="min-h-screen bg-background-light font-display">
      <!-- Background Pattern -->
      <div class="fixed inset-0 pointer-events-none z-0 bg-stripe-pattern opacity-100"></div>
      
      <div class="relative z-10 max-w-2xl mx-auto px-4 py-8">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <button id="btn-back" class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <span class="material-symbols-outlined">arrow_back</span>
            <span class="font-bold">返回</span>
          </button>
          <h1 class="text-2xl font-black text-text-main">游戏设置</h1>
          <div class="w-20"></div>
        </div>
        
        <!-- Settings Sections -->
        <div class="space-y-6">
          <!-- Text Speed -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
            <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">speed</span>
              文字速度
            </h3>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-500">慢</span>
              <input type="range" id="text-speed" min="1" max="10" value="${settings.textSpeed}" 
                class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"/>
              <span class="text-sm text-gray-500">快</span>
              <span id="text-speed-value" class="text-sm font-bold text-primary w-8 text-center">${settings.textSpeed}</span>
            </div>
          </div>
          
          <!-- Auto Play Speed -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
            <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">play_circle</span>
              自动播放速度
            </h3>
            <div class="flex items-center gap-4">
              <span class="text-sm text-gray-500">慢</span>
              <input type="range" id="auto-speed" min="1" max="10" value="${settings.autoPlaySpeed}" 
                class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"/>
              <span class="text-sm text-gray-500">快</span>
              <span id="auto-speed-value" class="text-sm font-bold text-primary w-8 text-center">${settings.autoPlaySpeed}</span>
            </div>
          </div>
          
          <!-- BGM Volume -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
            <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">music_note</span>
              背景音乐
            </h3>
            <div class="flex items-center gap-4">
              <span class="material-symbols-outlined text-gray-400">volume_mute</span>
              <input type="range" id="bgm-volume" min="0" max="100" value="${settings.bgmVolume}" 
                class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"/>
              <span class="material-symbols-outlined text-gray-400">volume_up</span>
              <span id="bgm-volume-value" class="text-sm font-bold text-primary w-12 text-center">${settings.bgmVolume}%</span>
            </div>
          </div>
          
          <!-- Effects Toggle -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">auto_awesome</span>
                <div>
                  <h3 class="font-bold text-gray-900">画面特效</h3>
                  <p class="text-sm text-gray-500">樱花飘落等视觉特效</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="effects-toggle" class="sr-only peer" ${settings.enableEffects ? 'checked' : ''}/>
                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
          
          <!-- AI Toggle -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">psychology</span>
                <div>
                  <h3 class="font-bold text-gray-900">AI增强对话</h3>
                  <p class="text-sm text-gray-500">使用Google AI Studio生成个性化对话</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="ai-toggle" class="sr-only peer" ${settings.enableAI ? 'checked' : ''}/>
                <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div id="ai-key-section" class="${settings.enableAI ? '' : 'hidden'}">
              <label class="block text-sm font-medium text-gray-700 mb-2">API Key</label>
              <input type="password" id="ai-api-key" placeholder="输入你的Google AI Studio API Key"
                value="${settings.aiApiKey || ''}"
                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:outline-none text-sm"/>
            </div>
          </div>
          
          <!-- Data Management -->
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
            <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">folder</span>
              数据管理
            </h3>
            <div class="flex gap-4">
              <button id="btn-clear-data" class="flex-1 py-3 px-4 rounded-xl border-2 border-red-200 text-red-500 font-bold hover:bg-red-50 transition-colors">
                清除所有数据
              </button>
            </div>
          </div>
        </div>
        
        <!-- Save Button -->
        <div class="mt-8">
          <button id="btn-save-settings" class="w-full py-4 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-pink-200 hover:bg-pink-600 transition-colors">
            保存设置
          </button>
        </div>
      </div>
    </div>
  `;

  // Elements
  const textSpeed = container.querySelector('#text-speed') as HTMLInputElement;
  const textSpeedValue = container.querySelector('#text-speed-value') as HTMLElement;
  const autoSpeed = container.querySelector('#auto-speed') as HTMLInputElement;
  const autoSpeedValue = container.querySelector('#auto-speed-value') as HTMLElement;
  const bgmVolume = container.querySelector('#bgm-volume') as HTMLInputElement;
  const bgmVolumeValue = container.querySelector('#bgm-volume-value') as HTMLElement;
  const effectsToggle = container.querySelector('#effects-toggle') as HTMLInputElement;
  const aiToggle = container.querySelector('#ai-toggle') as HTMLInputElement;
  const aiKeySection = container.querySelector('#ai-key-section') as HTMLElement;
  const aiApiKey = container.querySelector('#ai-api-key') as HTMLInputElement;

  // Event Listeners
  textSpeed.addEventListener('input', () => {
    textSpeedValue.textContent = textSpeed.value;
  });

  autoSpeed.addEventListener('input', () => {
    autoSpeedValue.textContent = autoSpeed.value;
  });

  bgmVolume.addEventListener('input', () => {
    bgmVolumeValue.textContent = `${bgmVolume.value}%`;
  });

  aiToggle.addEventListener('change', () => {
    if (aiToggle.checked) {
      aiKeySection.classList.remove('hidden');
    } else {
      aiKeySection.classList.add('hidden');
    }
  });

  effectsToggle.addEventListener('change', () => {
    if (effectsToggle.checked) {
      EffectsManager.getInstance().startSakuraEffect();
    } else {
      EffectsManager.getInstance().stopSakuraEffect();
    }
  });

  container.querySelector('#btn-back')?.addEventListener('click', () => {
    const state = gameManager.getState();
    if (state.currentChapterId) {
      gameManager.showScene('game');
    } else {
      gameManager.showScene('home');
    }
  });

  container.querySelector('#btn-save-settings')?.addEventListener('click', () => {
    gameManager.updateSettings({
      textSpeed: parseInt(textSpeed.value),
      autoPlaySpeed: parseInt(autoSpeed.value),
      bgmVolume: parseInt(bgmVolume.value),
      enableEffects: effectsToggle.checked,
      enableAI: aiToggle.checked,
      aiApiKey: aiApiKey.value || undefined,
    });

    // Show success message
    const btn = container.querySelector('#btn-save-settings') as HTMLButtonElement;
    const originalText = btn.textContent;
    btn.textContent = '已保存！';
    btn.classList.add('bg-green-500');
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('bg-green-500');
    }, 2000);
  });

  container.querySelector('#btn-clear-data')?.addEventListener('click', () => {
    if (confirm('确定要清除所有游戏数据吗？此操作不可撤销。')) {
      gameManager.getSaveSystem().clearAllData();
      alert('数据已清除');
      gameManager.showScene('home');
    }
  });
}
