// ==== Hue Hunter RGB Game ====

// Initialize lives and score
let lives = 5;
let score = 0;
let correctColor = ""; // Holds the current correct RGB color

// === Function to generate a random RGB color string ===
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); // Random red value between 0-255
  const g = Math.floor(Math.random() * 256); // Random green value between 0-255
  const b = Math.floor(Math.random() * 256); // Random blue value between 0-255
  return `rgb(${r}, ${g}, ${b})`; // Return RGB format string
}

// === Function to start or restart the game ===
function startGame() {
  lives = 5; // Reset lives
  score = 0; // Reset score
  document.getElementById("resultModal").style.display = "none"; // Hide game over modal
  updateLives(); // Show hearts again
  generateRound(); // Start first round
}

// === Function to update heart display based on lives ===
function updateLives() {
  document.getElementById("lives").innerHTML = "❤️".repeat(lives); // Display correct number of hearts
}


// === Function to generate one round of the game ===
function generateRound() {
  const rgbDisplay = document.getElementById("rgbDisplay"); // Text displaying RGB code to guess
  const colorOptions = document.getElementById("colorOptions"); // Container for color buttons

  correctColor = getRandomRGB(); // Choose the correct answer color
  rgbDisplay.textContent = correctColor; // Show it on screen

  const options = new Set([correctColor]); // Start with correct color in the set
  while (options.size < 4) {
    options.add(getRandomRGB()); // Add 3 more unique random colors
  }

  // Shuffle the color options randomly
  const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
  colorOptions.innerHTML = ""; // Clear previous buttons

  // === Create color buttons dynamically ===
  shuffled.forEach(color => {
    const btn = document.createElement("button"); // Create button
    btn.classList.add("color-btn"); // Style it
    btn.style.backgroundColor = color; // Set its background color

    // === Add click event to button ===
    btn.addEventListener("click", () => {
      if (color === correctColor) {
        score++; // Increase score for correct guess
        generateRound(); // Start new round
      } else {
        lives--; // Lose one life
        updateLives(); // Update lives display

        // Add shake animation to lives (optional if class used in CSS)
        document.getElementById("lives").classList.add("heart-lose");
        setTimeout(() => {
          document.getElementById("lives").classList.remove("heart-lose");
        }, 300);

        if (lives === 0) {
          endGame(); // Game over
        }
      }
    });

    colorOptions.appendChild(btn); // Add button to container
  });
}

// === Function to display Game Over screen ===
function endGame() {
  document.getElementById("finalScore").textContent = score; // Show score
  document.getElementById("resultModal").style.display = "flex"; // Show modal
}

// === Start the game when page loads ===
window.onload = startGame;
