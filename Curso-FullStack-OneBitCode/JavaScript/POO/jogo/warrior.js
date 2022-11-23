import { Character } from "./character.js";

export class Warrior extends Character {
  constructor(name, life, atack, defense, shieldPoints, position) {
    super(name, life, atack, defense);
    this.shieldPoints = shieldPoints;
    this.position = position;
  }

  atacar(targetCharacter) {
    if (this.position === "ataque") {
      targetCharacter.life =
        targetCharacter.life - (this.atack - targetCharacter.defense);
    } else {
      console.log(`Código invalido`);
    }
  }

  switch() {
    if (this.position === "ataque") {
      this.position = "defesa";
      this.defense += this.shieldPoints;
    } else {
      this.position = "ataque";
      this.defense -= this.shieldPoints;
    }
  }
}
