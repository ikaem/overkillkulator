import Calculator from "./calculator";

const previousOperandDiv = document.querySelector(
  "[data-previous-operand]"
) as HTMLDivElement;
const currentOperandDiv = document.querySelector(
  "[data-current-operand]"
) as HTMLDivElement;
const calcNumbers = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]")!;
const deleteButton = document.querySelector("[data-delete]")!;
const clearAllButton = document.querySelector("[data-clear-all]")!;

const calculator = new Calculator(currentOperandDiv, previousOperandDiv);

equalsButton.addEventListener("click", () => {
  calculator.calculateResult();
  calculator.updateDisplay()
});

console.log("zgg");

operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", () => {
    calculator.setOperation(operationButton.textContent!.trim());
    calculator.updateDisplay()
  });
});

calcNumbers.forEach((calcNumber) => {
  calcNumber.addEventListener("click", () => {
    calculator.updateCurrentValue(calcNumber.textContent!.trim());
    calculator.updateDisplay();
  });
});

deleteButton.addEventListener("click", () => {
  calculator.deleteLastDigit();
  calculator.updateDisplay();
});

clearAllButton.addEventListener("click", () => {
  calculator.clearAll();
  calculator.updateDisplay();
});
