import fs from "fs";
import { getWinningScore } from "./utils";

const inputs: string[] = fs.readFileSync("./day-4/input.txt", "utf-8").trim().split("\n");

console.log(getWinningScore(inputs));
