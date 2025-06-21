const btnMenu = document.getElementById('btnMenu');
const navList = document.querySelector('.main-nav .nav-list');

btnMenu.addEventListener('click', () => {
 navList.classList.toggle('active');
});