class User {
  constructor(fullname, email, password, login) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
    this.login = login;
  }
}

const fullname = "Renan Gatti";
const email = "rena@renan.com";
const password = 123;
const login = "RG";

const renan = new User(fullname, email, password, login);

console.log(renan);

const test = new User("teste", "teste@teste.com", "123ger", "test123");

console.log(test);
