'use strict';
{
  /* hero visible */
  window.addEventListener('load', function() {
    const video = document.querySelector(".js_hero_video");
    video.classList.add("is_visible");
  });

  /* menu visible */
  const open = document.getElementById('nav_btn');
  const nav = document.getElementById('header_nav');

  open.addEventListener('click', function () {
    nav.classList.toggle('nav_open');

    if (open.classList.contains('nav_anime_out')) {
      open.classList.remove('nav_anime_out');
      open.offsetWidth;
      open.classList.add('nav_anime_in');
    } else if (open.classList.contains('nav_anime_in')) {
      open.classList.remove('nav_anime_in');
      open.offsetWidth;
      open.classList.add('nav_anime_out');
    } else {
      open.classList.add('nav_anime_in');
    }
  });

}
