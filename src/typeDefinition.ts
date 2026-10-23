

// Example 1: Define a type for a variable
type StudentName = string;

let name: StudentName = "Rahul";

console.log("Student Name:", name);

// Example 2: Define a type for an object
type Student = {
  id: number;
  name: string;
  age: number;
  isPassed: boolean;
};

let student1: Student = {
  id: 101,
  name: "Rahul",
  age: 20,
  isPassed: true,
};

console.log("Student Details:", student1);

// Example 3: Define a type for a function
type Add = (a: number, b: number) => number;

const addition: Add = (a, b) => {
  return a + b;
};

console.log("Addition:", addition(10, 20));

// Example 4: Define a type with specific values
type Role = "admin" | "user" | "guest";

let userRole: Role = "admin";

console.log("User Role:", userRole);

// Example 5: Optional property in a type
type Employee = {
  name: string;
  salary: number;
  department?: string;
};

let employee1: Employee = {
  name: "Amit",
  salary: 25000,
};

console.log("Employee Details:", employee1);
