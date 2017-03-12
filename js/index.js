var tamañoGrande;

// Start of StatCounter Code for Default Guide 
var sc_project=11049991; 
var sc_invisible=1; 
var sc_security="10f8c238"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
// End of StatCounter Code for Default Guide

$(document).ready(function() {
  $('#intro').addClass('hi');
  $(".thumbnail").css({'height':($("#thumb").height()+'px')});
 	$('#equipo, #titulovideo, #wrapperWrapper, #titulovideo, .imgSobrenpk, .text1, .textPU, #contactos, #contact').css('opacity', 0);
	$('a[rel="relativeanchor"]').click(function(){
			$('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 50
	    }, 600);
	    return false;
	});

  		$(".nav-navbar li a").click(function(event) {
    		$(".navbar-collapse").collapse('hide');
    	});
	   	
	   	var scroll_start = 0;
	   	var startchange = $('.nav');
	   	var offset = startchange.offset();
	   	$(document).scroll(function() {
	      scroll_start = $(this).scrollTop();
	      if(scroll_start > $('#bio').offset().top - 150) {
	        	$('#nav').css('background-color', 'rgba(25, 130, 90,0.9)'),
	        	$('.navbar-header').css('background-color', 'rgb(25, 130, 90)');
	       } else {
	          $('#nav').css('background-color', 'transparent');
	       }
	  	});

	    $('#imageGallery').lightSlider({
	        gallery:true,
	        item:1,
	        loop:true,
	        thumbItem:10,
	        slideMargin:0,
	        enableDrag: false,
	        currentPagerPosition:'left',
	        onSliderLoad: function(el) {
	            el.lightGallery({
	                selector: '#imageGallery .lslide'
	            });
	        }   
	    }); 
	});

   $(window).scroll(function () {
       var y = $(this).scrollTop();
       var a = $('#inicio').offset().top;
       var b = $('#bio').offset().top -200;
       var c = $('#sobrenpk').offset().top -200;
	   var d = $('#jardines').offset().top -200;
	   var e = $('#cuadrosvivos').offset().top -200;
	   var f = $('#contacto').offset().top -200;

    if (y >= a) {
          $('#navbarCollapse a').removeClass('activo');
          $('#navbarCollapse a').blur();
   				$('#aInicio').addClass('activo');
       }

	if (y >= b) {
		$('#navbarCollapse ul li a').removeClass('activo');
		$('#navbarCollapse ul li a').blur();
				$('#aBio').addClass('activo');
          $('#equipo').addClass('fadeInLeft');
          $('#titulovideo').addClass('fadeInUp');
          $('#wrapperWrapper').addClass('fadeInRight');
			 }
	if (y >= c) {
          $('#navbarCollapse ul li a').removeClass('activo');
          $('#navbarCollapse ul li a').blur();
   				$('#aSobrenpk').addClass('activo');
            $('.imgSobrenpk').addClass('fadeInRight');
            $('.text1').addClass('fadeIn');
            $('.textPU').addClass('fadeInRight');
            $('.servitem1').addClass('bounceInUp');
            $('.servitem2').addClass('bounceInUp');
            $('.servitem3').addClass('bounceInUp');
            $('.servitem4').addClass('bounceInUp');
            $('.servitem5').addClass('bounceInUp');
            $('.servitem6').addClass('bounceInUp');
       }

	if (y >= d) {
		  $('#navbarCollapse ul li a').removeClass('activo');
		  $('#navbarCollapse ul li a').blur();
			    $('#aJardines').addClass('activo');
			 }

	if (y >= e) {
		  $('#navbarCollapse ul li a').removeClass('activo');
		  $('#navbarCollapse ul li a').blur();
			    $('#aCuadrosvivos').addClass('activo');
			 }

	if (y >= f) {
		  $('#navbarCollapse ul li a').removeClass('activo');
		  $('#navbarCollapse ul li a').blur();
				$('#aContacto').addClass('activo');
          $('#contactos').addClass('fadeInRight');
          $('#contactos').css('opacity', 1);
          $('#contact').addClass('fadeInLeftt');
          $('#contact').css('opacity', 1);
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

	if ($(window).width() < 801) {
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

$('.fancybox').fancybox({
	     loop : false,
		 helpers : {
			  title : {
			   type : 'inside'
			  	},
		 },
	 });

  function showMant() {
    $('.blurc').addClass('blur');
    document.getElementById('closeimg').style.display = 'block';
    document.getElementById('mant').style.display = 'block';
    $('lSPrev').style.display = 'none';
    document.getElementById('close').style.display = 'none';
  };

  function closePop() {
    $('.blurc').removeClass('blur');
    document.getElementById('mant').style.display = 'none';
    document.getElementById('close').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    $('lSPrev').style.display = 'block';
  };
