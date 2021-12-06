import fs from "fs";

let fishes: number[] = fs
  .readFileSync("./day-6/input.txt", "utf-8")
  .trim()
  .split(",")
  .map((x) => +x);

for (let i = 0; i < 80; i++) {
  const newFishes: number[] = [];

  fishes = fishes.map((fish) => {
    let newVal = --fish;

    if (newVal < 0) {
      newFishes.push(8);
      newVal = 6;
    }

    return newVal;
  });

  fishes = [...fishes, ...newFishes];
}

console.log(fishes.length);
