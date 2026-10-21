// class Chai {
//     flavor: string;
//     price: number;

//     constructor(flavor: string = "", price: number = 0) {
//         this.flavor = flavor;
//         this.price = price;
//     }
// }

// const masalaChai = new Chai();
// masalaChai.flavor = "Masala";
// masalaChai.price = 50;

// Access modifiers: public, private, protected

class Chai {
    public flavor: string = "Masala";
    private secretIngredient: string = "Cardamom";
    reveal(){
        return `The secret ingredient is ${this.secretIngredient}`;
    }
}

class Shop {
  protected shopName = "Chaiwala";
}

class Branch extends Shop {
  getName() {
        return `The shop name is ${this.shopName}`;
  }
}

class Wallet {
    #balance = 100; // private field
    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet();
console.log(w.getBalance()); // 100

// console.log(w.#balance); // Error: Private field '#balance' must be declared in an enclosing class

class Cup {
    readonly capacity: number = 250; // in ml
    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

class ModernChai {
    private _sugar = 2; // in spoons
    get sugar() {
        return this._sugar;
    }
    set sugar(value: number) {
        if (value < 5) throw new Error("Sugar should be less than 5 spoons");
        this._sugar = value;
    }
}

const c = new ModernChai();
console.log(c.sugar);
c.sugar = 3;
console.log(c.sugar);

class EkChai {
    static shopName = "Chaiwala Express";
    constructor(public flavor: string) {}
}
console.log(EkChai.shopName);

abstract class Drink{
    abstract makeChai(): void;
}

class ChaiDrink extends Drink {
    makeChai(): void {
        console.log("Making chai");
    }
}

class Master {
    heat() {}
}

class chaiMaker{
    constructor(private master: Master) {}
    makeChai() {
        this.master.heat();
        console.log("Chai is ready");
    }
}