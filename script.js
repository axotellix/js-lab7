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



/* [ TASK 3 > Celsius <-> Fahrenheit ] */
console.group('\n\nЗадание 3. Решение прямоугольника \n\n');
let c = 25;
let f = 87;

console.log(`${c} C\u{00B0} = ${c * 1.8 + 32} F\u{00B0}`);
console.log(`${f} F\u{00B0} = ${(f - 32) / 1.8} C\u{00B0}`);

console.groupEnd();


/* [ TASK 4 > Check if a year is leap ] */
console.group('\n\nЗадание 4. Проверка високосности года \n\n');

let y = prompt('Задание 4. Укажите год:');
let res = new Date(2020, 1+1, 0).getDate() === 29 ? true : false;
alert(`Год ${y}: ${res}`);

console.groupEnd();
