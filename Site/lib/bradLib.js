/* Crabley Game Lab - HTML CSS Javascript training
   Library of modules that may be used throughout the site
   sort of "global" functions contained in a library */
 
var bradLib = bradLib || {};

bradLib.flashScreen = (function() {
	function flashScreenImplement() {
		const flashScreen = document.getElementById('flash_screen');
		flashScreen.style.display = 'block';
		setTimeout(() => {
			flashScreen.style.display = 'none';
		}, 500); // Adjust the duration as needed
	}
	
	return {
		pf: function() {
			flashScreenImplement();
		}
	}
})();
