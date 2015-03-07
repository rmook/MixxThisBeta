// Problem:
// 	When nav link is clicked, nothing happens.
// Solution:
// 	Clicking a menu item hides any 
// 	currently shown menu and displays the new one.
//  Selected link and text change color.
var navColor = "#b8b6b1";
var selectedColor = "#ffbd49";
var menuBeer = $(".beer");
var menuWells = $(".wells");

$("#beer").click(function() {
	menuWells.hide();
	$("#wells").css("background-color",navColor);
	$("#beer").css("background-color",selectedColor);
	menuBeer.slideToggle("slow")
});

$("#wells").click(function() {
	menuBeer.hide();
	$("#beer").css("background-color",navColor);
	$("#wells").css("background-color",selectedColor);
	menuWells.slideToggle("slow")
});


// Problem:
// 	When a menu item is clicked, nothing happens.
// Solution:
// 	Clicking a menu item displays the text of that menu item full-size.
// 	

$(".menu a").click(function() {
	var link = $(this).text();

});

// Problem:
// 	When the device is shaken, nothing happens.
// Solution:
// 	If a menu item is displayed, shaking the 
// 	phone will replace that item with "Thanks!"
