function toggle_tab(node, nth){
    var sw = node.querySelectorAll(".tab-switch > input[type=button]")
    var tab = node.querySelectorAll(".tab-cont > div")
    for (var i = 0; i < sw.length; i++){
        var cl = sw[i].classList
        var tb = tab[i]
        if (i == nth){
            if (!cl.contains("active")) cl.add("active");
            tb.style.display = "block"
            continue
        }
        cl.remove("active")
        tb.style.display = "none"
    }
    //console.log(sw, tab)
}

function main(){
    var w = document.querySelector(".tab-widget")
    console.log(w)
    toggle_tab(w, 0)
    document.querySelectorAll(".tab-switch > input[type=button]").forEach((v, k, p)=>{
        v.onclick = (ev) => {
            toggle_tab(w, k)
        }
    })
}
window.onload = main