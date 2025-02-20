$(document).ready(function () {
  $(".envelope").one("click", function () {
    $(".top-wrap").animate(
      { textIndent: 180 },
      {
        duration: 500,
        step: function (now) {
          $(this).css("-webkit-transform", "rotateX(" + now + "deg)");
        },
        complete: function () {
          $(".top-wrap").animate({ zIndex: -1 }, 100);
        },
      }
    );

    $(".letter-wrap").delay(500).animate(
      {
        height: "520px",
        top: "-500px",
      },
      500
    );

    $(".letter-wrap").delay(1000).animate(
      {
        top: "-200px",
        zIndex: 999,
      },
      500
    );

    $(".envelope").delay(500).animate(
      {
        top: "50px",
      },
      500
    );
  });

  $(".send").one("click", function (e) {
    e.preventDefault();

    $(".letter-wrap").animate(
      {
        top: "-500px",
      },
      500
    );

    $(".front").delay(800).animate(
      {
        zIndex: 999,
      },
      500
    );

    $(".letter-wrap").delay(1000).animate(
      {
        top: "0px",
        height: "200px",
      },
      500
    );

    $(".envelope").delay(1000).animate(
      {
        top: "0px",
      },
      500
    );

    $(".top-wrap").delay(2500).animate(
      {
        zIndex: 999,
      },
      500
    );

    $(".top-wrap").animate(
      { textIndent: 0 },
      {
        step: function (now, fx) {
          $(this).css("-webkit-transform", "rotateX(" + now + "deg)");
        },
      },
      500
    );

    $(".envelope")
      .delay(3000)
      .animate(
        {
          right: "-5000px",
        },
        500
      )
      .fadeOut(1000, function () {
        $("p.notif").fadeIn(1000);
      });
  });
});
