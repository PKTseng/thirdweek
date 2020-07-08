"use strict";

$(document).ready(function () {
  $('.questionList').click(function () {
    $(this).toggleClass('active').find('p').slideToggle();
    $(this).siblings().removeClass('active').find('p').slideUp();
  });
}); // $(document).ready(function () {
//   $('.showMenu').click(function () {
//     $(this).toggleClass('.navList').find('.navListItems').slideToggle();
//   })
// });
//# sourceMappingURL=all.js.map
