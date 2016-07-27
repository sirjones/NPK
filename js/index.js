var tamañoGrande;

$(document).ready(function() {
 	$('#equipo, #titulovideo, #wrapperWrapper, #titulovideo, .imgSobrenpk, .text1, .textPU, servitem1, servitem2, servitem3, servitem4, servitem5, servitem6, #contactos, #contact').css('opacity', 0);

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
	      if(scroll_start > $('#bio').offset().top - 150) {
	        	$('.navbar-default').css('background-color', 'rgba(25, 130, 90,0.9)');
	       } else {
	          $('.navbar-default').css('background-color', 'transparent');
	       }
	   });
	});

var waypoint = new Waypoint({
  element: document.getElementById('intro'),
  handler: function() {
   	$('#equipo').addClass('fadeInLeft')
  },
  offset: -200 
});

var waypoint = new Waypoint({
  element: document.getElementById('intro'),
  handler: function() {
   	$('#titulovideo').addClass('fadeInUp')
  },
  offset: -320
});


var waypoint = new Waypoint({
  element: document.getElementById('intro'),
  handler: function() {
   	$('#wrapperWrapper').addClass('fadeInRight')
  },
  offset: -220 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.imgSobrenpk').addClass('fadeInRight')
  },
  offset: -220 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.text1').addClass('fadeIn')
  },
  offset: -220 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.textPU').addClass('fadeInRight')
  },
  offset: -320 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.servitem1').addClass('bounceInUp')
  },
  offset: -340 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.servitem2').addClass('bounceInUp')
  },
  offset: -360 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.servitem3').addClass('bounceInUp')
  },
  offset: -380 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.servitem4').addClass('bounceInUp')
  },
  offset: -400 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.servitem5').addClass('bounceInUp')
  },
  offset: -420 
});

var waypoint = new Waypoint({
  element: document.getElementById('equipo'),
  handler: function() {
   	$('.servitem6').addClass('bounceInUp')
  },
  offset: -440 
});

var waypoint = new Waypoint({
  element: document.getElementById('contact'),
  handler: function() {
   	$('#contactos').addClass('fadeInRight'),
   	$('#contactos').css('opacity', 1)
  },
  offset: 500
});

var waypoint = new Waypoint({
  element: document.getElementById('contact'),
  handler: function() {
   	$('#contact').addClass('fadeInLeftt'),
   	$('#contact').css('opacity', 1)
  },
  offset: 500 
});

   $(window).scroll(function () {
       var y = $(this).scrollTop();
       var a = $('#inicio').offset().top;
       var b = $('#bio').offset().top -200;
       var c = $('#sobrenpk').offset().top -200;
	   var d = $('#proyectos').offset().top -200;
	   var e = $('#contacto').offset().top -200;

    if (y >= a) {
          $('#navbarCollapse a').removeClass('activo');
          $('#navbarCollapse a').blur();
   				$('#aInicio').addClass('activo');
       }

	if (y >= b) {
		$('#navbarCollapse ul li a').removeClass('activo');
		$('#navbarCollapse ul li a').blur();
				$('#aBio').addClass('activo');
			 }
	if (y >= c) {
          $('#navbarCollapse ul li a').removeClass('activo');
          $('#navbarCollapse ul li a').blur();
   				$('#aSobrenpk').addClass('activo');
       }

	if (y >= d) {
		  $('#navbarCollapse ul li a').removeClass('activo');
		  $('#navbarCollapse ul li a').blur();
			    $('#aProyectos').addClass('activo');
			 }

	if (y >= e) {
		  $('#navbarCollapse ul li a').removeClass('activo');
		  $('#navbarCollapse ul li a').blur();
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
		});

	if ($(window).width() < 768) {
		tamañoGrande = false;
	}
	else {
		tamañoGrande = true;
	}

	if(tamañoGrande){
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
	}

/* FANCYBOX */

$('.fancybox').fancybox({
		 helpers : {
			  title : {
			   type : 'inside'

			  	},

		 },
	 });
});
