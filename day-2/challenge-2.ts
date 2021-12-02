import fs from "fs";
import { PositionChange } from "./PositionChange";
import { calculatePositionWithAim, getPositionChangeObject } from "./utils";

const inputs: PositionChange[] = fs
  .readFileSync("./day-2/input.txt", "utf-8")
  .trim()
  .split("\n")
  .map((x) => getPositionChangeObject(x));

console.log(calculatePositionWithAim(inputs));
