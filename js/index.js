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
       var b = $('#sobrenpk').offset().top - 51;
			 var c = $('#proyectos').offset().top - 51;
			 var e = $('#contacto').offset().top - 70;

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
					 $('#aNpkapp').addClass('activo');
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



});
