var numOfDrumBtns = document.querySelectorAll('.drum').length;

for (var i = 0; i < numOfDrumBtns; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});

document.querySelectorAll('.drum')[i].addEventListener('keydown', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

}


function makeSound(key) {
    switch(key) {
        case 'w':
            var tom = new Audio('sounds/tom-1.mp3');
            tom.play();
        break;

        case 'a':
            var tom = new Audio('sounds/tom-2.mp3');
            tom.play();
        break;

        case 's':
            var tom = new Audio('sounds/tom-3.mp3');
            tom.play();
        break;

        case 'd':
            var tom = new Audio('sounds/tom-4.mp3');
            tom.play();
        break;

        case 'j':
            var tom = new Audio('sounds/kick-bass.mp3');
            tom.play();
        break;

        case 'k':
            var tom = new Audio('sounds/snare.mp3');
            tom.play();
        break;

        case 'l':
            var tom = new Audio('sounds/crash.mp3');
            tom.play();
        break;

        default: console.log(pressBtn);
    }
}

function buttonAnimation(currentKey) {
    var keyPressed = document.querySelector('.' + currentKey);
    keyPressed.classList.toggle('pressed');

    setTimeout(function() {
        keyPressed.classList.toggle('pressed');
    }, 100);
}
