// Element selection
const multiForm = document.querySelector('#multiplication-tab');
const numberInput = document.querySelector('#number');
const multiplyInput = document.querySelector('#multiplicator');

const multiplicationTitle = document.querySelector('#chosen-nbr');
const multiplicationTable = document.querySelector('#multiplication-operations');
// functions
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i

        const template = 
            `<div class="row">
                <div class="operation">${number} x ${i}</div>
                <div class="result-mlt">&nbsp; = ${result}</div>
            </div>`

        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

    }

    multiplicationTitle.innerText = ` ${number}`

};

// events

multiForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplyInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
})