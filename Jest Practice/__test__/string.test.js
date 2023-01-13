const str = require("../string");

describe("validete the string", () => {
  test("check in the str in empty", () => {
    expect(str()).toBe("unknown");
  });

  test("chack if the str is starting or ending with an white space", () => {
    expect(str(" test ")).toBe("test")
  });

  test("chack if the str leghnt", () => {
    expect(str("testtesttest")).toBe("testtestte")
  });
});

console.log(str());
