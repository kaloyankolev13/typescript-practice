// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3) error
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun') error
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age ='30'; error
// ninja.skills = ['fighting', 'sneaking']; error
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
};
