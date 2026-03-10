import { initModals } from './modules/modal.js';
import { initForm } from './modules/form.js';
import { initMobileMenu } from './modules/menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initModals();
  initForm();
  initMobileMenu();
});
