class Fruits {
    constructor(protected name, protected price){
        this.name = name;
        this.price = price;
    }
    hello_fruit() {
        console.log("hello " + this.name);
    }
}

class Citrus extends Fruits {
    constructor(name, price, private suppaido){
        super(name, price);
        this.suppaido = suppaido;
    }   
    hello_citrus(){
        // if the type of name property is private, the code below call error.
        console.log("hello citrus " + this.name); 
    }

}
