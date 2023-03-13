//todo=================================hw-08====================================================

//! Завдання 1 ===================================
const counterInput = document.querySelector('#value');
let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const plusOne = () => {
    counterValue += 1;
    counterInput.textContent = counterValue;
}
increment.addEventListener('click', plusOne);

const minusOne = () => {
    counterValue -= 1;
    counterInput.textContent = counterValue;
}
decrement.addEventListener('click', minusOne);

//! Завдання 2 ===================================

const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

const setOutput = (event) => {
    outputText.textContent = event.currentTarget.value;
    if (outputText.textContent.trim() === '') {
        outputText.textContent = 'Anonymous';
    }
}
inputText.addEventListener("input", setOutput);


//todo=================================hw-09====================================================


// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.
const span = document.querySelector(".color")
const btnChangeColor = document.querySelector(".change-color")
const divWidget = document.querySelector(".widget");

if (document.body.style.backgroundColor = '#FFFFFF') {
    divWidget.style.backgroundColor = '#D9D9D9';
    btnChangeColor.style.backgroundColor = '#FFFFFF';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorOnClick = () => {
    color = getRandomHexColor();
    span.textContent = color;
    document.body.style.backgroundColor = color;
    divWidget.style.backgroundColor = '#FFFFFF';
    btnChangeColor.style.backgroundColor = '#D9D9D9';
}

//!pill ===============================================================
const toggle = document.querySelector('#pill3');

const handleClick = () => {
  console.log("click event listener callback");
}

const changeListenerBtn = () => {
    if(toggle.checked){
        btnChangeColor.addEventListener('click', changeColorOnClick);
    } else{
        btnChangeColor.removeEventListener('click', changeColorOnClick);
    }
}

toggle.addEventListener('click', changeListenerBtn);