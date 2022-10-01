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

 /*-----------end of navbar----------- */
 /*-----------------click outside the navbar to exit----------------*/

 var ClickOutSide = document.getElementsByClassName("main-container")[0];
 var navBody = document.getElementById("navId");

 
 ClickOutSide.onclick = function(){
      navClose();
       
 }