for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", handleClick);
}



document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(){
  playAudio(event.key);
  drumAnimation(event.key);
}

function handleClick() {
  var drumKey = this.innerHTML;
  playAudio(drumKey);
  drumAnimation(drumKey);
}

function drumAnimation(drumKey)
{
  var element= document.querySelector("."+ drumKey);
  element.classList.add("pressed");
  setTimeout(function(){
    element.classList.remove("pressed");
  },100);
}

function playAudio(drumKey)
{
  var audioFile;
  switch (drumKey) {
    case "w":
      audioFile = "sounds/tom-1.mp3";
      break;
    case "a":
      audioFile = "sounds/tom-2.mp3";
      break;
    case "s":
      audioFile = "sounds/tom-3.mp3";
      break;
    case "d":
      audioFile = "sounds/tom-4.mp3";
      break;
    case "j":
      audioFile = "sounds/snare.mp3";
      break;
    case "k":
      audioFile = "sounds/crash.mp3";
      break;
    case "l":
      audioFile = "sounds/kick-bass.mp3";
      break;

    default: console.log(drumKey);
  }

  var audio = new Audio(audioFile);
  audio.play();
}
