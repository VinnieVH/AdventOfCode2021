export interface PositionChange {
  direction: Direction;
  distance: number;
}

export enum Direction {
  Forward = "forward",
  Down = "down",
  Up = "up",
}
