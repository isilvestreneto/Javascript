// Arrow function
const square = (x) => x * x;
console.log(square());

// The call stack
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
