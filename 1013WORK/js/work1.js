/**
 * Created by Administrator on 2017/10/14.
 */
window.onload=function() {
    document.addEventListener("touchstart", function (ev) {
        ev.preventDefault();
    })
   var uls1=document.getElementById("uls1");
    var uls2=document.getElementById("uls2")

    var d1 = document.getElementById("nav_div1");
    var d2 = document.getElementById("nav_div2");

    var bj=document.getElementById("bj")
   d1.addEventListener("touchstart",function(ev){
       d2.style.color=" #000000"
        d1.style.color="blue"
       uls2.style.display="none";
       uls1.style.display="block";
    })

    d2.addEventListener("touchstart",function(ev){
        uls1.style.display="none";
        uls2.style.display="block";
        d1.style.color=" #000000"
        d2.style.color="blue"
    })
        bj.addEventListener("touchstart",function(ev) {
        location.href="work2.html"
        })

}
