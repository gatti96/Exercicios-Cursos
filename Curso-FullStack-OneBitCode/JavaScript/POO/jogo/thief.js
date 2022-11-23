import { Character } from "./character.js";

export class Thief extends Character {
  atacar(targetCharacter) {
    const atack = (this.atack - targetCharacter.defense) * 2;
    targetCharacter.life = targetCharacter.life - atack;
  }
}
