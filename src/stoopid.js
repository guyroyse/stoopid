Object.prototype.forEach = function(callback) {
  var self = this;
  Object.keys(self).forEach(function(key) {
    callback(key, self[key], self);
  });
};

Object.prototype.size = function() {
  return Object.keys(this).length;
};
