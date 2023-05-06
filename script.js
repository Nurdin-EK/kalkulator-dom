const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let calculation = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (buttonValue === "C") {
      calculation = calculation.slice(0, -1);
      display.textContent = calculation || "0";
    } else if (buttonValue === "AC") {
      calculation = "";
      display.textContent = "0";
    } else if (buttonValue === "=") {
      display.textContent = eval(calculation);
    } else {
      calculation += buttonValue;
      display.textContent = calculation;
    }
  });
});

document.addEventListener("keydown", event => {
  let keyPressed = event.key;
  const operators = ["/", "*", "-", "+"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  if (keyPressed === "Enter") {
    keyPressed = "=";
  }

  if (keyPressed === "Backspace") {
    keyPressed = "C";
  }

  if (operators.includes(keyPressed)) {
    document.querySelector(`.operator:contains('${keyPressed}')`).click();
  } else if (numbers.includes(keyPressed)) {
    document.querySelector(`.number[data-value='${keyPressed}']`).click();
  } else if (keyPressed === "C") {
    document.querySelector(".clear").click();
  } else if (keyPressed === "AC") {
    document.querySelector(".reset").click();
  } else if (keyPressed === "=") {
    document.querySelector(".equal").click();
  }
});
