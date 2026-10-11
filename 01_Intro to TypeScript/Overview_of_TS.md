# JavaScript Introduction for Beginners

JavaScript (JS) is a programming language used to make websites interactive and dynamic. It can respond to clicks, validate forms, update page content, and create animations.

## 1. Basic JavaScript Syntax

```javascript
// This is a comment
console.log("Hello, World!");
```

- `console.log()` prints output in the console.
- `"Hello, World!"` is a string (text).
- `//` creates a single-line comment.
- A semicolon (`;`) ends a statement. It is optional in many cases, but recommended for beginners.

## 2. Variables

Variables store data.

```javascript
let name = "Nikhil";
const age = 20;
var city = "Lucknow";

console.log(name);
console.log(age);
console.log(city);
```

| Keyword | Use |
|---|---|
| `let` | The value can be changed. |
| `const` | The variable cannot be reassigned. |
| `var` | The older way to declare variables. |

Example:

```javascript
let score = 10;
score = 20;

console.log(score); // 20
```

## 3. Data Types

```javascript
let name = "Nikhil";       // String
let age = 20;              // Number
let isStudent = true;      // Boolean
let result;                // Undefined
let value = null;          // Null

console.log(typeof name);  // string
console.log(typeof age);   // number
```

## 4. Operators

```javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
```

Comparison operators:

```javascript
console.log(10 > 5);    // true
console.log(10 < 5);    // false
console.log(10 === 10); // true
console.log(10 !== 5);  // true
```

## 5. Conditional Statements

Conditions let a program make decisions.

```javascript
let age = 18;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
```

General syntax:

```javascript
if (condition) {
    // Code if the condition is true
} else {
    // Code if the condition is false
}
```

## 6. Loops

Loops repeat code.

### For loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output: `1 2 3 4 5`

### While loop

```javascript
let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}
```

## 7. Functions

A function is a reusable block of code.

```javascript
function greet() {
    console.log("Hello, Nikhil!");
}

greet();
```

Function with parameters:

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30
```

- `function` declares a function.
- `a` and `b` are parameters.
- `return` sends a result back.
- `add(10, 20)` calls the function with arguments.

## 8. Arrays

An array stores multiple values in one variable.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Mango

fruits.push("Orange");

console.log(fruits);
```

Array indexing starts at `0`.

## 9. Objects

Objects store information as key-value pairs.

```javascript
let student = {
    name: "Nikhil",
    age: 20,
    course: "BCA"
};

console.log(student.name);   // Nikhil
console.log(student.course); // BCA
```

## 10. Arrow Functions

Arrow functions provide a shorter way to write functions.

```javascript
const greet = () => {
    console.log("Hello!");
};

greet();
```

Short version:

```javascript
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```

## 11. Basic DOM Manipulation

The Document Object Model (DOM) lets JavaScript access and change HTML elements.

HTML:

```html
<h1 id="heading">Hello World</h1>
<button onclick="changeText()">Click Me</button>
```

JavaScript:

```javascript
function changeText() {
    document.getElementById("heading").textContent =
        "Welcome to JavaScript!";
}
```

Clicking the button changes the heading text.

## 12. User Input

You can take simple input using `prompt()`.

```javascript
let name = prompt("Enter your name:");

console.log("Hello, " + name);
```

Template literals are a convenient way to combine text and variables:

```javascript
let name = "Nikhil";

console.log(`Hello, ${name}!`);
```

## 13. JavaScript Events

Events happen when users interact with a webpage.

```javascript
let button = document.querySelector("#myButton");

button.addEventListener("click", function () {
    console.log("Button clicked!");
});
```

This code assumes your HTML contains an element with `id="myButton"`.

## 14. Quick Syntax Revision

| Concept | Syntax |
|---|---|
| Output | `console.log("Hello");` |
| Variable | `let x = 10;` |
| Condition | `if (x > 5) { }` |
| Loop | `for (let i = 0; i < 5; i++) { }` |
| Function | `function greet() { }` |
| Array | `let arr = [1, 2, 3];` |
| Object | `let obj = { name: "Sam" };` |
| Arrow function | `const add = (a, b) => a + b;` |
| DOM selection | `document.querySelector("h1");` |
| Event | `element.addEventListener("click", callback);` |

## 15. Beginner Practice Questions

Try to solve these yourself before checking the solutions.

### Question 1: Print your name and course

```javascript
console.log("Nikhil");
console.log("BCA");
```

### Question 2: Add two numbers

```javascript
let a = 10;
let b = 20;

console.log(a + b);
```

### Question 3: Check whether a number is positive or negative

```javascript
let num = -5;

if (num >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}
```

Note: This example treats zero as positive; you can add a separate `else if (num === 0)` case if needed.

### Question 4: Print numbers from 1 to 10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Question 5: Write a function that squares a number

```javascript
function square(n) {
    return n * n;
}

console.log(square(5)); // 25
```

## Recommended Learning Order

1. Variables
2. Data types
3. Operators
4. Conditions
5. Loops
6. Functions
7. Arrays
8. Objects
9. DOM
10. Events
11. Modern JavaScript (ES6+)
12. Asynchronous JavaScript
13. React.js

**Tip:** Start by writing small programs for each topic. Then build interactive webpages before moving on to React and full-stack development.
