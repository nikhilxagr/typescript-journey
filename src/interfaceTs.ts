type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(`Serving ${order.type} chai with ${order.sugar} sugar and strong: ${order.strong}`);
}

type TeaRecipe {
    water: number;
    milk: number;
}

class MasalaChai implements TeaRecipe {
    water =100;
    milk = 50;
}

interface CupSize {
    small: 'small';
    medium: 'medium';
    large: 'large';
}

class Chai implements CupSize {
    size: 'small' | 'medium' | 'large';
}

type Response = {ok: true } | {ok: false}
class myres implements Response {
    ok: boolean = true;
}

type TeaType = 'masala' | 'ginger' | 'lemon';

function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai = { teaLeaves: number}
type Extra = {Masala:number}

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
    teaLeaves: 5,
    Masala: 2
};

type User = {
    username: string;
    bio?: string;
};

const u1: User = {
    username: 'Nikhil',
    bio: 'A passionate tea lover'
};
const u2: User = {
    username: 'Rahul',
    bio: 'A passionate tea lover'
};

type Config = {
    readonly appName:string;
    version: number
}

const cfg: Config = {
    appName: 'ChaiApp',
    version: 1.0
};

// cfg.appName = 'NewChaiApp'; // Error: Cannot assign to 'appName' because it is a read-only property.