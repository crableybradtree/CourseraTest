/* Event listener scripts for my training site
   -- Brad Crabtree, Crabley Game Lab */

var elAddBasketButton = document.getElementById("add-to-basket");
if (elAddBasketButton !== null) {
	elAddBasketButton.addEventListener("click", bradLib.flashScreen.pf, false);
}
else {
	window.alert("button not found");
}
