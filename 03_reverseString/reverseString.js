const reverseString = function(string) {
    let word = string;
    let reversed;
    for (i = 0; i < word.length; i++)
    {
        reversed = string.pop();
    }
    return reversed;
// Do not edit below this line
module.exports = reverseString;
