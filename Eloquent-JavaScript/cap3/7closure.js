function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
let triple = multiplier(3);
console.log(twice(10));
console.log(triple(9));