module.exports = class Deposit {
  nowDate() {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  }
  constructor(value) {
    this.value = value;
    this.data = this.nowDate();
  }
};
