module.exports = class Transfer {
  nowDate() {
    const now = new Date();
    return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  }

  constructor(sendUser, ricevedUser, value) {
    this.sendUser = sendUser;
    this.ricevedUser = ricevedUser;
    this.value = value;
    this.date = this.nowDate();
  }
};
