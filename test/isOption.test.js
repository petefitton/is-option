let isOption = require('../index');

test('Checks to see if \'Failure\' is a valid option', () => {
  expect(isOption("Failure")).toBe("Failure's not an option");
});

test('Checks to see if \'failure\' is a valid option', () => {
  expect(isOption("failure")).toBe("failure's not an option");
});

test('Checks to see if \'fAiLuRe\' is a valid option', () => {
  expect(isOption("fAiLuRe")).toBe("fAiLuRe's not an option");
});

test('Checks to see if \'Failures\' is a valid option', () => {
  expect(isOption("Failures")).toBe(`Failures is an option`);
});

test('Checks to see if \'fail\' is a valid option', () => {
  expect(isOption("fail")).toBe(`fail is an option`);
});

test('Checks to see if \'Success\' is a valid option', () => {
  expect(isOption("Success")).toBe(`Success is an option`);
});

test('Checks to see if Boolean \'true\' is a valid option', () => {
  expect(isOption(true)).toBe(`true is an option`);
});

test('Checks to see if Boolean \'false\' is a valid option', () => {
  expect(isOption(false)).toBe(`false is an option`);
});

test('Checks to see if Number \'1\' is a valid option', () => {
  expect(isOption(1)).toBe(`1 is an option`);
});

test('Checks to see if Array \'["failure"]\' is a valid option', () => {
  expect(isOption(["failure"])).toBe(`Array is an option`);
});

test('Checks to see if Object \'{"Failure": "Failure"}\' is a valid option', () => {
  expect(isOption({"Failure": "Failure"})).toBe(`Object is an option`);
});

test('Checks to see if type \'undefined\' is a valid option', () => {
  expect(isOption(undefined)).toBe(`undefined is an option`);
});

test('Checks to see if type \'null\' is a valid option', () => {
  expect(isOption(null)).toBe(`null is an option`);
});

test('Checks to see if an instantiated \'Symbol\' is a valid option', () => {
  expect(isOption(Symbol("Failure"))).toBe(`Symbol is an option`);
});