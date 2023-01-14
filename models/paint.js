const Paint = function (liters, isEmpty = false) {
  this.liters = liters;
  this.isEmpty = isEmpty;
};

module.exports = Paint;

Paint.prototype.empty = function () {
  this.isEmpty = true;
};
