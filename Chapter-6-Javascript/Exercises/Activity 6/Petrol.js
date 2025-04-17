// Function to calculate total petrol cost
function calculateCost() {
    const costPerLitre = parseFloat(document.getElementById("costPerLitre").value);
    const litres = parseFloat(document.getElementById("litres").value);
    const total = costPerLitre * litres;
  
    const result = document.getElementById("result");
    result.textContent = `Total Cost: AED ${total.toFixed(2)}`;
  
    // Animate the result
    result.classList.add("animated");
    setTimeout(() => result.classList.remove("animated"), 800);
  }
  

  