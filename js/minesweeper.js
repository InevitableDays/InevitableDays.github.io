/* -----------------------------
   Minesweeper (Intermediate only)
   16x16 / 40 mines
------------------------------*/
export function initMinesweeper() {
const rows = 16, cols = 16, mines = 40;

let grid = [], cells = [], gameOver = false;

function setMSMessage(text) {
  const status = document.getElementById('ms-status');
  status.textContent = text;

  // pop animation
  status.classList.remove('pop');
  void status.offsetWidth;
  status.classList.add('pop');
}

function clearMSMessage() {
  document.getElementById('ms-status').textContent = '';
}

function initGame() {
  gameOver = false;
  grid = Array.from({ length: rows }, () => Array(cols).fill(0));
  cells = [];
  clearMSMessage();

  document.getElementById('minesweeper').classList.remove('win');

  const container = document.getElementById('minesweeper');
  container.innerHTML = '';

  // Place mines randomly
  let placed = 0;
  while (placed < mines) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (grid[r][c] !== 'M') {
      grid[r][c] = 'M';
      placed++;
    }
  }

  // Calculate numbers
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'M') continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr, nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 'M') count++;
        }
      }
      grid[r][c] = count;
    }
  }

  // Build grid HTML
  for (let r = 0; r < rows; r++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('ms-row');

    for (let c = 0; c < cols; c++) {
      const cell = document.createElement('div');
      cell.classList.add('ms-cell');
      cell.dataset.row = r;
      cell.dataset.col = c;

      // Left click = reveal
      cell.addEventListener('click', () => revealCell(r, c));

      // Right click = flag toggle
      cell.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (gameOver || cell.classList.contains('revealed')) return;
        cell.textContent = (cell.textContent === '🚩') ? '' : '🚩';
        checkWin();
      });

      rowDiv.appendChild(cell);

      if (!cells[r]) cells[r] = [];
      cells[r][c] = cell;
    }

    container.appendChild(rowDiv);
  }
}

function revealCell(r, c) {
  if (gameOver) return;

  const cell = cells[r][c];
  if (cell.classList.contains('revealed') || cell.textContent === '🚩') return;

  cell.classList.add('revealed');

  if (grid[r][c] === 'M') {
    document.getElementById('minesweeper').classList.remove('win');
    cell.textContent = '💣';
    cell.classList.add('mine');
    setMSMessage('💥 Game Over!');
    revealAllMines();
    gameOver = true;
    return;
  }

  if (grid[r][c] > 0) {
    cell.textContent = grid[r][c];
  } else {
    // flood fill
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) revealCell(nr, nc);
      }
    }
  }

  checkWin();
}

function revealAllMines() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 'M') {
        cells[r][c].textContent = '💣';
        cells[r][c].classList.add('mine', 'revealed');
      }
    }
  }
}

function checkWin() {
  let revealedCount = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (cells[r][c].classList.contains('revealed')) revealedCount++;
    }
  }

  if (revealedCount === rows * cols - mines) {
    setMSMessage('🎉 You Win!');
    document.getElementById('minesweeper').classList.add('win');
    gameOver = true;
    revealAllMines();
  }
}

// Hook up button
document.getElementById('ms-newgame-btn').addEventListener('click', initGame);

// Start immediately (Intermediate default)
initGame();
   
}
