const assert = require("assert");
const Room = require("../room");

describe("Room", function () {
  let room;
  beforeEach(function () {
    room = new Room(20, false);
  });
  it("it should have an area", function () {
    assert.strictEqual(room.area, 20);
  });
  it("it should started not painted", function () {
    assert.strictEqual(room.isPainted, false);
  });
  it("it should be able to be painted", function () {
    assert.strictEqual(room.canBePainted, true);
  });
});
