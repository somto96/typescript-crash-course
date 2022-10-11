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
}
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
	id: "Q"
}

interface MathFunc {
	(x: number, y: number): number
}

const add:MathFunc = (z: number, y: number): number => z + y;

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