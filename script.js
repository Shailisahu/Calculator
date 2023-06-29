// calculator.js
let currentExpression = "";

function appendNumber(number) {
  currentExpression += number;
  updateResult();
}

function appendOperator(operator) {
  currentExpression += operator;
  updateResult();
}

function calculate() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
    updateResult();
  } catch (error) {
    currentExpression = "";
    updateResult("Error");
  }
}

function clearResult() {
  currentExpression = "";
  updateResult();
}

function deleteLastEntry() {
  currentExpression = currentExpression.slice(0, -1);
  updateResult();
}

function updateResult(value = currentExpression) {
  document.getElementById("result").value = value;
}
