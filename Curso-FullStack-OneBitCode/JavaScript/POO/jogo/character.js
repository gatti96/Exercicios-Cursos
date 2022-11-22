export class Character {
  constructor(name, life, atack, defense) {
    this.name = name;
    this.life = life;
    this.atack = atack;
    this.defense = defense;
  }

  atack(alvo) {
    alvo.life = alvo.life - (this.atack - alvo.defense);
  }
}
