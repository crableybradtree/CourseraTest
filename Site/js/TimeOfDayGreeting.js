/* Crabley Game Lab - HTML CSS Javascript training
   -- Brad Crabtree									*/

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = "Good evening!";
} else if (hourNow > 12) {
	greeting = "Good afternoon";
} else if (hourNow > 0) {
	greeting = "Good morning";
} else {
	greeting = "Welcome";		
}

// place header with time of day greeting on page
document.write('<h3>' + greeting + '</h3>');
