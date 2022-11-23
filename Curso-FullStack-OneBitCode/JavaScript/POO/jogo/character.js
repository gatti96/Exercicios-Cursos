export class Character {
  constructor(name, life, atack, defense) {
    this.name = name;
    this.life = life;
    this.atack = atack;
    this.defense = defense;
  }

  atacar(targetCharacter) {
    targetCharacter.life =
      targetCharacter.life - (this.atack - targetCharacter.defense);
  }
}
