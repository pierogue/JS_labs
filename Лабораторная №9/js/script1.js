const images = document.getElementsByTagName("img");
const textareas = document.getElementsByTagName("textarea");
window.addEventListener("mousemove", mouseMove);

//Задание 1
function mouseMove(event) {
	if (Mouse.Lbtn) {
		Mouse.posX = event.clientX;
		Mouse.posY = event.clientY;
	}
}

let Mouse = {
	targetImage: null,
	posX: null,
	posY: null,
	dx: null,
	dy: null,
	Lbtn: false
};

for (let index = 0; index < images.length; index++)
{
	images[index].onmousedown = imageMouseDown;
	images[index].onmouseup = imageMouseUp;
}
for (let index = 0; index < textareas.length; index++) {
	textareas[index].onmousedown = imageMouseDown;
	textareas[index].onmouseup = imageMouseUp;
}

function imageMouseDown(event) {
	event.preventDefault();
	Mouse.targetImage = this;
	Mouse.Lbtn = true;
	Mouse.posX = event.clientX;
	Mouse.posY = event.clientY;

	Mouse.dx = event.layerX;
	Mouse.dy = event.layerY;

	imageMove();
}


function imageMouseUp() {
	Mouse.Lbtn = false;
	Mouse.targetImage = null;
}


function imageMove() {
	if (Mouse.Lbtn) {
		Mouse.targetImage.style.top = Mouse.posY - Mouse.dy + "px";
		Mouse.targetImage.style.left = Mouse.posX - Mouse.dx + "px";
		window.requestAnimationFrame(imageMove);
	}
}
