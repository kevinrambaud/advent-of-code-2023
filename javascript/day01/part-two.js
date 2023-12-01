import { getInput } from "#internal/utils.js";

const dict = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function getFirstAndLastDigits(str) {
  let firstDigit;
  let lastDigit;

  for (let i = 0; i < str.length; i++) {
    const cfl = str[i];
    const cfr = str[str.length - 1 - i];

    if (!firstDigit && Number.isInteger(parseInt(cfl))) firstDigit = cfl;

    if (!firstDigit) {
      for (const k in dict) {
        if (str.substring(i, str.length).startsWith(k)) {
          firstDigit = dict[k];
          break;
        }
      }
    }

    if (!lastDigit && Number.isInteger(parseInt(cfr))) lastDigit = cfr;

    if (!lastDigit) {
      for (const k in dict) {
        if (str.substring(str.length - i, 0).endsWith(k)) {
          lastDigit = dict[k];
          break;
        }
      }
    }

    if (firstDigit && lastDigit) break;
  }

  if (firstDigit === undefined || lastDigit === undefined) return 0;

  const result = Number(firstDigit + lastDigit);
  return result;
}

const input = await getInput(import.meta.url);
const result = input.map(getFirstAndLastDigits).reduce((a, b) => a + b);

console.log("result:", result);
