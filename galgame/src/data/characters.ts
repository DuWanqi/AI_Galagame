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
 * 角色立绘占位图
 * 实际项目中应该替换为真实立绘URL
 */
export const CHARACTER_SPRITES: Record<CharacterId, Record<string, string>> = {
  su_wanqing: {
    stranger: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3KFto_2hhshbDgXzz3pzQXLMOOO9Z2aXcphvF-m7c5dMWRTsoOhxDxe5HP0kKOYwx4kPvhYRwZWUw6wFnibmBgq3yYK7WPVbjIDTRx8N70uCTv3KR1xbrj4ipgqNr5NXnA5HmH8egUqpO2v9-3cMc_JXlziy24vasm5a4RPPpAG6pfnk2-MS7LL8uxfq8uFISMVWTjPvh0SAFk3nrZZJsEBMbRlm629YUza4iOab7MTFRwDzJ4Xevibvc-9QzHHL5r3qEnnWGiAI',
    familiar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3KFto_2hhshbDgXzz3pzQXLMOOO9Z2aXcphvF-m7c5dMWRTsoOhxDxe5HP0kKOYwx4kPvhYRwZWUw6wFnibmBgq3yYK7WPVbjIDTRx8N70uCTv3KR1xbrj4ipgqNr5NXnA5HmH8egUqpO2v9-3cMc_JXlziy24vasm5a4RPPpAG6pfnk2-MS7LL8uxfq8uFISMVWTjPvh0SAFk3nrZZJsEBMbRlm629YUza4iOab7MTFRwDzJ4Xevibvc-9QzHHL5r3qEnnWGiAI',
    fond: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3KFto_2hhshbDgXzz3pzQXLMOOO9Z2aXcphvF-m7c5dMWRTsoOhxDxe5HP0kKOYwx4kPvhYRwZWUw6wFnibmBgq3yYK7WPVbjIDTRx8N70uCTv3KR1xbrj4ipgqNr5NXnA5HmH8egUqpO2v9-3cMc_JXlziy24vasm5a4RPPpAG6pfnk2-MS7LL8uxfq8uFISMVWTjPvh0SAFk3nrZZJsEBMbRlm629YUza4iOab7MTFRwDzJ4Xevibvc-9QzHHL5r3qEnnWGiAI',
    love: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3KFto_2hhshbDgXzz3pzQXLMOOO9Z2aXcphvF-m7c5dMWRTsoOhxDxe5HP0kKOYwx4kPvhYRwZWUw6wFnibmBgq3yYK7WPVbjIDTRx8N70uCTv3KR1xbrj4ipgqNr5NXnA5HmH8egUqpO2v9-3cMc_JXlziy24vasm5a4RPPpAG6pfnk2-MS7LL8uxfq8uFISMVWTjPvh0SAFk3nrZZJsEBMbRlm629YUza4iOab7MTFRwDzJ4Xevibvc-9QzHHL5r3qEnnWGiAI',
    devoted: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3KFto_2hhshbDgXzz3pzQXLMOOO9Z2aXcphvF-m7c5dMWRTsoOhxDxe5HP0kKOYwx4kPvhYRwZWUw6wFnibmBgq3yYK7WPVbjIDTRx8N70uCTv3KR1xbrj4ipgqNr5NXnA5HmH8egUqpO2v9-3cMc_JXlziy24vasm5a4RPPpAG6pfnk2-MS7LL8uxfq8uFISMVWTjPvh0SAFk3nrZZJsEBMbRlm629YUza4iOab7MTFRwDzJ4Xevibvc-9QzHHL5r3qEnnWGiAI',
  },
  xia_zhi: {
    stranger: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx6ras9sJOtkZqkCqhxTTHoihkpMVnmGCUbE6MFcnDIbDiSLPJ5v-7L878yZ5itoLSmiy-aImzAOOOPTnOqvANA_PUZ_E5M0dB3BPYMjEjyDdAwuQwbOmyb829EWFUv1eauYSwghCJq_93ZCuwavMMBlSkMKqkUlvw1rOYw88YavAeSssOVoAdtASfvVo11g9v8Np82FgDMpcXEyrorJdp498Lth7SU6--UhQ3Wr-_34-CM-wxXuiS_cOQBIpCNZqqJMgjCRw-Qeg',
    familiar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx6ras9sJOtkZqkCqhxTTHoihkpMVnmGCUbE6MFcnDIbDiSLPJ5v-7L878yZ5itoLSmiy-aImzAOOOPTnOqvANA_PUZ_E5M0dB3BPYMjEjyDdAwuQwbOmyb829EWFUv1eauYSwghCJq_93ZCuwavMMBlSkMKqkUlvw1rOYw88YavAeSssOVoAdtASfvVo11g9v8Np82FgDMpcXEyrorJdp498Lth7SU6--UhQ3Wr-_34-CM-wxXuiS_cOQBIpCNZqqJMgjCRw-Qeg',
    fond: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx6ras9sJOtkZqkCqhxTTHoihkpMVnmGCUbE6MFcnDIbDiSLPJ5v-7L878yZ5itoLSmiy-aImzAOOOPTnOqvANA_PUZ_E5M0dB3BPYMjEjyDdAwuQwbOmyb829EWFUv1eauYSwghCJq_93ZCuwavMMBlSkMKqkUlvw1rOYw88YavAeSssOVoAdtASfvVo11g9v8Np82FgDMpcXEyrorJdp498Lth7SU6--UhQ3Wr-_34-CM-wxXuiS_cOQBIpCNZqqJMgjCRw-Qeg',
    love: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx6ras9sJOtkZqkCqhxTTHoihkpMVnmGCUbE6MFcnDIbDiSLPJ5v-7L878yZ5itoLSmiy-aImzAOOOPTnOqvANA_PUZ_E5M0dB3BPYMjEjyDdAwuQwbOmyb829EWFUv1eauYSwghCJq_93ZCuwavMMBlSkMKqkUlvw1rOYw88YavAeSssOVoAdtASfvVo11g9v8Np82FgDMpcXEyrorJdp498Lth7SU6--UhQ3Wr-_34-CM-wxXuiS_cOQBIpCNZqqJMgjCRw-Qeg',
    devoted: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx6ras9sJOtkZqkCqhxTTHoihkpMVnmGCUbE6MFcnDIbDiSLPJ5v-7L878yZ5itoLSmiy-aImzAOOOPTnOqvANA_PUZ_E5M0dB3BPYMjEjyDdAwuQwbOmyb829EWFUv1eauYSwghCJq_93ZCuwavMMBlSkMKqkUlvw1rOYw88YavAeSssOVoAdtASfvVo11g9v8Np82FgDMpcXEyrorJdp498Lth7SU6--UhQ3Wr-_34-CM-wxXuiS_cOQBIpCNZqqJMgjCRw-Qeg',
  },
  lin_zhiyu: {
    stranger: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1lGM3x7hMmP2mchz1CqpFkJsZBXANzKciU67EmAiTc3bCazaS9bFdwdFzK1CcdNCDrq3Q-l-su23sSvWMs8W77S2XfrHZegbcRIkQxaxC_b0GKPw1u9fy29CDqILV-qV3eaxlYNZKAjNEReY-MaLzK5lNiw76XGFZcn_wAUy1sUaqDOTuwZJAETAAvsx_rX44p8x_VaQ1MLEYmzgSoJATpjEBtmmON7Oh8VsaBxB9i-_kYsdeob-E3JshoO-SK66K9ZOrl9nMIzE',
    familiar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1lGM3x7hMmP2mchz1CqpFkJsZBXANzKciU67EmAiTc3bCazaS9bFdwdFzK1CcdNCDrq3Q-l-su23sSvWMs8W77S2XfrHZegbcRIkQxaxC_b0GKPw1u9fy29CDqILV-qV3eaxlYNZKAjNEReY-MaLzK5lNiw76XGFZcn_wAUy1sUaqDOTuwZJAETAAvsx_rX44p8x_VaQ1MLEYmzgSoJATpjEBtmmON7Oh8VsaBxB9i-_kYsdeob-E3JshoO-SK66K9ZOrl9nMIzE',
    fond: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1lGM3x7hMmP2mchz1CqpFkJsZBXANzKciU67EmAiTc3bCazaS9bFdwdFzK1CcdNCDrq3Q-l-su23sSvWMs8W77S2XfrHZegbcRIkQxaxC_b0GKPw1u9fy29CDqILV-qV3eaxlYNZKAjNEReY-MaLzK5lNiw76XGFZcn_wAUy1sUaqDOTuwZJAETAAvsx_rX44p8x_VaQ1MLEYmzgSoJATpjEBtmmON7Oh8VsaBxB9i-_kYsdeob-E3JshoO-SK66K9ZOrl9nMIzE',
    love: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1lGM3x7hMmP2mchz1CqpFkJsZBXANzKciU67EmAiTc3bCazaS9bFdwdFzK1CcdNCDrq3Q-l-su23sSvWMs8W77S2XfrHZegbcRIkQxaxC_b0GKPw1u9fy29CDqILV-qV3eaxlYNZKAjNEReY-MaLzK5lNiw76XGFZcn_wAUy1sUaqDOTuwZJAETAAvsx_rX44p8x_VaQ1MLEYmzgSoJATpjEBtmmON7Oh8VsaBxB9i-_kYsdeob-E3JshoO-SK66K9ZOrl9nMIzE',
    devoted: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1lGM3x7hMmP2mchz1CqpFkJsZBXANzKciU67EmAiTc3bCazaS9bFdwdFzK1CcdNCDrq3Q-l-su23sSvWMs8W77S2XfrHZegbcRIkQxaxC_b0GKPw1u9fy29CDqILV-qV3eaxlYNZKAjNEReY-MaLzK5lNiw76XGFZcn_wAUy1sUaqDOTuwZJAETAAvsx_rX44p8x_VaQ1MLEYmzgSoJATpjEBtmmON7Oh8VsaBxB9i-_kYsdeob-E3JshoO-SK66K9ZOrl9nMIzE',
  },
};

