const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true,
}

// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

let tea :{
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Green Tea",
    price: 15,
    isHot: false,
}

type Tea = {
    name: string;
    price: number;
    ingredients: string | boolean;
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: "Adrak, Chai Leaves, Milk, Sugar"
}

type Cup = {size:string, material?:string};
let smallCup: Cup = {size:"200ml"};

let bigCup: Cup = {size:"500ml", material:"Glass"};

smallCup = bigCup; // This is valid because both smallCup and bigCup are of type Cup, and the optional property 'material' does not affect the assignment.

type Brew = {brewTime:number, temperature:number};

const coffee = {brewTime: 5, beans: "Arabica", temperature: 90};

const chaiBrew: Brew = coffee

type User = {
    username: string;
    password: string;
}

const u:User = {
    username: "john_doe",
    password: "securepassword123"
}

type Item = {
    name: string;
    price: number;
    category?: string;
}

type Address = {
    street: string;
    city: string;
    postalCode: string;
}
type Order = {
    id: number;
    items: Item[];
    shippingAddress: Address;
    totalAmount: number;
}

type Chai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updateChai =(update: Partial<Chai>) => {
    // This function can be used to update properties of a Chai object.
    // The Partial utility type allows us to pass an object with any subset of the Chai properties.
    console.log("Updating chai with:", update);
}

updateChai({ price: 22 }); // Valid, updates only the price
updateChai({ name: "Masala Chai", isHot: false }); // Valid, updates name and isHot properties

updateChai({}); // Valid, no properties to update

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order:Readonly<ChaiOrder>) => {
    // This function can be used to place an order for chai.
    // The Readonly utility type ensures that the properties of the order object cannot be modified.
    console.log("Placing order for:", order);
}

type myChai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
}

type BasicChaiInfo = Pick<myChai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Masala Chai",
    price: 20
}

type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretingredients: string[];
}

type PublciChai = Omit<ChaiNew, "secretingredients">;