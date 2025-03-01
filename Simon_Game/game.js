var buttonColours = ['red', 'blue', 'green', 'yellow']
var userClickedPattern = []
var gamePattern = []

var level = 0;
var started = false;

$(document).keypress(function() {
    if (started == false) {
        nextSequence();
        started = true;
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $('h1').text('Level ' + level)
    var randomNumber = Math.round(Math.random() * 3)
    var randmChosenColour = buttonColours[randomNumber]
    gamePattern.push(randmChosenColour)

    $('#' + buttonColours[randomNumber]).fadeOut(100).fadeIn(100);
    playSound(buttonColours[randomNumber]);

}

$('.btn').click(function() {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(colour) {
    $('.' + colour).addClass('pressed');
    setTimeout(function() {
        $('.' + colour).removeClass('pressed');
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}


function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('success');

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
     } else {
            var wrong = new Audio('sounds/wrong.mp3');
            wrong.play();
            $('body').addClass('game-over');
            setTimeout(function() {
                $('body').removeClass('game-over');
            }, 200);
            $('h1').text("Game Over, Press Any Key to Restart");
            startOver()
        }
    }
