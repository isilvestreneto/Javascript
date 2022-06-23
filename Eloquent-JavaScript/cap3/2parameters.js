// A function without a parameter
const makeNoise = function () {
  console.log("Ping!");
};

makeNoise();

// A function with two parameters
const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
