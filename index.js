// function aufgabe1(a, b) {
//   if (!Number.isInteger(a)) return false;
//   if (a && b) return a * b;
//   if (a) return a * a;
//   return false;
// }
// const sum = (...args) => args.reduce((a, b) => a * b);
// console.log(sum(1, 2, 2, 2));

function aufgabe1(...args) {
  for (let x of args) {
    if (!Number.isInteger(x)) return false;
    if (args.length === 1) return x * x;
  }
  if (args.length > 1) return args.reduce((a, b) => a * b, 1);
  return false;
}
console.log(aufgabe1(5));
console.log(aufgabe1(6.05));
console.log(aufgabe1(5, 2));
console.log(aufgabe1(2, 2, 2));

function aufgabe2(...args) {
  if (args.length !== 2) {
    throw new Error(" put 2 arguments");
  }
  for (let x of args) {
    if (x !== Math.abs(x)) {
      throw new Error(" only positive arguments");
    }
    const c = Math.sqrt(Math.pow(args[0], 2) + Math.pow(args[1], 2));
    return c;
  }
  return args;
}
//console.log(aufgabe2(2, 1));
//console.log(aufgabe2(-5, 2));

module.exports = { aufgabe1, aufgabe2 };
