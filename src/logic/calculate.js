import operate from './operate';

const operationSet = new Set(['+', 'X', '-', '÷', '%']);
const triggerSet = new Set(['=', '+/-', 'AC']);

const lastButton = '';
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

const btonCheck = (data, name) => {
  const result = data;
  if ((triggerSet.has(name) || operationSet.has(name))) {
    if (data.operation === null) {
      result.operation = name;
    }
    return data;
  } if (data.operation !== null) {
    if (data.next === null) {
      const aux = name === '0' ? 0 : name;
      result.next = aux;
      return result;
    }
    result.next += name;
    return result;
  }
  if (data.total === '0') {
    result.total = name;
  } else if (lastButton === '=') {
    result.total = `${name}`;
  } else {
    result.total += name;
  }
  return result;
};

const setDefString = string => {
  if (string === null) {
    return '';
  }
  return string;
};

const calculate = ({
  total,
  next,
  operation,
  display,
}, buttonName) => {
  let result = btonCheck({
    total,
    next,
    operation,
    display,
  }, buttonName);

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
      if (result.next !== null && operationSet.has(buttonName)) {
        result = setTotal(operate(result.total, result.next, buttonName), null, buttonName);
      } else {
        setTotal(operate(result.total, null, null));
      }
      break;
  }
  const auxOp = setDefString(result.operation);
  const auxSec = setDefString(result.next);
  result.display = result.total + auxOp + auxSec;
  return {
    result,
  };
};

export default {
  calculate,
};
