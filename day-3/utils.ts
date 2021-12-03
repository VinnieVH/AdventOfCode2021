import { Binary } from "./Binary";
import { Frequency } from "./Frequency";

const getBinaryFrequency = (inputs: string[], column: number): Frequency => {
  const chars = inputs.map((x) => x[column] as Binary);

  const oneFrequency = chars.filter((x) => x === "1").length;
  const zeroFrequency = inputs.length - oneFrequency;

  return oneFrequency >= zeroFrequency ? { mostCommon: "1", leastCommon: "0" } : { mostCommon: "0", leastCommon: "1" };
};

export const getPowerConsumption = (inputs: string[], getLifeSupportInfo?: boolean): number | number[] => {
  const lineLength = inputs[0].length;
  let gamma = "";
  let epsilon = "";
  let oxygenBinaryStrings = [...inputs];
  let co2BinaryStrings = [...inputs];

  for (let i = 0; i < lineLength; i++) {
    const { mostCommon, leastCommon } = getBinaryFrequency(inputs, i);

    gamma += mostCommon;
    epsilon += leastCommon;

    if (getLifeSupportInfo) {
      if (oxygenBinaryStrings.length > 1) {
        const oxygenFrequency = getBinaryFrequency(oxygenBinaryStrings, i);
        oxygenBinaryStrings = oxygenBinaryStrings.filter((x) => x[i] === oxygenFrequency.mostCommon);
      }

      if (co2BinaryStrings.length > 1) {
        const co2Frequency = getBinaryFrequency(co2BinaryStrings, i);
        co2BinaryStrings = co2BinaryStrings.filter((x) => x[i] === co2Frequency.leastCommon);
      }
    }
  }

  const [oxygen] = oxygenBinaryStrings;
  const [co2] = co2BinaryStrings;

  return getLifeSupportInfo ? [Number.parseInt(gamma, 2) * Number.parseInt(epsilon, 2), Number.parseInt(oxygen, 2) * Number.parseInt(co2, 2)] : Number.parseInt(gamma, 2) * Number.parseInt(epsilon, 2);
};
