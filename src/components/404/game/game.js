let invadersGrid;
let invadersResultsDisplay;
let currentShooterIndex;
let width;
let direction;
let invadersId;
let goingRight;
let aliensRemoved;
let invadersResults;
let squares;

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
];

function moveShooter(e) {
  squares[currentShooterIndex].classList.remove('shooter');
  switch (e.key) {
    case 'ArrowLeft':
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case 'ArrowRight':
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
      // no default
  }
  squares[currentShooterIndex].classList.add('shooter');
}

function remove() {
// eslint-disable-next-line no-plusplus
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove('invader');
  }
}

function draw() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!aliensRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add('invader');
    }
  }
}

function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0;
  const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;
  remove();

  if (rightEdge && goingRight) {
    for (let i = 0; i < alienInvaders.length; i += 1) {
      alienInvaders[i] += width + 1;
      direction = -1;
      goingRight = false;
    }
  }

  if (leftEdge && !goingRight) {
    for (let i = 0; i < alienInvaders.length; i += 1) {
      alienInvaders[i] += width - 1;
      direction = 1;
      goingRight = true;
    }
  }

  for (let i = 0; i < alienInvaders.length; i += 1) {
    alienInvaders[i] += direction;
  }

  draw();

  if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
    invadersResultsDisplay.innerHTML = 'GAME OVER';
    clearInterval(invadersId);
  }

  for (let i = 0; i < alienInvaders.length; i += 1) {
    if (alienInvaders[i] > (squares.length)) {
      invadersResultsDisplay.innerHTML = 'GAME OVER';
      clearInterval(invadersId);
    }
  }
  if (aliensRemoved.length === alienInvaders.length) {
    invadersResultsDisplay.innerHTML = 'YOU WIN';
    clearInterval(invadersId);
  }
}

function shoot(e) {
  let laserId;
  let currentLaserIndex = currentShooterIndex;
  function moveLaser() {
    squares[currentLaserIndex].classList.remove('laser');
    currentLaserIndex -= width;
    squares[currentLaserIndex].classList.add('laser');

    if (squares[currentLaserIndex].classList.contains('invader')) {
      squares[currentLaserIndex].classList.remove('laser');
      squares[currentLaserIndex].classList.remove('invader');
      squares[currentLaserIndex].classList.add('boom');

      setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300);
      clearInterval(laserId);

      const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
      aliensRemoved.push(alienRemoved);
      invadersResults += 1;
      invadersResultsDisplay.innerHTML = invadersResults;
    }
  }
  switch (e.key) {
    case 'ArrowUp':
      laserId = setInterval(moveLaser, 100);
      // no default
  }
}

function initialization() {
  invadersGrid = document.querySelector('.invadersGrid');
  invadersResultsDisplay = document.querySelector('.invadersResults');
  currentShooterIndex = 202;
  width = 30;
  direction = 1;
  goingRight = true;
  aliensRemoved = [];
  invadersResults = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 225; i++) {
    const square = document.createElement('div');
    invadersGrid.appendChild(square);
  }

  squares = Array.from(document.querySelectorAll('.invadersGrid div'));

  squares[currentShooterIndex].classList.add('shooter');

  document.addEventListener('keydown', moveShooter);
  document.addEventListener('keydown', shoot);
  draw();
  invadersId = setInterval(moveInvaders, 600);
}

export default initialization;
