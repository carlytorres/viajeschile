$(document).ready(function () {
  //Typeform
  (function () {
    var qs, js, q, s, d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q)
    }
  })()

  //Cambia el color del navbar cuando hace scroll
  var scroll_start = 0;
  $(document).scroll(function () {
    scroll_start = $(this).scrollTop();
    if (scroll_start > 1) {
      $('.navbar').css('background-color', '#000');
    } else {
      $('.navbar').css('background-color', 'transparent');
    }
  });

  //Smooth scroll
  $("a").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});