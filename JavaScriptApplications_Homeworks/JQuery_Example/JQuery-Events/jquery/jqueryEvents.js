$(document).ready(function(){
	'use strict'
	$("p").on({
		mouseenter: function(){
			$(this)
				.text("You entered this paragraph. Now try to click on!")
				.css("color", "red");
		},
		mouseleave: function(){
			$(this)
				.text("Bye! You now leave paragraph!")
				.css("color", "black");
		},
		mousedown: function(){
			$(this)
				.text("Mouse down over paragraph!")
				.css("color", "green");
		}
	});
	
	$("input").on({
		focus: function(){
			$(this)
				.css("background", "blue")
				.css("color", "white")
				.val("I am on focus!");
		},
		blur: function(){
			$(this)
				.css("background", "orange")
				.css("color", "white")
				.val("You blur me!");
		}
	});
	
	$("input").hover(function(){
		$(this)
			.val("You entered me!")
			.css("background", "white")
			.css("color", "black");
	},
	function(){
		$(this)
			.val("Bye! You now leave me!")
			.css("background", "white")
			.css("color", "black");
	});
});