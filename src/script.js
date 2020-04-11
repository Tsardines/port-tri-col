var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


  $(".sec-about, .sec-exp, .sec-contact").click(function(e) {
    if
      ($(e.target).is(".sec-about")) {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 400);
    } else if
      ($(e.target).is(".sec-exp")) {
        $('html, body').animate({
            scrollTop: $(".title-exp").offset().top
        }, 400);
    } else if
      ($(e.target).is(".sec-contact")) {
        $('html, body').animate({
            scrollTop: $(".title-contact").offset().top
        }, 400);
    } else 
      return;
  })

  // $(".sec-contact").click(function() {
  //   $('html, body').animate({
  //       scrollTop: $(".title-contact").offset().top
  //   }, 400);
  // })

  $(".btn-dark").click(function() {
    $("body").addClass("mode-dark")
    console.log("dark")
  })
