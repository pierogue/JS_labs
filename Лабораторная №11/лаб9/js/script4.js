let canvas = document.getElementById("output");
let canvWidth = canvas.width, canvHeight = canvas.height;
let context = canvas.getContext('2d');
function printGraph() {
	for (x = -canvWidth / 10; x < canvWidth / 10; x += 0.2) {
		eval($("input:radio:checked").val());
		context.fillRect(x * 5 + canvWidth / 2, canvHeight - (y * 5 + canvHeight / 2), 1, 1);
		context.fillStyle = $("#graphColor").value;
	}
}
