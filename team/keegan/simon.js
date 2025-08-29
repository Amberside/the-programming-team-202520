document.getElementById('b1').addEventListener('click', () => handleClick(1));
document.getElementById('b2').addEventListener('click', () => handleClick(2));
document.getElementById('b3').addEventListener('click', () => handleClick(3));
document.getElementById('b4').addEventListener('click', () => handleClick(4));
document.getElementById('start').addEventListener('click', startGame);
let startButton = document.getElementById('start');
let infoText = document.getElementById('info');

let sequence = [];
let playerSequence = [];
let round = 1;
let maxtimes = 3;
let times = 0;
let lost = false;
let acceptingInput = false;
let speed = 600;

function startGame() {
  startButton.remove();
  sequence = [];
  playerSequence = [];
  round = 1;
  maxtimes = 3;
  times = 0;
  lost = false;
  acceptingInput = false;
  speed = 600;
  infoText.textContent = `Round ${round}. Speed ${speed}. ${times}/${maxtimes}`;
  nextRound();
}

function nextRound() {
  acceptingInput = false;
  playerSequence = [];

  sequence.push(Math.floor(Math.random() * 4) + 1);

  console.log("Sequence:", sequence);

  playSequence(sequence).then(() => {
    acceptingInput = true;
    console.log("Your turn...");
  });
}

function handleClick(value) {
  if (!acceptingInput || lost) return;

  playerSequence.push(value);
  console.log("Player:", playerSequence);

  playerhighlightButton(value);

  const index = playerSequence.length - 1;
  if (playerSequence[index] !== sequence[index]) {
    lost = true;
    infoText.innerHTML = `Round ${round}. Speed ${speed}. ${times}/${maxtimes}<br>You Failed!<br>The Correct Sequence was:<br>${sequence}<br>And you entered:<br>${playerSequence}<button id="start">Restart?</button>`;
    document.getElementById('start').addEventListener('click', startGame);
    return;
  }

  if (playerSequence.length === sequence.length) {
    times++;
    acceptingInput = false;
    if (times >= maxtimes){
      round++;
      maxtimes++;
      times = 0;
      sequence = [];
      buttonsFlash();
      if (speed > 50){
        speed -= 50;
      };
    };
    setTimeout(nextRound, 1000);
    infoText.textContent = `Round ${round}. Speed ${speed}. ${times}/${maxtimes}`;
  }
}

async function playSequence(seq) {
  for (let i = 0; i < seq.length; i++) {
    highlightButton(seq[i]);
    await delay(speed);
    resetButtons();
    await delay(50);
  }
}

function highlightButton(id) {
  const button = document.getElementById(`b${id}`);
  if (button){
    switch (id){
      case 1:
        button.style.backgroundColor = 'red';
        break;
      case 2:
        button.style.backgroundColor = 'yellow';
        break;
      case 3:
        button.style.backgroundColor = 'blue';
        break;
      case 4:
        button.style.backgroundColor = 'green';
        break;
    }
  }
}

async function playerhighlightButton(id) {
  const button = document.getElementById(`b${id}`);
  if (button){
    switch (id){
      case 1:
        button.style.backgroundColor = 'red';
        break;
      case 2:
        button.style.backgroundColor = 'yellow';
        break;
      case 3:
        button.style.backgroundColor = 'blue';
        break;
      case 4:
        button.style.backgroundColor = 'green';
        break;
    }
  };
  await delay(300);
  if (button) button.style.backgroundColor = '';
}

async function buttonsFlash(flashess = 2) {
  const colors = ['red', 'yellow', 'blue', 'green'];

  for (let t = 0; t < flashess; t++) {
    for (let i = 1; i <= 4; i++) {
      const button = document.getElementById(`b${i}`);
      if (button) {
        button.style.backgroundColor = colors[i - 1];
      }
    }

    await delay(300);

    for (let i = 1; i <= 4; i++) {
      const button = document.getElementById(`b${i}`);
      if (button) {
        button.style.backgroundColor = '';
      }
    }

    await delay(200);
  }
}

function resetButtons() {
  for (let i = 1; i <= 4; i++) {
    const button = document.getElementById(`b${i}`);
    if (button) button.style.backgroundColor = '';
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}