const convertToCelsius = function(degreesInFahrenheit) {
    let celsius = (degreesInFahrenheit - 32) * (5/9);
    return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(degreesInCelsius) {
  let fahrenheit = (degreesInCelsius * (9/5)) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
