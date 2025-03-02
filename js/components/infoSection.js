import { fade } from '../utils/animations.js';

export async function showInfo(infoId) {
  const infos = document.querySelectorAll('.info');
  for (const info of infos) {
    if (info.style.display === 'block') {
      await fade(info, 1, 0, 500);
      info.style.display = 'none';
    }
  }
  for (const info of infos) {
    if (info.id === infoId) {
      info.style.display = 'block';
      await fade(info, 0, 1, 500);
    }
  }
}
