const compose = (...func) => (args) =>
  func.reduceRight((arg, fn) => fn(arg), args);

const map = {
  0: "*",
  3: "Foo",
  5: "Bar",
  7: "Qix",
};

const compute = (n) =>
  compose(
    (computedString) => computedString || n.replace("0", "*"),
    computeReplaceRule(n),
    computeDivideRule
  )(n);

const mapDivideRule = (num) => ([divider, value]) =>
  parseInt(num, 10) % divider === 0 ? value : "";
const computeDivideRule = (num) =>
  Object.entries(map).map(mapDivideRule(num)).join("");

const mapReplaceRule = (rules, computedDivision) => (numChar) =>
  Object.entries(rules)
    .map(([num, value]) =>
      (computedDivision && num === "0" && num == numChar) ||
      (numChar === num && num !== "0")
        ? value
        : ""
    )
    .join("");
const computeReplaceRule = (num) => (computedDivision) =>
  computedDivision +
  Array.from(num).map(mapReplaceRule(map, computedDivision)).join("");

module.exports = {
  compute,
  computeDivideRule,
  computeReplaceRule,
};
