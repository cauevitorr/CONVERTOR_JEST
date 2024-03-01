const convertorDeTemperatura = (celsios) => {
  const fahrenheit = (celsios * 9) / 5 + 32;
  return fahrenheit;
};

module.exports = convertorDeTemperatura;
