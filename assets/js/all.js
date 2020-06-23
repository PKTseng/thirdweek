"use strict";

$(document).ready(function () {
  $('.questionList').click(function () {
    $(this).toggleClass('active').find('p').slideToggle();
    $(this).siblings().removeClass('active').find('p').slideUp();
  });
});
//# sourceMappingURL=all.js.map
