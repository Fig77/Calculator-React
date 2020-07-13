const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let one;
  let two;
  try {
    one = new Big(numberOne);
    two = new Big(numberTwo);
  } catch (err) {
    return 'Syntax Error';
  }
  switch (operation) {
    case '-': {
      return one.minus(two);
    }
    case '+': {
      return one.plus(two);
    }
    case '/': {
      if (numberTwo === 0) {
        return 'INF';
      }
      return one.div(two);
    }
    case '%': {
      return one.mod(two);
    }
    case '*': {
      return one.times(two);
    }
    default: {
      return 'undef error';
    }
  }
};

export default operate;
