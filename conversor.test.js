/* eslint-disable no-undef */
const convertorDeTemperatura = require('./index');

describe('Testa o conversor de Celcius para fahrenheit', () => {
  test('Verifica se a resposta está correta', () => {
    expect(convertorDeTemperatura(1)).toBe(33.8);
  });
});
