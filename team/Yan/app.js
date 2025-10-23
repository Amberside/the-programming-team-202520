const btn = document.getElementById("flyBtn");
let moveStatus = false;
let flyInterval, returnTimeout;

let defaultPos = btn.getBoundingClientRect();

btn.style.left = `${defaultPos.left}px`;
btn.style.top = `${defaultPos.top}px`;

btn.addEventListener("click", () => {
  if (!moveStatus) {
    startFlying();
  } else {
    stopFlying();
  }
});

let randomStupidText = [
  "WeeWoo weeWoo",
  "DingDong DingDong",
  "BANANA?",
  "CORN!",
];

function startFlying() {
  moveStatus = true;

  btn.style.position = "absolute";
  const rect = btn.getBoundingClientRect();
  btn.style.left = `${rect.left}px`;
  btn.style.top = `${rect.top}px`;

  btn.textContent =
    randomStupidText[Math.floor(Math.random() * randomStupidText.length)];
  let moves = 0;

  flyInterval = setInterval(() => {
    if (moves >= 10) return;

    const randX = Math.random() * (window.innerWidth - btn.offsetWidth);
    const randY = Math.random() * (window.innerHeight - btn.offsetHeight);

    btn.style.left = `${randX}px`;
    btn.style.top = `${randY}px`;

    moves++;
  }, 600);

  returnTimeout = setTimeout(() => {
    stopFlying();
  }, 6000);
}

function stopFlying() {
  clearInterval(flyInterval);
  clearTimeout(returnTimeout);

  btn.style.left = `${defaultPos.left}px`;
  btn.style.top = `${defaultPos.top}px`;

  moveStatus = false;
}
