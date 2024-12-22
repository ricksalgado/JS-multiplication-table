// Element selection
const multiForm = document.querySelector('#multiplication-tab');
const numberInput = document.querySelector('#number');
const multiplyInput = document.querySelector('#multiplicator');

// functions

// events

multiForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplyInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    console.log(multiplicationNumber, multiplicatorNumber)
})