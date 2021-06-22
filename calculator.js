console.log("Hola")

function sum(a, b) {
  if (a === undefined && b === undefined) {
    return 0
  } else if (a === undefined) {
    return b
  } else if (b === undefined) {
    return a
  }
  return a + b;
}

function subtract(a, b) {

  if (a === undefined && b === undefined) {
    return 0
  } else if (a === undefined) {
    return 0 - b
  } else if (b === undefined) {
    return a - 0
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
