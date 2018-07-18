$(document).ready(function () {
'use strict';

var fruit = ["kiwi", "pine", "mango", "passion"],
	  simonseq = [], // random number for simon to use
      playrseq = [], // numbers clicked by user
      i = 0,
      round = 0,
	  maxRound = 5,
      strict = false,
	  error = false,
	  delayErr = false,
	  waiter,
	  waiting,
      animationStopped = true,
      startTime;
$("#board").addClass("cboard");	  
$("#strictOff").hide();
$("#reset").hide();
$("#msg").text("  ");   
 $("#msg1").text("Dance for " + maxRound + " Rounds");   
 
$("#strictOn").on("click", function(){
    $(this).hide();
    $("#strictOff").show();
    $(".strictMode").text("ON");
    strict = true;
});

$("#strictOff").on("click", function(){
    $(this).hide();
    $("#strictOn").show();
    $(".strictMode").text("OFF");
    strict = false;
});


$("#start").on("click", function(){
    $(this).hide();
    $("#reset").show();
	$("#strictOff").off("click");
	$("#strictOn").off("click");
	$("#msg").empty(); 
    $("#msg1").empty();
    round = 0;
	for (i=0; i < 20; i++) {
   simonseq[i] = Math.floor(Math.random() * 4);

	}
    console.log("Random List is " + simonseq);
     newRound();
	
});

$("#reset").on("click", function(){
     resetGame();
});

function resetGame(){
	  simonseq = [], // random number for simon to use
      playrseq = [], // numbers clicked by user
      round = 0,
	  maxRound = maxRound,
      strict = false,
	  error = false;
	$(".roundNum").text(" ");
	$("#strictOff").hide();
    $("#strictOn").show();
    $(".strictMode").text("OFF");
	$("#board").removeClass("cwin");
	$("#board").addClass("cboard");	
			  for (i = 0; i < 5; i++){
		   $('*[id="' + i + '"]').addClass("coco");	
			  }
    $("#msg").empty();
$("#msg1").text("Dance for " + maxRound + " Rounds"); 
	$("#msg2").empty(); 
	$("#reset").hide();
    $("#start").show();
}	

function newRound() {
    $("#msg").empty();
	$("#msg1").empty();
   round ++;
  $(".roundNum").text(round);
  simonMove();
}
 function simonMove(){
    $("#0,#1,#2,#3").css("pointer-events", "none");
	 var i = 0;
	var classAdded;
	var ind;
	var hilite = setInterval(timing, 450);
	 
      function timing(){
        var step=Math.floor(i/4);
          animationStopped=false;


	    if (i%4===1 && i< round*4){
            if (simonseq[step] === 0){
				console.log("Button pressed "  + simonseq[step] + " at Round " + round);		
               $('*[id="' +0+ '"]').addClass("ckiwi");
                 kiwisnd.load();
                 kiwisnd.play();
                 classAdded = "ckiwi";
				 ind = 0;
             } else if (simonseq[step] === 1){
				console.log("Button pressed "  + simonseq[step] + " at Round " + round);		
                 $('*[id="' +1+ '"]').addClass("cpine");
                 pinesnd.load();
                 pinesnd.play();
                 classAdded = "cpine";
				 ind = 1;
             } else if (simonseq[step] === 2){
				console.log("Button pressed "  + simonseq[step] + " at Round " + round);		
               $('*[id="' +2+ '"]').addClass("cmango");
                 mangosnd.load();
                 mangosnd.play();
                 classAdded = "cmango";
				 ind = 2;
             } else if (simonseq[step] === 3){
 				console.log("Button pressed "  + simonseq[step] + " at Round " + round);		
			     $('*[id="' +3+ '"]').addClass("cpassion");
                 passionsnd.load(); 
                 passionsnd.play();
                 classAdded = "cpassion";
				 ind = 3;
           }
        } else if (i%4===2 && i< round*4){ 
		   if (ind === 0){
            $('*[id="' +ind+ '"]').removeClass("ckiwi");
		}
		  else if (ind === 1){
            $('*[id="' +ind+ '"]').removeClass("cpine");
		}
		else if (ind === 2){
            $('*[id="' +ind+ '"]').removeClass("cmango");
		}	
		else if (ind === 3){
            $('*[id="' +ind+ '"]').removeClass("cpassion");
		}	
		//console.log("clearing id " + ind + " of " + classAdded);
	    //round++;

        } else if (i===round*4){
		console.log("Clearing Interval and going to Player Move");
            clearInterval(hilite);
			  $("#msg1").text("Your Turn");
			 $("#0,#1,#2,#3").css("pointer-events", "auto");
       playrMove();
        }
        i++;
	
    }
}

function playrMove(){
   console.log("playr called");
     playrseq = [];
		  for (i = 0; i < 5; i++){
		   $('*[id="' +i+ '"]').on("click");
		  }

}
  
  //player listener
  $("#0").mousedown(function() {

	 if (! animationStopped){
         $('*[id="' + 0 + '"]').addClass("ckiwi");
         kiwisnd.load();
         kiwisnd.play();
         playrseq.push(0);
         //console.log("Player played " +playrseq + " for Round " + round);
         //console.log("pushed player length is " + playrseq.length);
         //console.log("Player list is " + playrseq);
          console.log("Button pressed " + 0 );
     }
	 });
	  $("#0").mouseup(function() { 
	 if (! animationStopped){
         $('*[id="' + 0 + '"]').removeClass("ckiwi");	 
         checkPlay();
     }
});

  $("#1").mousedown(function() {
	 if (! animationStopped){
         $('*[id="' + 1 + '"]').addClass("cpine");
         pinesnd.load();
         pinesnd.play();
         playrseq.push(1);
         //console.log("Player played " +playrseq + " for Round " + round);
         //console.log("pushed player length is " + playrseq.length);
         //console.log("Player list is " + playrseq);
          console.log("Button pressed " + 1 );
     }
     });		 
	  $("#1").mouseup(function() {
	 if (! animationStopped){
         $('*[id="' + 1 + '"]').removeClass("cpine");	 
        checkPlay();
     }
});

  $("#2").mousedown(function() {
	 if (! animationStopped){
         $('*[id="' + 2 + '"]').addClass("cmango");
         mangosnd.load();
         mangosnd.play();
         playrseq.push(2);
         //console.log("Player played " +playrseq + " for Round " + round);
         //console.log("pushed player length is " + playrseq.length);
         //console.log("Player list is " + playrseq);
          console.log("Button pressed " + 2);
     }
     });		 
	  $("#2").mouseup(function() {
	 if (! animationStopped){
         $('*[id="' + 2 + '"]').removeClass("cmango");	 
	   checkPlay();
     }
});

  $("#3").mousedown(function() {
	if (! animationStopped){
         $('*[id="' + 3 + '"]').addClass("cpassion");
         passionsnd.load();
         passionsnd.play();
         playrseq.push(3);
         //console.log("Player played " +playrseq + " for Round " + round);
         //console.log("pushed player length is " + playrseq.length);
         //console.log("Player list is " + playrseq);
          console.log("Button pressed " + 3);
    }
	});	 
  $("#3").mouseup(function() {
	 if (! animationStopped){
         $('*[id="' + 3 + '"]').removeClass("cpassion");	 
        checkPlay();
     }
	});


 function checkPlay(){		
//check playr sequence
 		$("#msg").empty();
		$("#msg1").empty();
   if (playrseq[playrseq.length-1]===simonseq[playrseq.length-1]){
    if (playrseq.length===round){
	// if playr and simon match then check for winner
	    console.log("correct round " +round);
         clearInterval(waiting);
		 
        if(maxRound === round) {

		$("#msg2").text("Congratulations! You Won!");
        $("#board").addClass("cwin");
		$("#board").removeClass("cboard");
		  winnersnd.load();
          winnersnd.play();		
	  for (i = 0; i < 5; i++){
		   $('*[id="' + i + '"]').removeClass("coco");	
			}
		 setTimeout (function(){
		resetGame();   
			  }, 8000);
      } else {
	  setTimeout (function(){
            playrseq = [];
			round++;
			$(".roundNum").text(round);
			$("#msg").empty();
			$("#msg1").empty();
            simonMove();
		}, 750);
          }
       }
	   
    }else {
      // Otherwise it is an Error
	  if (!strict){
	  setTimeout (function(){
	  console.log("incorrect "+round);
	  wrongsnd.play();  
	  $("#msg").text("You Missed a Step!");
	  $("#msg1").text("Try Again");
		round = round;
       $("#roundNum").text(round);
      clearInterval(waiting);
        playrseq = []; 
        simonMove();		 
		}, 1000);	 
}

 else if(strict) {
		$("#msg").empty(); 
        $("#msg1").empty();
		lostsnd.load();
		lostsnd.play();
		setTimeout (function(){
		$("#msg").text("Error in Strict Mode");		
		$("#msg1").text("Start Game Over!");
		    }, 1000);

	//	console.clear();
			$("#msg").empty(); 
        $("#msg1").empty();
			animationStopped=false;
	        resetGame();
    } 
 }
 }
  });
