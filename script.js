// Gift Open
function openGift() {

    document.getElementById("home").style.display = "none";

    document.getElementById("birthday").style.display = "flex";

    // Birthday sound
    playMusic();
}


// Candle Light
function lightCandle() {

    document.getElementById("cake").src = "candle-on.png";

    document.getElementById("candleButton").innerHTML =
        "✨ MAKE A WISH ✨";

    // Small celebration
    createHearts();
}


// Birthday Song
function playMusic() {

    let song = document.getElementById("birthdaySong");

    song.play().catch(function() {

        console.log("Click Play Birthday Song to start music.");

    });

}


// Floating Hearts
function createHearts() {

    for (let i = 0; i < 20; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = "20px";
        heart.style.zIndex = "10";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        let speed = 3 + Math.random() * 3;

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform:
                        "translateY(-100vh) translateX(" +
                        (Math.random() * 100 - 50) +
                        "px)",
                    opacity: 0
                }
            ],
            {
                duration: speed * 1000,
                easing: "linear"
            }
        );

        setTimeout(function() {
            heart.remove();
        }, speed * 1000);
    }
}
