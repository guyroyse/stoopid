describe('Object', function() {

  var subject;

  beforeEach(function() {

    var parent = {};
    parent.foo = 'test';

    subject = Object.create(parent);
    subject.bar = 42;
    subject.baz = true;
    subject.qux = {};

  });

  describe('size', function() {

    it('returns the number of properties', function() {
      expect(subject.size()).toBe(3);
    });

  });

  describe('forEach', function() {

    it('calls the callback function for each item in the object', function() {
      var count = 0;
      subject.forEach(function() {
        count++;
      });
      expect(count).toBe(3);
    });

    it('passes the keys to the callback function', function() {
      var keys = [];
      subject.forEach(function(key) {
        keys.push(key);
      });
      expect(keys).toEqual(['bar', 'baz', 'qux']);
    });

    it('passes the values to the callback function', function() {
      var values = [];
      subject.forEach(function(key, value) {
        values.push(value);
      });
      expect(values).toEqual([42, true, {}]);
    });

    it('passes the object to the callback function', function() {
      var callbackObject = {};
      subject.forEach(function(key, value, object) {
        callbackObject = object;
      });
      expect(callbackObject).toBe(subject);
    });

  });

  describe('every', function() {
  });

  describe('some', function() {
  });

  describe('map', function() {
  });

  describe('reduce', function() {
  });

});
