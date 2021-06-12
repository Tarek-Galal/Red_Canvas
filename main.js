$(document).ready(function(){
    var topOffset = $('#header').outerHeight();
     $('#navbarNav a[href^="#"]').on('click', function(event) {
         $('#navbarNav .active').removeClass('active');
         $(this).parent().addClass('active');
        var target = $(this.getAttribute('href'));
        if( target.length ) {
           event.preventDefault();
           $('html, body').animate({
              scrollTop: target.offset().top - topOffset
           }, 1000);
        }
     });
  });

  $(window).scroll(function(){
	if($(this).scrollTop() > 200) {
		$('.go-top').show();
	} else {
		$('.go-top').hide();
	}
});
$('.go-top').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});