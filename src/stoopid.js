Object.prototype.size = function() {
  return Object.keys(this).length;
};

Object.prototype.forEach = function(callback) {
  var self = this;
  Object.keys(self).forEach(function(key) {
    callback(key, self[key], self);
  });
};

Object.prototype.every = function(callback) {
  var response = true;
  this.forEach(function(key, value, object) {
    if (response) response = callback(key, value, object);
  });
  return response;
};
