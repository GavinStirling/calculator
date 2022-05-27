// Declaring all variables
// Declaring calculator object

const calculator = {
  firstNumber: 0,
  result: "0",
  waitingForSecondNumber: false,
  operator: null,
  history: [],
};

const workArea = document.querySelector(".workarea");
const operatorButtons = document.querySelector(".operators");
const numberButtons = document.querySelector(".numbers");
const clearButtons = document.querySelector(".clear");

const setDisplay = () => {
  workArea.innerText = calculator.result;
};

const clear = () => {
  const holder = calculator.result;
  calculator.result = holder.slice(0, -1);
};

const clearAll = () => {
  calculator.result = "0";
  calculator.firstNumber = 0;
  calculator.history = [];
  workArea.innerText = "";
  calculator.waitingForSecondNumber = false;
};

const inputNumber = (number) => {
  if (calculator.waitingForSecondNumber === true) {
    calculator.result = number;
    calculator.waitingForSecondNumber = false;
  } else {
    if (calculator.result === "0") {
      calculator.result = number;
    } else {
      calculator.result += number;
    }
  }
};

const handleDecimal = (decimal) => {
  if (calculator.waitingForSecondNumber) {
    calculator.result = "0.";
    calculator.waitingForSecondNumber = false;
    return;
  }

  if (!calculator.result.includes(decimal)) {
    calculator.result += decimal;
  }
};

const handleOperator = (operInput) => {
  const input = parseFloat(calculator.result);


  if (calculator.firstNumber === 0 && !isNaN(input)) {
    calculator.firstNumber = input;
  } else if (calculator.operator) {
    const result = calculate(
      calculator.firstNumber,
      input,
      calculator.operator
    );
    if (result === Infinity) {
      calculator.result = `Error, cannot divide by zero. Clear all to begin again!`;
    } else {
      calculator.result = `${result.toFixed(2)}`;
      calculator.firstNumber = result;
    }
  }

  calculator.waitingForSecondNumber = true;
  calculator.operator = operInput;
};

const calculate = (firstNumber, secondNumber, operator) => {
  if (operator === "+") {
    return firstNumber + secondNumber;
  } else if (operator === "-") {
    return firstNumber - secondNumber;
  } else if (operator === "*") {
    return firstNumber * secondNumber;
  } else if (operator === "/") {
    return firstNumber / secondNumber;
  } else if (operator === "=") {
    return firstNumber + secondNumber;
  }
};

const handleClick = (event) => {
  if (!event.target.matches("button")) {
    return;
  }
  if (event.target.classList.contains("operators__operator")) {
    const operator = event.target.value;
    if (operator === "=") {
      handleOperator(operator);
      calculator.operator = null;
    } else {
      handleOperator(operator);
    }
  }
  if (event.target.classList.contains("numbers__number")) {
    const num = event.target.innerText;
    console.log("number ", num);
    inputNumber(num);
  }
  if (event.target.classList.contains("clear__clear")) {
    const action = event.target.innerText;
    console.log("clear ", action);
    if (action === "Clear") {
      console.log("clear clear ", action);
      clear();
    } else if (action === "Clear All") {
      console.log("clear all ", action);
      clearAll();
    }
  }
  if (event.target.classList.contains("numbers__decimal")) {
    const decimal = event.target.innerText;
    console.log("decimal ", decimal);
    handleDecimal(decimal);
  }

  setDisplay();
  console.log(calculator);
};

setDisplay();

operatorButtons.addEventListener("click", handleClick);
numberButtons.addEventListener("click", handleClick);
clearButtons.addEventListener("click", handleClick);
