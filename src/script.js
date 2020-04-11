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


  $(".sec-exp").click(function() {
    $('html, body').animate({
        scrollTop: $(".title-exp").offset().top
    }, 700);
  })

  $(".sec-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".title-contact").offset().top
    }, 700);
  })

  $(".btn-dark").click(function() {
    $("body").addClass("mode-dark")
    console.log("dark")
  })
