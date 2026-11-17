const birthday = new Date("2026-11-18T00:00:00");

function updateCountdown() {

    const now = new Date();

    const difference = birthday - now;

    const display = document.getElementById("countdown");

    if (difference <= 0) {
        display.innerHTML =
            "🎉 HAPPY BIRTHDAY ROWDY HERO! ❤️‍🔥";

        display.classList.add("birthday-glow");

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    display.innerHTML =
        `${days} Days <br>
         ${hours} Hours :
         ${minutes} Minutes :
         ${seconds} Seconds`;
}

updateCountdown();

setInterval(updateCountdown, 1000);

document.getElementById("surpriseBtn")
    .addEventListener("click", function() {

        alert("Your special surprise is coming, Rowdy Hero! ❤️‍🔥");

    });

// Open the birthday surprise
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseSection = document.getElementById("surpriseSection");

surpriseBtn.addEventListener("click", function() {
    surpriseSection.style.display = "block";
    surpriseBtn.style.display = "none";

    const birthdayMusic = document.getElementById("birthdayMusic");
    birthdayMusic.play();
});

// Birthday wish button
const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

wishBtn.addEventListener("click", function() {
    wishMessage.style.display = "block";
    wishBtn.style.display = "none";
});
const envelopeBtn = document.getElementById("envelopeBtn");
const secretMessage = document.getElementById("secretMessage");

envelopeBtn.addEventListener("click", function() {
    secretMessage.style.display = "block";
    envelopeBtn.style.display = "none";
});
const finalWishBtn = document.getElementById("finalWishBtn");
const finalWish = document.getElementById("finalWish");

finalWishBtn.addEventListener("click", function() {
    finalWish.style.display = "block";
    finalWishBtn.style.display = "none";

     document.getElementById("fireworks").style.display = "block";
});

const slideContent = document.getElementById("slideContent");

const memories = [

    "photos/gallery1.jpg.jpg",
    "photos/gallery2.jpg.jpg",
    "photos/gallery3.jpg.jpg",
    "photos/gallery4.jpg.jpg",
    "photos/gallery5.jpg.jpg",
    "photos/gallery6.jpg.jpg",
    "photos/gallery7.jpg.jpg",
    "photos/gallery8.jpg.jpg",
    "photos/gallery9.jpg.jpg"

];

const captions = [
    "😎 Our Rowdy Hero 😎",
    "🎂 Birthday Celebration 🎂",
    "✨ Unforgettable Memories ✨",
    "💕 Special Moments 💕",
    "❤️ Beautiful Memories ❤️",
    "❤️ Moments to Remember ❤️",
    "🌟 Forever Special 🌟",
    "💖 Precious Memories 💖",
    "🔥 The Best Memories 🔥"
];

let slideIndex = 0;

function restartSlideshow() {
    slideIndex = 0;
    slideContent.src = memories[0];
    slideContent.alt = "Memory 1";
    document.getElementById("slideCaption").textContent = captions[0];
}

setInterval(function() {
    slideContent.classList.add("fade");

    setTimeout(function() {
        slideIndex++;

        if (slideIndex >= memories.length) {
            slideIndex = 0;
        }

        slideContent.src = memories[slideIndex];
        slideContent.alt = "Memory " + (slideIndex + 1);

        document.getElementById("slideCaption").textContent = captions[slideIndex];
        console.log("Current caption:", captions[slideIndex]);
        slideContent.classList.remove("fade");

    }, 500);

}, 3000);
document.getElementById("slideCaption").textContent = "💕 Special Moments 💕";

function enterSurprise() {
    const welcome = document.getElementById("welcomeScreen");

    welcome.style.transition = "opacity 1s ease";
    welcome.style.opacity = "0";

    setTimeout(function() {
        welcome.style.display = "none";
    }, 1000);
}