/* 
export default class Calculator {
  private currentScreenString = "";
  private previousScreenString = "";

  private currentValue = "";
  // this.operator = "";

  private runningOperator = "";
  private equalsOperator = "";
  private result: number | undefined = undefined;

  constructor(
    public currentOperandScreen: HTMLDivElement,
    public previousOperandScreen: HTMLDivElement
  ) {}

  updateCurrentValue = (currentNumber: string) => {
    // set current value
    this.currentValue = currentNumber;

    // format and display current string
    this.formatCurrentString(this.currentValue);
    this.displayCurrentScreen();
  };

  setOperation = (operator: string) => {
    if (!this.currentValue) return;
    // calculating result and storing it into result
    this.calculateResult(this.runningOperator);

    // setting operator
    this.runningOperator = operator;

    // fromat and display previous screen
    this.formatPreviousString(this.currentValue);
    this.displayPreviousScreen();

    // format and display current screen
    this.formatCurrentString("");
    this.displayCurrentScreen();

    // clearn current value
    this.currentValue = "";

    // clean current operator
    // this.operator = "";
    // this.runningOperator = "";
    this.equalsOperator = operator;
  };

  calculateResult = (operation: string) => {
    console.log("boom");

    if (this.result === undefined)
      return (this.result = Number(this.currentValue));

    switch (operation) {
      case "+":
        this.result = this.result + Number(this.currentValue);
        break;
      case "-":
        this.result = this.result - Number(this.currentValue);
        break;
      case "*":
        this.result = this.result * Number(this.currentValue);
        break;
      case "÷":
        this.result = this.result / Number(this.currentValue);
        break;
      default:
        return;
    }

    console.log("current result is:", this.result);
  };

  formatPreviousString = (stringFragment: string) => {
    this.previousScreenString =
      this.previousScreenString + stringFragment + this.runningOperator;
  };

  displayPreviousScreen = () => {
    this.previousOperandScreen.textContent = this.previousScreenString;
  };

  formatCurrentString = (currentString: string) => {
    this.currentScreenString = currentString;
  };

  displayCurrentScreen = () => {
    this.currentOperandScreen.textContent = this.currentScreenString;
  };

  printResult = () => {
    this.calculateResult(this.equalsOperator);

    // format and print result
    this.formatCurrentString(String(this.result));
    this.displayCurrentScreen();

    // format and print previous screen
    this.formatPreviousString(this.currentValue);
    this.displayPreviousScreen();

    // clearing current value
    this.currentValue = "";

    // current vlaue is result now in case we want to continue calculation
    // this.currentValue = String(this.result);

    // clearing equals operator
    this.equalsOperator = "";
  };

  deleteLastDigit = () => {};

  clearAll = () => {};
}


*/