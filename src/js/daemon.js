import ModCharacter from './modCharacter.js';

export default class Daemon extends ModCharacter {
  constructor(name, type = 'Daemon', attack = 10, defence = 40) {
    super(name, type, attack, defence);
  }
}
