const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let one;
  let two;
  if (numberOne === 'INF' || numberOne === '-INF') {
    return numberOne;
  }
  try {
    one = new Big(numberOne);
    two = new Big(numberTwo);
  } catch (err) {
    return 'Syntax Error';
  }
  switch (operation) {
    case '-': {
      return one.minus(two).toString();
    }
    case '+': {
      return one.plus(two).toString();
    }
    case '÷': {
      if (numberTwo === 0) {
        // eslint-disable-next-line
        if (numberOne == 0) {
          return 'Undefined';
        }
        return 'INF';
      }
      return one.div(two).toString();
    }
    case '%': {
      return one.mod(two).toString();
    }
    case 'X': {
      return one.times(two).toString();
    }
    default: {
      return 'undef error';
    }
  }
};

export default operate;
