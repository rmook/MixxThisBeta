// Problem:
// 	When nav link is clicked, nothing happens.
// Solution:
// 	Clicking a menu item hides any 
// 	currently shown menu and displays the new one

var menubeer = $(".beer");
var menuwells = $(".wells");

$("#beer").click(function() {
	menuwells.hide();
	menubeer.slideToggle("slow")
});

$("#wells").click(function() {
	menubeer.hide();
	menuwells.slideToggle("slow")
});


// Problem:
// 	When a menu item is clicked, nothing happens.
// Solution:
// 	Clicking a menu item displays the text of that menu item full-size.
// 	

// Problem:
// 	When the device is shaken, nothing happens.
// Solution:
// 	If a menu item is displayed, shaking the 
// 	phone will replace that item with "Thanks!"
