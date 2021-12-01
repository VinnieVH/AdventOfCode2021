import fs from "fs";
import { valueIncreases } from "./utils";

const inputs: number[] = fs
  .readFileSync("./day-1/input.txt", "utf-8")
  .split("\n")
  .map((x) => +x);

const slidingWindows: number[] = [];

inputs.forEach((x, i, values) => {
  if (values.length > i + 2) {
    slidingWindows.push(values[i] + values[i + 1] + values[i + 2]);
  }
});

console.log(slidingWindows.filter(valueIncreases).length);
