export class Warrior {
  constructor(name, life, atack, defense, shieldPoints, position) {
    this.name = name;
    this.life = life;
    this.atack = atack;
    this.defense = defense + shieldPoints;
    this.shieldPoints = shieldPoints;
    this.position = position;
  }

  atack(alvo) {
    if (this.position === "ataque") {
      alvo.life = alvo.life - (this.atack - alvo.defense);
    } else {
      console.log(`Código invalido`);
    }
  }

  switch() {
    if (this.position === "ataque") {
      this.position = "defesa";
    } else {
      this.position = "ataque";
    }
  }
}
