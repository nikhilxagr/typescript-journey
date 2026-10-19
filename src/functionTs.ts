function makeChai(type: string, cups: number): string {
    return `Making ${cups} cups of ${type} chai.`;
}

makeChai("Masala", 2); // This will return "Making 2 cups of Masala chai."

function getChaiPrice(): number {
    return 20; // Price of chai in currency units
}

function makeOrder(order: string){
    if(!order) return null; // If no order is provided, return null
    return `Order placed for: ${order}`;
}

function logChai():void {
    console.log("Chai is being prepared.");
}

function orderChai(type: string, quantity: number): string {
    if (quantity <= 0) {
        return "Quantity must be greater than zero.";
    }
    return `Order placed for ${quantity} cups of ${type} chai.`;
}