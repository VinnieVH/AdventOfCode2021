import fs from "fs";
import { Grid } from "./Grid";
import { Line } from "./Line";
import { createGrid, getAllLines, getMaxForYAndXPositions } from "./utils";

const inputs: string[] = fs
  .readFileSync("./day-5/input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((x) => x.replace(/\r?\n|\r/, ""));

// convert every row in the array to a Line.ts
const lines: Line[] = getAllLines(inputs);

// get max position for y and x axis so we can determine size of grid
const { maxXPosition, maxYPosition } = getMaxForYAndXPositions(lines);

// create the grid based on max and min position add + 1 because of 0 based index
const grid: Grid = createGrid(maxXPosition + 1, maxYPosition + 1);

// loop over lines and place every position on the grid
lines.forEach((x) => x.coordinates.forEach((y) => grid.positions[y.xPosition][y.yPosition]++));

// get all positions with a 2 or more
console.log(grid.positions.flat().filter((x) => x >= 2).length);
