function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



var counted = 0;
$(window).scroll(function() {

  var count = $('#counter');
  if(count.length){
  var oTop = count.offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum) + `+`);
          },
          complete: function() {
            $this.text(this.countNum + `+`);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }
}

});


window.addEventListener("scroll", function() {
  const progressBars = document.querySelectorAll(".progress");
  const percentages = document.querySelectorAll(".progress-percentage");

  progressBars.forEach((progressBar, index) => {
      const targetPercentage = progressBar.getAttribute("data-percentage");
      const barWrapper = progressBar.parentElement.parentElement;
      const barPosition = barWrapper.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Only trigger the progress if it's not already filled
      if (barPosition < windowHeight && !progressBar.classList.contains('filled')) {
          let width = 0;
          progressBar.classList.add('filled'); // Add class to ensure it updates only once
          const interval = setInterval(function() {
              if (width >= targetPercentage) {
                  clearInterval(interval);
              } else {
                  width++;
                  progressBar.style.width = width + "%";
                  percentages[index].innerText = width + "%";
              }
          }, 20);
      }
  });
});





