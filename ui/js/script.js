/* Preloader */
$(window).on("load", function() {
	$('.preloader').fadeOut("slow");
	$('.layout').delay(600).fadeIn("slow");
});

/*Trying parralax*/
$(function () {
    var $parallaxContainer = $("#parallax-container"); //our container
    var $parallaxItems = $parallaxContainer.find(".parallax");  //elements
    var fixer = -0.004;		//experiment with the value

    $(document).on("mousemove", function (event) {

        var pageX = event.pageX - ($parallaxContainer.width() * 0.5);  //get the mouseX - negative on left, positive on right
        var pageY = event.pageY - ($parallaxContainer.height() * 0.5); //same here, get the y. use console.log(pageY) to see the values

        //here we move each item
        $parallaxItems.each(function () {

            var item = $(this);
            var speedX = item.data("speed-x");
            var speedY = item.data("speed-y");

            TweenLite.to(item, 0.5, {
                x: (item.position().left + pageX * speedX) * fixer,    //calculate the new X based on mouse position * speed 
                y: (item.position().top + pageY * speedY) * fixer
            });

            //or use set - not so smooth, but better performance
            /*TweenLite.set(item, {
                            x: (item.position().left + pageX * speedX )*fixer,
                            y: (item.position().top + pageY * speedY)*fixer
                        });*/

        });
    });
});

/* Custum Arrow Animation */
var elem = document.querySelector('.arr');

function animate(elasticity) {
  anime.remove(elem);
  anime({
	targets: elem,
    translateX: {
		value: '22.5',
		duration: 800
  	},
	rotate: {
		value: '+=1turn',
		duration: 1000,
		easing: 'easeInOutExpo'
	},
	scale: {
		value: '1.5',
		duration: 600,
		delay: 300,
		easing: 'easeInOutQuart'
  	},
    elasticity: elasticity
  });
}

function animateOut(elasticity) {
  anime.remove(elem);
  anime({
	targets: elem,
	translateX: {
		value: '0.0',
		duration: 800
  	},
	rotate: {
		value: '-=1turn',
		duration: 1000,
		easing: 'easeInOutExpo'
	},
	scale: {
		value: '1.0',
		duration: 600,
		delay: 300,
		easing: 'easeInOutQuart'
  	},
    elasticity: elasticity
  });
}

function enterArr() { animate(400) };
function leaveArr() { animateOut(300) };

elem.addEventListener('mouseover', enterArr, false);
elem.addEventListener('mouseout', leaveArr, false);

/* Hover */

function animation(el, elasticity) {
  anime.remove(el);
  anime({
	targets: el,
	scale: {
		value: '1.5',
		duration: 600,
		easing: 'easeInOutQuart'
  	},
	//backgroundColor: ["", "#75CBB3"],
    elasticity: elasticity
  });
}
function animationOut(el, color, elasticity) {
  anime.remove(el);
  anime({
	targets: el,
	scale: {
		value: '1.0',
		duration: 600,
		easing: 'easeInOutQuart'
  	},
	//backgroundColor: ["#75CBB3", color],
    elasticity: elasticity
  });
}

function enterHover(element) { animation(element, 400); }
function leaveHover(element, clr) { animationOut(element, clr, 300); }

var langHov = document.getElementsByClassName("languages");
var btnHov = document.getElementsByClassName("button_menu");
$(langHov[0]).on("mouseover", function(){
	//var init_scale = langHov[0].getBoundingClientRect().width / langHov[0].offsetWidth;
	enterHover(langHov[0]);
})
$(langHov[0]).on("mouseout", function(){
	
	leaveHover(langHov[0], "#F2F2F2");
})
$(langHov[1]).on("mouseover", function(){
	//var init_scale = langHov[1].getBoundingClientRect().width / langHov[1].offsetWidth;
	enterHover(langHov[1]);
})
$(langHov[1]).on("mouseout", function(){
	leaveHover(langHov[1], "#F2F2F2");
})
$(btnHov).on("mouseover", function(){
	//var init_scale = btnHov.getBoundingClientRect().width / btnHov.offsetWidth;
	enterHover(btnHov);
})
$(btnHov).on("mouseout", function(){
	leaveHover(btnHov, "#CCE7E8");
})
