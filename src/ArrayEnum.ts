const chaiFlavor: string [] = ["Masala", " Adrak"]
const chaiPrice: number [] = [20, 25]

const rating : Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number;
}

const menu: Chai[] = [
    { name: "Masala Chai", price: 15 },
    { name: "Adrak Chai", price: 25 }
]

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"]

const table :number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let chaiTuple: [string, number] = ["Masala Chai", 20];
chaiTuple = ["Adrak Chai", 25];

let userInfo: [string, number, boolean?]
userInfo = ["Nikhil", 30];
userInfo = ["Gaurav", 25, true];

const location : readonly [number, number] = [28.6139, 77.2090];

const chaiItems: [name:string ,price :number][] = [
    ["Masala Chai", 20],
    ["Adrak Chai", 25]
]

// Enum Example 

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE;

enum Status {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}

enum ChaiType {
    MASALA = "MASALA",
    ADRAK = "ADRAK"
}

function makeChai(type: ChaiType): string {
    switch (type) {
        case ChaiType.MASALA:
            return "Making Masala Chai";
        case ChaiType.ADRAK:
            return "Making Adrak Chai";
        default:
            return "Unknown Chai Type";
    }
}

makeChai(ChaiType.MASALA); // Output: Making Masala Chai

enum RandomEnum {
    ID = 1,
    NAME = "Chai",
}

const enum Sugers{
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t:[string, number] = ["chai", 30];
t.push("chai", 30); // This is allowed because push can add elements to the tuple