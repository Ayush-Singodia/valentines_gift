const heartsContainer = document.getElementById("hearts");
const hearts = ["💖", "💗", "💘", "💕", "💓"];

function createHeart() {
  const heart = document.createElement("span");
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 400);

function showLove() {
  alert("You just sent a lot of love 💞 Happy Valentine’s Day!");
}
