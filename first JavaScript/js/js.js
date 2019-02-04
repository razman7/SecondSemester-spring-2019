/**
 * file: js.js
 * purpose: interactivity
 **/

 //string
var x = "santa claus exists ";
var x = "that's not true, santa is an anagram for satan";

//number
var deer = 234;

//string
var deerString = "234";

console.log(x);

//list array

//console.log(todo[2]);
//var meme = "hey";
//alert(meme);


//console.log(text);

//calculations
var n = 234;
var y = 19;
var result = n*y;

console.log(todo);

var todo = [
  "ice1.png",
  "ice2.png",
  "ice3.png",
];

var text = "";
for (var i = 0; i < todo.length; i++) {
  text += '<img src="images/' + todo[i] + '" alt= "an image">';
};

var myText = document.getElementById('content');
myText.innerHTML = text;

//function defined
var myFunction = function(){
  var weight = 85;
  var height = 1.8;
  var sum = weight/(height*height);
  return sum;
}

//BMI calculator
document.getElementById("content").innerHTML = myFunction();
