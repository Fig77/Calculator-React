import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let one = new Big(numberOne);
  let two = new Big(numberTwo);
  if (numberTwo === 0) {
    return 'inf';
  } else {
  let result = numberOne.operation(numberTwo);
  return result;
  }

};