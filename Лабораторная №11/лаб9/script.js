let submenus = document.getElementsByClassName("subMenu");
let menus = document.getElementsByClassName("menuItem");

$("#nav").mouseenter(()=>{
    let target = event.target;
    let s = target.getElementsByClassName('subMenu');
        s[0].style.display='block';
        s[0].style.animation = "anim 0.2s linear "
})

$("#nav").mouseleave(() => {
    for(let i = 0;i < submenus.length;i++){
        submenus[i].style.display = "none";
    }
})