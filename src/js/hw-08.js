//! Завдання 1 ===================================
export const counterInput = document.querySelector('#value');
export let counterValue = 0;

export const decrement = document.querySelector('[data-action="decrement"]');
export const increment = document.querySelector('[data-action="increment"]');

export const plusOne = () => {
    counterValue += 1;
    counterInput.textContent = counterValue;
}

export const minusOne = () => {
    counterValue -= 1;
    counterInput.textContent = counterValue;
}

//! Завдання 2 ===================================
export const inputText = document.querySelector('#name-input');
export const outputText = document.querySelector('#name-output');

export const setOutput = (event) => {
    outputText.textContent = event.currentTarget.value;
    if (outputText.textContent.trim() === '') {
        outputText.textContent = 'Anonymous';
    }
}
