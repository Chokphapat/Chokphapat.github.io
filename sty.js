document.addEventListener("DOMContentLoaded", function() {
    init();
});

function init() {
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");

    var clickCount = 0;

    noButton.addEventListener("click", function() {
        clickCount++;
        expandYesButton(yesButton, clickCount);
    });
}

function expandYesButton(button, clickCount) {
    var newWidth = 50 + clickCount * 10; 
    var newHeight = 50 + clickCount * 10;
    var newSize = 16 + clickCount * 2; 
    button.style.width = newWidth + "px";
    button.style.height = newHeight + "px";
    button.style.fontSize = newSize + "px";
}
