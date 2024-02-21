// script.js

function calcularFibonacci() {
    const userInput = document.getElementById('userInput').value;
    const number = parseFloat(userInput);

    if (isNaN(number) || number < 0) {
        alert('Error: Ingresa un número positivo válido.');
    } else {
        let n1 = 0;
        let n2 = 1;
        let fibonacciSeries = '';

        for (let i = 1; i <= number; i++) {
            fibonacciSeries += n1 + ', ';
            const nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }

        document.getElementById('resultado').textContent = 'Serie de Fibonacci: ' + fibonacciSeries;
    }
}
