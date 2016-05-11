$(document).ready(function() {
	$('a[rel="relativeanchor"]').click(function(){
			$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 40
	    }, 600);
	    return false;
	});

   $(window).scroll(function () {
       var y = $(this).scrollTop();
       var a = $('#inicio').offset().top;
       var b = $('#sobrenpk').offset().top - 70;
			 var c = $('#proyectos').offset().top - 51;
			 var d = $('#contacto').offset().top - 51;

    if (y >= a) {
          $('#navbarCollapse a').removeClass('activo');
   				$('#aInicio').addClass('activo');
       }

       if (y >= b) {
          $('#navbarCollapse ul li a').removeClass('activo');
   				$('#aSobrenpk').addClass('activo');
       }

			 if (y >= c) {
					$('#navbarCollapse ul li a').removeClass('activo');
					 $('#aProyectos').addClass('activo');
			 }

			 if (y >= d) {
					$('#navbarCollapse ul li a').removeClass('activo');
					 $('#aContacto').addClass('activo');
			 }

 		});

		$('#navbarCollapse ul li a').click(function(e) {
 		 $('#navbarCollapse ul li a').removeClass('activo');
 		 $(this).addClass('activo');
 	 	});

// Carousel

		$('#myCarousel').carousel({
		  interval: 10000
		})

		$('.carousel .item').each(function(){
		  var next = $(this).next();
		  if (!next.length) {
		    next = $(this).siblings(':first');
		  }
		  next.children(':first-child').clone().appendTo($(this));

		  if (next.next().length>0) {
		    next.next().children(':first-child').clone().appendTo($(this));
		  }
		  else {
		  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		  }
		});

});
