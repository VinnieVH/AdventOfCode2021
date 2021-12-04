import { BingoRow } from "./BingoRow";

export interface Board {
  rows: BingoRow[];
  hasWon: boolean;
}

