const Installment = require("./Installment");

module.exports = class Loan {
  nowDate() {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  }
  static #fell = 1.05;

  constructor(value, numberParcela) {
    this.value = value;
    this.numberParcela = [];
    for (let i = 1; i <= numberParcela; i++) {
      this.numberParcela.push(
        new Installment((value * Loan.#fell) / numberParcela)
      );
    }
    this.data = this.nowDate();
  }

  static get fell() {
    return Loan.#fell;
  }

  static set fell(newFeePercentage) {
    Loan.#fell = 1 + newFeePercentage / 100;
  }
};
