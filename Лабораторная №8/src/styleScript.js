function spanSelect() {
    let allSpans = document.documentElement.getElementsByTagName("p")[0].getElementsByTagName("span");
    for (let i = 0; i < allSpans.length; i++){
        allSpans[i].style.color = "red";
    }
}
function spanScale() {
    let allSpans = document.documentElement.getElementsByTagName("p")[1].getElementsByTagName("span");
    for (let i = 0; i < allSpans; i++) {
        allSpans[i].style.fontSize = "50px";
    }
    document.getElementById("id").style.fontSize = "50px"
}
function imageChange() {
    let myImage = document.getElementById("myImage");
    myImage.src = "src/fishes.jpg";
}
function visualizeText() {
    let myText = document.getElementById("myText");
    myText.innerHTML = "<img src='src/milk.jpg'/>";
}

let focusImage = document.getElementById("focusImage");
focusImage.style.transition = "width 1s ease-in";
function scaleImage() {
    focusImage.style.width = "800px";
}
function unscaleImage() {
    focusImage.style.width = "400px";
}

function setBorder() {
    let parag = document.getElementById("parag");
    parag.style.border = "solid pink 2px";
}