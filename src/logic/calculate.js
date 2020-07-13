import operate from './operate';

const cases = () => ['Syntax Error', 'INF'];

const calculate = ({
  total,
  next,
  operation,
}, buttonName) => {
  let newTotal = total;
  let newOperation = operation;
  let newNext = next;

  if (next === '' && operation !== '') {
    if (operation === '+/-' || operation === 'AC' || operation === '=') {
      return [cases[0]];
    }
  }
  switch (newOperation) {
    case '+/-': {
      if (newNext !== '') {
        newTotal = operate(total, next, operation) * -1;
        newNext = null;
        newOperation = null;
      }
      newNext *= -1;
      newTotal = next;
      newOperation = 'null';
      return {
        newTotal,
        newNext,
        operation,
      };
    }
    case 'AC': {
      newTotal = null;
      newNext = null;
      newOperation = null;
      return {
        newTotal,
        newNext,
        newOperation,
      };
    }
    case '=': {
      newTotal = operate(total, next, operation);
      newNext = null;
      newOperation = null;
      return {
        newTotal,
        newNext,
        newOperation,
      };
    }
    default: // *-/% as buttonName, assuming operation chaining
      newTotal = operate(total, next, operation);
      newNext = null;
      newOperation = buttonName;
      break;
  }
  return {
    newTotal,
    newNext,
    newOperation,
  };
};

export default calculate;