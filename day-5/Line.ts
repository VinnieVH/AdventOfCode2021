import { Coordinate } from "./Coordinate";

export interface Line {
  coordinates: Coordinate[];
  startPosition: Coordinate;
  endPosition: Coordinate;
}
