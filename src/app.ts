import { Invoice } from './classes/Invoice.js';
import { Payments } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payments('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);

invoices.forEach((inv) => {
  console.log(inv.amount, inv.format());
});

// Print to DOM in li elements the invoices
const ul = document.querySelector('ul')!;
invoices.forEach((inv) => {
  const li = document.createElement('li');
  li.innerText = inv.format();
  ul.append(li);
});

// function for creating li elements

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});
