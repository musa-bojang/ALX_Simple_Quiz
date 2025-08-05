document.addEventListener('DOMContentLoaded', () => {
     const number1 = document.getElementById('number1');
     const number2 = document.getElementById('number2');
       
         const resultDisplay = document.getElementById('result');

        function add(num1, num2) {
            return num1 + num2;
        }
        function subtract(num1, num2) {
            return num1 - num2;
        }
        function multiply(num1, num2) {
            return num1 * num2;
        }
        function divide(num1, num2) {
            if (num2 === 0) {
                return 'Cannot divide by zero';
            }
            return num1 / num2;
        }
        
        document.getElementById('add').addEventListener('click', () => {
            const result = add(parseFloat(number1.value), parseFloat(number2.value));
            resultDisplay.textContent = `Result: ${result}`;
        });

        document.getElementById('subtract').addEventListener('click', () => {
            const result = subtract(parseFloat(number1.value), parseFloat(number2.value));
            resultDisplay.textContent = `Result: ${result}`;
        });
        document.getElementById('multiply').addEventListener('click', () => {
            const result = multiply(parseFloat(number1.value), parseFloat(number2.value));
            resultDisplay.textContent = `Result: ${result}`;
        });
        document.getElementById('divide').addEventListener('click', () => {
            const result = divide(parseFloat(number1.value), parseFloat(number2.value));
            resultDisplay.textContent = `Result: ${result}`;
        });

}); 
