//                                    PART 1

// button variables
let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");


// Function turning off and on each class type
var lightFunction = function(typeOfLight, classType) {
  var element = document.getElementById(typeOfLight);
  element.classList.toggle(classType);
}

// If light is on or off
var isGoOn = false;
var isSlowOn = false;
var isStopOn = false;

// function calling lightFunction and printing which bulb is on to the console
var mouseClick = function(event){
  var light = event.target.textContent;
  window[`is${light}On`] = !window[`is${light}On`];
  window[`is${light}On`] ? console.log(`${light} bulb on`) : console.log(`${light} bulb off`);
  lightFunction(`${light.toLowerCase()}Light`, light.toLowerCase());
}

// Creating an event listener for each button 
stopButton.addEventListener('click', mouseClick);
slowButton.addEventListener('click', mouseClick);
goButton.addEventListener('click', mouseClick);

//                                  PART 2

// function printing entered button to the console
var mouseEnter = function(event){
  console.log(`Entered ${event.target.textContent} button`);
}

// function printing left button to the console
var mouseLeft = function(event){
  console.log(`Left ${event.target.textContent} button`);
}

// creating event listeners using functions made above
var buttonArr = [stopButton, slowButton, goButton];
buttonArr.forEach((element) => {
element.addEventListener('mouseenter', mouseEnter)
element.addEventListener('mouseleave', mouseLeft)
});

//                                BONUS

// When a user clicks a button that just turned on, log"<textContent> bulb on" to the console.
// When a user clicks a button that just turned off, log"<textContent> bulb off" to the console.

