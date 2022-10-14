/// <reference path="validations/Validation.ts" />
/// <reference path="validations/LettersOnlyValidator.ts" />
/// <reference path="validations/ZipCodeValidator.ts" />


// Basic types
let test: number = 5;
let company: string = "Google Inc";
let isPublished: boolean = false;
let x: any;
x = 5;

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [];

// Tuple - You can use this to specify the exact types inside of the array

/* person expects values to be in sync with the data types ie [number, string, boolean] === [1, "hello", true]
 * It must follow the arrangement of the data types stated
 */
let person: [number, string, boolean] = [1, "hello", true];

// Tuple Array
let employee: [number, string, boolean][];

employee = [
	[1, "test", true],
	[2, "test", true],
	[3, "test", true],
];

// Union
/**
 * Union allows variables to hold more than one type of data
 */

let pid: string | number;
pid = 2;

// Enum
// By default these properties in Direction1 have values of 0, 1, 2, 3
enum Direction1 {
	up = 1,
	Down,
	Left,
	Right,
	// up = "up",
	// Down = "Down",
	// Left = "Left",
	// Right = "Right",
}

console.log("testingEnum", Direction1);

// Objects
type User = {
	id: number;
	name: string;
};

const testUser: User = {
	id: 0,
	name: "testUser",
};
console.log("testingType", testUser);
// "interface" can also be used in a similar way

const user: User = {
	id: 1,
	name: "John",
};

// Type Assertion
// Type Assertion explicitly tells the compiler that they want to treat the entity as a different type

/**
 * type assertion can be done in 2 ways. Examples below
 */
let cid: any = 1;
// ex 1
// let customerId = <number>cid;
// ex 2
let customerId = cid as number;

// Functions
function sum(a: number, b: number): number {
	return a + b;
}

console.log("sum", sum(1, 2));

// Void
function log(message: string | number): void {
	console.log(message);
}

//  Interfaces

/*=======================*/
/* Optional Type Members */
/*=======================*/
interface OptionsType {
	readonly name: string; // readonly
	size?: string | number;
	id: string | number;
}

const options: OptionsType = {
	name: "ade",
	// size: 2
	id: "Q",
};

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (z: number, y: number): number => z + y;

console.log("interface-function-add", add(2, 3));

// Classes
interface Person {
	name: string;
	age: number;
	register(): string;
}

class UserAccount implements Person {
	name: string;
	age: number;

	// Constructors are methods that runs as soon as the object is instantiated
	constructor(name: string, age: number) {
		// "this" refers to the current instance(class)
		this.name = name;
		this.age = age;
	}

	register() {
		return `${this.name} is now registered`;
	}
}

// Object instantiation
const newUser = new UserAccount("Murphy", 1);

console.log("newUser", newUser.name);
console.log("test", newUser.register());

// Sub Classes
class Employee extends UserAccount {
	position: string;

	constructor(name: string, age: number, position: string) {
		super(name, age);
		this.position = position;
	}
}

const emp = new Employee("Jax", 23, "CEO");

console.log("employee", emp.register());

// Generics
/*=======================*/
/* Type placeholders/parameters */
/*=======================*/

// type placeholder/parameter: <T>
const getArray = <T>(items: T[]): T[] => {
	return new Array().concat(items);
};

// Use type assertions to replace the type param/placeholder
let numArrayTwo = getArray<number>([1, 2, 3]);
let strArrayTwo = getArray<string>(["Jill", "Jake", "Bob"]);

// Structural Type System
interface Point {
	x: number;
	y: number;
}

function logPoint(p: Point) {
	console.log(`${p.x}, ${p.y}`);
}
class VirtualPoint {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

const newVPoint = new VirtualPoint(80, 90);
logPoint(newVPoint);

interface Test {
	age: number;
	id: number;
}

const hello = {
	id: 1,
	age: 20,
	name: "Joe",
};

const testFn = (args: Test): void => {
	console.log("test", args);
};

testFn(hello);

/*=======================*/
/* NAMESPACES */
/*=======================*/

// Example
interface StringValidator {
	isAcceptable(s: string): boolean;
}

let lettersRegExp = /^[a-zA-Z]+$/;
let numbersRegExp = /^\d+$/;

class LettersOnlyValidator implements StringValidator {
	isAcceptable(s: string) {
		return lettersRegExp.test(s);
	}
}

class ZipCodeValidator implements StringValidator {
	isAcceptable(s: string): boolean {
		return s.length === 5 && numbersRegExp.test(s);
	}
}

let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

console.log("Validators", validators);


// Making use of imported Validation namespace 

// Show whether each string passed each validator
for (let s of strings) {
	for (let name in validators) {
		let isMatch = validators[name].isAcceptable(s);
		console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
	}
}

// Importing Validation namespace to have some kind of organization scheme
let stringsTest = ["Hello", "98052", "101"];

// validatorsTest to use
let validatorsTest: { [s: string]: StringValidator } = {};
validatorsTest["ZIP code"] = new ZipCodeValidator();
validatorsTest["Letters only"] = new LettersOnlyValidator();

console.log("ValidatorsTest", validatorsTest);

// Show whether each string passed each validatorsTest
for (let s of strings) {
	for (let name in validatorsTest) {
		let isMatch = validatorsTest[name].isAcceptable(s);
		console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
	}
}
