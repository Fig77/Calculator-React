const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let one = new Big(numberOne);
  let two = new Big(numberTwo);
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
      } else {
        return one.div(two);
      }
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