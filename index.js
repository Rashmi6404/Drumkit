// Function to handle the click event
function clicker() {
  var buttonInnerHTML = this.innerHTML; // Get the innerHTML of the clicked button

  playSound(buttonInnerHTML); // Play sound based on button's text
}

// Function to play sound based on button innerHTML or key press
function playSound(buttonInnerHTML) {
  switch (buttonInnerHTML) {
    case "A":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "S":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "D":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "F":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "G":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "H":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "J":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHTML); // Log for unexpected input
  }
}

// Add event listeners to the drum buttons for click events
var drums = document.querySelectorAll(".drum");
drums.forEach(function(drum) {
  drum.addEventListener("click", clicker); // Trigger the clicker function on click
});

// Add event listener for keyboard events
document.addEventListener("keydown", function(event) {
  var key = event.key.toUpperCase(); // Get the pressed key and convert it to uppercase (to match button innerHTML)
  
  // Trigger the corresponding sound based on key press
  playSound(key);
});

