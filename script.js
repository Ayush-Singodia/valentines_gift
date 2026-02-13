const heartsContainer = document.getElementById("hearts");
const hearts = ["💖", "💗", "💘", "💕", "💓"];

function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);

function showLove() {
  alert("You just sent a lot of love 💞 Happy Valentine’s Day!");
}
const loveTestContainer = document.getElementById("loveTestContainer");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const valentineMessage = document.getElementById("valentineMessage");

const questions = [
  {
    question: "How much do you love me?",
    options: ["A lot 💖", "More than stars ✨", "Infinitely ♾️"],
  },
  {
    question: "What's your favorite thing about me?",
    options: ["My smile 😄", "My hugs 🤗", " Me😚💕"],
  },
  {
    question: "How much do you love me?",
    options: ["A lot 💖", "More than stars ✨", "Infinitely ♾️"],
  },
  {
    question: "What's your favorite thing about me?",
    options: ["Your smile 😄", "Your hugs 🤗", "Your love 💕"],
  },
  {
    question: "When did we meet for the first time? 📅",
    options: [
      "18th may 2024✨",
      "19th may 2024💖",
      "20th may 2024💕",
    ],
  },
  {
    question: "When did we click our first photo together? 📸",
    options: [
      "18th may 2024,3:45✨",
      "19th may 2024,3:45💖",
      "19th may 2024,12:00💕",
    ],
  },
  {
    question: "When did we do our first kiss? 💋",
    options: [
      "10th june 2024🦋",
      "11th june 2024⏳",
      "12th june 2024💘",
      "let's find to gether😚",
    ],
  },
  {
    question: "Will you be my Valentine?",
    options: ["Yes 💖", "No 😌"],
  },
];

let currentQuestion = 0;

function startLoveTest() {
  loveTestContainer.style.display = "flex";
  showQuestion(currentQuestion);
}

function showQuestion(index) {
  const q = questions[index];
  questionText.innerText = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.innerText = option;

    if (index === questions.length - 1 && option.toLowerCase().includes("no")) {
      // Make "No" dodge the cursor
      btn.addEventListener("mousemove", () => dodgeButton(btn));
      btn.addEventListener("touchstart", () => dodgeButton(btn));
    } else {
      btn.addEventListener("click", () => nextQuestion());
    }

    optionsContainer.appendChild(btn);
  });
}

function dodgeButton(btn) {
  const x = Math.random() * 80; // percentage
  const y = Math.random() * 80;
  btn.style.position = "relative";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } else {
    // Show final message
    loveTestContainer.style.display = "none";
    valentineMessage.style.display = "block";
  }
}
