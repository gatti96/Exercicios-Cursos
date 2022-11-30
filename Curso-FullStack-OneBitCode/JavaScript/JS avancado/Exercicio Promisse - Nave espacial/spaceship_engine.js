export default class {
  constructor(spaceship) {
    this.spaceship = spaceship;
  }

  ligarNave() {
    this.checarBateria()
      .then((currentCharge) => {
        console.log(
          `(${this.spaceship.name}) Partida autorizada: carga atual em ${currentCharge}%`
        );
      })
      .catch((currentCharge) => {
        console.log(
          `(${this.spaceship.name}) Partida não autorizada: carga em apenas ${currentCharge}%`
        );
      });
  }

  checarBateria() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.cargaPercentAtual();
      if (currentCharge >= 30) {
        resolve(currentCharge);
      } else {
        reject(currentCharge);
      }
    });
  }
}
