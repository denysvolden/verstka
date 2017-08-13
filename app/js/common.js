// youtube

$('.play').click(function() {
	$("body").css("overflow","hidden");
	$('.m-video').toggle();
	$('.page-overlay').toggle();
	$('.fa-times').toggle();
});

// скрытие объектов при клюке на любом месте
$(document).click(function(e){

	if ($(e.target).closest(".play").length) return;
	$('.page-overlay').hide();
	$('.fa-times').hide();
	$('.m-video').hide();
	$('.m-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
	e.stopPropagation();
	$("body").css("overflow","auto");

});
// скрытие объектов при клюке на любом месте - end

    //$('#popup-youtube-player').playVideo();
    $('.play').on('click', function() {
    	$('.m-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });
// youtube-end


//sliders
$(".owl-fade").owlCarousel({
	items: 1,
	loop: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	nav: true,
	mouseDrag: false,
	navText: false,
	touchDrag: false,
	dots: true,

});

$(document).ready(function() {

	$(this).find(".owl-item.active .anim-1").addClass("fadeInLeftBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-2").addClass("fadeInRightBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-3").addClass("fadeInUp animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-4").addClass("fadeInUp animated").css("opacity","1");

});



//block-1


$(".owl-fade").on("translate.owl.carousel", function () {
	$(this).find(".owl-item .anim-1").removeClass("fadeInLeftBig animated").css("opacity","0");
	$(this).find(".owl-item .anim-2").removeClass("fadeInRightBig animated").css("opacity","0");
	$(this).find(".owl-item .anim-3").removeClass("fadeInUp animated").css("opacity","0");
	$(this).find(".owl-item .anim-4").removeClass("fadeInUp animated").css("opacity","0");
});          
$(".owl-fade").on("translated.owl.carousel", function () {
	$(this).find(".owl-item.active .anim-1").addClass("fadeInLeftBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-2").addClass("fadeInRightBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-3").addClass("fadeInUp animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-4").addClass("fadeInUp animated").css("opacity","1");
});


//block-2

$(".owl-fade").on("translate.owl.carousel", function () {
	$(this).find(".owl-item .anim-5").removeClass("fadeInDownBig animated").css("opacity","0");
	$(this).find(".owl-item .anim-6").removeClass("fadeInUpBig animated").css("opacity","0");
	$(this).find(".owl-item .anim-7").removeClass("fadeInLeftBig animated").css("opacity","0");
	$(this).find(".owl-item .anim-8").removeClass("fadeInRightBig animated").css("opacity","0");
});          
$(".owl-fade").on("translated.owl.carousel", function () {
	$(this).find(".owl-item.active .anim-5").addClass("fadeInDownBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-6").addClass("fadeInUpBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-7").addClass("fadeInLeftBig animated").css("opacity","1");
	$(this).find(".owl-item.active .anim-8").addClass("fadeInRightBig animated").css("opacity","1");
});

 //block-3

 $(".owl-fade").on("translate.owl.carousel", function () {
 	$(this).find(".owl-item .anim-9").removeClass("zoomInLeft animated").css("opacity","0");
 	$(this).find(".owl-item .anim-10").removeClass("zoomInRight animated").css("opacity","0");
 	$(this).find(".owl-item .anim-11").removeClass("bounceInUp animated").css("opacity","0");
 	$(this).find(".owl-item .anim-12").removeClass("bounceInUp animated").css("opacity","0");
 });          
 $(".owl-fade").on("translated.owl.carousel", function () {
 	$(this).find(".owl-item.active .anim-9").addClass("zoomInLeft animated").css("opacity","1");
 	$(this).find(".owl-item.active .anim-10").addClass("zoomInRight animated").css("opacity","1");
 	$(this).find(".owl-item.active .anim-11").addClass("bounceInUp animated").css("opacity","1");
 	$(this).find(".owl-item.active .anim-12").addClass("bounceInUp animated").css("opacity","1");
 });




 $(".logos").owlCarousel({
 	loop: true,
 	smartSpeed: 700,
 	responsiveClass: true,
 	items: 4,
 	responsive: {
 		0: {
 			items: 1
 		},
 		768: {
 			items: 2
 		},
 		992: {
 			items: 3
 		},
 		1200: {
 			items: 4
 		},
 	}

 });

 $(".carousel-news").owlCarousel({
 	loop: true,
 	autoplay: true,
 	items: 3,
 	nav: false,
 	margin: 30,
 	smartSpeed: 700,
 	responsiveClass: true,
 	responsive: {
 		0: {
 			items: 1
 		},
 		768: {
 			items: 2
 		},
 		1200: {
 			items: 3
 		},
 	}
 });

 $('.carousel-news .carousel-news-item').on('mouseenter',function(e){
 	$(this).closest('.carousel-news').trigger('stop.owl.autoplay');
 })
 $('.carousel-news .carousel-news-item').on('mouseleave',function(e){
 	$(this).closest('.carousel-news').trigger('play.owl.autoplay',[500]);
 })

owl = $('.carousel-news').owlCarousel();
$(".nav-prev").click(function () {
    owl.trigger('prev.owl.carousel');
});

$(".nav-next").click(function () {
    owl.trigger('next.owl.carousel');
});


// Isotope-сортировка

$(document).ready(function () {
$grid = $('.grid');
$grid.isotope({
	 transitionDuration: '.8s'
	})

$('#architecture-button,#illustration-button, #all-button, #nature-button, #photo-button, #web-button').click(function() {
	$('#architecture-button,#illustration-button, #all-button, #nature-button, #photo-button, #web-button').removeClass('active-1');
	  $(this).addClass('active-1');
  var id = $(this).attr('id');
  var className = id.replace("-button", "");

  if (className == 'all') {
    $grid.isotope({
      filter: '*'
    });
    return false;
  }
  $grid.isotope({
    filter: '.' + className
  });
});

});

var iso = new Isotope( '.grid', {
    hiddenStyle: {
      opacity: 0
      /* , transform: 'scale(0.001)' -- disabled scaling */
    },
    visibleStyle: {
      opacity: 1
      /* , transform: 'scale(1)' -- disabled scaling */
    },
   
});

 //Isotope-конец

// поочередное появление-начало



$('.sponsors').waypoint(function() {
	$('.logo').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "70%"
});

$('.carousel-news').waypoint(function() {
	$('.carousel-news-item').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "70%"
});

$('.blocks-set').waypoint(function() {
	$('.block-compiler').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "70%"
});

$('.section1').waypoint(function() {
	$('.menusect').each(function(index) {
		var ths = $(this);
		setInterval(function() {
			ths.addClass("on");
		}, 200*index);
	}); 

}, {
	offset: "70%"
});

// поочередное появление-конец




//waypoints

$('.hand').waypoint(function(){
	$('.num1').animateNumber({ number: 3587 }, 2000, 'swing');
	$('.num2').animateNumber({ number: 207 }, 2000, 'swing');
	$('.num3').animateNumber({ number: 2500 }, 2000, 'swing');
	$('.num4').animateNumber({ number: 873 }, 2000, 'swing');
	$('.num5').animateNumber({ number: 900 }, 2000, 'swing');
	$('.num1').removeClass();
	$('.num2').removeClass();
	$('.num3').removeClass();
	$('.num4').removeClass();
	$('.num5').removeClass();
}, {	
	offset : "15%"
});

//waypoints-end



//animation.css//

$('.img-left').animated('fadeInLeft');
$('.img-center, .iso-nav').animated('fadeInDown');
$('.img-right').animated('fadeInRight');
$('h4').animated('fadeInRight');
$('.section7 p, .button-right').animated('fadeInRight');
$('.section2 p, .section4 p, .section10 p, .gradient h3, .gradient .p').animated('fadeInLeft');
$('.carousel-news-items, .p-i, .news-navigation').animated('fadeInUp');


//animation.css//-end

$(function(){	

	$("#my-menu").mmenu({
		extensions: {
			all: ["theme-dark", "fx-menu-slide", "pagedim-black","fx-menu-zoom","fx-panels-zoom","fx-listitems-slide"]
		},
		offCanvas: {
			position: "right",
		},
		navbar: {
			title: '<img src="img/logo.png" alt="Waxom">'
		}

	});

	var api = $('#my-menu').data('mmenu');

	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() { 
		$('.hamburger').removeClass('is-active');
	});

});




	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback


	//Аякс отправка форм
	//Документация: http://api.$.com/$.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});
