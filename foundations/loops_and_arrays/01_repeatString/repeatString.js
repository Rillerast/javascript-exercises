const repeatString = function(string, times) {
    if (times < 0) return "ERROR";
    if (string === "") return "";

    let stringRepeated = "";

    for (let i = 0; i < times; i++) {
        stringRepeated += string;
    }

    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
