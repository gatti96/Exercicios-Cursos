class Spaceship {
  constructor(name, maxCapacity, cargaAtual) {
    this.name = name;
    this.maxCapacity = maxCapacity;
    this.cargaAtual = cargaAtual;
  }

  cargaPercentAtual() {
    return (this.cargaAtual * 100) / this.maxCapacity;
  }
}

export default Spaceship;
