const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
