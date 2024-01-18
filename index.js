function makeSound(key) {
    let audio; 
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
    
        default:
            break;
    }

}

function btnAnimation(currentKey) {
    const currentElement = document.querySelector(`.${currentKey}`);
    
    currentElement.classList.add("pressed");

    setTimeout(() => {
        currentElement.classList.remove("pressed");
    }, 100);
}

document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", function() {
        makeSound(this.innerText);
        btnAnimation(this.innerText);
    });
});

document.addEventListener("keydown", (event) => {
    makeSound(event.key);
    btnAnimation(event.key);
});
