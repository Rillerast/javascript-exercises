const removeFromArray = function(array, ...elements) {
    return array.filter(member => {
        for(let i = 0; i < elements.length; i++) {
            if (member === elements[i]) return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
