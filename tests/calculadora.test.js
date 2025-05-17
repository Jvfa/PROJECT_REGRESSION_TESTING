
const { soma, subtrai } = require('../src/calculadora');

test('deve somar corretamente', () => {
  expect(soma(2, 3)).toBe(5);
});

test('deve subtrair corretamente', () => {
  expect(subtrai(5, 2)).toBe(3);
});