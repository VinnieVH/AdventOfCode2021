import { Direction, PositionChange } from "./PositionChange";

export const getPositionChangeObject = (positionChange: string): PositionChange => {
  const result = positionChange.split(" ");
  return { direction: result[0].trim() as Direction, distance: +result[1].trim() };
};

export const calculatePosition = (items: PositionChange[]): number => {
  let horizontalPosition = 0;
  let verticalPosition = 0;

  items.forEach((x) => {
    switch (x.direction) {
      case Direction.Forward:
        horizontalPosition += x.distance;
        break;
      case Direction.Up:
        verticalPosition -= x.distance;
        break;
      case Direction.Down:
        verticalPosition += x.distance;
      default:
        break;
    }
  });

  return horizontalPosition * verticalPosition;
};

export const calculatePositionWithAim = (items: PositionChange[]): number => {
  let horizontalPosition = 0;
  let verticalPosition = 0;
  let aim = 0;

  items.forEach((x) => {
    switch (x.direction) {
      case Direction.Forward:
        horizontalPosition += x.distance;
        if (aim > 0) verticalPosition += aim * x.distance;
        break;
      case Direction.Up:
        aim -= x.distance;
        break;
      case Direction.Down:
        aim += x.distance;
      default:
        break;
    }
  });

  return horizontalPosition * verticalPosition;
};
