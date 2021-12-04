import { BingoRow } from "./BingoRow";
import { Board } from "./Board";

const getBingoRow = (bingoLine: string): BingoRow => {
  const result = bingoLine
    .split(" ")
    .filter((x) => x !== "")
    .map((valStr) => Number.parseInt(valStr, 10))
    .map((y) => {
      return { value: y, marked: false };
    });

  return result.filter((x) => !isNaN(x.value));
};

const getBingoBoard = (bingoLines: string[]): Board | undefined => {
  if (bingoLines.length > 0) {
    const result = { rows: bingoLines.map((bingoLine) => getBingoRow(bingoLine)), hasWon: false };
    return result;
  }
};

const markBoard = (board: Board, calledNumber: number) => {
  for (let row of board.rows) {
    for (let bingoNumber of row) {
      if (bingoNumber.value == calledNumber) bingoNumber.marked = true;
    }
  }
};

const isWinngingBoard = (board: Board): boolean => {
  for (const row of board.rows) {
    if (row.every((bingoNumber) => bingoNumber.marked === true)) return true;
  }

  for (let i = 0; i < 5; i++) {
    if (board.rows[0][i].marked && board.rows[1][i].marked && board.rows[2][i].marked && board.rows[3][i].marked && board.rows[4][i].marked) return true;
  }

  return false;
};

const getScore = (board: Board, calledNumber: number): number => {
  let scoreSum = 0;
  for (const row of board.rows) {
    for (const bingoNumber of row) {
      if (!bingoNumber.marked) scoreSum += bingoNumber.value;
    }
  }
  return scoreSum * calledNumber;
};

export const getWinningScore = (input: string[]): number[] => {
  let winningScores: number[] = [];
  const pickedNumbers: number[] = input[0].split(",").map((valStr) => Number.parseInt(valStr, 10));

  let boards: Board[] = [];
  let board: Board | undefined;
  const bingoBoardLines: string[] = input.slice(2).filter((line) => line != "");
  for (let i = 0; i < bingoBoardLines.length; i += 5) {
    board = getBingoBoard(bingoBoardLines.slice(i, i + 5));
    if (board) {
      boards.push(board);
    }
  }

  for (let pickedNumber of pickedNumbers) {
    for (let board of boards) {
      if (!board.hasWon) {
        markBoard(board, pickedNumber);
        if (isWinngingBoard(board)) {
          board.hasWon = true;
          winningScores.push(getScore(board, pickedNumber));
        }
      }
    }
  }

  return winningScores;
};
