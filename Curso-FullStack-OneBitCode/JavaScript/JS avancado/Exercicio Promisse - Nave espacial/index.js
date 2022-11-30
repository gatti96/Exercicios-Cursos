import Spaceship from "./spaceship.js";
import SpaceshipEngine from "./spaceship_engine.js";

const sophia = new Spaceship("Sophia", 10, 5);
const amsterda = new Spaceship("Amesterda", 14, 10);
const estrelaAna = new Spaceship("Estrela-Anã", 20, 4);

const sophiaEngine = new SpaceshipEngine(sophia);
const amsterdaEngine = new SpaceshipEngine(amsterda);
const estrelaAnaEngine = new SpaceshipEngine(estrelaAna);

sophiaEngine.ligarNave();
amsterdaEngine.ligarNave();
estrelaAnaEngine.ligarNave();
