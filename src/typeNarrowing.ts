function getChai(kind:string | number) {
    if(typeof kind === 'string') {
        return `Making ${kind} chai...`;   // This is a string
    }
    return `Chai Order: ${kind}`;   // This is a number
} 

function serveChai(msg?: string) {
    if(msg) {
        return `Serving chai: ${msg}`;
    } 
    return 'Serving delicious chai! $(msg)';   // This is a string
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if ( size === "small"){
        return `Ordering small chai`;
    }
    if ( size === "medium"){
        return `Ordering medium chai`;   
    }
    if ( size === "large"){
        return `Ordering large chai`;   
    }

    return `Ordering chai of size ${size}`;   // This is a number
}

class KulhadChai {
    serve(){
        return 'Serving chai in kulhad';
    }
}
class cupChai {
    serve(){
        return 'Serving chai in cup';
    }
}

function serve(chai: KulhadChai | cupChai) {
    if(chai instanceof KulhadChai) {
        return chai.serve();   // This is a KulhadChai
    }
    return chai.serve();   // This is a cupChai
}

type ChaiOrder = {
    type: string;
    sugar: number;
}

function isChaiOrder(obj:any):obj is ChaiOrder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(item:ChaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai ${item} `;
}

type MasalaChai = {
    type:"masala";
    spiceLevel:number;
}
type GingerChai = {
    type:"ginger";
    amount:number;
}
type ElaichiChai = {
    type:"elaichi";
    aroma:number;
}

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order:Chai) {
    switch(order.type) {
        case "masala":
            return `Making masala chai with spice level ${order.spiceLevel}`;
            break;
        case "ginger":
            return `Making ginger chai with amount ${order.amount}`;
            break;
        case "elaichi":
            return `Making elaichi chai with aroma ${order.aroma}`;
            break;
    }

}

function brew(order:MasalaChai | GingerChai | ElaichiChai) {
    if("spiceLevel" in order) {
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    }
    if("amount" in order) {
        return `Brewing ginger chai with amount ${order.amount}`;
    }
    if("aroma" in order) {
        return `Brewing elaichi chai with aroma ${order.aroma}`;
    }
}

function isStringArray(arr:unknown[]): arr is string[] {
    return arr.every(item => typeof item === 'string');
}