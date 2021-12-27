let canvas = document.getElementById("output");
let canvWidth = canvas.width, canvHeight = canvas.height;
let context = canvas.getContext('2d');
let m = 5;
function printGraph() {
	for (x = -canvWidth / 2 / m; x < canvWidth / 2 / m; x += 1 / m) {
		eval(document.forms['funcVisualizer'].elements['selectFunc'].value);
		context.fillRect(x * m + canvWidth / 2, canvHeight - (y * m + canvHeight / 2), 1, 1);
		context.fillStyle = document.getElementById('graphColor').value;
	}
}