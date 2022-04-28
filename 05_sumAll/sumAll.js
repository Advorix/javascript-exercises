const sumAll = function(start, range) {
    if (start > range) {
        let temp = range;
        range = start;
        start = temp;
    }
    if (start < 0 || !Number.isInteger(start) || !Number.isInteger(range)) {
        return "ERROR";
    }
    let sum = 0;
    for (let i = start; i <= range; i++) {
        sum+= i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
