import operate from './operate';

const errorCheck = (one, two, operation) => {
  if (two === '0' && operation === '/') {
    return 'INF';
  }
  return true;
}

const setTotal = (newTotal, newNext, newOperation) => {
  let total = newTotal;
  let next = newNext;
  let operation = newOperation;
  return {
    total,
    next,
    operation
  };
};

// taking as total = number on display, next whatever will go after an operation, and operation the operation itself.
// assuming buttonName involves at next button which is not a number, pressed after next input.
// can be another operation, in wich case first operation will be solved first, and output will be ready with the new total, 
// null next and operation.
const calculate = ({
  total,
  next,
  operation,
}, buttonName) => {
  let result = errorCheck(total, next, operation);
  if (result != true) {
    return result;
  }
  switch (operation) {
    case '+/-': {
      if (next !== '') {
        result = setTotal((operate(total, next, operation) * -1), null, null)
        break;
      }
      result = setTotal(total * -1, next, null);
      break;
    }
    case 'AC': {
      result = setTotal(null, null, null);
      break;
    }
    case '=': {
      result = setTotal(operate(total, next, operation), null, null)
      break;
    }
    default: // *-/% as buttonName, assuming operation chaining (with result output inbetween, not breaking the input)
      result = setTotal(operate(total, next, operation), null, buttonName);
      break;
  }
  return {
    result
  };
};

export default calculate;