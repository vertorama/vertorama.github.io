/* preven images from copying by right click / drag*/
document.onmousedown = disableclick;
status = "Right Click Disabled";
function disableclick(event) {
	if (event.button == 2) {
		// alert(status);
		return false;
	}
}
$("img").each(function() {
	if ($(this).prop("id") != "") {
		// alert($(this).prop("id"));
		document.getElementById($(this).prop("id")).ondragstart = function() {
			return false;
		};
	}
	// console.log($(this).prop("src"));
});
