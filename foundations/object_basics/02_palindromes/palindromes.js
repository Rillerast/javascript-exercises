const palindromes = function (string) {
    if (string === "") return true

    validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789"

    let clearedString = string.toLowerCase().split("").filter((char) => {
        if (validCharacters.includes(char)) return true;
        return false;
    }).join("")

    const reversedString = clearedString.split("").reverse().join("");

    return clearedString === reversedString;
    
};

// Do not edit below this line
module.exports = palindromes;
