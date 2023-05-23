import { Invoice } from './classes/Invoice.js';
import { Payments } from './classes/Payments.js';
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payments('mario', 'plumbing work', 200);
let docs = [];
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne, invTwo);
invoices.forEach((inv) => {
    console.log(inv.amount, inv.format());
});
// Print to DOM in li elements the invoices
const ul = document.querySelector('ul');
invoices.forEach((inv) => {
    const li = document.createElement('li');
    li.innerText = inv.format();
    ul.append(li);
});
// function for creating li elements
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
