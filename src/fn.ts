// 1. Basic function

function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Rahul"));

// Output: Hello, Rahul!


// 2. Function with two parameters

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));
// Output: 30


// 3. Function with no return value (void)

function sayHello(): void {
  console.log("Hello, TypeScript!");
}

sayHello();




// 4. Function with optional parameters

function welcome(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello ${name}, you are ${age} years old.`;
  }

  return `Hello ${name}!`;
}

console.log(welcome("Amit"));
console.log(welcome("Amit", 25));


// 5. Function with a default parameter 

function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5));    // 10
console.log(multiply(5, 3)); // 15


// If you don't provide b, its default value is 2.
// 6. Arrow function
//  Arrow functions are commonly used in modern TypeScript.
const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log(subtract(10, 4));

// Output: 6


// 7. Function that returns a number
//  A shorter version:
const square = (n: number): number => n * n;

console.log(square(5));
// Output: 25



// 8. Function that returns an object
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

function createUser(id: number, name: string): User {
  return {
    id,
    name,
    isActive: true
  };
}

console.log(createUser(1, "Priya"));

// Output:
// {
//   id: 1,
//   name: "Priya",
//   isActive: true
// }

// 8. Function using an array

function getTotal(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(getTotal([10, 20, 30]));
// Output: 60


// 9. Async function  

// Useful when working with APIs or databases.

async function getUser(): Promise<string> {
  return "User found!";
}

getUser().then((result) => {
  console.log(result);
});



// 10. Generic function

// Generics allow a function to work with different data types while preserving type safety.

function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));
console.log(identity<boolean>(true));