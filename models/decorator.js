const Decorator = function (paintStock = []) {
  this.paintStock = paintStock;
};

module.exports = Decorator;

Decorator.prototype.addPaint = function (canOfPaint) {
  this.paintStock.push(canOfPaint);
};

Decorator.prototype.getTotalLitersOfPaintInStock = function () {
  return this.paintStock.reduce((acc, paint) => acc + paint.liters, 0);
};

Decorator.prototype.isEnoughPaintToPaintRoom = function (room) {
  return this.getTotalLitersOfPaintInStock() >= room.area;
};

Decorator.prototype.paintRoom = function (room) {
  if (this.isEnoughPaintToPaintRoom(room)) {
    this.paintStock[0].liters -= room.area;
    room.isPainted = true;
  }
};
