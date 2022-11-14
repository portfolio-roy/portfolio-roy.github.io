const menuIco = document.querySelector('.menu-ico');
const navMenu = document.querySelector('.main-menu');

menuIco.addEventListener('click', () => {
  menuIco.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  menuIco.classList.remove('active');
  navMenu.classList.remove('active');
}));
