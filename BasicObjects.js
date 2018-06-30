class Clothes {
  constructor (name, size, price) {
    this.name = name;
    this.size = size;
    this.price = price;
  }
  getClothes() {
    return this.name
  }
}

let shirt = new Clothes('V-Neck', 'Medium', 20);

console.log(shirt);
