const Decorator = function (paintStock = []) {
  this.paintStock = paintStock;
};

module.exports = Decorator;

Decorator.prototype.addPaint = function (canOfPaint) {
  this.paintStock.push(canOfPaint);
};
