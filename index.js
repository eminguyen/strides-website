$('.ui .item').on('click', function() {
      $('.ui .item').removeClass('active');
      $(this).addClass('active');
   });

$('.arrowthingy')
  .transition('set looping')
  .transition('set n')
  .transition('bounce', '2000ms')
