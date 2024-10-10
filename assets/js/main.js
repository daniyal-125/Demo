$('#slider-one').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsiveClass:true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:0
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});


$('#slider-two').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsiveClass:true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1,
            margin:0,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
});



// ==========Accordian===start
jQuery(function ($) {

	var $question = $('.question');
	var $answer = $('.answer');

	$question.click(function(){

		// Hide all answers
		$answer.slideUp();

		// Check if this answer is already open
		if($(this).hasClass('open')){
			// If already open, remove 'open' class and hide answer
			$(this).removeClass('open')
			       .next($answer).slideUp();
		// If it is not open...
		}else{
			// Remove 'open' class from all other questions
			$question.removeClass('open');
			// Open this answer and add 'open' class
			$(this).addClass('open')
			       .next($answer).slideDown();
				   
		}
	});

});
