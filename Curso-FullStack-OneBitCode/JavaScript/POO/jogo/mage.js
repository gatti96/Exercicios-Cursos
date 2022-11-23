import { Character } from "./character.js";

export class Mage extends Character {
  constructor(name, life, atack, defense, mage) {
    super(name, life, atack, defense);
    this.mage = mage;
  }

  atacar(targetCharacter) {
    const atack = this.atack + this.mage;
    targetCharacter.life =
      targetCharacter.life - (atack - targetCharacter.defense);
  }

  vida(targetCharacter) {
    const life = 2 * this.mage;
    targetCharacter.life = targetCharacter.life + life;
  }
}
