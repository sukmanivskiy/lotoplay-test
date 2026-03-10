export const initMobileMenu = () => {
  const menu = document.getElementById('mobileMenu');
  const openBtn = document.getElementById('openMenu');
  const closeBtn = document.getElementById('closeMenu');
  const links = document.querySelectorAll('.nav__link');

  if (!menu || !openBtn) return;

  const openMenu = () => {
    menu.showModal();
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.close();
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openMenu);

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  if (links.length > 0) {
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  menu.addEventListener('click', (event) => {
    const rect = menu.getBoundingClientRect();

    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );

    if (!isInDialog) {
      closeMenu();
    }
  });

  menu.addEventListener('close', () => {
    document.body.style.overflow = '';
  });
};