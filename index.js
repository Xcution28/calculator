document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.calc-screen span')
    let currentInput = '0';
    let previousInput = '';
    let operator = '';

    const updateScreen = () => {
        screen.textContent = currentInput;
    }

    updateScreen();
})
