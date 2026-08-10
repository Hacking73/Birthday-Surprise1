/* =========================
   GET ELEMENTS
========================= */

const intro = document.getElementById("intro");
const constellation = document.getElementById("constellation");
const giftSection = document.getElementById("giftSection");
const balloonSection = document.getElementById("balloonSection");
const birthdayReveal = document.getElementById("birthdayReveal");
const cakeSection = document.getElementById("cakeSection");
const musicSection = document.getElementById("musicSection");
const memorySection = document.getElementById("memorySection");
const letterSection = document.getElementById("letterSection");
const finalSection = document.getElementById("finalSection");

const birthdaySong = document.getElementById("birthdaySong");
const popSound = document.getElementById("popSound");
const magicSound = document.getElementById("magicSound");


/* =========================
   HIDE ALL SECTIONS
========================= */

function hideAll() {

    constellation.style.display = "none";
    giftSection.style.display = "none";
    balloonSection.style.display = "none";
    birthdayReveal.style.display = "none";
    cakeSection.style.display = "none";
    musicSection.style.display = "none";
    memorySection.style.display = "none";
    letterSection.style.display = "none";
    finalSection.style.display = "none";
}


/* =========================
   SHOW SECTION
========================= */

function showSection(section) {

    hideAll();

    section.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   ENTER UNIVERSE
========================= */

document.getElementById("enterBtn").onclick = function () {

    magicSound.currentTime = 0;

    magicSound.play().catch(() => {});

    showSection(constellation);

};


/* =========================
   FOLLOW STAR
========================= */

document.getElementById("continueBtn").onclick = function () {

    showSection(giftSection);

};


/* =========================
   GIFT
========================= */

document.getElementById("giftBtn").onclick = function () {

    magicSound.currentTime = 0;

    magicSound.play().catch(() => {});

    showSection(balloonSection);

};


/* =========================
   BALLOONS
========================= */

const balloons = document.querySelectorAll(".balloon");

let popped = 0;

balloons.forEach(function (balloon) {

    balloon.onclick = function () {

        if (balloon.classList.contains("popped")) {
            return;
        }

        balloon.classList.add("popped");

        /* Pop sound */

        popSound.currentTime = 0;

        popSound.play().catch(() => {});


        /* Balloon disappear */

        balloon.style.transition = "0.25s";

        balloon.style.transform = "scale(1.8)";

        balloon.style.opacity = "0";


        popped++;

        document.getElementById("balloonCount").innerText =
            popped + " / 6";


        /* All balloons popped */

        if (popped === 6) {

            setTimeout(function () {

                showBirthday();

            }, 800);

        }

    };

});


/* =========================
   BIRTHDAY REVEAL
========================= */

function showBirthday() {

    showSection(birthdayReveal);

    magicSound.currentTime = 0;

    magicSound.play().catch(() => {});

    createConfetti();

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const area =
        document.querySelector(".confetti-area");

    area.innerHTML = "";

    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("span");

        piece.style.position = "fixed";

        piece.style.width = "8px";

        piece.style.height = "14px";

        piece.style.background =
            randomColor();

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.zIndex = "100";

        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";

        piece.animate(

            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(110vh) rotate(720deg)",
                    opacity: 0
                }
            ],

            {
                duration:
                    2500 + Math.random() * 2500,

                delay:
                    Math.random() * 500,

                easing: "linear"
            }

        );

        area.appendChild(piece);

    }

}


function randomColor() {

    const colors = [
        "#ff4f9a",
        "#ff8abd",
        "#ffd166",
        "#ffffff",
        "#b86cff"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];

}


/* =========================
   CAKE
========================= */

document.getElementById("cakeBtn").onclick = function () {

    showSection(cakeSection);

};


/* =========================
   LIGHT CANDLE
========================= */

document.getElementById("candleBtn").onclick = function () {

    const cake =
        document.getElementById("cakeImage");

    cake.src = "candle-on.png";

    document.getElementById("wishText").innerHTML =
        "✨ Your wish is now somewhere in the universe... ❤️";

    document.getElementById("candleBtn").innerText =
        "✨ WISH MADE ✨";

    createHearts();


    setTimeout(function () {

        showSection(musicSection);

    }, 2500);

};


