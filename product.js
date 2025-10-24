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

//product search

var productContainer = document.getElementById("product-container")
var searchBox = document.getElementById("searchBox")
var divList = productContainer.querySelectorAll("div")

searchBox.addEventListener("keyup", function(){
    var enteredText = event.target.value.toUpperCase()
    for(count = 0; count < divList.length; count++){
        if (divList[count].textContent.toUpperCase().indexOf(enteredText)<0){
            divList[count].style.display = "none"
        }
        else{
            divList[count].style.display="block"
        }
    }
})
