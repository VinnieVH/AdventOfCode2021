export const valueIncreases = (val: number, index: number, all: number[]): boolean => {
  if (index === 0) {
    return false;
  }

  return val > all[index - 1];
};