/* =========================
   HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.zIndex = "200";

        document.body.appendChild(heart);


        heart.animate(

            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },

                {
                    transform:
                        "translateY(-110vh)",
                    opacity: 0
                }
            ],

            {
                duration:
                    3000 + Math.random() * 3000,

                easing: "ease-out"
            }

        );


        setTimeout(function () {

            heart.remove();

        }, 6000);

    }

}


/* =========================
   MUSIC
========================= */

document.getElementById("musicBtn").onclick =
function () {

    if (birthdaySong.paused) {

        birthdaySong.play().catch(() => {});

        this.innerText = "❚❚ PAUSE";

        document
            .querySelector(".music-disc")
            .style.animationPlayState = "running";

    }

    else {

        birthdaySong.pause();

        this.innerText = "▶ PLAY";

        document
            .querySelector(".music-disc")
            .style.animationPlayState = "paused";

    }

};


/* =========================
   MUSIC ENDS
========================= */

birthdaySong.onended = function () {

    document.getElementById("musicBtn").innerText =
        "▶ PLAY";

};


/* =========================
   MEMORIES
========================= */

document.getElementById("memorySection")
    .style.display = "none";


const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
];

let photoIndex = 0;

const memoryImage =
    document.getElementById("memoryImage");

const dots =
    document.querySelectorAll(".dot");


function changePhoto() {

    photoIndex++;

    if (photoIndex >= photos.length) {
        photoIndex = 0;
    }

    memoryImage.style.opacity = "0";


    setTimeout(function () {

        memoryImage.src =
            photos[photoIndex];

        memoryImage.style.opacity = "1";

    }, 300);


    dots.forEach(function (dot, index) {

        dot.classList.toggle(
            "active",
            index === photoIndex
        );

    });

}


/* Auto slideshow */

setInterval(function () {

    if (
        memorySection.style.display !== "none"
    ) {

        changePhoto();

    }

}, 3500);


/* =========================
   AFTER MUSIC
========================= */

birthdaySong.addEventListener(
    "ended",
    function () {

        showSection(memorySection);

    }
);


/* =========================
   MEMORY CLICK
========================= */

memoryImage.onclick = function () {

    showSection(letterSection);

};


/* =========================
   LETTER
========================= */

document.getElementById("openLetterBtn")
    .onclick = function () {

    document.querySelector(".letter")
        .style.display = "block";

    this.style.display = "none";

    typeLetter();

};


/* =========================
   TYPING LETTER
========================= */

function typeLetter() {

    const text = `Dear Jhili ❤️

Today is not just another birthday.

It is a reminder that somewhere in this huge universe,
you exist — and that makes this world a little more beautiful.

I hope you always keep smiling,
keep dreaming,
and keep shining.

May every wish you make today
find its way to you.

Happy Birthday, Jhili. 🎂❤️

You are truly special.`;


    const letterText =
        document.getElementById("letterText");

    letterText.innerHTML = "";

    let i = 0;


    const typing =
        setInterval(function () {

            letterText.innerHTML +=
                text.charAt(i);

            i++;

            if (i >= text.length) {

                clearInterval(typing);

                setTimeout(function () {

                    document
                        .getElementById("letterSection")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }, 500);

            }

        }, 35);

}


/* =========================
   FINAL SECTION
========================= */

letterSection.addEventListener(
    "click",
    function () {

        const letter =
            document.querySelector(".letter");

        if (
            letter.style.display === "block" &&
            document.getElementById("letterText")
                .innerText.length > 100
        ) {

            setTimeout(function () {

                showSection(finalSection);

                createFinalStars();

            }, 5000);

        }

    }
);


/* =========================
   FINAL STARS
========================= */

function createFinalStars() {

    for (let i = 0; i < 40; i++) {

        const star =
            document.createElement("div");

        star.innerHTML = "✦";

        star.style.position = "fixed";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        star.style.color = "#fff";

        star.style.fontSize =
            5 + Math.random() * 15 + "px";

        star.style.zIndex = "1";

        star.style.opacity = "0";

        document.body.appendChild(star);


        star.animate(

            [
                {
                    opacity: 0
                },

                {
                    opacity: 1
                },

                {
                    opacity: 0
                }
            ],

            {
                duration:
                    2000 + Math.random() * 3000,

                iterations: Infinity
            }

        );

    }

}


/* =========================
   START
========================= */

hideAll();

intro.style.display = "flex";
