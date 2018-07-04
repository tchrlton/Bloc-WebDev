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
  constructor(name, size, price) {
    super(name, size, price);
  }
}

var s = new Shirt('T-Shirt', 'Small', '$7.99');
console.log(s.getClothesType());
