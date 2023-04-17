const sumAll = function(min, max) {
    let sum = 0;
    for (let i = max; i >= min; i--)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
