const ftoc = function(fahrenheit) {
    return Math.round(((fahrenheit - 32) * 5/9) * 10.0) /10.0
};

const ctof = function(celsius) {
    return Math.round((celsius * 9/5 + 32) * 10.0) / 10.0
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
