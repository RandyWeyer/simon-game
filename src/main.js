import { simonWinCondition } from './simon';
import './styles.css';

var computerOutput = ["Blue", "Yellow", "Blue", "Green"];
var playerOutput = [];

computerOutput.forEach(function(element) {
  $('#computer-solution').append("<li>" + element + "</li>");
});

$(document).ready(function() {
  $('#simon-form').submit(function(event) {
    event.preventDefault();
    $('#player-solution').text("");
    var playerInput = $('#playerInput').val();
    playerOutput.push(playerInput);
    if (simonWinCondition(playerOutput, computerOutput)){
      $('#player-solution').text("You Lose!");
    };
    playerOutput.forEach(function(element) {
      $('#player-solution').append("<li>" + element + "</li>");
    });

  });
});
