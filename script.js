const photos = [
  'images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg',
  'images/6.jpg', 'images/7.jpg', 'images/8.jpg', 'images/9.jpg', 'images/10.jpg',
  'images/11.jpg', 'images/12.jpg', 'images/13.jpg', 'images/14.jpg', 'images/15.jpg',
  'images/16.jpg', 'images/17.jpg', 'images/18.jpg', 'images/19.jpg', 'images/20.jpg',
  'images/21.jpg', 'images/22.jpg', 'images/23.jpg', 'images/24.jpg', 'images/25.jpg'
];

let currentPhoto = 0;
const photoElement = document.getElementById("photo");

setInterval(() => {
  currentPhoto = (currentPhoto + 1) % photos.length;
  photoElement.src = photos[currentPhoto];
  photoElement.classList.remove("fadeIn");
  void photoElement.offsetWidth;
  photoElement.classList.add("fadeIn");
}, 2000);

const quotes = {
  happy: [
    "You're smiling, and suddenly the world feels right.",
    "You shine brighter than the city lights at night.",
    "Seeing you happy? That’s my favorite view.",
    "You're the kind of joy that feels brand new.",
    "Happiness looks real good on you.",
    "You're glowing — the sun might be jealous too.",
    "You laugh, and my heart knows peace.",
    "Your joy makes every worry cease."
  ],
  missing: [
    "I miss you in the way that silence misses a song.",
    "Even my dreams ask where you've gone.",
    "Every clock ticks a thought of you.",
    "You're far, but my heart stays true.",
    "If hugs could travel, you'd feel me now.",
    "I miss you — without needing to know how.",
    "Your absence echoes louder than sound.",
    "Until you're near, I'm world-bound."
  ],
  thinking: [
    "Overthinking means you care deeply — I see that.",
    "You’re in your head, but I hold your heart.",
    "Breathe easy — I’m here through every part.",
    "You don’t have to have it all figured out.",
    "Even storms pass — that’s what growth’s about.",
    "If you’re lost in thought, I’ll be your map.",
    "Let go. You’re safe here in my wrap.",
    "One step at a time — I’ve got your back."
  ],
  love: [
    "If love were a blanket, I’d wrap you whole.",
    "You're not alone — not in heart, not in soul.",
    "You deserve love that doesn’t shake or bend.",
    "My love isn’t loud — but it will not end.",
    "I'd write a love letter in every sky for you.",
    "Even silence speaks: 'I love you too.'",
    "I’m a soft place when you need to fall.",
    "My care is steady — through it all."
  ],
  bar: [
    "You rhyme through pain, I write with grace,\nTwo hearts on beat, same sacred space.",
    "Your flow got truth, mine bleeds too,\nBut mine wraps lines around loving you.",
    "Your words cut deep, mine patch the skin,\nWe different genres — still twin within.",
    "You talk of struggle, I hum the light,\nBoth spitting verses in the quiet night.",
    "You rap the truth, I whisper real,\nDifferent tones but same appeal.",
    "You breathe in bars, I exhale verse,\nBoth chasing dreams, reverse the curse.",
    "You kill the mic, I pen the calm,\nYou bring the heat, I bring the balm.",
    "Your cadence sharp, mine hold and float,\nTogether we’re one unwritten note."
  ]
};

const moodNames = {
  happy: "Feeling Good 😊",
  missing: "Missing Me 💭",
  thinking: "In Your Head 🌀",
  love: "Need Some Love 💖",
  bar: "Want a Bar? 🎤"
};

const clickSound = document.getElementById("clickSound");
const moodLabel = document.getElementById("moodLabel");

function showQuote(feeling) {
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }


  createFloatingHeart();

  const quoteList = quotes[feeling];
  const randomIndex = Math.floor(Math.random() * quoteList.length);
  const messageBox = document.getElementById("quoteBox");
  messageBox.innerText = quoteList[randomIndex];
  messageBox.classList.remove("popIn");
  void messageBox.offsetWidth;
  messageBox.classList.add("popIn");

 
  if (moodLabel) {
    moodLabel.style.opacity = 0;
    moodLabel.innerText = moodNames[feeling] || "";
    setTimeout(() => {
      moodLabel.style.opacity = 1;
    }, 100);
  }
}


function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.textContent = "💖";

  
  const container = document.querySelector(".buttons");
  if (!container) return;
  const rect = container.getBoundingClientRect();

 
  const x = rect.left + Math.random() * rect.width;
  const y = rect.top + rect.height / 2;

  heart.style.position = "fixed";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.pointerEvents = "none";
  heart.style.zIndex = 9999;

  document.body.appendChild(heart);

 
  setTimeout(() => {
    heart.style.transition = "all 3s ease-out";
    heart.style.transform = "translateY(-100px) scale(1.4)";
    heart.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    heart.remove();
  }, 3050);
}
