// Generics - Allow you to create reusable components that work with multiple types.

function wrapInArray<T>(item: T): T[] {
    return [item];
}

wrapInArray(5); // Returns: [5]
wrapInArray("Hello"); // Returns: ["Hello"]
wrapInArray({ name: "Nikhil" }); // Returns: [{ name: "Nikhil" }]

function pair<A, B>(first: A, second: B): [A, B] {
    return [first, second];
}

pair(1, "Hello"); // Returns: [1, "Hello"]
pair({ name: "Nikhil" }, 25); // Returns: [{ name: "Nikhil" }, 25]

interface Box<T> {
    content : T;
}

const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "Hello" };

interface ApiResponse<T> {
    status: number;
    data: T;
}

const res : ApiResponse<{flavor: string}> = {
    status: 200,
    data: { flavor: "Masala" }
};

