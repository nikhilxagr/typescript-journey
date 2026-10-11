/**
 * TypeScript Introduction for Beginners
 *
 * TypeScript (TS) is JavaScript with a type system.
 * It helps catch many mistakes while you write code.
 * TypeScript is usually compiled/transpiled to JavaScript before running in a browser.
 *
 * To try this file:
 *   1. Install Node.js.
 *   2. Install TypeScript: npm install -g typescript
 *   3. Compile: tsc intro.ts
 *   4. Run the generated JavaScript: node intro.js
 *
 * You can also use a TypeScript playground online.
 */

// --------------------------------------------------
// 1. Basic output and comments
// --------------------------------------------------

console.log("Hello, World!");

// Single-line comment

/*
  Multi-line comment
*/

// --------------------------------------------------
// 2. Variables and basic types
// --------------------------------------------------

let name: string = "Nikhil";
let age: number = 20;
let isStudent: boolean = true;

console.log(name);
console.log(age);
console.log(isStudent);

// `let` can be reassigned:
let score: number = 10;
score = 20;
console.log(score);

// `const` cannot be reassigned:
const city: string = "Lucknow";
console.log(city);

// Type inference: TypeScript can infer the type from the value.
let course = "BCA"; // inferred as string
console.log(course);

// `any` disables most type checking for this variable. Avoid it when possible.
let flexibleValue: any = "hello";
flexibleValue = 42;
console.log(flexibleValue);

// `unknown` is safer than `any`; check it before using it.
let unknownValue: unknown = "TypeScript";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}

// --------------------------------------------------
// 3. Data types
// --------------------------------------------------

let message: string = "Learning TypeScript";
let marks: number = 85;
let passed: boolean = true;
let numbers: number[] = [10, 20, 30];
let nothing: null = null;
let notAssigned: undefined = undefined;

console.log(typeof message); // string
console.log(typeof marks);   // number
console.log(typeof passed);  // boolean
console.log(numbers);
console.log(nothing);
console.log(notAssigned);

// --------------------------------------------------
// 4. Operators
// --------------------------------------------------

let a: number = 10;
let b: number = 5;

console.log(a + b);  // 15
console.log(a - b);  // 5
console.log(a * b);  // 50
console.log(a / b);  // 2
console.log(a % b);  // 0

console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10); // true
console.log(10 !== 5);  // true

let hasID: boolean = true;
let isAdult: boolean = true;
console.log(hasID && isAdult); // true
console.log(hasID || false);   // true
console.log(!hasID);           // false

// --------------------------------------------------
// 5. Conditional statements
// --------------------------------------------------

let votingAge: number = 18;

if (votingAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// if / else if / else
let percentage: number = 82;

if (percentage >= 90) {
    console.log("Grade A+");
} else if (percentage >= 75) {
    console.log("Grade A");
} else if (percentage >= 60) {
    console.log("Grade B");
} else {
    console.log("Keep practising");
}

// Switch statement
let day: number = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}

// --------------------------------------------------
// 6. Loops
// --------------------------------------------------

