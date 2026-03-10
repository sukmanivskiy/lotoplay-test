export const initModals = () => {
  const modalTriggers = document.querySelectorAll('[data-modal]');
  const closeButtons = document.querySelectorAll('[data-close-modal]');
  const modals = document.querySelectorAll('dialog');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.showModal(); // Нативний метод HTML5
        document.body.style.overflow = 'hidden'; // Забороняємо скрол сайту на фоні
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('dialog');
      if (modal) {
        modal.close();
        document.body.style.overflow = ''; // Повертаємо скрол
      }
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
      const rect = modal.getBoundingClientRect();
      // Перевіряємо, чи клік був за межами контенту модалки
      const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        modal.close();
        document.body.style.overflow = '';
      }
    });

    modal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
    });
  });
};