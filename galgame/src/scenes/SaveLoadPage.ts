/**
 * 存档/读档页面
 */

import type { GameManager } from '../core/GameManager';
import type { SaveSlot } from '../types';

export function renderSaveLoadPage(container: HTMLElement, gameManager: GameManager): void {
  const saveSystem = gameManager.getSaveSystem();
  const saves = saveSystem.getAllSaves();
  const autoSave = saveSystem.getAutoSave();

  const formatDate = (timestamp: number) => saveSystem.formatTimestamp(timestamp);

  container.innerHTML = `
    <div class="min-h-screen bg-background-light font-display">
      <!-- Background Pattern -->
      <div class="fixed inset-0 pointer-events-none z-0 bg-stripe-pattern opacity-100"></div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <!-- Header -->
        <div class="flex items-center justify-between mb-8">
          <button id="btn-back" class="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
            <span class="material-symbols-outlined">arrow_back</span>
            <span class="font-bold">返回</span>
          </button>
          <h1 class="text-2xl font-black text-text-main">存档管理</h1>
          <div class="w-20"></div>
        </div>
        
        <!-- Auto Save -->
        ${autoSave ? `
          <div class="mb-8">
            <h2 class="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">autorenew</span>
              自动存档
            </h2>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow cursor-pointer" id="auto-save-slot">
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-bold text-text-main">${autoSave.playerName} 的存档</p>
                  <p class="text-sm text-gray-500">${formatDate(autoSave.timestamp)}</p>
                </div>
                <button class="px-4 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-pink-600 transition-colors">
                  读取
                </button>
              </div>
            </div>
          </div>
        ` : ''}
        
        <!-- Save Slots -->
        <div>
          <h2 class="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
            <span class="material-symbols-outlined text-primary">save</span>
            存档槽位
          </h2>
          <div class="grid gap-4">
            ${Array.from({ length: 10 }, (_, i) => {
              const slot = saves.find(s => s.id === i + 1);
              return `
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 hover:shadow-md transition-shadow save-slot" data-slot="${i + 1}">
                  <div class="flex justify-between items-center">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400">
                        ${slot ? `
                          <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">save</span>
                        ` : `
                          <span class="material-symbols-outlined">add</span>
                        `}
                      </div>
                      <div>
                        ${slot ? `
                          <p class="font-bold text-text-main">槽位 ${i + 1} - ${slot.playerName}</p>
                          <p class="text-sm text-gray-500">${formatDate(slot.timestamp)}</p>
                        ` : `
                          <p class="font-bold text-gray-400">槽位 ${i + 1} - 空</p>
                          <p class="text-sm text-gray-400">点击保存新游戏</p>
                        `}
                      </div>
                    </div>
                    <div class="flex gap-2">
                      ${slot ? `
                        <button class="btn-load px-4 py-2 bg-primary text-white rounded-full font-bold text-sm hover:bg-pink-600 transition-colors" data-slot="${i + 1}">
                          读取
                        </button>
                        <button class="btn-delete px-4 py-2 bg-gray-200 text-gray-600 rounded-full font-bold text-sm hover:bg-red-500 hover:text-white transition-colors" data-slot="${i + 1}">
                          删除
                        </button>
                      ` : `
                        <button class="btn-save px-4 py-2 bg-gray-200 text-gray-600 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-colors" data-slot="${i + 1}">
                          保存
                        </button>
                      `}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Event Listeners
  container.querySelector('#btn-back')?.addEventListener('click', () => {
    const state = gameManager.getState();
    if (state.currentChapterId) {
      gameManager.showScene('game');
    } else {
      gameManager.showScene('home');
    }
  });

  container.querySelector('#auto-save-slot')?.addEventListener('click', () => {
    if (autoSave) {
      gameManager.loadFromSave(autoSave);
    }
  });

  container.querySelectorAll('.btn-load').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slotId = parseInt(btn.getAttribute('data-slot') || '0');
      const save = saveSystem.loadSave(slotId);
      if (save) {
        gameManager.loadFromSave(save);
      }
    });
  });

  container.querySelectorAll('.btn-save').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slotId = parseInt(btn.getAttribute('data-slot') || '0');
      saveSystem.saveGame(slotId);
      // Refresh page
      renderSaveLoadPage(container, gameManager);
    });
  });

  container.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slotId = parseInt(btn.getAttribute('data-slot') || '0');
      if (confirm('确定要删除这个存档吗？')) {
        saveSystem.deleteSave(slotId);
        // Refresh page
        renderSaveLoadPage(container, gameManager);
      }
    });
  });
}
