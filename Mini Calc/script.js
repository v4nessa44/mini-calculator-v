'Use Strict'

const numberOneEl = document.getElementById("num1");
const numberTwoEl = document.querySelector("#num2");
const addBtn = document.querySelector(".add");
const substractBtn = document.querySelector(".subtract");
const divideBtn = document.querySelector(".divide");
const multiplyBtn = document.querySelector(".multiply");
const result = document.querySelector(".result")


const addition = () =>{
    let sum = Number(numberOneEl.value) + Number(numberTwoEl.value);
    result.innerHTML = sum;
}

const subtraction = () =>{
    let minus = numberOneEl.value - numberTwoEl.value;
    result.innerHTML = minus
}

const division = () =>{
    let divide = numberOneEl.value / numberTwoEl.value;
    result.innerHTML = divide
}

const multiplication = () =>{
    let multiply = numberOneEl.value * numberTwoEl.value;
    result.innerHTML = multiply
}

addBtn.addEventListener("click", addition)
substractBtn.addEventListener("click", subtraction)
divideBtn.addEventListener("click", division)
multiplyBtn.addEventListener("click", multiplication)