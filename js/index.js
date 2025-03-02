import { startAR } from './ar/arSetup.js';
import { showInfo } from './components/infoSection.js';

startAR();

// Make showInfo available globally if needed
window.showInfo = showInfo;

document.addEventListener('DOMContentLoaded', () => {
    const roles = document.querySelectorAll('.role');
    roles.forEach(role => {
        role.addEventListener('click', (event) => {
        const infoId = event.target.getAttribute('data-info');
        showInfo(infoId);
        });
    });
});