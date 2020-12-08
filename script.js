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