const sum = require("../sum");

// return 0
test("should return the number", () => {
  expect(sum()).toBe(0);
});

// one number
test("should return the  number", () => {
  expect(10).toBe(10);
});

// two numbers
test("should return the sum of 2 numbers", () => {
  expect(sum(10, 10)).toBe(20);
});

// 3 numbers
test("should return the sum of 3 numbers", () => {
  expect(sum(10, 10, 10)).toBe(30);
});
