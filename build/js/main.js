document.addEventListener('DOMContentLoaded', function(){
  var menuTrigger = document.querySelector('.js-trigger');
  var menuDropdown = document.querySelector('.js-menu-dropdown');
  menuTrigger.addEventListener('click', function(evt){
    evt.preventDefault();
    menuDropdown.classList.toggle('menu__vote--show');
  });
});
