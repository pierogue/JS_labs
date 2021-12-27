$(document).ready(()=>{
    $("#firstTaskParag span").mouseover(()=>{
        $("#firstTaskParag span").css("color", "red");
    });
    $("#secondTaskParag span").click(()=>{
        $("#secondTaskParag span").css("font-size", "50px")
    });
    $("#myImage").click(()=>{
        $("#myImage").attr("src",'src/fishes.jpg')
    });
    $("#focusImage").mouseover(()=>{
        $("#focusImage").css("width", "800px");
    });
    $("#focusImage").mouseout(()=>{
        $("#focusImage").css("width", "400px");
    });
    $("#myText").click(()=>{
        $('span#myText').replaceWith("<img src='src/milk.jpg'/>");
    });
    $("#parag").dblclick(()=>{
        $("#parag").css("border","pink solid 2px");
    });
});
    
