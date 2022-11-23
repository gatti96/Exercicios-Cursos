import { Character } from "./character.js";
import { Mage } from "./mage.js";
import { Thief } from "./thief.js";
import { Warrior } from "./warrior.js";

const mage = new Mage("renan", 50, 80, 15, 30);

const thief = new Thief("Luzia", 40, 70, 45);

const warrior = new Warrior("Rian", 55, 41, 30, 74, "ataque");

const character = new Character("Joao", 35, 43, 71);

console.log(mage);
console.log(thief);
console.log(warrior);
console.log(character);

warrior.switch();
warrior.switch();

mage.atack(character);
