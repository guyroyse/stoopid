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

    it('passes the keys to the callback function', function() {
      var keys = [];
      subject.every(function(key) {
        keys.push(key);
        return true;
      });
      expect(keys).toEqual(['bar', 'baz', 'qux']);
    });

    it('passes the values to the callback function', function() {
      var values = [];
      subject.every(function(key, value) {
        values.push(value);
        return true;
      });
      expect(values).toEqual([42, true, {}]);
    });

    it('passes the object to the callback function', function() {
      var callbackObject = {};
      subject.every(function(key, value, object) {
        callbackObject = object;
      });
      expect(callbackObject).toBe(subject);
    });

    describe('when callback returns true', function() {

      it('returns true', function() {
        var response = subject.every(function() {
          return true;
        });
        expect(response).toBe(true);
      });

      it('calls the callback function for each item in the object', function() {
        var count = 0;
        subject.every(function() {
          count++;
          return true;
        });
        expect(count).toBe(3);
      });

    });

    describe('when callback returns false', function() {

      it('returns false', function() {
        var response = subject.every(function() {
          return false;
        });
        expect(response).toBe(false);
      });

      it('only calls the callback until false is returned', function() {
        var count = 0;
        subject.every(function() {
          count++;
          return count < 2;
        });
        expect(count).toBe(2);
      });

    });

    describe('when empty', function() {

      it('returns true', function() {
        var response = {}.every(function() {});
        expect(response).toBe(true);
      });

    });

  });

  describe('some', function() {

    it('passes the keys to the callback function', function() {
      var keys = [];
      subject.some(function(key) {
        keys.push(key);
        return false;
      });
      expect(keys).toEqual(['bar', 'baz', 'qux']);
    });

    it('passes the values to the callback function', function() {
      var values = [];
      subject.some(function(key, value) {
        values.push(value);
        return false;
      });
      expect(values).toEqual([42, true, {}]);
    });

    it('passes the object to the callback function', function() {
      var callbackObject = {};
      subject.every(function(key, value, object) {
        callbackObject = object;
      });
      expect(callbackObject).toBe(subject);
    });

    describe('when callback returns false', function() {

      it('returns false', function() {
        var response = subject.some(function() {
          return false;
        });
        expect(response).toBe(false);
      });

      it('calls the callback function for each item in the object', function() {
        var count = 0;
        subject.some(function() {
          count++;
          return false;
        });
        expect(count).toBe(3);
      });

    });

    describe('when callback returns true', function() {

      it('returns true', function() {
        var response = subject.some(function() {
          return true;
        });
        expect(response).toBe(true);
      });

      it('only calls the callback until true is returned', function() {
        var count = 0;
        subject.some(function() {
          count++;
          return count > 1;
        });
        expect(count).toBe(2);
      });

    });

    describe('when empty', function() {

      it('returns false', function() {
        var response = {}.some(function() {});
        expect(response).toBe(false);
      });

    });

  });

  describe('filter', function() {
  });

  describe('map', function() {
  });

  describe('reduce', function() {
  });

});
