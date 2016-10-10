$(document).ready(function(){
var randomQuote;
var randomNum;
var randomAuthor;

getQuote();

"use strict";
function getQuote(){
  // Setup Quote Array
  var quotes = ["Where you start is not as important as where you finish.", 
"Do the hard jobs first. The easy jobs will take care of themselves.",
"The best preparation for tomorrow is doing your best today.",
"All our dreams can come true, if we have the courage to pursue them.",
"The starting point of all achievement is desire.",
"If not us, who? If not now, when?", 
"The only way of finding the limits of the possible is by going beyond them into the impossible.",
"The successful warrior is the average man, with laser-like focus.",
"You have to learn the rules of the game. And then you have to play better than anyone else.",
"Success means having the courage, the determination, and the will to become the person you believe you were meant to be."

];

  // Setup Corresponding Author Array
  var author = [" - Zig Ziglar",
  " - Dale Carnegie",
  " - H. Jackson Brown, Jr.",
  " - Walt Disney",
  " - Napoleon Hill",
  " - John F. Kennedy",
  " - Arthur C. Clarke",
  " - Bruce Lee",
  " - Albert Einstein",
  " - George Sheehan"
  ];
 
  // Genrate Random array 
  randomNum = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomNum];
  randomAuthor = author[randomNum];
  
  // Send to Spans
  $(".phrase").text(randomQuote);
  $(".author").text(randomAuthor);
}
  // end getQuote Function 
  
  $(".tweetbtn").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" +randomQuote + " " + randomAuthor);
 });
 
 $("#newQuote").on("click", function(){
    getQuote();
 });

 
   });
