const App = require("./App");

App.createdUser("rian@rian.com", "rian");
App.createdUser("luzia@luzia.com", "luzia");
App.createdUser("renan@renan.com", "renan");

App.deposit("rian@rian.com", 100);

App.transfer("rian@rian.com", "renan@renan.com", 20);

App.mudarTaxaLoan(10);
App.emprestimos("luzia@luzia.com", 1500, 15);

console.table(App.findUser("rian@rian.com"));
console.table(App.findUser("luzia@luzia.com"));
console.table(App.findUser("renan@renan.com"));
