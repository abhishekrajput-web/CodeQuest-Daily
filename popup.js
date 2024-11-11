// popup.js
document.addEventListener("DOMContentLoaded", () => {
  const challengeText = document.getElementById("challenge-text");
  const difficultyText = document.getElementById("difficulty");
  const hintButton = document.getElementById("hint-button");
  const hintContent = document.getElementById("hint-content");
  const timerText = document.getElementById("time");
  const historyContainer = document.getElementById("challenge-history");
  const newChallengeButton = document.getElementById("new-challenge");

  let currentChallenge = null;
  let timerInterval;

  // Load a new challenge
  function loadChallenge() {
    if (timerInterval) clearInterval(timerInterval);

    currentChallenge = getRandomChallenge();
    challengeText.textContent = currentChallenge.text;
    difficultyText.textContent = currentChallenge.difficulty;
    hintContent.textContent = currentChallenge.hint;
    hintButton.style.display = "inline";
    document.getElementById("hint-text").style.display = "none";
    startTimer(5, 0); // 5-minute timer
  }

  // Start a countdown timer
  function startTimer(minutes, seconds) {
    let timeRemaining = minutes * 60 + seconds;
    timerText.textContent = formatTime(timeRemaining);

    timerInterval = setInterval(() => {
      timeRemaining--;
      timerText.textContent = formatTime(timeRemaining);

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Try to complete the challenge soon.");
      }
    }, 1000);
  }

  // Format time in MM:SS
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  // Event: Show hint
  hintButton.addEventListener("click", () => {
    document.getElementById("hint-text").style.display = "block";
    hintButton.style.display = "none";
  });

  // Event: Get new challenge
  newChallengeButton.addEventListener("click", () => {
    // Add current challenge to history
    if (currentChallenge) {
      const historyItem = document.createElement("li");
      historyItem.textContent = `${currentChallenge.text} - ${currentChallenge.difficulty}`;
      historyContainer.appendChild(historyItem);
    }
    loadChallenge();
  });

  // Initial load
  loadChallenge();
});
