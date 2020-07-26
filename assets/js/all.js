"use strict";

$(document).ready(function () {
  $('.questionList').click(function () {
    $(this).toggleClass('active').find('p').slideToggle();
    $(this).siblings().removeClass('active').find('p').slideUp();
  });
});
var menu = document.querySelector('.showMenu');
menu.addEventListener('click', function () {
  document.querySelector('.navList').style.display = "block";
});
//# sourceMappingURL=all.js.map
