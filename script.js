const sayHello = () => alert('Hello world!');
sayHello();

// Zadanie pierwsze
const hello = 'Hello';
const world = 'World';

console.log(`${hello} ${world}`);

// Zadanie drugie

const multiply = (x, z = 1) => x * y;

console.log(multiply(5));

// Zadanie trzecie

const average = (...args) => args.reduce((sum, value) => sum + value, 0) / args.length;

// Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

const avg = (...args) => {
    let sum = 0;
    args.forEach(arg => sum += arg);
    return sum/args.length;
};

console.log(avg(...grades));

//Zadanie piąte

const tablica = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = tablica;

console.log(lastname);

