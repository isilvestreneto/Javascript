let hoje = new Date();
console.log(hoje.getFullYear());

// Função hipotenusa
function hypotenuse(x, y) {
  return Math.sqrt(x * x + y * y);
}

console.log(hypotenuse(3, 4));

// Função fatorial
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(10));