// for loop
for (let i: number = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
let counter: number = 1;
while (counter <= 3) {
    console.log(counter);
    counter++;
}

// do...while loop (runs at least once)
let count: number = 1;
do {
    console.log(count);
    count++;
} while (count <= 3);

// for...of loop: values from an array
const fruits: string[] = ["Apple", "Mango", "Banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

// --------------------------------------------------
// 7. Functions, parameters, return types
// --------------------------------------------------

function greet(): void {
    console.log("Hello, Nikhil!");
}
greet();

function greetPerson(personName: string): string {
    return `Hello, ${personName}!`;
}
console.log(greetPerson("Nikhil"));

function add(x: number, y: number): number {
    return x + y;
}
console.log(add(10, 20)); // 30

// Optional parameter
function introduce(personName: string, courseName?: string): string {
    if (courseName) {
        return `${personName} studies ${courseName}.`;
    }
    return `${personName} is a student.`;
}
console.log(introduce("Nikhil"));
console.log(introduce("Nikhil", "BCA"));

// Default parameter
function multiply(x: number, y: number = 2): number {
    return x * y;
}
console.log(multiply(5));    // 10
console.log(multiply(5, 3)); // 15

// Arrow function
const subtract = (x: number, y: number): number => x - y;
console.log(subtract(10, 3)); // 7

// --------------------------------------------------
// 8. Arrays
// --------------------------------------------------

const scores: number[] = [70, 80, 90];
console.log(scores[0]); // 70

scores.push(95);
console.log(scores);

scores.forEach((item: number) => {
    console.log(item);
});

const doubledScores: number[] = scores.map((item: number) => item * 2);
console.log(doubledScores);

const highScores: number[] = scores.filter((item: number) => item >= 85);
console.log(highScores);

// --------------------------------------------------
// 9. Tuples
// --------------------------------------------------

// A tuple describes an array with a fixed sequence of types.
let studentRecord: [string, number] = ["Nikhil", 20];
console.log(studentRecord[0]);
console.log(studentRecord[1]);

// --------------------------------------------------
// 10. Objects and type aliases
// --------------------------------------------------

const student: { name: string; age: number; course: string } = {
    name: "Nikhil",
    age: 20,
    course: "BCA"
};

console.log(student.name);
console.log(student.course);

// A type alias lets you reuse an object shape.
type Student = {
    id: number;
    name: string;
    email?: string; // optional property
};

const studentOne: Student = {
    id: 1,
    name: "Aarav"
};

const studentTwo: Student = {
    id: 2,
    name: "Priya",
    email: "priya@example.com"
};

console.log(studentOne);
console.log(studentTwo.email);

// --------------------------------------------------
// 11. Union types and literal types
// --------------------------------------------------

let userID: number | string = 101;
console.log(userID);

userID = "USER-101";
console.log(userID);

function printID(id: number | string): void {
    console.log(`ID: ${id}`);
}
printID(123);
printID("ABC-123");

type Status = "pending" | "success" | "failed";
let paymentStatus: Status = "pending";
paymentStatus = "success";
console.log(paymentStatus);

// --------------------------------------------------
// 12. Enums
// --------------------------------------------------

enum Direction {
    North,
    South,
    East,
    West
}

const currentDirection: Direction = Direction.North;
console.log(currentDirection); // 0

// --------------------------------------------------
// 13. Classes, constructors, and access modifiers
// --------------------------------------------------

class Person {
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return `My name is ${this.name}, and I am ${this.age}.`;
    }
}

const person = new Person("Nikhil", 20);
console.log(person.introduce());

// Inheritance
class Developer extends Person {
    public language: string;

    constructor(name: string, age: number, language: string) {
        super(name, age);
        this.language = language;
    }

    public code(): string {
        return `${this.name} codes in ${this.language}.`;
    }
}

const developer = new Developer("Nikhil", 20, "TypeScript");
console.log(developer.introduce());
console.log(developer.code());

// --------------------------------------------------
// 14. Interfaces
// --------------------------------------------------

interface Product {
    id: number;
    title: string;
    price: number;
}

const product: Product = {
    id: 1,
    title: "Keyboard",
    price: 999
};

console.log(product.title, product.price);

// --------------------------------------------------
// 15. Generics
// --------------------------------------------------

// A generic function works with different types while preserving type safety.
function getFirst<T>(items: T[]): T | undefined {
    return items[0];
}

console.log(getFirst<number>([10, 20, 30]));
console.log(getFirst<string>(["red", "blue"]));

// --------------------------------------------------
// 16. Error handling
// --------------------------------------------------

try {
    const parsedValue: unknown = JSON.parse('{"name":"Nikhil"}');
    console.log(parsedValue);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Could not parse JSON:", error.message);
    } else {
        console.error("An unknown error occurred.");
    }
}

// --------------------------------------------------
// 17. Promises and async/await
// --------------------------------------------------

function wait(milliseconds: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Finished waiting!"), milliseconds);
    });
}

async function runExample(): Promise<void> {
    const result: string = await wait(100);
    console.log(result);
}

void runExample();

// --------------------------------------------------
// 18. Modules (example syntax)
// --------------------------------------------------

// In a separate file called math.ts:
// export function square(value: number): number {
//     return value * value;
// }

// In another file:
// import { square } from "./math";
// console.log(square(5));

// --------------------------------------------------
// 19. Type assertions and narrowing
// --------------------------------------------------

const someValue: unknown = "hello typescript";

if (typeof someValue === "string") {
    // TypeScript knows someValue is a string in this block.
    console.log(someValue.toUpperCase());
}

// A type assertion tells TypeScript how you intend to treat a value.
// Use it only when you know the actual type.
const inputText = document.querySelector("#nameInput") as HTMLInputElement | null;
if (inputText) {
    console.log(inputText.value);
}

// --------------------------------------------------
// 20. DOM manipulation (browser only)
// --------------------------------------------------

// This section is for a browser page containing:
// <h1 id="heading">Hello World</h1>
// <button id="changeButton">Click Me</button>

const heading = document.querySelector<HTMLHeadingElement>("#heading");
const changeButton = document.querySelector<HTMLButtonElement>("#changeButton");

if (heading && changeButton) {
    changeButton.addEventListener("click", () => {
        heading.textContent = "Welcome to TypeScript!";
    });
}

// Note: DOM code requires a browser environment and matching HTML elements.
// Do not run the DOM section directly in Node.js without a DOM environment.

// --------------------------------------------------
// 21. Practice questions
// --------------------------------------------------

// 1. Declare variables for your name, age, and course.
// 2. Write a function that checks whether a number is even.
// 3. Print numbers from 1 to 10 with a loop.
// 4. Create a typed array of five marks and calculate the total.
// 5. Create a Student type and make an object using it.
// 6. Write a generic function that returns the last item in an array.

// Example solution for question 2:
function isEven(value: number): boolean {
    return value % 2 === 0;
}

console.log(isEven(8)); // true
console.log(isEven(7)); // false

// End of beginner TypeScript examples.
