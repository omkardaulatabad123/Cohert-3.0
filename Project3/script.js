const target = document.querySelector(".target");
const gameArea = document.querySelector(".game-area");
const startBtn = document.querySelector("#startBtn");

const timer = document.querySelector("#timer");
const score = document.querySelector("#score");

const overlay = document.querySelector("#overlay");
const finalScore = document.querySelector("#finalScore");

let time = 0;
let points = 0;

let timerInterval;
let gameTimeout;
let gameStarted = false;

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
  target.style.backgroundColor = getRandomColor();
}

function moveBox() {
  const maxX = gameArea.clientWidth - target.offsetWidth;
  const maxY = gameArea.clientHeight - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

function increaseScore() {
  points += 1;

  score.textContent = points;
}

function increaseTimer() {
  time += 1;

  timer.textContent = time;
}

target.addEventListener("click", () => {
  if (!gameStarted) return;

  increaseScore();
  moveBox();
  changeColor();
});

function startGame() {
  clearInterval(timerInterval);
  clearTimeout(gameTimeout);

  gameStarted = true;

  time = 0;
  points = 0;

  timer.textContent = time;
  score.textContent = points;

  overlay.classList.remove("show");

  moveBox();
  changeColor();

  timerInterval = setInterval(() => {
    increaseTimer();
  }, 1000);

  gameTimeout = setTimeout(() => {
    endGame();
  }, 10000);
}

function endGame() {
  gameStarted = false;

  clearInterval(timerInterval);

  finalScore.textContent = points;

  overlay.classList.add("show");

  setTimeout(() => {
    resetGame();
  }, 3000);
}

function resetGame() {
  overlay.classList.remove("show");

  timer.textContent = 0;
  score.textContent = 0;

  target.style.left = "20px";
  target.style.top = "20px";
  target.style.backgroundColor = "red";
}

startBtn.addEventListener("click", startGame);
