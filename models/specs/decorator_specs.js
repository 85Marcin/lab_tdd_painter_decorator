const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function () {
  let decorator;
  let canOfPaint1;
  let canOfPaint2;
  let room;

  beforeEach(function () {
    decorator = new Decorator();
    canOfPaint1 = new Paint(3);
    canOfPaint2 = new Paint(5);
    room = new Room(9);
  });
  it("it should start with an empty paint stock", function () {
    assert.deepStrictEqual(decorator.paintStock, []);
  });
  it("it should be able to add a can of paint to paint stock", function () {
    decorator.addPaint(canOfPaint1);
    assert.deepStrictEqual(decorator.paintStock, [canOfPaint1]);
  });
  it("it should be able to calculate total litres of paint it has in stock", function () {
    decorator.addPaint(canOfPaint1);
    decorator.addPaint(canOfPaint2);
    const actual = decorator.getTotalLitersOfPaintInStock();
    assert.deepStrictEqual(actual, 8);
  });
  it("it should be able to calculate whether there is enough paint to paint a room", function () {
    decorator.addPaint(canOfPaint1);
    decorator.addPaint(canOfPaint2);
    const actual = decorator.isEnoughPaintToPaintRoom(room);

    assert.strictEqual(actual, false);
  });
  it("it should be able to paint room if there is enough paint in stock", function () {
    decorator.addPaint(canOfPaint1);
    decorator.addPaint(canOfPaint2);
    decorator.paintRoom(room);
    assert.strictEqual(room.isPainted, false);
  });
});
