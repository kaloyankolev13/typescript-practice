import { Invoice } from './classes/Invoice.js';
import { Payments } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payments('mario', 'plumbing work', 200);

let docs: HasFormatter[] = [];

docs.push(docOne, docTwo);
docs.forEach((doc) => {
  console.log(doc.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, 'end');
});

// GENERICS

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docUID = addUID({ name: 'yoshi', age: 40 });
// let docTwoUID = addUID('hello');

console.log(docUID.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThreeUid: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' },
};

const docFourUid: Resource<string[]> = {
  uid: 2,
  resourceName: 'shoppingList',
  data: ['bread', 'milk', 'toilet roll'],
};
