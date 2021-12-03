import { getPowerConsumption } from "./utils";
import fs from "fs";

const inputs: string[] = fs.readFileSync("./day-3/input.txt", "utf-8").trim().split("\n");

console.log(getPowerConsumption(inputs));
