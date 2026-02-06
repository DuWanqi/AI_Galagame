/**
 * 角色数据定义
 */

import type { CharacterInfo, CharacterId } from '../types';

export const CHARACTERS: Record<CharacterId, CharacterInfo> = {
  su_wanqing: {
    id: 'su_wanqing',
    name: '苏晚晴',
    age: 17,
    role: '高二班长，学霸型',
    personality: '温柔内敛，外冷内热，心思细腻，不善表达但行动力强，会默默关心玩家，有点小害羞，被夸会脸红',
    likes: ['看书', '泡图书馆', '手冲咖啡', '傍晚在操场散步'],
    dislikes: ['喧闹', '敷衍', '失信'],
    keywords: ['真诚', '细心', '陪伴', '尊重'],
    voiceActor: '花泽香菜',
  },
  xia_zhi: {
    id: 'xia_zhi',
    name: '夏栀',
    age: 16,
    role: '高一学妹，社团活跃分子（动漫社/舞蹈社）',
    personality: '活泼元气，古灵精怪，话多且甜，喜欢撒娇、分享日常，有点小任性但不矫情，擅长主动拉近关系',
    likes: ['动漫', '手办', '甜食', '跳舞', '拍照'],
    dislikes: ['死板', '冷漠', '否定她的爱好'],
    keywords: ['包容', '合拍', '陪玩', '认可'],
    voiceActor: '悠木碧',
  },
  lin_zhiyu: {
    id: 'lin_zhiyu',
    name: '林知予',
    age: 18,
    role: '同年级，清冷系美术生，寡言少语',
    personality: '清冷疏离，温柔藏在细节里，喜欢安静，擅长画画（会偷偷画玩家），不主动但会回应，内心敏感',
    likes: ['画画', '安静的角落', '雨天', '白茶', '钢琴曲'],
    dislikes: ['喧闹', '强迫', '过度热情'],
    keywords: ['耐心', '主动', '温柔', '懂她'],
    voiceActor: '早见沙织',
  },
};

/**
 * 获取角色信息
 */
export function getCharacter(id: CharacterId): CharacterInfo {
  return CHARACTERS[id];
}

/**
 * 获取所有角色
 */
export function getAllCharacters(): CharacterInfo[] {
  return Object.values(CHARACTERS);
}

/**
 * 获取角色名称颜色
 */
export function getCharacterColor(id: CharacterId): string {
  const colors: Record<CharacterId, string> = {
    su_wanqing: '#8B5CF6', // 紫色
    xia_zhi: '#F472B6', // 粉色
    lin_zhiyu: '#60A5FA', // 蓝色
  };
  return colors[id];
}

/**
 * 角色立绘路径
 * 立绘文件放在 public/sprites/{角色ID}/{好感度等级}.png
 * 好感度等级: stranger, familiar, fond, love, devoted
 */
export const CHARACTER_SPRITES: Record<CharacterId, Record<string, string>> = {
  su_wanqing: {
    stranger: '/sprites/su_wanqing/stranger.png',
    familiar: '/sprites/su_wanqing/familiar.png',
    fond: '/sprites/su_wanqing/fond.png',
    love: '/sprites/su_wanqing/love.png',
    devoted: '/sprites/su_wanqing/devoted.png',
  },
  xia_zhi: {
    stranger: '/sprites/xia_zhi/stranger.png',
    familiar: '/sprites/xia_zhi/familiar.png',
    fond: '/sprites/xia_zhi/fond.png',
    love: '/sprites/xia_zhi/love.png',
    devoted: '/sprites/xia_zhi/devoted.png',
  },
  lin_zhiyu: {
    stranger: '/sprites/lin_zhiyu/stranger.png',
    familiar: '/sprites/lin_zhiyu/familiar.png',
    fond: '/sprites/lin_zhiyu/fond.png',
    love: '/sprites/lin_zhiyu/love.png',
    devoted: '/sprites/lin_zhiyu/devoted.png',
  },
};

