$(function() {
	var launchpad = $("#launchpad"),
		open = function() {
			launchpad.addClass("shown start");
			launchpad.find("nav").addClass("scale-down");
			$('.toggle-box').addClass("lanchopens");
		},
		close = function() {
			launchpad
				.removeClass("start")
				.addClass("end");
			launchpad.find("nav")
				.removeClass("scale-down")
				.addClass("scale-up");
			setTimeout(function() {
				launchpad.removeClass("shown end");
				launchpad.find("nav").removeClass("scale-up");
			}, 350);
			$('.toggle-box').removeClass("lanchopens");
		};
	
	// Open the launchpad
	$(".open-menu").on("click", open);
	$(".open-menu-notif").on("click", function(){
		
		//console.log("clicked");
		const timeLine1 = new TimelineMax();
		timeLine1.staggerTo('#three', 0.9, {y:-200,opacity:0,ease:Power3.easeOut}, 0.5, '+=1');
		setTimeout(open, 850);
	});
	
	// Close the launchpad when the content is clicked, only if the  target is not a link
	$(document).mouseup(function (e) {
		var content = launchpad.find(".content"),
			nav = content.find("nav");
		
		if (content.is(e.target) || nav.is(e.target)) {
			close();
		}
	});
});

$('#toggle-box-checkbox').on('change', function(){
	
  let child1 = $('ul li:nth-child(1)');
  let child2 = $('ul li:nth-child(2)');
  let child3 = $('ul li:nth-child(3)');

  if(this.checked){
    $('body').addClass('night');
	$('.content').addClass('night');
	$('.window').addClass('night');
	
	child1.find('.notification').css("background-color", "rgba(17,19,26,0.5)");
	child2.find('.notification').css("background-color", "rgba(17,19,26,0.4)");
	child3.find('.notification').css("background-color", "rgba(17,19,26,0.3)");
	$('.notification header').addClass('night');
	$('.notification .contentNotif').addClass('night');
  }else{
    $('body').removeClass('night');
	$('.content').removeClass('night');
	$('.window').removeClass('night');
	
	child1.find('.notification').css("backgroundColor", "rgba(255, 255, 255, 0.9)");
	child2.find('.notification').css("backgroundColor", "rgba(255, 255, 255, 0.6)");
	child3.find('.notification').css("backgroundColor", "rgba(255, 255, 255, 0.4)");
	$('.notification header').removeClass('night');
	$('.notification .contentNotif').removeClass('night');
  }
});

$( ".window" )
  .draggable({
    cancel: ".inside,input,textarea",
	/*delay: 10,
	grid: [50, 50]*/
  })
  .css({
	  'top': 225,
	  'left': 785
	  /*"top": Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()),
	  "left":  Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft())*/
  });

const main = document.querySelector("#main");
const elems = document.querySelectorAll(".notification");

/*const getTop = el => {
	const before = el.querySelector(".before");
	const after = el.querySelector(".after");
	let viewportOffset = el.getBoundingClientRect();
	let elemTop = viewportOffset.top;
	before.style.top = "-" + elemTop + "px";
	after.style.top = "-" + elemTop + "px";
}*/

$(window).on("load", function() {
	$('.preloader').delay(5000).fadeOut("slow");
	
	/*$('.notable').animate({
		//opacity: '1',
		marginTop: '0px',
		ease: 'Power3.easeOut'
		
	});*/
	const timeLine = new TimelineMax();
	const notific = ["#one", "#two", "#three"];
	timeLine
		.set(notific, {opacity:0,y:-200}, 5.0)
		/*.staggerTo(notific, 2.5, {opacity:1,ease:Power3.easeOut}, 5.2)
		.staggerTo(notific, 1, {y:0,ease:Power3.easeOut}, 5.2, '-=1')*/
		.staggerTo('#one', 3.5, {opacity:1,ease: Back.easeOut.config(0.2)}, 0.2)
		.staggerTo('#one', 0.9, {y:0,ease: Back.easeOut.config(0.1)}, 0.1, '-=2')
		.set('#one', {opacity:1,y:0})
		.staggerTo('#one', 0.9, {y:-200,opacity:0,ease:Power3.easeOut}, 0.5, '+=1')
		
		.staggerTo('#two', 3.5, {opacity:1,ease: Back.easeOut.config(0.2)}, 0.2)
		.staggerTo('#two', 0.9, {y:0,ease: Back.easeOut.config(0.1)}, 0.1, '-=2')
		.set('#two', {opacity:1,y:0})
		.staggerTo('#two', 0.9, {y:-200,opacity:0,ease:Power3.easeOut}, 0.5, '+=1')
		
		.staggerTo('#three', 3.5, {opacity:1,ease: Back.easeOut.config(0.2)}, 0.2)
		.staggerTo('#three', 0.9, {y:0,ease: Back.easeOut.config(0.1)}, 0.1, '-=2')
		.set('#three', {opacity:1,y:0})
		//.staggerTo('#three', 0.9, {y:-200,opacity:0,ease:Power3.easeOut}, 0.5, '+=1')
	;
});

