function min(a, b) {}

console.log(Math.min(0, -10));

// Bean counting

function countBs(string) {
  return countChar(string, "B");
}

function countChar(string, character) {
  let result = 0;
  // loop over the string
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      // if current character matches input character
      result++;
    }
  }

  // increment out result by 1
  return result;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

var n = 17;
binary_string = n.toString(2);
console.log(binary_string);
