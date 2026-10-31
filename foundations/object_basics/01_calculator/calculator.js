const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((summy, number) => {
    return summy += number;
  }, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((prod, number) => {
    return prod * number;
  }, 1);
};

const power = function(base, exponent) {
  if (exponent === 0) return 1;
  let result = base;
	for (let i = 1; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
	if (number === 0) return 1;

  let result = number
  for (let i = number - 1; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
