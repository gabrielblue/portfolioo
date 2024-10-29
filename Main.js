//  For the side bar menu 
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  navToggle.addEventListener('click', function() {
    menu.classList.toggle('hidden');
  });