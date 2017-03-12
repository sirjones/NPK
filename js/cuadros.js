  $(".nav-navbar li a").click(function(event) {
  	$(".navbar-collapse").collapse('hide');
  });
	   	

  var scroll_start = 0;
  var startchange = $('.nav');
  var offset = startchange.offset();

  $(document).scroll(function() {
  scroll_start = $(this).scrollTop();
    if(scroll_start > $('#bio').offset().top - 150) {
      	$('#nav').css('background-color', 'rgba(25, 130, 90,0.9)');
     } else {
        $('#nav').css('background-color', 'transparent');
     }
  });


   $('#navbarCollapse a').removeClass('activo');
   $('#navbarCollapse a').blur();
   $('#aCuadros').addClass('activo');


  $(window).scroll(function () {
     var y = $(this).scrollTop();
     var a = $('#inicio').offset().top;
     var b = $('#bio').offset().top -200;
     var c = $('#sobrenpk').offset().top -200;
     var d = $('#jardines').offset().top -200;
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

  $(document).ready(function() {
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

  function showMant() {
    $('.blurc').addClass('blur');
    document.getElementById('closeimg').style.display = 'block';
    document.getElementById('mant').style.display = 'block';
    $('lSPrev').style.display = 'none';
    document.getElementById('close').style.display = 'none';
  };

  function closePop() {
    $('.blurc').removeClass('blur');
    document.getElementById('close').style.display = 'none';
    document.getElementById('closeimg').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    document.getElementById('mant').style.display = 'none';
    $('lSPrev').style.display = 'block';
  };