export class Mage {
  constructor(name, life, atack, defense, mage) {
    this.name = name;
    this.life = life;
    this.atack = atack;
    this.defense = defense;
    this.mage = mage;
  }

  atack(alvo) {
    const atack = this.atack + this.mage;
    alvo.life = alvo.life - (atack - alvo.defense);
  }

  life(alvo) {
    const life = 2 * this.mage;
    alvo.life = alvo.life + life;
  }
}
