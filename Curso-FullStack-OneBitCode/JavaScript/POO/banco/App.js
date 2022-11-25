const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");
const Account = require("./Account");

module.exports = class App {
  static #users = [];

  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null; //se o usuario não existir ele retorna um valor nulo
  }

  static createdUser(email, fullName) {
    const userExists = App.findUser(email);
    if (!userExists) {
      this.#users.push(new User(email, fullName));
    }
  }

  static deposit(email, value) {
    const user = App.findUser(email);
    if (user) {
      const newDeposit = new Deposit(value);
      user.account.addDeposit(newDeposit);
    }
  }

  static transfer(sendUserEmail, ricevedUserEmail, value) {
    const sendUser = App.findUser(sendUserEmail);
    const ricevedUser = App.findUser(ricevedUserEmail);

    if (sendUser && ricevedUser) {
      const newTransfer = new Transfer(sendUser, ricevedUser, value);
      sendUser.account.addTransfer(newTransfer);
    }
  }

  static emprestimos(email, value, numberParcela) {
    const user = App.findUser(email);

    if (user) {
      const newLoan = new Loan(value, numberParcela);
      user.account.AddLoan(newLoan);
    }
  }

  static mudarTaxaLoan(newFellLoan) {
    Loan.fell = newFellLoan;
  }
};
