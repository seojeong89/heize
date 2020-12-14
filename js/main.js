$(document).ready(function () {
  // 섹션02-슬릭
  $(".album_slide").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<button class="slick-prev"> < </button>',
    nextArrow: '<button class="slick-next"> > </button>',
  });

  $(".album_s").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  // 섹션04-갤러리
  $(".card_01").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".card_02").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".card_03").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".card_04").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".card_05").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  $(".card_06").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  // 섹션04-비디오
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: "linear",
    touchMove: true,
  });

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
