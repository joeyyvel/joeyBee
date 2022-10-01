/*----------------------start of navbar---------------------*/
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
/*------------------------end of navbar --------------------*/

/*-----------------click outside the navbar to exit----------------*/

var ClickOutSide = document.getElementsByClassName("main-container")[0];
var navBody = document.getElementById("navId");


ClickOutSide.onclick = function(){
     navClose();
      
}

            /* ----modal section---- */
/* 8-pc. Chickenjoy Bucket w/ Jolly Spaghetti Family Pan */

var modalBody = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var openModal = document.getElementById("LongganisaSolo");
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
  
            /* ----modal section---- */
/*------------------- Longganisa Solo---------------------- */

var modalBody2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close2")[0];
var openModal2 = document.getElementById("LongganisaWithDrink");
var okBtn2 = document.getElementsByClassName("ok2")[0];

span2.onclick = function(){
    modalBody2.style.display = "none";
}

openModal2.onclick = function(){
    modalBody2.style.display = "block";
}

okBtn2.onclick = function(){
    modalBody2.style.display = "none";
}

modalBody2.onclick = function(event){
    if(event.target == modalBody2){
        modalBody2.style.display = "none";
    }
}

  
            /* ----modal section---- */
/*------------------- Breakfast hotdog solo---------------------- */

var modalBody3 = document.getElementById("modal3");
var span3 = document.getElementsByClassName("close3")[0];
var openModal3 = document.getElementById("BreakfastHotdogSolo");
var okBtn3 = document.getElementsByClassName("ok3")[0];

span3.onclick = function(){
    modalBody3.style.display = "none";
}

openModal3.onclick = function(){
    modalBody3.style.display = "block";
}

okBtn3.onclick = function(){
    modalBody3.style.display = "none";
}

modalBody3.onclick = function(event){
    if(event.target == modalBody3){
        modalBody3.style.display = "none";
    }
}

 
            /* ----modal section---- */
/*------------------- Breakfast hotdog w/ drink---------------------- */

var modalBody4 = document.getElementById("modal4");
var span4 = document.getElementsByClassName("close4")[0];
var openModal4 = document.getElementById("BreakfastHotdogw/Drink");
var okBtn4 = document.getElementsByClassName("ok4")[0];

span4.onclick = function(){
    modalBody4.style.display = "none";
}

openModal4.onclick = function(){
    modalBody4.style.display = "block";
}

okBtn4.onclick = function(){
    modalBody4.style.display = "none";
}

modalBody4.onclick = function(event){
    if(event.target == modalBody4){
        modalBody4.style.display = "none";
    }
}


