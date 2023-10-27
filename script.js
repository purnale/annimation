Draggable.create("#dragme",{
    type:'x',
    bounds:".container"
})

function checkOverlaop(){
    var div1 = document.querySelector(".cir");
    var div2 = document.querySelector("#dragme");
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();
if(
    rect1.left <rect2.right
){
    document.querySelector("#video1").Style.opacity = 0
 }
 else{
    document.querySelector("#video1").Style.opacity = 1
 }
}

window.addEventListener("mousemove",checkOverlaop);