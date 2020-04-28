// TODO: write necessary unit tests
const { compute, computeDivideRule, computeReplaceRule } = require("./index");

describe("Compute divide rule", () => {
  it("should return Foo when number can be divide ONLY by 3", () => {
    const input = "3";
    const output = "Foo";

    const result = computeDivideRule(input);

    expect(result).toEqual(output);
  });

  it("should return Bar when number can be divide ONLY by 5", () => {
    const input = "5";
    const output = "Bar";

    const result = computeDivideRule(input);

    expect(result).toEqual(output);
  });

  it("should return Qix when number can be divide ONLY by 7", () => {
    const input = "7";
    const output = "Qix";

    const result = computeDivideRule(input);

    expect(result).toEqual(output);
  });

  it("should return FooBar when number can be divide ONLY by 3 AND 5", () => {
    const input = "15";
    const output = "FooBar";

    const result = computeDivideRule(input);

    expect(result).toEqual(output);
  });

  it("should return FooQix when number can be divide ONLY by 3 AND 7", () => {
    const input = "21";
    const output = "FooQix";

    const result = computeDivideRule(input);

    expect(result).toEqual(output);
  });

  it("should return BarQix when number can be divide ONLY by 5 AND 7", () => {
    const input = "35";
    const output = "BarQix";

    const result = computeDivideRule(input);

    expect(result).toEqual(output);
  });

  it("should return FooBarQix when number can be divide ONLY by 3 AND 5 AND 7", () => {
    const input = "105";
    const output = "FooBarQix";

    const result = computeDivideRule(input);

    expect(result).toEqual(output);
  });
});

describe("Compute replace rule", () => {
  it("should replace 3 by Foo", () => {
    const input = "3";
    const output = "Foo";

    const result = computeReplaceRule(input)("");

    expect(result).toEqual(output);
  });

  it("should replace 5 by Bar", () => {
    const input = "51";
    const output = "Bar";

    const result = computeReplaceRule(input)("");

    expect(result).toEqual(output);
  });

  it("should replace 7 by Qix", () => {
    const input = "171";
    const output = "Qix";

    const result = computeReplaceRule(input)("");

    expect(result).toEqual(output);
  });

  it("should replace 3 by Foo AND 5 by Bar AND 7 by Qix", () => {
    const input = "111311151117111";
    const output = "FooBarQix";

    const result = computeReplaceRule(input)("");

    expect(result).toEqual(output);
  });
});

describe("Compute number with all rules", () => {
  it("should return the string passed as a param when no rule match", () => {
    const input = "1";
    const output = "1";

    const result = compute(input);

    expect(result).toEqual(output);
  });

  it("should return Foo if value can be divide by 3", () => {
    const inputs = ["6", "9", "12"];
    const output = "Foo";
    inputs.forEach((input) => {
      const result = compute(input);
      expect(result).toEqual(output);
    });
  });

  it("should return Qix if value can be divide by 7", () => {
    const inputs = ["49"];
    const output = "Qix";
    inputs.forEach((input) => expect(compute(input)).toEqual(output));
  });

  it("should return FooQix if value can be divide by 3 and 7", () => {
    const input = "21";
    const output = "FooQix";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should return Foo if value contains 3 AND has no divide rule", () => {
    const input = "13";
    const output = "Foo";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should return FooFoo if value contains 3 AND is divisible by 3", () => {
    const input = "3";
    const output = "FooFoo";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should return BarBar if value contains 5 AND is divisible by 5", () => {
    const input = "5";
    const output = "BarBar";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should return FooBarBar if value contains 5 AND is divisible by 3 and 5", () => {
    const input = "15";
    const output = "FooBarBar";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should return BarQixFooBar if value contains 3 and 5 AND is divisible by 5 and 7", () => {
    const input = "35";
    const output = "BarQixFooBar";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should return Qix if value contains 7 AND has no divide rule", () => {
    const input = "71";
    const output = "Qix";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should return FooQix if value contains 7 AND is divible by 3", () => {
    const input = "72";
    const output = "FooQix";
    const result = compute(input);
    expect(result).toEqual(output);
  });

  it("should replace 0 with a * and applies other rules", () => {
    // Arrange
    const mock = {
      "101": "1*1",
      "303": "FooFoo*Foo",
      "105": "FooBarQix*Bar",
      "10101": "FooQix**",
    };
    Object.entries(mock).forEach(([input, output]) => {
      // Act
      const result = compute(input);
      // Assert
      expect(result).toEqual(output);
    });
  });
});
