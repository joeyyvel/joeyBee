var myVar;

 function myFunction(){
     
       myVar = setTimeout(pageShow, 3000);
 }
 
function pageShow(){
      
      document.getElementById("loader").style.display = "none";      
      document.getElementById("myDiv").style.display = "block";
}
 
 function navOpen(){
     document.getElementById("navId").style.width = "250px";
 }
 
 function navClose(){
  document.getElementById("navId").style.width = "0px";
 
 }

 /*-----------------click outside the navbar to exit----------------*/
/*-----------------click outside the navbar to exit----------------*/

var ClickOutSide = document.getElementsByClassName("main-container")[0];
var navBody = document.getElementById("navId");


ClickOutSide.onclick = function(){
     navClose();
      
}



 /*------------menu box'es redirecting page---------- */
 function myId(){
    window.location = "http://127.0.0.1:5500/bestSeller.html";
 }

var myId2 = document.getElementById("myId2");
myId2.onclick = function(){
    window.location = "http://127.0.0.1:5500/newProducts.html";
}

function myId3(){
    window.location = "http://127.0.0.1:5500/familyMeals.html";
}

var myId4 = document.getElementById("myId4");
myId4.onclick = function(){
    window.location = "http://127.0.0.1:5500/breakFastJoys.html";
}

function myId5(){
    window.location = "http://127.0.0.1:5500/Breakfast.html";
}

var myId6 = document.getElementById("myId6");
myId6.onclick = function(){
    window.location = "http://127.0.0.1:5500/Chickenjoy.html";
}

function myId7(){
    window.location = "http://127.0.0.1:5500/Burgers.html";
}

var myId8 = document.getElementById("myId8");
myId8.onclick = function(){
    window.location = "http://127.0.0.1:5500/JollySpaghetti.html";
}

function myId9(){
    window.location = "http://127.0.0.1:5500/burgerSteak.html";
}

var myId10 = document.getElementById("myId10");
myId10.onclick = function(){
    window.location = "http://127.0.0.1:5500/superMeals.html";
}

function myId11(){
    window.location = "http://127.0.0.1:5500/chickenSandwich.html";
}

var myId12 = document.getElementById("myId12");
myId12.onclick = function(){
    window.location = "http://127.0.0.1:5500/jollyHotdog&Pies.html";
}

function myId13(){
    window.location = "http://127.0.0.1:5500/Palabok.html";
}

var myId14 = document.getElementById("myId14");
myId14.onclick = function(){
    window.location = "http://127.0.0.1:5500/Fries&Sides.html";
}

function myId15(){
    window.location = "http://127.0.0.1:5500/Desserts.html";
}

var myId16 = document.getElementById("myId16");
myId16.onclick = function(){
    window.location = "http://127.0.0.1:5500/Beverages.html";
}

function myId17(){
    window.location = "http://127.0.0.1:5500/JollyKiddieMeal.html";
}