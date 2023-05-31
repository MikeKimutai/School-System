var nav = document.getElementById("menus");
var close = document.getElementById("close");

nav.addEventListener("click",function(){
  document.getElementById("nav").style.display = "block";
  document.getElementById("menus").style.display = "none";
  document.getElementById("close").style.display = "block";
})

close.addEventListener("click",function(){
  document.getElementById("nav").style.display = "none";
  document.getElementById("menus").style.display = "block";
  document.getElementById("close").style.display = "none";
})
const getDate = new Date().getFullYear();
console.log(getDate)
document.getElementById("Date").innerHTML = getDate;