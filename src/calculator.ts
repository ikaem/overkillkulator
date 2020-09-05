export default class Calculator {
  currentValue = "";
  previousValue = "";
  operator = "";

  constructor(
    public currentOperandScreen: HTMLDivElement,
    public previousOperandScreen: HTMLDivElement
  ) {
      this.clearAll();
  }

  updateCurrentValue = (newValue: string) => {
      if(newValue === "." && this.currentValue.includes(".")) return;
    this.currentValue = this.currentValue + newValue;
  };

  setOperation = (operator: string) => {
    if (!this.currentValue) return;
    if (this.previousValue) this.calculateResult();

    this.operator = operator;
    this.previousValue = this.currentValue;
    this.currentValue = "";
  };

  calculateResult = () => {
    let result: number;

    let previousNumber = Number(this.previousValue);
    let currentNumber = Number(this.currentValue);

    if (isNaN(previousNumber) || isNaN(currentNumber)) return;

    switch (this.operator) {
      case "+":
        result = previousNumber + currentNumber;
        break;

      case "-":
        result = previousNumber - currentNumber;
        break;

      case "*":
        result = previousNumber * currentNumber;
        break;

      case "÷":
        result = previousNumber / currentNumber;
        break;

      default:
        return;
    }

    this.currentValue = String(result);
    this.previousValue = "";
    this.operator = "";

  };

  updateDisplay = () => {
    this.currentOperandScreen.textContent = this.currentValue;

    this.previousOperandScreen.textContent = this.previousValue
      ? this.previousValue + this.operator
      : "";
  };

  deleteLastDigit = () => {
      this.currentValue = this.currentValue.slice(0, -1);
  };

  clearAll = () => {
      this.currentValue = "";
      this.previousValue = "";
      this.operator = "";
  };
}
