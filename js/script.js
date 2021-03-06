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
var menuSocial = $(".social")

$("#beer").click(function() {
	menuWells.hide();
	menuSocial.hide();
	// $("#wells, #social").css("background-color",navColor);
	// $("#beer").css("background-color",selectedColor);
	menuBeer.slideToggle("slow")
});

$("#wells").click(function() {
	menuBeer.hide();
	menuSocial.hide();
	// $("#beer, #social").css("background-color",navColor);
	// $("#wells").css("background-color",selectedColor);
	menuWells.slideToggle("slow")
});

$("#social").click(function() {
	menuBeer.hide();
	menuWells.hide();
	// $("#beer, #wells").css("background-color",navColor);
	// $("#social").css("background-color",selectedColor);
	menuSocial.slideToggle("slow")
});
// Problem:
// 	When a menu item is clicked, nothing happens.
// Solution:
// 	Clicking a menu item displays the text of that menu item full-size.
// 	

var $overlay = $('.overlay');
var $orderImage = $("<img>");

$overlay.append($orderImage);

$(".order").click(function(event) {
	event.preventDefault();
	var imageLocation = $(this).attr("id");
	var baseURL = "img/orders/";
	var addy = baseURL.concat(imageLocation);

	$orderImage.attr("src", addy);

	$overlay.show();

});

$overlay.click(function() {
	$overlay.hide();
});



// Problem:
// 	When the device is shaken, nothing happens.
// Solution:
// 	If a menu item is displayed, shaking the 
// 	phone will replace that item with "Thanks!"
