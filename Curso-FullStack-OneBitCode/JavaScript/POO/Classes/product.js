class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(perOff) {
    const value = (this.price * perOff) / 100;
    console.log(`Preço com desconto é ${this.price - value}`);
  }
}

const livro = new Product("Avenge", 18.99, "Ficção Cientifica");

console.log(livro);

livro.addToStock(3);
console.log(livro);

livro.calculateDiscount(15);
