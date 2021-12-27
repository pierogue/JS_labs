let svin = document.getElementById("svin");
let sir = document.getElementById("sir");

sir.onclick = () => {
    let x = 0;
    let move = setInterval(()=>{
        x++;
        sir.style.left = 4 * x + "px"
    }, 10);
}

svin.onclick = () => {
    let start = Date.now();
    let x = 0;
    let move = setInterval(()=>{
        x++;
        let xExpr = 3*x;;
        let yExpr = 10*Math.sin(x / 5);
        svin.style.top = yExpr + "px";
        svin.style.left = xExpr + "px";
        let currentMoment = Date.now();
        if (currentMoment - start >= 3000){
            clearInterval(move);
            svin.style.top = "0";
            svin.style.left = "0";
        }
    }, 10);
}