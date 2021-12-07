import fs from "fs";

let input: number[] = fs
  .readFileSync("./day-7/input.txt", "utf-8")
  .trim()
  .split(",")
  .map((x) => +x);

const fuelCosts: number[] = new Array(Math.max(...input));

for (let i = 0; i < fuelCosts.length; i++) {
  let fuel: number = 0;


  for (let j = 0; j < input.length; j++) {
    fuel += (Math.abs(input[j] - i) * (Math.abs(input[j] - i) + 1)) / 2;
  }

  fuelCosts[i] = fuel;
}

console.log(Math.min(...fuelCosts));
