/* Crabley Game Lab - HTML CSS Javascript training
   Library of modules that may be used throughout the site
   sort of "global" functions contained in a library */
 
var bradLib = bradLib || {};

/* expects a div="flash-screen" element somewhere on the page */
bradLib.flashScreen = (function() {
	function flashScreenImplement(flashColor) {
		const flashScreen = document.getElementById('flash-screen');
		flashScreen.style.backgroundColor = flashColor;
		flashScreen.style.display = 'block';
		setTimeout(() => {
			flashScreen.style.display = 'none';
		}, 500); // Adjust the duration as needed
	}
	
	return {
		pf: function(e) {
			var target = e.target; // get event target without IE fallback
			if (target.getAttribute("id") == "add-to-basket") {
				flashScreenImplement("Blue");
			}
			else {
				// flashScreenImplement("White");
			}
		}
	}
})();

/* expects a div="flash-screen" element somewhere on the page */
bradLib.formInput = (function() {
	function formInputImplement() {
		const flashScreen = document.getElementById('flash-screen');
		flashScreen.style.display = 'block';
		setTimeout(() => {
			flashScreen.style.display = 'none';
		}, 500); // Adjust the duration as needed
	}
	
	return {
		pf: function(e) {
			var target = e.target; // get event target without IE fallback
			formInputImplement();
		}
	}
})();
