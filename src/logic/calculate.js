import operate from 'operate';

const errorCheck = (one, two, operation) => {
  if (two === '0' && operation === '/') {
    return 'INF';
  }
  return true;
};

const setTotal = (newTotal, newNext, newOperation) => {
  const total = newTotal;
  const next = newNext;
  const operation = newOperation;
  return {
    total,
    next,
    operation,
  };
};

const calculate = ({
  total,
  next,
  operation,
}, buttonName) => {
  let result = errorCheck(total, next, operation);
  if (result !== true) {
    return result;
  }
  switch (operation) {
    case '+/-': {
      if (next !== '') {
        result = setTotal((operate(total, next, operation) * -1), null, null);
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
      result = setTotal(operate(total, next, operation), null, null);
      break;
    }
    default:
      result = setTotal(operate(total, next, operation), null, buttonName);
      break;
  }
  return {
    result,
  };
};

export default calculate;
