// ==== Hue Hunter RGB Game ====

let lives = 5;
let score = 0;
let correctColor = "";

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
  lives = 5;
  score = 0;
  document.getElementById("resultModal").style.display = "none";
  updateLives();
  generateRound();
}

function updateLives() {
  document.getElementById("lives").innerHTML = "❤️".repeat(lives);
}

function generateRound() {
  const rgbDisplay = document.getElementById("rgbDisplay");
  const colorOptions = document.getElementById("colorOptions");

  correctColor = getRandomRGB();
  rgbDisplay.textContent = correctColor;

  const options = new Set([correctColor]);
  while (options.size < 4) {
    options.add(getRandomRGB());
  }

  const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
  colorOptions.innerHTML = "";

  shuffled.forEach(color => {
    const btn = document.createElement("button");
    btn.classList.add("color-btn");
    btn.style.backgroundColor = color;

    btn.addEventListener("click", () => {
      if (color === correctColor) {
        score++;
        generateRound();
      } else {
        lives--;
        updateLives();
        if (lives === 0) {
          endGame();
        }
      }
    });

    colorOptions.appendChild(btn);
  });
}

function endGame() {
  document.getElementById("finalScore").textContent = score;
  document.getElementById("resultModal").style.display = "flex";
}

// Start game on load
window.onload = startGame;
