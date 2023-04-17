const removeFromArray = function(array, index) {
    let newArray = [];
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] === index)
        {
            newArray.splice(i, 1)
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