/**
 * 背景图片
 * 所有背景图使用占位图，开发者可替换为实际背景资源
 */
export const BACKGROUNDS: Record<string, string> = {
  // 基础场景
  classroom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf2HEFm8FTYvJlR-g7bLUw6qgo1-8F4yLP4cM1ZnnC_WvZxo4XSTNNCZq3Gc8Q8MfcXFdTFG7ukmT3JubwF3Oc6aH9VQLzYEp_DqZq-6v9zNwFQZT0jWxQQhEuYER8FvlwenxtpveYJ5DHayHru65DizQmit_XlXw3cDsKkj78F5GvF4auvBYwP3b-aG8By5ovQ_Pg805rcTUVHnwyjEfqOsfs1eXtVe-1BpORaoiqZIIssTgOZhfnaSI5T-IyTUswdB9gXqu4G8M',
  schoolGate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf2HEFm8FTYvJlR-g7bLUw6qgo1-8F4yLP4cM1ZnnC_WvZxo4XSTNNCZq3Gc8Q8MfcXFdTFG7ukmT3JubwF3Oc6aH9VQLzYEp_DqZq-6v9zNwFQZT0jWxQQhEuYER8FvlwenxtpveYJ5DHayHru65DizQmit_XlXw3cDsKkj78F5GvF4auvBYwP3b-aG8By5ovQ_Pg805rcTUVHnwyjEfqOsfs1eXtVe-1BpORaoiqZIIssTgOZhfnaSI5T-IyTUswdB9gXqu4G8M',

  // 苏晚晴相关场景
  library: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80', // 图书馆
  rooftop: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80', // 天台/星空
  home: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=80', // 她家
  cafe: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80', // 咖啡厅

  // 公共场景
  park: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1920&q=80', // 公园/操场
  corridor: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80', // 走廊
  playground: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80', // 操场

  // 夏栀相关场景
  clubRoom: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80', // 社团室
  gameCenter: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80', // 游戏厅

  // 林知予相关场景
  artRoom: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&q=80', // 美术室
  gallery: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1920&q=80', // 画廊

  // 特殊场景
  festival: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80', // 文化祭
  sakura: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1920&q=80', // 樱花树下
  fireworks: 'https://images.unsplash.com/photo-1498931299476-d3f3bbce5f84?w=1920&q=80', // 烟花
  rain: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=1920&q=80', // 雨天
  sunset: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=1920&q=80', // 夕阳
  moonlight: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=1920&q=80', // 月光
};

/**
 * 背景场景信息
 */
export const BACKGROUND_INFO: Record<string, { name: string; description: string }> = {
  classroom: { name: '教室', description: '阳光明媚的教室' },
  schoolGate: { name: '校门口', description: '放学时分的校门' },
  library: { name: '图书馆', description: '安静的图书馆角落' },
  rooftop: { name: '天台', description: '可以看到星空的天台' },
  home: { name: '她的家', description: '温馨整洁的房间' },
  cafe: { name: '咖啡厅', description: '充满咖啡香气的角落' },
  park: { name: '公园', description: '傍晚的公园长椅' },
  corridor: { name: '走廊', description: '午后的学校走廊' },
  playground: { name: '操场', description: '夕阳下的操场跑道' },
  clubRoom: { name: '社团室', description: '动漫社的活动室' },
  gameCenter: { name: '游戏厅', description: '热闹的游戏厅' },
  artRoom: { name: '美术室', description: '充满画作的美术室' },
  gallery: { name: '画廊', description: '安静的画廊' },
  festival: { name: '文化祭', description: '热闹的文化祭现场' },
  sakura: { name: '樱花树下', description: '粉色花瓣飘落的樱花树' },
  fireworks: { name: '烟花大会', description: '绚烂的烟花绽放' },
  rain: { name: '雨天', description: '雨滴敲打窗户' },
  sunset: { name: '夕阳', description: '金色的夕阳西下' },
  moonlight: { name: '月光', description: '皎洁的月光洒落' },
};
