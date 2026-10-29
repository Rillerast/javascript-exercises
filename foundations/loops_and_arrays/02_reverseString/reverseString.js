const reverseString = function(string) {

    const length = string.length - 1;

    if (!length) return string;

    let reversed = "";

    for (let i = length; i >= 0; i--) {
        reversed += string[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
