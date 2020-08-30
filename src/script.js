  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      console.log("click")
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
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

  $("#dark-mode-btn").click(function(e) {
    const toggler = document.body;
    toggler.classList.toggle('dark-mode');

    const target = e.target;
    target.classList.toggle('fa-moon');
    target.classList.toggle('fa-sun');
  });


