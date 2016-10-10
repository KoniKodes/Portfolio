jQuery(document).ready(function(){
   "use strict";

   var screen = document.getElementById("result")[0],
   result = document.querySelectorAll(".display")[0], 
   answer = [],
   decimal = false;

$(".num").click(function(value){
   screen = (this.value);
   answer = screen;
  $("#result").append(screen);
  value.preventDefault();
});


$(".mop").click(function(){
   screen = (this.value);
   answer = screen;
  $("#result").append(screen);
  
});

$(".equlz").click(function(){
	 var lastChar = screen[screen.length -1];
	  if (screen.lastChar === '+' || screen.lastChar === '-' || screen.lastChar === '*' || screen.lastChar === '/' ||  screen.lastChar === ".") {
	  screen = screen.replace(/.s/, "");
	  alert("Please continue the formula"); 
	  }else{
      var subtot = document.getElementById("result").innerHTML;
      var final = eval(subtot);
   	$("#result").append(" = " + final);
}

$(".clr").click(function() {
   answer = " ";
  $("#result").html(answer);
});
 

$(".dot").click(function() {
     if (!decimal){
	 answer = ".";
	  $("#result").html(answer);
	 decimal = true;
 }



});
});
});
