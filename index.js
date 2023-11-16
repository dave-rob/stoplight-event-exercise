// Stoplight exercise part 1

// button variables
let stopButton = document.getElementById("stopButton")
let slowButton = document.getElementById("slowButton")
let goButton = document.getElementById("goButton")


// Function turning off and on each class type
var lightFunction = function(typeOfLight, classType) {
  var element = document.getElementById(typeOfLight);
  element.classList.toggle(classType);
}

// Creating an event listener for each button 
stopButton.addEventListener('click', function (){
  lightFunction("stopLight", "stop");
});
slowButton.addEventListener('click', function (){
  lightFunction("slowLight", "slow");
});
goButton.addEventListener('click', function (){
  lightFunction("goLight", "go")
});



