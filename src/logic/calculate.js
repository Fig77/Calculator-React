import operate from './operate';

const operationSet = new Set(['+', '*', '-', '÷', '%']);
const triggerSet = new Set(['=', '+/-', 'AC']);

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

const errorCheck = (one, two, operation) => {
  if (two === '0' && operation === '÷') {
    return setTotal('INF', null, null);
  }
  return true;
};

const btonCheck = (data, name) => {
  if ((triggerSet.has(name) || operationSet.has(name))) {
    if (data.operation === null) {
      data.operation = name;
    }
    return data;
  } else if (data.operation !== null) {
    if (data.next === null) {
      let aux = name === '0' ? 0 : name;
      data.next = aux
      return data;
    } else {
      data.next += name;
      return data;
    }
  }

  if (data.total == 0) {
    data.total = name;
  } else {
    data.total += name;
  }
  return data;
}

const calculate = ({
  total,
  next,
  operation,
}, buttonName) => {
  let result = btonCheck({
    total,
    next,
    operation
  }, buttonName);
  let test = errorCheck(result.total, result.next, result.operation);
  if (test !== true) {
    return result;
  }
  console.log(result);
  switch (buttonName) {
    case '+/-': {
      if (next !== null) {
        result = setTotal((operate(result.total * -1, result.next, result.operation)), null, null);
        break;
      }
      result.total = (result.total * -1).toString();
      result.operation = null;
      break;
    }
    case 'AC': {
      result = setTotal('0', null, null);
      break;
    }
    case '=': {
      if (next !== null) {
        result = setTotal(operate(result.total, result.next, result.operation), null, null);
      } else {
        result = setTotal(result.total, null, null);
      }
      break;
    }
    default:
      break;
  }
  return {

    result,
  };
};

export default {
  calculate,
};