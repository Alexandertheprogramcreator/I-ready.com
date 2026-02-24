const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error";
        window.alert("Alexander Sanders the king of math and programming formulas does not approve of this mathematical incompetence and a transgression to the power of the homemade calculator and does not behave kindly to those who mock the power of the homemade calculator. Use this ability appropriately, All hail Alexander Sanders - Alexander Sanders");
    }
}