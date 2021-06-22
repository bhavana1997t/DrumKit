for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML;
        soundPress(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}
document.addEventListener("keypress", function(e) {
    soundPress(e.key);
    buttonAnimation(e.key);
});

function buttonAnimation(buttonPressed) {
    var activeButton = document.querySelector("." + buttonPressed);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

function soundPress(key) {
    switch (key) {
        case "w":
            var w = new Audio("sounds/crash.mp3")
            w.play();
            break;

        case "a":
            var a = new Audio("sounds/kick-bass.mp3")
            a.play();
            break;

        case "d":
            var d = new Audio("sounds/tom-4.mp3")
            d.play();
            break;

        case "s":
            var s = new Audio("sounds/snare.mp3")
            s.play();
            break;

        case "j":
            var j = new Audio("sounds/tom-1.mp3")
            j.play();
            break;

        case "k":
            var drum1 = new Audio("sounds/tom-2.mp3")
            drum1.play();
            break;

        case "l":
            var l = new Audio("sounds/tom-3.mp3")
            l.play();
            break;
        default:
            var drum1 = new Audio("sounds\tom-4.mp3")
            drum1.play();
            break;
    }

}