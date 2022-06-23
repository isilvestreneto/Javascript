// Bindings and scope
let x = 10;
if (true) {
  let y = 20; //
  var z = 30;
  console.log("Local scope:");
  console.log(x + y + z);
}

console.log("Global scope:");
console.log(x + z);

// More scope example
const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log(halve(100)); // the code inside refers to n its own
console.log(n); // global n