var animation = anime.timeline({ autoplay: true, direction: 'alternate', loop: false });

$('.launchpad-icon').on("mouseover", function(){
	animation.add({
	targets: '.launchpad-icon',
	rotate: '1turn',
	//duration: 1500,
	easing: 'easeInOutExpo',
	delay: function(el, i) { return i * 100; },
	loop: true,
	autoplay: false,
	direction: 'alternate'
	});
});

/*$('.clickNow').on("mouseover", function(){
	var animation1 = anime.timeline({ autoplay: true, direction: 'alternate', loop: true });
	animation1.add({
	targets: '#clickNow',
	translateX: 125,
	duration: 1000,
	easing: 'easeInOutExpo',
	delay: function(el, i) { return i * 100; },
	direction: 'alternate'
	});
});*/
	/*tiMeline.add({
	targets: '.launchpad-icon',
	rotate: '1turn',
	duration: 1500,
	easing: 'easeInOutExpo',
	endDelay: 500,
	direction: 'alternate'
	});*/

/*const lightToDark = () => {
	const tl = new TimelineMax();
	const groups = ["#one", "#two", "#three"];
	tl
		.set(".before", {opacity:0})
		.set(groups, {opacity:0,y:60})
		.staggerTo(groups, 0.5, {opacity:1,ease:Power3.easeOut}, 0.2)
		.staggerTo(groups, 1, {y:0,ease:Power3.easeOut}, 0.2, '-=1')
		.to(".before", 2, {opacity:1})
		.to(".after", 2, {opacity:0}, '-=1')
		.to(".notification", 0.25, {color:"#1b1e29"}, '-=3')
		.to(".notification", 1.75, {color:"white"}, '-=2.75')
		.to(".one .notification", 1, {backgroundColor:"rgba(17,19,26,0.6)"}, '-=3')
		.to(".one .notification", 1, {backgroundColor:"rgba(0,0,0,0.5)"}, '-=2.5')
		.to(".two .notification", 1, {backgroundColor:"rgba(17,19,26,0.5)"}, '-=3')
		.to(".two .notification", 1, {backgroundColor:"rgba(0,0,0,0.4)"}, '-=2.5')
		.to(".three .notification", 1, {backgroundColor:"rgba(17,19,26,0.4)"}, '-=3')
		.to(".three .notification", 1, {backgroundColor:"rgba(0,0,0,0.3)"}, '-=2.5')
	;
}*/

/*MAKING NOTIFICATIONS SWIPEABLE*/


/*var mousePos = 0;
var currentPos = 0;
var position = 0;
var draggable = false;
var blockAnime, countAnimePlus = anime.timeline(), countAnimeMinus = anime.timeline();
var offset = 130;
var direction;
var dur = 2000;
var count = parseInt($('.active').text());

$(document).on('mousedown', '.one', function () {
    currentPos = mousePos;

    draggable = true;
    //blockAnimeAdd.pause();

    if ($('.container').hasClass('active')) {
        $('.container').removeClass('active');
    } else{
        $('.container').addClass('active');
    }

    /*if (direction == 'plus') {
        countAnimePlus.pause();
    }*/

    /*if (direction == 'minus') {
        countAnimeMinus.pause();        
    }
});

$(document).on("mousemove", function (event) {
    mousePos = event.pageY;

    if (draggable) {
        position = mousePos - currentPos;
        $('.one').css('transform', 'translateY(' + position / 2 + 'px)');
		//$('.one').css('transform', 'translateY(\'-200px)');
    }

    if (position <= (offset * -1) && draggable) {
        center();
        count++;
        //plus();
		$('.one').css('transform', 'translateY(\'-200)');
    }

    /*if (position >= offset && draggable) {
        center();
        count--;
        minus();
    }
});

$(document).on("mouseup", function (event) {
    if (draggable) {
        center();
    }
});


function center() {
    draggable = false;
    blockAnime = anime({
        targets: '.stepper',
        duration: dur,
        translateY: 0,
    });
}

function plus() {
    direction = 'plus';
    countAnimePlus = anime.timeline();    

    /*$('.next').text(count).css('transform', 'translateY(-100px) translateX(-50%)');

    countAnimePlus.add({ 
        targets: '.active', 
        translateY: 100, 
        translateX: '-50%',
        duration: dur,   
    })
    .add({
        targets: '.next',
        translateY: 0,
        translateX: '-50%',
        duration: dur,
        offset: '-=' + dur,
    });
}*/