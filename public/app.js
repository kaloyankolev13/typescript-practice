"use strict";
// classes
class Invoice {
    // private client: string;
    // readonly details: string;
    // public amount: number;
    constructor(
    // Only work if has access modifiers
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
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
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    const invoice = new Invoice(type.value, details.value, amount.valueAsNumber);
    console.log(invoice.format());
});
