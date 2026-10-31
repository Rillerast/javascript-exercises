const fibonacci = function(number) {

    if (!Number.isInteger(number)) return "OOPS";
    if (number < 1) return "OOPS";

    if (number === 1 || number === 2) return 1;
    if (number === 3) return 2;

    return fibonacci(number - 1) + fibonacci(number - 2);

};

// Do not edit below this line
module.exports = fibonacci;
