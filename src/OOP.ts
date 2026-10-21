/*
  File: oops.ts

  OOP = Object-Oriented Programming

  1. Encapsulation:
     Bundling data and methods inside a class.
     private protects data from direct external access.

  2. Inheritance:
     A child class can reuse properties and methods
     from a parent class using the "extends" keyword.

  3. Polymorphism:
     The same method can have different implementations
     in different classes.

  4. Abstraction:
     Hiding implementation details and exposing only
     essential functionality using abstract classes.
*/

// ========================================
// 1. CLASS AND OBJECT
// ========================================

/*
  Class: A blueprint for creating objects.
  Object: An instance of a class.
*/

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Rahul", 22);

person1.introduce();

// ========================================
// 2. ENCAPSULATION
// ========================================

/*
  Definition:
  Encapsulation combines data and methods in one class
  and controls access to internal data.
*/

class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Deposit amount must be positive.");
      return;
    }

    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(1000);
console.log("Balance:", account.getBalance());

// account.balance = 5000; // Error: balance is private

// ========================================
// 3. INHERITANCE
// ========================================

/*
  Definition:
  Inheritance allows a child class to reuse the
  properties and methods of a parent class.
*/

class Animal {
  constructor(public name: string) {}

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} is barking.`);
  }
}

const dog = new Dog("Tommy");

dog.eat(); // Inherited from Animal
dog.bark(); // Defined in Dog

// ========================================
// 4. POLYMORPHISM
// ========================================

/*
  Definition:
  Polymorphism means "many forms".
  Different classes can implement the same method
  in different ways.
*/

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says Meow!`);
  }
}

class Cow extends Animal {
  makeSound(): void {
    console.log(`${this.name} says Moo!`);
  }
}

const animals: Animal[] = [new Cat("Kitty"), new Cow("Gauri")];

for (const animal of animals) {
  if (animal instanceof Cat) {
    animal.makeSound();
  } else if (animal instanceof Cow) {
    animal.makeSound();
  }
}

/*
  The classes above demonstrate different behaviors.
  A shared method contract can make this cleaner;
  see the abstract Animal example below.
*/

// ========================================
// 5. ABSTRACTION
// ========================================

/*
  Definition:
  Abstraction hides implementation details and exposes
  the essential operations.

  An abstract class cannot be instantiated directly.
  Its child classes must implement abstract methods.
*/

abstract class Vehicle {
  constructor(public brand: string) {}

  abstract start(): void;

  stop(): void {
    console.log(`${this.brand} has stopped.`);
  }
}

class Car extends Vehicle {
  start(): void {
    console.log(`${this.brand} car starts with a key.`);
  }
}

class ElectricBike extends Vehicle {
  start(): void {
    console.log(`${this.brand} electric bike starts silently.`);
  }
}

const car = new Car("Toyota");
car.start();
car.stop();

const bike = new ElectricBike("Ather");
bike.start();
bike.stop();

// const vehicle = new Vehicle("Unknown");
// Error: Cannot create an instance of an abstract class.

// ========================================
// 6. POLYMORPHISM WITH ABSTRACTION
// ========================================

/*
  Each vehicle implements start() differently.
  We can use the same method call for every vehicle.
*/

const vehicles: Vehicle[] = [new Car("Honda"), new ElectricBike("TVS")];

for (const vehicle of vehicles) {
  vehicle.start();
}
