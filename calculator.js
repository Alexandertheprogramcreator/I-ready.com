// Reference the display element globally
const display = document.getElementById("display");

// 1. Adds numbers/operators to the screen
function appendToDisplay(input) {
    display.value += input;
}

// 2. Clears the entire screen
function clearDisplay() {
    display.value = "";
}

// 3. Deletes the very last character typed
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// 4. Your Custom Calculate Logic
function calculate() {
    try {
        if (display.value === "") return;

        // Use eval to solve the string expression
        let result = eval(display.value);

        // Catching the division by zero / Infinity case
        if (result === Infinity || result === -Infinity) {
            display.value = "DIDDY"; 
            setTimeout(() => {
                window.alert("WHAT IS DIDDY BLUD DOING ON MY CALCULATOR!!??");
                clearDisplay();
            }, 10); 
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
        window.alert("Alexander Sanders the king of math and programming formulas does not approve of this mathematical incompetence and a transgression to the power of the homemade calculator and does not behave kindly to those who mock the power of the homemade calculator. Use this ability appropriately, All hail Alexander Sanders - Alexander Sanders");
    }
}
