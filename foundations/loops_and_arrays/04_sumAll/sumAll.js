const sumAll = function(first, second) {

    if (!Number.isInteger(first) || !Number.isInteger(second)) return "ERROR";
    if (first < 0 || second < 0) return "ERROR";

    let lower = 0;
    let higher = 0;
    let sum = 0;

    if (first < second) {
        lower = first;
        higher = second;
    } else {
        lower = second;
        higher = first;
    }

    for(let i = lower; i <= higher; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
