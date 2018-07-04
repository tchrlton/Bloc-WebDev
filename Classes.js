var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }

    getClothesType() {
     return this.name + " " + this.size + " " + this.price;
    }
}
const inst = new Clothes();


class Shirt extends Clothes {
  constructor() {
    super("T-shirt", "Small", "$7.99");
  }
}

var s = new Shirt();
console.log(s.getClothesType());
