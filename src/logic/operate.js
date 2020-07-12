import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  console.log(numberOne);
  const one = Big(numberOne);
  const two = Big(numberTwo);
  switch (operation) {
    case '-': {
      return one.minus(two);
    }
    case '+': {
      console.log(one, two, operation);
      return one.plus(two);
    }
    case '/': {
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
