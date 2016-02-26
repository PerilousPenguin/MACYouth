$(document).ready(function() {
		$(".about").mouseenter(function() {
		$(".volunteer").fadeTo(0.0001,0);
		$(".sign").fadeTo(0.0001,0);
		$(".contact").fadeTo(0.0001,0);
		$(".events").fadeTo(0.0001,0);
	});
	$(".about").mouseleave(function() {
		$(".volunteer").fadeTo(0.0001,1);
		$(".sign").fadeTo(0.0001,1);
		$(".contact").fadeTo(0.0001,1);
		$(".events").fadeTo(0.0001,1);
	});
		$(".sign").mouseenter(function() {
		$(".volunteer").fadeTo(0.0001,0);
		$(".about").fadeTo(0.0001,0);
		$(".contact").fadeTo(0.0001,0);
		$(".events").fadeTo(0.0001,0);
	});
	$(".sign").mouseleave(function() {
		$(".volunteer").fadeTo(0.0001,1);
		$(".about").fadeTo(0.0001,1);
		$(".contact").fadeTo(0.0001,1);
		$(".events").fadeTo(0.0001,1);
	});
		$(".volunteer").mouseenter(function() {
		$(".about").fadeTo(0.0001,0);
		$(".sign").fadeTo(0.0001,0);
		$(".contact").fadeTo(0.0001,0);
		$(".events").fadeTo(0.0001,0);
	});
	$(".volunteer").mouseleave(function() {
		$(".about").fadeTo(0.0001,1);
		$(".sign").fadeTo(0.0001,1);
		$(".contact").fadeTo(0.0001,1);
		$(".events").fadeTo(0.0001,1);
	});
		$(".contact").mouseenter(function() {
		$(".volunteer").fadeTo(0.0001,0);
		$(".sign").fadeTo(0.0001,0);
		$(".about").fadeTo(0.0001,0);
		$(".events").fadeTo(0.0001,0);
	});
	$(".contact").mouseleave(function() {
		$(".volunteer").fadeTo(0.0001,1);
		$(".sign").fadeTo(0.0001,1);
		$(".about").fadeTo(0.0001,1);
		$(".events").fadeTo(0.0001,1);
	});
	$(".events").mouseenter(function() {
		$(".volunteer").fadeTo(0.0001,0);
		$(".sign").fadeTo(0.0001,0);
		$(".contact").fadeTo(0.0001,0);
		$(".about").fadeTo(0.0001,0);
	});
	$(".events").mouseleave(function() {
		$(".volunteer").fadeTo(0.0001,1);
		$(".sign").fadeTo(0.0001,1);
		$(".contact").fadeTo(0.0001,1);
		$(".about").fadeTo(0.0001,1);
	});
});