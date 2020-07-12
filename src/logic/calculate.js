// total = 0 ;  next = nul operation = nul
// total (operation) next ... ? button.

// * - + / %
const calculate = ({total, next, operation}, buttonName) => {
  
  // +- ''  AC ''  = <
  switch (operation) {
    case '+/-': {
      next = next*-1;
      total = next;
      operation = 'null';
      return {next, total, operation};
      break;
    };
    case 'AC': {
      total = null;
      next = null;
      operation = null;
      return {total, next, operation}
      break;
    };
    case '=': {
      // operation shit;
    };
      
  }
    
};

export default calculate;