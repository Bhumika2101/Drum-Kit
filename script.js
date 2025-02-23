document.addEventListener("DOMContentLoaded", function () {
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return; 
        audio.currentTime = 0; 
        audio.play();
        key.classList.add("playing");
    }

    function removeTransition(e) {
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    }

    //for mouse click
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => 
        key.addEventListener("click", function () {
            const keyCode = this.getAttribute("data-key");
            playSound({ keyCode });
        })
    );
    //for keyboard
    keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

    window.addEventListener("keydown", playSound);
});
