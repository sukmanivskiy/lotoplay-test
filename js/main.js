const menu = document.getElementById('mobileMenu');
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const links = document.querySelectorAll('.nav__link');

openBtn.addEventListener('click', () => {
  menu.showModal();
});

closeBtn.addEventListener('click', () => {
  menu.close();
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.close();
  });
});