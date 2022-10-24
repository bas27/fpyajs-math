import Daemon from "./daemon.js";

const d1 = new Daemon('Bred');

console.log(d1);
d1.valAttack = 20;
d1.valStoned = true;
console.log(d1);

console.log(d1.valAttack);
