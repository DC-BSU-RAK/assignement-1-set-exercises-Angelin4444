// Function to calculate total petrol cost
function calculateCost() {
  // Get the cost per litre from the input field and convert it to a number
  const costPerLitre = parseFloat(document.getElementById("costPerLitre").value);

  // Get the number of litres from the input field and convert it to a number
  const litres = parseFloat(document.getElementById("litres").value);

  // Calculate the total cost
  const total = costPerLitre * litres;

  // Select the result paragraph element
  const result = document.getElementById("result");

  // Display the result with 2 decimal places
  result.textContent = `Total Cost: AED ${total.toFixed(2)}`;

  // Add animation class to make the result text animated
  result.classList.add("animated");

  // Remove the animation class after 800ms to allow re-triggering animation
  setTimeout(() => result.classList.remove("animated"), 800);
}
