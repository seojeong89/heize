$(document).ready(function () {
  // 헤더-네브
  var nav = $(".header_nav");
  var goTop = $(".go_top");

  $(window).scroll(function () {
    var scrollTopValue = $(document).scrollTop();

    if (scrollTopValue > 0) {
      nav.addClass("active");
    } else {
      nav.removeClass("active");
    }

    if (scrollTopValue > 900) {
      goTop.fadeIn();
    } else {
      goTop.fadeOut();
    }
  });

  goTop.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });
});
