function calculate() {
    try {
        if (display.value === "") return;

        let result = eval(display.value);

        // Catching the division by zero / Infinity case
        if (result === Infinity || result === -Infinity) {
            display.value = "DIDDY"; // The text in the calculator
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
