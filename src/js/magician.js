import ModCharacter from './modCharacter';

export default class Magician extends ModCharacter {
  constructor(name, type = 'Magician', attack = 10, defence = 40) {
    super(name, type, attack, defence);
  }
}
