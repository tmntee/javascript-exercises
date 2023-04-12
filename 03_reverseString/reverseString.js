const reverseString = function(string) {
    let word = string;
    let reversed = "";

    for (let i = word.length; i > -1; i--)
    {
        reversed += word.charAt(i);
    }
    return reversed;
};
// Do not edit below this line
module.exports = reverseString;
