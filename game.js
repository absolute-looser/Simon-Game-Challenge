var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence() {
  var x = Math.floor(Math.random() * 4);
  return x;
}
var randomChosenColour = nextSequence();
gamePattern.push(buttonColours[randomChosenColour]);
$("#" + buttonColours[randomChosenColour])
  .fadeIn(100)
  .fadeOut(100)
  .fadeIn(100);
$("#" + buttonColours[randomChosenColour]).click(function () {
  var audio = new Audio("sounds/" + buttonColours[randomChosenColour] + ".mp3");
  audio.play();
});
