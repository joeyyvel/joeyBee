var myVar;

 function myFunction(){
     
       myVar = setTimeout(pageShow, 20);
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
 /*------------------end of navbar----------------*/
 /*-----------------click outside the navbar to exit----------------*/

 var ClickOutSide = document.getElementsByClassName("main-container")[0];
 var navBody = document.getElementById("navId");

 
 ClickOutSide.onclick = function(){
      navClose();
       
 }
   
 /* --------------------Longganisa solo----------------------- */

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

/* --------------------Beef Tapa----------------------- */

var modalBody2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close2")[0];
var openModal2 = document.getElementById("beefTapa");
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

/* --------------------Beef Tapa Plain Rice----------------------- */

var modalBody3 = document.getElementById("modal3");
var span3 = document.getElementsByClassName("close3")[0];
var openModal3 = document.getElementById("BeefTapaPlainRice");
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

/* --------------------Corned Beef----------------------- */

var modalBody4 = document.getElementById("modal4");
var span4 = document.getElementsByClassName("close4")[0];
var openModal4 = document.getElementById("cornedBeef");
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

/* ------------1-pc.Breakfast Chickenjoy---------------- */

var modalBody5 = document.getElementById("modal5");
var span5 = document.getElementsByClassName("close5")[0];
var openModal5 = document.getElementById("2pcBreakfastChickenjoy");
var okBtn5 = document.getElementsByClassName("ok5")[0];

span5.onclick = function(){
    modalBody5.style.display = "none";
}

openModal5.onclick = function(){
    modalBody5.style.display = "block";
}

okBtn5.onclick = function(){
    modalBody5.style.display = "none";
}

modalBody5.onclick = function(event){
    if(event.target == modalBody5){
        modalBody5.style.display = "none";
    }
}

/* ------------1-pc.Breakfast Chickenjoy---------------- */

var modalBody6 = document.getElementById("modal6");
var span6 = document.getElementsByClassName("close6")[0];
var openModal6 = document.getElementById("2pcBreakfastChickenjoy");
var okBtn6 = document.getElementsByClassName("ok6")[0];

span6.onclick = function(){
    modalBody6.style.display = "none";
}

openModal6.onclick = function(){
    modalBody6.style.display = "block";
}

okBtn6.onclick = function(){
    modalBody6.style.display = "none";
}

modalBody6.onclick = function(event){
    if(event.target == modalBody6){
        modalBody6.style.display = "none";
    }
}

/* ------------Breakfast burger steak---------------- */

var modalBody7 = document.getElementById("modal7");
var span7 = document.getElementsByClassName("close7")[0];
var openModal7 = document.getElementById("BreakfastBurgerSteak");
var okBtn7 = document.getElementsByClassName("ok7")[0];

span7.onclick = function(){
    modalBody7.style.display = "none";
}

openModal7.onclick = function(){
    modalBody7.style.display = "block";
}

okBtn7.onclick = function(){
    modalBody7.style.display = "none";
}

modalBody7.onclick = function(event){
    if(event.target == modalBody7){
        modalBody7.style.display = "none";
    }
}

/* ------------Breakfast Shanghai---------------- */

var modalBody8 = document.getElementById("modal8");
var span8 = document.getElementsByClassName("close8")[0];
var openModal8 = document.getElementById("BreakfastShanghai" );
var okBtn8 = document.getElementsByClassName("ok8")[0];

span8.onclick = function(){
    modalBody8.style.display = "none";
}

openModal8.onclick = function(){
    modalBody8.style.display = "block";
}

okBtn8.onclick = function(){
    modalBody8.style.display = "none";
}

modalBody8.onclick = function(event){
    if(event.target == modalBody8){
        modalBody8.style.display = "none";
    }
}

/* ------------Breakfast Hotdog---------------- */

var modalBody9 = document.getElementById("modal9");
var span9 = document.getElementsByClassName("close9")[0];
var openModal9 = document.getElementById("BreakfastHotdog");
var okBtn9 = document.getElementsByClassName("ok9")[0];

span9.onclick = function(){
    modalBody9.style.display = "none";
}

openModal9.onclick = function(){
    modalBody9.style.display = "block";
}

okBtn9.onclick = function(){
    modalBody9.style.display = "none";
}

modalBody9.onclick = function(event){
    if(event.target == modalBody9){
        modalBody9.style.display = "none";
    }
}

/* ------------2pc pancakes---------------- */

var modalBody10 = document.getElementById("modal10");
var span10 = document.getElementsByClassName("close10")[0];
var openModal10 = document.getElementById("2pcPancakes");
var okBtn10 = document.getElementsByClassName("ok10")[0];

span10.onclick = function(){
    modalBody10.style.display = "none";
}

openModal10.onclick = function(){
    modalBody10.style.display = "block";
}

okBtn10.onclick = function(){
    modalBody10.style.display = "none";
}

modalBody10.onclick = function(event){
    if(event.target == modalBody10){
        modalBody10.style.display = "none";
    }
}

/* ------------Egg & Cheese Pancake sandwich---------------- */

var modalBody10 = document.getElementById("modal10");
var span10 = document.getElementsByClassName("close10")[0];
var openModal10 = document.getElementById("2pcPancakes");
var okBtn10 = document.getElementsByClassName("ok10")[0];

span10.onclick = function(){
    modalBody10.style.display = "none";
}

openModal10.onclick = function(){
    modalBody10.style.display = "block";
}

okBtn10.onclick = function(){
    modalBody10.style.display = "none";
}

modalBody10.onclick = function(event){
    if(event.target == modalBody10){
        modalBody10.style.display = "none";
    }
}

/* ------------Egg & Cheese Pancake sandwich---------------- */

var modalBody11 = document.getElementById("modal11");
var span11 = document.getElementsByClassName("close11")[0];
var openModal11 = document.getElementById("egg&cheesePancakeSandwich");
var okBtn11 = document.getElementsByClassName("ok11")[0];

span11.onclick = function(){
    modalBody11.style.display = "none";
}

openModal11.onclick = function(){
    modalBody11.style.display = "block";
}

okBtn11.onclick = function(){
    modalBody11.style.display = "none";
}

modalBody11.onclick = function(event){
    if(event.target == modalBody11){
        modalBody11.style.display = "none";
    }
}

/* ------------Egg & Cheese sandwich---------------- */

var modalBody12 = document.getElementById("modal12");
var span12 = document.getElementsByClassName("close12")[0];
var openModal12 = document.getElementById("Egg&CheeseSandwich");
var okBtn12 = document.getElementsByClassName("ok12")[0];

span12.onclick = function(){
    modalBody12.style.display = "none";
}

openModal12.onclick = function(){
    modalBody12.style.display = "block";
}

okBtn12.onclick = function(){
    modalBody12.style.display = "none";
}

modalBody12.onclick = function(event){
    if(event.target == modalBody12){
        modalBody12.style.display = "none";
    }
}

/* ------------Bacon, Egg, & Cheese Pancake Sandwich---------------- */

var modalBody13 = document.getElementById("modal13");
var span13 = document.getElementsByClassName("close13")[0];
var openModal13 = document.getElementById("BaconEgg&CheesePancakeSandwich");
var okBtn13 = document.getElementsByClassName("ok13")[0];

span13.onclick = function(){
    modalBody13.style.display = "none";
}

openModal13.onclick = function(){
    modalBody13.style.display = "block";
}

okBtn13.onclick = function(){
    modalBody13.style.display = "none";
}

modalBody13.onclick = function(event){
    if(event.target == modalBody13){
        modalBody13.style.display = "none";
    }
}

/* ------------Bacon, Egg, & Cheese Pancake Sandwich---------------- */

var modalBody14 = document.getElementById("modal14");
var span14 = document.getElementsByClassName("close14")[0];
var openModal14 = document.getElementById("BaconEgg&CheeseSandwich");
var okBtn14 = document.getElementsByClassName("ok14")[0];

span14.onclick = function(){
    modalBody14.style.display = "none";
}

openModal14.onclick = function(){
    modalBody14.style.display = "block";
}

okBtn14.onclick = function(){
    modalBody14.style.display = "none";
}

modalBody14.onclick = function(event){
    if(event.target == modalBody14){
        modalBody14.style.display = "none";
    }
}





  
  

 