$(document).ready(function(){
  $('.menu').css("background-color", "transparent");
  $( window ).scroll(function() {
  if ($( this ).scrollTop() > 1) {
    $('.menu').css("background-color", "#0E6EB8").css("transition","0.3s ease-in-out ");
  }
  else {
    $('.menu').css("background-color", "transparent").css("transition","0.3s ease-in-out ");
    $('.ui .item').removeClass('active');
  }
  });
})

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });

$('.ui .item').on('click', function() {
  $('.ui .item').removeClass('active');
});

$('.ui .right .item').on('click', function() {
  $(this).addClass('active');
});

$('.arrowthingy')
  .transition('set looping')
  .transition('set n')
  .transition('bounce', '2000ms')

  $('.jiggle .icon').hover( function(){
    $('.jiggle .icon').transition('jiggle');
  }
);
