let submenus = document.getElementsByClassName("subMenu");
let menus = document.getElementsByClassName("menuItem");

nav.onmouseover = ()=>{
    let target = event.target;
    if (target.className == 'menuItem'){
        let s = target.getElementsByClassName('subMenu');
        s[0].style.display='block';
        s[0].style.animation = "anim 0.2s linear "
    }
    else if (target.className = "subMenu"){
        target.style.display = "block";
    }
}

nav.onmouseout = () => {
    for(let i = 0;i < submenus.length;i++){
        submenus[i].style.display = "none";
    }
}