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

var getDate = new Date().getFullYear();
document.write('&copy; copyright  '+getDate+''+'Developed by Mike Kimutai');