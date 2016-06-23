// main.js
;$(function(){
	'use strict'

	var sidebar = $("#sidebar");
	var mask = $("#mask");
	var sidebar_trigger = $("#sidebar_trigger");
	var backButton = $(".back-to-top");

	// sidebar_trigger.on('click',showSideBar);
	// mask.on("click",hideSideBar);

	function showSideBar(){
		mask.fadeIn();
		sidebar.css('right',0);
	}

	function hideSideBar(){
		mask.fadeOut();
		sidebar.css('right',-300);
	}


	sidebar_trigger.on('click',showSideBar);
	mask.on("click",hideSideBar);

	backButton.on('click',function(){
		$('html body').animate({
			scrollTop : 0
		},800)
	});

	$("window").on('scroll',function(){
		if($(window).scrollTop()<$(window).height){
			backButton.fadeIn();
		}else{
			backButton.fadeOut();
		}
	})

	$(window).trigger("scroll");

})