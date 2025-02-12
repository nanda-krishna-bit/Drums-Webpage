var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var tone_1 = new Audio("sounds/tom-1.mp3");
      tone_1.play();
      break;

    case "s":
      var tone_2 = new Audio("sounds/tom-2.mp3");
      tone_2.play();
      break;

    case "d":
      var tone_3 = new Audio('sounds/tom-3.mp3');
      tone_3.play();
      break;

    case "f":
      var tone_4 = new Audio('sounds/tom-4.mp3');
      tone_4.play();
      break;

    case "j":
      var tone_5 = new Audio('sounds/snare.mp3');
      tone_5.play();
      break;

    case "k":
      var tone_6 = new Audio('sounds/crash.mp3');
      tone_6.play();
      break;

    case "l":
      var tone_7 = new Audio('sounds/kick-bass.mp3');
      tone_7.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
