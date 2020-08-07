"use strict";

$(document).ready(function () {
  $('.questionList').click(function () {
    $(this).toggleClass('active').find('p').slideToggle();
    $(this).siblings().removeClass('active').find('p').slideUp();
  });
});
$(document).ready(function () {
  $('.humberMenu').on('click', function (e) {
    e.preventDefault();
    $('.navList').toggleClass('menuShow');
  });
});
//# sourceMappingURL=all.js.map
