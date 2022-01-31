// BACKGROUND ANIMATION
VANTA.NET({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "#990000",
  backgroundColor: "#252934",
  points: 18.0,
  showDots: false,
});

$(document).ready(function () {
  //#region CHANGE LOGO WHEN HOVER BUTTON
  $(".github").on({
    mouseenter: function () {
      $(".github-icon").attr("src", "/images/GitHub-Mark-32px.png");
    },
    mouseleave: function () {
      $(".github-icon").attr("src", "/images/GitHub-Mark-Light-32px.png");
    },
  });

  $(".footer-facebook").on({
    mouseenter: function () {
      $(".footer-facebook-icon").attr(
        "src",
        "/images/social-media/facebook-hover.png"
      );
    },
    mouseleave: function () {
      $(".footer-facebook-icon").attr(
        "src",
        "/images/social-media/facebook.png"
      );
    },
  });
  $(".footer-linkedin").on({
    mouseenter: function () {
      $(".footer-linkedin-icon").attr(
        "src",
        "/images/social-media/linkedin-hover.png"
      );
    },
    mouseleave: function () {
      $(".footer-linkedin-icon").attr(
        "src",
        "/images/social-media/linkedin.png"
      );
    },
  });
  $(".footer-github").on({
    mouseenter: function () {
      $(".footer-github-icon").attr("src", "/images/GitHub-Mark-32px.png");
    },
    mouseleave: function () {
      $(".footer-github-icon").attr(
        "src",
        "/images/GitHub-Mark-Light-32px.png"
      );
    },
  });
  $(".footer-medium").on({
    mouseenter: function () {
      $(".footer-medium-icon").attr(
        "src",
        "/images/social-media/medium-hover.png"
      );
    },
    mouseleave: function () {
      $(".footer-medium-icon").attr("src", "/images/social-media/medium.png");
    },
  });
  //#endregion

  //#region OWL CAROUSEL
  // owl carousel script
  // Empty object where we can store current item's index before drag
  var transient = {};

  $(".owl-carousel").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      951: {
        items: 3,
        nav: false,
      },
    },
    slideBy: "page",
    onDrag: onDrag.bind(transient),
    onDragged: onDragged.bind(transient),
  });

  function onDrag(event) {
    this.initialCurrent = event.relatedTarget.current();
  }

  function onDragged(event) {
    var owl = event.relatedTarget;
    var draggedCurrent = owl.current();

    if (draggedCurrent > this.initialCurrent) {
      owl.current(this.initialCurrent);
      owl.next();
    } else if (draggedCurrent < this.initialCurrent) {
      owl.current(this.initialCurrent);
      owl.prev();
    }
  }
  //#endregion

  //#region RESET FORM WHEN SUBMIT
  $("#contact-form")[0].reset();
  //#endregion

  //#region NAVIGATION BAR
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  //#endregion

  //#region TOGGLE MENU
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".menu a").click(function () {
    let isMobile = $(".navbar .menu").hasClass("active");
    if (isMobile) {
      $(".navbar .menu").removeClass("active");
      $(".menu-btn i").removeClass("active");
    }
  });
  //#endregion
});

//#region REMOVE CONTACT CURVE
$(window)
  .resize(function () {
    if ($(window).width() <= 950) {
      $("#blogs").removeClass("contact-curve");
      $("#contact").removeClass("contact-curve");
    } else {
      $("#blogs").addClass("contact-curve");
      $("#contact").addClass("contact-curve");
    }
  })
  .resize();
//#endregion
