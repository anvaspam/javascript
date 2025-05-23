let display = document.getElementById("display");
let currentInput = "";
let lastWasOperator = false;

function updateDisplay() {
  display.value = currentInput || "0";
}

function appendNumber(num) {
  if (display.value === "Error") {
    currentInput = "";
  }
  if (lastWasOperator) {
    lastWasOperator = false;
  }
  currentInput += num;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + op;
  } else {
    currentInput += op;
  }
  lastWasOperator = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = "Error";
  }
  updateDisplay();
}

