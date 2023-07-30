jQuery(function () {
  $(window).on("load scroll", function () {
    if ($(this).scrollTop() >= "1") {
      $("header").css("background", "#050505");
    } else {
      $("header").css("background", "linear-gradient(180deg, rgba(5, 5, 5, 1), rgba(5, 5, 5, 0))");
    }
  });
});

jQuery(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= $(document).height() - "900") {
      $(".header__socialList").css("display", "none");
    } else {
      $(".header__socialList").css("display", "flex");
    }
  });
});
