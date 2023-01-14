const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");

describe("Decorator", function () {
  let decorator;
  let canOfPaint;
  beforeEach(function () {
    decorator = new Decorator();
    canOfPaint = new Paint(3);
  });
  it("it should start with an empty paint stock", function () {
    assert.deepStrictEqual(decorator.paintStock, []);
  });
  it("it should be able to add a can of paint to paint stock", function () {
    decorator.addPaint(canOfPaint);
    assert.deepStrictEqual(decorator.paintStock, [canOfPaint]);
  });
});