/**
 * 背景图片
 */
export const BACKGROUNDS = {
  classroom: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf2HEFm8FTYvJlR-g7bLUw6qgo1-8F4yLP4cM1ZnnC_WvZxo4XSTNNCZq3Gc8Q8MfcXFdTFG7ukmT3JubwF3Oc6aH9VQLzYEp_DqZq-6v9zNwFQZT0jWxQQhEuYER8FvlwenxtpveYJ5DHayHru65DizQmit_XlXw3cDsKkj78F5GvF4auvBYwP3b-aG8By5ovQ_Pg805rcTUVHnwyjEfqOsfs1eXtVe-1BpORaoiqZIIssTgOZhfnaSI5T-IyTUswdB9gXqu4G8M',
  library: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf2HEFm8FTYvJlR-g7bLUw6qgo1-8F4yLP4cM1ZnnC_WvZxo4XSTNNCZq3Gc8Q8MfcXFdTFG7ukmT3JubwF3Oc6aH9VQLzYEp_DqZq-6v9zNwFQZT0jWxQQhEuYER8FvlwenxtpveYJ5DHayHru65DizQmit_XlXw3cDsKkj78F5GvF4auvBYwP3b-aG8By5ovQ_Pg805rcTUVHnwyjEfqOsfs1eXtVe-1BpORaoiqZIIssTgOZhfnaSI5T-IyTUswdB9gXqu4G8M',
  schoolGate: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf2HEFm8FTYvJlR-g7bLUw6qgo1-8F4yLP4cM1ZnnC_WvZxo4XSTNNCZq3Gc8Q8MfcXFdTFG7ukmT3JubwF3Oc6aH9VQLzYEp_DqZq-6v9zNwFQZT0jWxQQhEuYER8FvlwenxtpveYJ5DHayHru65DizQmit_XlXw3cDsKkj78F5GvF4auvBYwP3b-aG8By5ovQ_Pg805rcTUVHnwyjEfqOsfs1eXtVe-1BpORaoiqZIIssTgOZhfnaSI5T-IyTUswdB9gXqu4G8M',
  rooftop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf2HEFm8FTYvJlR-g7bLUw6qgo1-8F4yLP4cM1ZnnC_WvZxo4XSTNNCZq3Gc8Q8MfcXFdTFG7ukmT3JubwF3Oc6aH9VQLzYEp_DqZq-6v9zNwFQZT0jWxQQhEuYER8FvlwenxtpveYJ5DHayHru65DizQmit_XlXw3cDsKkj78F5GvF4auvBYwP3b-aG8By5ovQ_Pg805rcTUVHnwyjEfqOsfs1eXtVe-1BpORaoiqZIIssTgOZhfnaSI5T-IyTUswdB9gXqu4G8M',
  park: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf2HEFm8FTYvJlR-g7bLUw6qgo1-8F4yLP4cM1ZnnC_WvZxo4XSTNNCZq3Gc8Q8MfcXFdTFG7ukmT3JubwF3Oc6aH9VQLzYEp_DqZq-6v9zNwFQZT0jWxQQhEuYER8FvlwenxtpveYJ5DHayHru65DizQmit_XlXw3cDsKkj78F5GvF4auvBYwP3b-aG8By5ovQ_Pg805rcTUVHnwyjEfqOsfs1eXtVe-1BpORaoiqZIIssTgOZhfnaSI5T-IyTUswdB9gXqu4G8M',
};
