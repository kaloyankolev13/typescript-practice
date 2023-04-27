// explicit types
var character;
var age;
var isLoggedIn;
// age = 'luigi'; error
age = 30;
// isLoggedIn = 25; error
isLoggedIn = true;
// arrays
var ninjas = [];
// ninjas = [10, 25] error
ninjas.push('shaun');
// union types
var mixed = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);
var uid;
uid = '123';
uid = 123;
// objects
var ninjaOne;
ninjaOne = {
    name: 'Yoshi',
    age: 30,
};
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' };
