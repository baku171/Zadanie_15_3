'use strict';

var sayHello = function sayHello() {
    return alert('Hello world!');
};
sayHello();

// Zadanie pierwsze
var hello = 'Hello';
var world = 'World';

console.log(hello + ' ' + world);

// Zadanie drugie

var multiply = function multiply() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var z = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};

console.log(multiply(5));

// Zadanie trzecie

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        return sum += arg;
    });
    return sum / args.length;
};

// Zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

var avg = function avg() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    var sum = 0;
    args.forEach(function (arg) {
        return sum += arg;
    });
    return sum / args.length;
};

console.log(avg.apply(undefined, grades));

//Zadanie piąte

var tablica = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = tablica[2],
    lastname = tablica[4];


console.log(lastname);
