$(document).ready(function() {
	$('a[rel="relativeanchor"]').click(function(){
			$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
	    }, 600);
	    return false;
	});

	$(document).ready(function(){
	   var scroll_start = 0;
	   var startchange = $('.nav');
	   var offset = startchange.offset();
	   $(document).scroll(function() {
	      scroll_start = $(this).scrollTop();
	      if(scroll_start > $('#sobrenpk').offset().top - 150) {
	        	$('.navbar-default').css('background-color', 'rgba(25, 130, 90,0.9)');
	       } else {
	          $('.navbar-default').css('background-color', 'transparent');
	       }
	   });
	});

   $(window).scroll(function () {
       var y = $(this).scrollTop();
       var a = $('#inicio').offset().top;
       var b = $('#sobrenpk').offset().top;
			 var c = $('#jardinesV').offset().top;
			 var d = $('#proyectos').offset().top;
			 var e = $('#contacto').offset().top;

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
					 $('#ajardinesV').addClass('activo');
			 }

			 if (y >= d) {
					$('#navbarCollapse ul li a').removeClass('activo');
					 $('#aProyectos').addClass('activo');
			 }

			 if (y >= e) {
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

/* FANCYBOX */


$('.fancybox').fancybox({
		 helpers : {
			  title : {
			   type : 'outside'
			  	},

		 },
	 });

});
