
/*----------------------start of navbar---------------------*/

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

/*------------------------end of navbar --------------------*/
/*-----------------click outside the navbar to exit----------------*/

var ClickOutSide = document.getElementsByClassName("main-container")[0];
var navBody = document.getElementById("navId");


ClickOutSide.onclick = function(){
     navClose();
      
}
/*----------------starting of modals 6pc chicken joy-----------------*/
var modalBody = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var openModal = document.getElementById("8pcChickenjoy");
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

/*----------------starting of modals 6pc chicken joy-----------------*/
var modalBody2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close2")[0];
var openModal2 = document.getElementById("6pcChickenjoyWithPalabok");
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

/*-------starting of modals 8pc chicken joy with palabok family pan-----------------*/
var modalBody3 = document.getElementById("modal3");
var span3 = document.getElementsByClassName("close3")[0];
var openModal3 = document.getElementById("8pcChickenjoyWithPalabok");
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

/*-------starting of modals 6pc chicken joy solo-----------------*/
var modalBody4 = document.getElementById("modal4");
var span4 = document.getElementsByClassName("close4")[0];
var openModal4 = document.getElementById("6pcChickenjoySolo");
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

/*-------starting of modals 8pc chicken joy solo-----------------*/
var modalBody5 = document.getElementById("modal5");
var span5 = document.getElementsByClassName("close5")[0];
var openModal5 = document.getElementById("8pcsChickenjoysolo");
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

/*------------------Burger Bundle-----------------*/
var modalBody6 = document.getElementById("modal6");
var span6 = document.getElementsByClassName("close6")[0];
var openModal6 = document.getElementById("BurgerBundle");
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
/*------------------Burger Bundle-----------------*/
var modalBody7 = document.getElementById("modal7");
var span7 = document.getElementsByClassName("close7")[0];
var openModal7 = document.getElementById("ChampKnockOutDeal");
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
/*------------------Champ All-star Meal-----------------*/
var modalBody8 = document.getElementById("modal8");
var span8 = document.getElementsByClassName("close8")[0];
var openModal8 = document.getElementById("ChampAllStarMeal");
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

/*------------------Burger Steak Family Savers-----------------*/
var modalBody9 = document.getElementById("modal9");
var span9 = document.getElementsByClassName("close9")[0];
var openModal9 = document.getElementById("BurgerSteakFamilySavers");
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

/*----------------6pc Burger Steak Family Pan-----------------*/
var modalBody10 = document.getElementById("modal10");
var span10 = document.getElementsByClassName("close10")[0];
var openModal10 = document.getElementById("8pcBurgerSteakFamilyPan");
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

/*----------------8pc Burger Steak Family Pan-----------------*/
var modalBody11 = document.getElementById("modal11");
var span11 = document.getElementsByClassName("close11")[0];
var openModal11 = document.getElementById("8pcBurgerSteakFamilyPan");
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

/*---------6pc Burger Steak w/Jolly Spaghetti Family Pan-----------------*/
var modalBody12 = document.getElementById("modal12");
var span12 = document.getElementsByClassName("close12")[0];
var openModal12 = document.getElementById("6pcBurgerSteakWithJollySpaghettiFamilyPan");
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

/*---------8pc Burger Steak w/Jolly Spaghetti Family Pan-----------------*/
var modalBody13 = document.getElementById("modal13");
var span13 = document.getElementsByClassName("close13")[0];
var openModal13 = document.getElementById("8pcBurgerSteakWithJollySpaghettiFamilyPan");
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

/*---------8pc Burger Steak w/ Palabok Family Pan-----------------*/
var modalBody14 = document.getElementById("modal14");
var span14 = document.getElementsByClassName("close14")[0];
var openModal14 = document.getElementById("8pcBurgerSteakwithPalabokFamilyPan");
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
/*---------6pc Burger Steak w/ Palabok Family Pan-----------------*/
var modalBody15 = document.getElementById("modal15");
var span15 = document.getElementsByClassName("close15")[0];
var openModal15 = document.getElementById("6pcBurgerSteakwithPalabokFamilyPan");
var okBtn15 = document.getElementsByClassName("ok15")[0];

span15.onclick = function(){
     modalBody15.style.display = "none";
}
openModal15.onclick = function(){
     modalBody15.style.display = "block";
}
okBtn15.onclick = function(){
     modalBody15.style.display = "none";
}
modalBody15.onclick = function(event){
     if(event.target == modalBody15){
          modalBody15.style.display = "none";
     }    
}

/*---------6pc Burger Steak w/ Palabok Family Pan-----------------*/
var modalBody15 = document.getElementById("modal15");
var span15 = document.getElementsByClassName("close15")[0];
var openModal15 = document.getElementById("6pcBurgerSteakwithPalabokFamilyPan");
var okBtn15 = document.getElementsByClassName("ok15")[0];

span15.onclick = function(){
     modalBody15.style.display = "none";
}
openModal15.onclick = function(){
     modalBody15.style.display = "block";
}
okBtn15.onclick = function(){
     modalBody15.style.display = "none";
}
modalBody15.onclick = function(event){
     if(event.target == modalBody15){
          modalBody15.style.display = "none";
     }    
}

/*---------6pc Burger Steak w/ Palabok Family Pan-----------------*/
var modalBody16 = document.getElementById("modal16");
var span16 = document.getElementsByClassName("close16")[0];
var openModal16 = document.getElementById("snackTimeFamilySaversFor3");
var okBtn16 = document.getElementsByClassName("ok16")[0];

span16.onclick = function(){
     modalBody16.style.display = "none";
}
openModal16.onclick = function(){
     modalBody15.style.display = "block";
}
okBtn16.onclick = function(){
     modalBody16.style.display = "none";
}
modalBody16.onclick = function(event){
     if(event.target == modalBody16){
          modalBody16.style.display = "none";
     }    
}

/*------------Snack Time Family Savers for 4-----------------*/
var modalBody17 = document.getElementById("modal17");
var span17 = document.getElementsByClassName("close17")[0];
var openModal17 = document.getElementById("SnackTimeFamilySaversFor4");
var okBtn17 = document.getElementsByClassName("ok17")[0];

span17.onclick = function(){
     modalBody17.style.display = "none";
}
openModal17.onclick = function(){
     modalBody17.style.display = "block";
}
okBtn17.onclick = function(){
     modalBody17.style.display = "none";
}
modalBody17.onclick = function(event){
     if(event.target == modalBody17){
          modalBody17.style.display = "none";
     }    
}

  




