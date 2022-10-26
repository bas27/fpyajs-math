import Daemon from "./daemon.js";

const d1 = new Daemon('Bred');

console.log(d1);
console.log(d1.valAttack);
console.log('--------');

d1.valAttack = 2;
d1.valStoned = true;
console.log(d1.valAttack);
console.log('--------');
d1.valAttack = 2;
console.log(d1.valAttack);
console.log('--------');
console.log(d1.stoned);
console.log('--------');

console.log();
