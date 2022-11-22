export class Thief {
  constructor(name, life, atack, defense) {
    this.name = name;
    this.life = life;
    this.atack = atack;
    this.defense = defense;
  }
  atack(alvo) {
    const atack = (this.atack - alvo.defense) * 2;
    alvo.life = alvo.life - atack;
  }
}
