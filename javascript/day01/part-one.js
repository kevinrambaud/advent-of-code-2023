import { getInput } from "#internal/utils.js";

function getFirstAndLastDigits(str) {
  let firstDigit;
  let lastDigit;

  for (let i = 0; i < str.length; i++) {
    const cfl = str[i];
    const cfr = str[str.length - 1 - i];

    if (!firstDigit && Number.isInteger(parseInt(cfl))) firstDigit = cfl;
    if (!lastDigit && Number.isInteger(parseInt(cfr))) lastDigit = cfr;
    if (firstDigit && lastDigit) break;
  }

  if (firstDigit === undefined || lastDigit === undefined) return 0;

  const result = Number(firstDigit + lastDigit);
  return result;
}

const input = await getInput(import.meta.url);
const result = input.map(getFirstAndLastDigits).reduce((a, b) => a + b, 0);

console.log("result:", result);
