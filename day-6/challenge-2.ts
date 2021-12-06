import fs from "fs";
import { Buffer } from "./Buffer";

let fishes: number[] = fs
  .readFileSync("./day-6/input.txt", "utf-8")
  .trim()
  .split(",")
  .map((x) => +x);

let buffer: Buffer[] = [];

fishes.forEach((num) => {
  buffer.push({
    total: 1,
    counter: num,
  });
});

for (let i = 1; i <= 256; i++) {
  buffer = buffer.map((obj) => {
    obj.counter -= 1;

    return obj;
  });

  let deadFish = buffer.filter((obj) => obj.counter < 0);
  buffer = buffer.filter((obj) => obj.counter >= 0);

  if (deadFish.length) {
    let index = buffer.findIndex((obj) => obj.counter === 6);

    deadFish.forEach((obj) => {
      if (index > -1) {
        buffer[index].total += obj.total;
      } else {
        buffer.push({
          counter: 6,
          total: obj.total,
        });
      }

      buffer.push({
        counter: 8,
        total: obj.total,
      });
    });
  }
}

let total = 0;
buffer.forEach((obj) => (total += obj.total));

console.log(total);
