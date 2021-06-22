console.log("Hola")

function sum(a, b) {
  if (a === undefined) {
    return 0
  }  
  return a + b;
}

function subtract(a, b) {

  if (a === undefined) {
    return 0
  }
  return a - b;
}

function divide(a, b) {
  if (b === 0){
    throw console.error("Error");
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

console.log(sum(13,15))

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
