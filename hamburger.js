window.onload = function() {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });

  mobile_menu.addEventListener('click', function(event) {
    if (event.target.classList.contains('mobile-nav')) {
      menu_btn.classList.remove('is-active');
      mobile_menu.classList.remove('is-active');
    }
  });
};


