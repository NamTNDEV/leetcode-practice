/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudokuSetVersion = function (board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (val === '.') continue;
      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val))
        return false;
      cols[j].add(val);
      rows[i].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudokuArrayVersion = function (board) {
  const rows = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const cols = Array.from({ length: 9 }, () => new Array(9).fill(false));
  const boxes = Array.from({ length: 9 }, () => new Array(9).fill(false));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const char = board[i][j];
      if (char === '.') continue;
      const num = Number(char) - 1;
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) return false;
      cols[j][num] = true;
      rows[i][num] = true;
      boxes[boxIndex][num] = true;
    }
  }

  return true;
};
