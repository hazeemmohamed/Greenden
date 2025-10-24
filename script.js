var menu = document.getElementById("menu")
var closeTag = document.getElementById("close")

menu.addEventListener("click", function(){
   
    document.getElementById("sideNavBar").classList.remove("translate-x-full")

})
closeTag.addEventListener("click", function(){
    document.getElementById("sideNavBar").classList.add("translate-x-full")
})

window.addEventListener("resize", function() {
  document.getElementById("sideNavBar").classList.add("translate-x-full");
});