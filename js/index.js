$('.old').hide();

$('.letter-block').click(function(){
  $(this).find('.old').toggle();
  $(this).find('.new').toggle();
  $(this).toggleClass('titlechange');
});


$('.acc .note').hide();
$('h3').click(function(){
  $(this).next().slideToggle();
});