document.addEventListener("DOMContentLoaded", () => {

  console.log("script.js connected!");

  const questionBlocks = document.querySelectorAll(".question-block");

  // Handle answer selection
  questionBlocks.forEach(block => {
    const buttons = block.querySelectorAll(".answer-btn");

    buttons.forEach(button => {
      button.addEventListener("click", () => {

        // Remove selected from all buttons in the block
        buttons.forEach(btn => btn.classList.remove("selected"));

        // Add selected to clicked button
        button.classList.add("selected");
      });
    });
  });

  // Show result
  document.getElementById("show-result").addEventListener("click", displayResult);

  function displayResult() {
    let totalScore = 0;

    const selected = document.querySelectorAll(".answer-btn.selected");

    // Check if all questions answered
    if (selected.length < questionBlocks.length) {
      alert("Please answer all questions!");
      return;
    }

    // Calculate total points
    selected.forEach(btn => {
      totalScore += Number(btn.dataset.points);
    });

    let resultText = "";

    if (totalScore <= 6) {
      resultText = "Explorer 🌍 - You love adventure!";
    } else if (totalScore <= 10) {
      resultText = "Artist 🎨 - You are creative and expressive!";
    } else {
      resultText = "Leader 🚀 - You are confident and take charge!";
    }

    document.getElementById("result-text").textContent = resultText;
    document.getElementById("result-container").style.display = "block";
  }

});