/* Crabley Game Lab - HTML CSS Javascript training
   -- Brad Crabtree
   
   description: updates the text of a id=time-of-day-message with
   a time of day related greeting */

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

// update text with time of day greeting
var messageEl = document.getElementById("time-of-day-message");
messageEl.textContent = greeting;
