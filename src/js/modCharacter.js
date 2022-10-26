import Character from './character.js';

const damageDistance = {
  1: 1,
  2: 0.9,
  3: 0.8,
  4: 0.7,
  5: 0.6,
};

export default class ModCharacter extends Character {
  constructor(name, type, attack, defence, health, level, distance = 1, stoned = false) {
    super(name, type, attack, defence, health, level);
    this.distance = distance;
    this.stoned = stoned;
  }

  set valAttack(distance) {
    this.attack *= damageDistance[distance];
    if (this.stoned === true) {
      this.attack -= Math.log2(this.distance) * 5;
    }
  }

  get valAttack() {
    return this.attack;
  }

  set valStoned(val) {
    this.stoned = val;
  }

  get valStoned() {
    return this.stoned;
  }
}
