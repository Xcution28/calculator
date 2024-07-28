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

    const handleOperator = (operation) => {
        if (operator && previousInput && currentInput) {
            calculate();
        }
        operator = operation;
        previousInput = currentInput;
        currentInput = '0';
    }

    const calculate = () => {
        let result;
        const previous = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(previous) || isNaN(current)) return;

        switch (operator) {
            case '+':
                result = previous + current;
                break;
            case '-':
                result = previous - current;
                break;
            case 'x':
                result = previous * current;
                break;
            case '/':
                result = previous / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }

    const clear = () => {
        currentInput = '0';
        previousInput = '';
        operator = '';
        updateScreen();
    }

    const toggleSign = () => {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateScreen();
    }

    const percent = () => {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateScreen();
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
                handleOperator(button.textContent);
            } else if (button.classList.contains('equal')) {
                calculate();
                updateScreen();
            } else if (button.classList.contains('ac')) {
                clear();
            } else if (button.classList.contains('plus-minus')) {
                toggleSign();
            } else if (button.classList.contains('percent')) {
                percent();
            }
        });
    });

    updateScreen();
})
