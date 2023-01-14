const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function () {
  let decorator;
  let canOfPaint;
  let room;

  beforeEach(function () {
    decorator = new Decorator();
    canOfPaint = new Paint(8);
    room = new Room(6);
  });
  it("it should start with an empty paint stock", function () {
    assert.deepStrictEqual(decorator.paintStock, []);
  });
  it("it should be able to add a can of paint to paint stock", function () {
    decorator.addPaint(canOfPaint);
    assert.deepStrictEqual(decorator.paintStock, [canOfPaint]);
  });
  it("it should be able to calculate total litres of paint it has in stock", function () {
    decorator.addPaint(canOfPaint);
    const actual = decorator.getTotalLitersOfPaintInStock();
    assert.deepStrictEqual(actual, 8);
  });
  it("it should be able to calculate whether there is enough paint to paint a room", function () {
    decorator.addPaint(canOfPaint);
    const actual = decorator.isEnoughPaintToPaintRoom(room);

    assert.strictEqual(actual, true);
  });
  it("it should be able to paint room if there is enough paint in stock", function () {
    decorator.addPaint(canOfPaint);
    decorator.paintRoom(room);
    assert.strictEqual(room.isPainted, true);
  });
  it("it should be able to decrease amount of paint in stock when painting a room", function () {
    decorator.addPaint(canOfPaint);
    decorator.paintRoom(room);
    assert.strictEqual(decorator.getTotalLitersOfPaintInStock(), 2);
  });
});
