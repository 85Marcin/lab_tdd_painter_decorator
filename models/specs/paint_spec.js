const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function () {
  let paint;
  beforeEach(function () {
    paint = new Paint(5, false);
  });
  it("it should have a number of litres of paint", function () {
    const actual = paint.liters;
    assert.strictEqual(actual, 5);
  });

  it("it should be able to check if it is empty", function () {
    const actual = paint.isEmpty;
    assert.strictEqual(actual, false);
  });

  it("it should be able to empty itself of paint", function () {
    paint.empty();
    assert.strictEqual(paint.isEmpty, true);
  });
});
