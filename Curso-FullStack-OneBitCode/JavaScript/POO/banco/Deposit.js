module.exports = class Deposit {
  nowDate() {
    let monName = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "agosto",
      "outubro",
      "novembro",
      "dezembro",
    ];

    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  }
  constructor(value) {
    this.value = value;
    this.data = this.nowDate();
  }
};
