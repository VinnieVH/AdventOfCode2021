import { Coordinate } from "./Coordinate";
import { Grid } from "./Grid";
import { Line } from "./Line";

export const getAllLines = (inputs: string[]): Line[] => {
  const lines: Line[] = [];

  for (let i = 0; i < inputs.length; i++) {
    const coordinates = inputs[i].split("->");
    const startCoordinate: Coordinate = { xPosition: +coordinates[0].split(",")[0], yPosition: +coordinates[0].split(",")[1] };
    const endCoordinate: Coordinate = { xPosition: +coordinates[1].split(",")[0], yPosition: +coordinates[1].split(",")[1] };

    //TODO: determine the direction of the line and add all corresponding coordinates
    const verticalLine = startCoordinate.xPosition === endCoordinate.xPosition;
    const horizontalLine = startCoordinate.yPosition === endCoordinate.yPosition;

    const line: Line = { coordinates: [], startPosition: startCoordinate, endPosition: endCoordinate };

    if (horizontalLine || verticalLine) {
      if (horizontalLine) {
        if (startCoordinate.xPosition < endCoordinate.xPosition) {
          for (let i = startCoordinate.xPosition; i <= endCoordinate.xPosition; i++) {
            line.coordinates.push({ xPosition: i, yPosition: startCoordinate.yPosition });
          }
        } else {
          for (let i = endCoordinate.xPosition; i <= startCoordinate.xPosition; i++) {
            line.coordinates.push({ xPosition: i, yPosition: startCoordinate.yPosition });
          }
        }
      } else if (verticalLine) {
        if (startCoordinate.yPosition < endCoordinate.yPosition) {
          for (let i = startCoordinate.yPosition; i <= endCoordinate.yPosition; i++) {
            line.coordinates.push({ xPosition: startCoordinate.xPosition, yPosition: i });
          }
        } else {
          for (let i = endCoordinate.yPosition; i <= startCoordinate.yPosition; i++) {
            line.coordinates.push({ xPosition: startCoordinate.xPosition, yPosition: i });
          }
        }
      }
    } else {
      const length: number = Math.abs(startCoordinate.xPosition - endCoordinate.xPosition) + 1;
      const xDirection: number = startCoordinate.xPosition < endCoordinate.xPosition ? 1 : -1;
      const yDirection: number = startCoordinate.yPosition < endCoordinate.yPosition ? 1 : -1;

      for (let i = 0; i < length; i++) {
        line.coordinates.push({ xPosition: startCoordinate.xPosition + i * xDirection, yPosition: startCoordinate.yPosition + i * yDirection });
      }
    }
    lines.push(line);
  }

  return lines;
};

export const getMaxForYAndXPositions = (lines: Line[]): { maxXPosition: number; maxYPosition: number } => {
  //TODO: find out max yPosition and max xPosition to determine size of grid
  const xPositions: number[] = [];
  const yPositions: number[] = [];

  //TODO: put all y positions in an array and all x position in an array
  lines.forEach((x) => {
    xPositions.push(x.endPosition.xPosition);
    yPositions.push(x.endPosition.yPosition);
    xPositions.push(x.startPosition.xPosition);
    yPositions.push(x.startPosition.yPosition);
  });

  return { maxXPosition: Math.max(...xPositions), maxYPosition: Math.max(...yPositions) };
};

export const createGrid = (maxXPosition: number, maxYPosition: number): Grid => {
  //TODO: create the grid based on max and min position
  return {
    positions: Array(maxXPosition)
      .fill(0)
      .map(() => new Array(maxYPosition).fill(0)),
  };
};
