import Character from './character.js';

const damageDistance = {
  1: 1,
  2: 0.9,
  3: 0.8,
  4: 0.7,
  5: 0.6,
};

export default class ModCharacter extends Character {
  constructor(name, type, attack, defence, health, level, stoned = false, distance = 1) {
    super(name, type, attack, defence, health, level);
    this.stoned = stoned;
    this.distance = distance;
  }

  set valAttack(val) {
    super.attack = val;
  }

  get valAttack() {
    let newAttack = this.attack;
    newAttack -= newAttack * damageDistance[this.distance];

    if (this.stoned) {
      newAttack -= Math.log2(this.distance) * 5;
    }
    return Math.floor(newAttack);
  }

  set valStoned(val) {
    this.stoned = val;
  }

  get valStoned() {
    return this.stoned;
  }
}
