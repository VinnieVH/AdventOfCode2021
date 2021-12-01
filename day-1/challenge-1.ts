import fs from "fs";
import { valueIncreases } from "./utils";

const inputs: number[] = fs
  .readFileSync("./day-1/input.txt", "utf-8")
  .split("\n")
  .map((x) => +x);

console.log(inputs.filter(valueIncreases).length);
