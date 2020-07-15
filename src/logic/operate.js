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
  console.log(operation);
  switch (operation) {
    case '-': {
      return one.minus(two).toString();
    }
    case '+': {
      return one.plus(two).toString();
    }
    case '÷': {
      if (numberTwo === 0) {
        return 'INF';
      }
      return one.div(two).toString();
    }
    case '%': {
      return one.mod(two).toString();
    }
    case '*': {
      return one.times(two).toString();
    }
    default: {
      return 'undef error';
    }
  }
};

export default operate;
