/*----------------------start of navbar---------------------*/

var myVar;

function myFunction(){
    
      myVar = setTimeout(pageShow, 30);
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






/* Start of modal */
/* ------- chicken sandwich modal---------*/
var modalBody = document.getElementById("modal");
var spanClose = document.getElementsByClassName("close")[0];
var openModal = document.getElementById("chickenSandwich");
var okBtn = document.getElementsByClassName("ok")[0];

openModal.onclick = function(){
    modalBody.style.display = "block";
}
spanClose.onclick = function(){
    modalBody.style.display = "none";
}
okBtn.onclick = function(){
    modalBody.style.display = "none";
}
modalBody.onclick = function(){
    modalBody.style.display = "none";
}

/* Chicken Sandwich w/Fries & Drink */
var modalBody2 = document.getElementById("modal2");
var spanClose2 = document.getElementsByClassName("close2")[0];
var openModal2 = document.getElementById("ChickenSandwich");
var okBtn2 = document.getElementsByClassName("ok2")[0];

openModal2.onclick = function(){
    modalBody2.style.display = "block";
}
spanClose2.onclick = function(){
    modalBody2.style.display = "none";
}
okBtn2.onclick = function(){
    modalBody2.style.display = "none";
}
modalBody2.onclick = function(event){
    if(event.target == modalBody2){
        modalBody2.style.display = "none";
    }
}

/* Tuna Pie Trio */
var modal3 = document.getElementById("modal3");
var spanClose3 = document.getElementsByClassName("close3")[0];
var openModal3 = document.getElementById("tunaPieTrio");
var okBtn3 = document.getElementsByClassName("ok3")[0];

openModal3.onclick = function(){
    modal3.style.display = "block";
}
spanClose3.onclick = function(){
    modal3.style.display = "none";
}
okBtn3.onclick = function(){
    modal3.style.display = "none";
}
modal3.onclick = function(event){
    if(event.target == modal3){
        modal3.style.display = "none";
    }
}