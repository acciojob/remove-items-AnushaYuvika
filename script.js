//your JS code here. If required.
let inp = document.querySelector("input");
let select = document.querySelector("#colorSelect");

inp.addEventListener("click", function() {
	let selectedIndex = select.selectedIndex;
	if (selectedIndex !== -1) {
		select.remove(selectedIndex);
	}
});