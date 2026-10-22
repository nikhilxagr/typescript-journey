// Interface and Genarics

interface Chai{
    flavor: string;
    price: number;
    milk?: boolean;
}

const masala:Chai = {
    flavor: "Masala",
    price: 20
}

interface Shop{
    readonly id:number;
    name: string;
}

const s:Shop = {id: 1, name: "Tea Shop"}
// s.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

interface DiscountCalculator{
    (price: number): number;
}

const apply50: DiscountCalculator = (price) => price * 0.5;

interface TeaMachine{
    start(): void;
    stop(): void;
}

const machine: TeaMachine = {
    start: () => console.log("Machine started"),
    stop: () => console.log("Machine stopped")
}

interface ChaiRatings{ 
    [flavor: string]: number;
}

const ratings: ChaiRatings = {
    "Masala": 4.5,
    "Ginger": 4.0,
    "Cardamom": 4.2
}

interface User {
    age: number;
}
const user: User = { age: 25 };
