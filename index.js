document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.calc-screen span')
    let currentInput = '0';
    let previousInput = '';
    let operator = '';

    const updateScreen = () => {
        screen.textContent = currentInput;
    }

    const handleNumber = (number) => {
        if (currentInput === '0' && number !== '.') {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateScreen()
    }

    document.querySelectorAll('.calc-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('nine') || button.classList.contains('eight') ||
                button.classList.contains('seven') || button.classList.contains('six') ||
                button.classList.contains('five') || button.classList.contains('four') ||
                button.classList.contains('three') || button.classList.contains('two') ||
                button.classList.contains('one') || button.classList.contains('zero') ||
                button.classList.contains('dot')) {
                handleNumber(button.textContent);
            } else if (button.classList.contains('plus') || button.classList.contains('minus') ||
                button.classList.contains('multiply') || button.classList.contains('division')) {

            } else {

            }
        });
    });

    updateScreen();
})
