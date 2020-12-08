/* [ TASK 1 > Typecasting ] */
let str = 'string';
let num = 30;
let bool = true;
let $null = null;

// string + REST VARS
console.group('Задание 1. Приведение типов');

console.log('string + number = ', typeof (str + num));		// = string
console.log('string + boolean = ', typeof (str + bool));	// = string
console.log('string + null = ', typeof (str + $null));		// = string

// integer + REST VARS
console.log('number + boolean = ', typeof (num + bool));	// = number
console.log('number + null = ', typeof (num + $null));		// = number

// boolean + REST VARS
console.log('boolean + null = ', typeof (bool + $null));	// = number

console.groupEnd();


/* [ TASK 2 > Solving rectangle ] */
const a = 15;		// a-side
const b = 5;		// b-side
let Area, Per;		// Area & Perimeter

console.group('\n\nЗадание 2. Решение прямоугольника');

console.log(`a = ${a}, b = ${b}`);
console.log(`Площадь = ${a * b}, Периметр = ${(a + b) * 2}`);
console.log(`Отношение площади к периметру = ${a * b / ((a + b) * 2)}`);

console.groupEnd();