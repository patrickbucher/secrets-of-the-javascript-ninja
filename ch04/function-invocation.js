function sayHi(name) {
    console.log(`Hello, ${name}.`);
}

function Greeter(name) {
    console.log(`Hello, ${name}.`);
}

// 1) invoked as a function
sayHi('John');

// 2) invoked as a method
var john = {
    greet: sayHi
};
john.greet('John');

// 3) invoked as a constructor
new Greeter('John');

// 4) invoked using call and apply
sayHi.call(john, 'John');
sayHi.apply(john, ['John']);
