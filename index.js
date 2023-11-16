//                                    PART 1

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

//                                  PART 2

// function printing entered button to the console
var mouseEnter = function(event){
  console.log(`Entered ${event.target.textContent} button`)
}

// function printing left button to the console
var mouseLeft = function(event){
  console.log(`Left ${event.target.textContent} button`)
}

// creating event listeners using functions made above
slowButton.addEventListener('mouseenter', mouseEnter)
slowButton.addEventListener('mouseleave', mouseLeft)

goButton.addEventListener('mouseenter', mouseEnter)
goButton.addEventListener('mouseleave', mouseLeft)

stopButton.addEventListener('mouseenter', mouseEnter)
stopButton.addEventListener('mouseleave', mouseLeft)



