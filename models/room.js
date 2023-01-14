const Room = function (area, isPainted = false, canBePainted = true) {
  this.area = area;
  this.isPainted = isPainted;
  this.canBePainted = canBePainted;
};

module.exports = Room;
