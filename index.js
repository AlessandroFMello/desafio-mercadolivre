function fourDigitNumbersThatSums21(maxNumber) {
  minPossibleNumber = 1000;
  maxPossibleNumber = 9930;

  const result = [];

  for (let fourDigitsNumber = minPossibleNumber; fourDigitsNumber <= maxPossibleNumber; fourDigitsNumber += 1) {
    const numberToString = fourDigitsNumber.toString();

    const digitsArray = numberToString.split('');

    let sum = 0;

    digitsArray.forEach((number) => {
      if (Number(number) <= maxNumber) {
        sum += Number(number);
      }
    })

    if (sum === 21) {
      result.push(fourDigitsNumber);
    }
  }
  return result;
}
