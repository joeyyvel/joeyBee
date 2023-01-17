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

   var ClickOutSide = document.getElementsByClassName("main-container")[0];
   var navBody = document.getElementById("navId");

   
   ClickOutSide.onclick = function(){
        navClose();
         
   }
/*----------------------------End of left navbar ------------------------*/
  
            /* ----modal section---- */
/* 8-pc. Chickenjoy Bucket w/ Jolly Spaghetti Family Pan */

var modalBody = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var openModal = document.getElementById("columnOnePic1Hover");
var okBtn = document.getElementsByClassName("ok")[0];

span.onclick = function(){
    modalBody.style.display = "none";
}

openModal.onclick = function(){
    modalBody.style.display = "block";
}

okBtn.onclick = function(){
    modalBody.style.display = "none";
}

modalBody.onclick = function(event){
    if(event.target == modalBody){
        modalBody.style.display = "none";
    }
}


/* 6 pc. chickenjoy with palabok */

var modalBody2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close2")[0];
var openModal2 = document.getElementById("columnOnePic2Hover2");
var okBtn2 = document.getElementsByClassName("ok2")[0];

openModal2.onclick = function(){
    modalBody2.style.display = "block";
}
span2.onclick = function(){
    modalBody2.style.display = "none";
}
okBtn2.onclick = function(){
    modalBody2.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modalBody2){
        modalBody2.style.display = "none";
    }  
}

 /* 8-pc. chicken joy solo */
var modalBody3 = document.getElementById("modal3");
var span3 = document.getElementsByClassName("close3")[0];
var openModal3 = document.getElementById("8pcChickenjoySolo");
var okBtn3 = document.getElementsByClassName("ok3")[0];

openModal3.onclick = function(){
    modalBody3.style.display = "block";
}
span3.onclick = function(){
    modalBody3.style.display = "none";
}
okBtn3.onclick = function(){
    modalBody3.style.display = "none";
}
modalBody3.onclick = function(event){
   if(event.target == modalBody3){
    modalBody3.style.display = "none";
   }
}

/* 1-pc chicken joy w/ burger steak */
var modalBody4 = document.getElementById("modal4");
var span4 = document.getElementsByClassName("close4")[0];
var openModal4 = document.getElementById("1pcChickenwithBurgerSteak");
var okBtn4 = document.getElementsByClassName("ok4")[0];

openModal4.onclick = function(){
    modalBody4.style.display = "block";
}
span4.onclick = function(){
    modalBody4.style.display = "none";
}
okBtn4.onclick = function(){
    modalBody4.style.display = "none";
}
modalBody4.onclick = function(event){
    if(event.target == modalBody4){
        modalBody4.style.display = "none";
    }    
}
/* Jolly Spaghetti w/ Yumburger */
var modal5 = document.getElementById("modal5");
var span5 = document.getElementsByClassName("close5")[0];
var openModal5 = document.getElementById("JollySpaghettiWithYumburger");
var okBtn5 = document.getElementsByClassName("ok5")[0];

openModal5.onclick = function(){
    modal5.style.display = "block";
}
span5.onclick = function(){
    modal5.style.display = "none";
}
okBtn5.onclick = function(){
    modal5.style.display = "none";
}
modal5.onclick = function(event){
    if(event.target == modal5){
        modal5.style.display = "none";
    }
}
/* Burger Bundle */
var modal6 = document.getElementById("modal6");
var span6 = document.getElementsByClassName("close6")[0];
var openModal6 = document.getElementById("BurgerBundle");
var okBtn6 = document.getElementsByClassName("ok6")[0];

openModal6.onclick = function(){
    modal6.style.display = "block";
}
span6.onclick = function(){
    modal6.style.display = "none";
}
okBtn6.onclick = function(){
    modal6.style.display = "none";
}
modal6.onclick = function(event){
    if(event.target == modal6){
        modal6.style.display = "none";
    }
}

