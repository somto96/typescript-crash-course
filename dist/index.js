"use strict";
/// <reference path="validations/Validation.ts" />
/// <reference path="validations/LettersOnlyValidator.ts" />
/// <reference path="validations/ZipCodeValidator.ts" />
// Basic types
let test = 5;
let company = "Google Inc";
let isPublished = false;
let x;
x = 5;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [];
// Tuple - You can use this to specify the exact types inside of the array
/* person expects values to be in sync with the data types ie [number, string, boolean] === [1, "hello", true]
 * It must follow the arrangement of the data types stated
 */
let person = [1, "hello", true];
// Tuple Array
let employee;
employee = [
    [1, "test", true],
    [2, "test", true],
    [3, "test", true],
];
// Union
/**
 * Union allows variables to hold more than one type of data
 */
let pid;
pid = 2;
// Enum
// By default these properties in Direction1 have values of 0, 1, 2, 3
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
    // up = "up",
    // Down = "Down",
    // Left = "Left",
    // Right = "Right",
})(Direction1 || (Direction1 = {}));
console.log("testingEnum", Direction1);
const testUser = {
    id: 0,
    name: "testUser",
};
console.log("testingType", testUser);
// "interface" can also be used in a similar way
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
// Type Assertion explicitly tells the compiler that they want to treat the entity as a different type
/**
 * type assertion can be done in 2 ways. Examples below
 */
let cid = 1;
// ex 1
// let customerId = <number>cid;
// ex 2
let customerId = cid;
// Functions
function sum(a, b) {
    return a + b;
}
console.log("sum", sum(1, 2));
// Void
function log(message) {
    console.log(message);
}
const options = {
    name: "ade",
    // size: 2
    id: "Q",
};
const add = (z, y) => z + y;
console.log("interface-function-add", add(2, 3));
class UserAccount {
    // Constructors are methods that runs as soon as the object is instantiated
    constructor(name, age) {
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
    constructor(name, age, position) {
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
const getArray = (items) => {
    return new Array().concat(items);
};
// Use type assertions to replace the type param/placeholder
let numArrayTwo = getArray([1, 2, 3]);
let strArrayTwo = getArray(["Jill", "Jake", "Bob"]);
function logPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
class VirtualPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newVPoint = new VirtualPoint(80, 90);
logPoint(newVPoint);
const hello = {
    id: 1,
    age: 20,
    name: "Joe",
};
const testFn = (args) => {
    console.log("test", args);
};
testFn(hello);
let lettersRegExp = /^[a-zA-Z]+$/;
let numbersRegExp = /^\d+$/;
class LettersOnlyValidator {
    isAcceptable(s) {
        return lettersRegExp.test(s);
    }
}
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numbersRegExp.test(s);
    }
}
let strings = ["Hello", "98052", "101"];
// Validators to use
let validators = {};
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
let validatorsTest = {};
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
