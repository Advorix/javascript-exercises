const repeatString = function(string, number) {
    if (number < 0) {
        return 'ERROR';
    }
    let temp = "";
    for (let i = 0; i < number; i++){
        temp+= string;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
