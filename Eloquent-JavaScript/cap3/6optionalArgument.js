function power(base, exponent = 2) {
  // defines the parameter exponent in case its undefined
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
console.log(power(2, 6));
