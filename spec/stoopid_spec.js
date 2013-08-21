describe("Object", function() {

  var subject;

  beforeEach(function() {
    subject = {
      foo: 'test',
      bar: 42,
      baz: true,
      qux: {}
    };
  });

  describe("implements a forEach iterator", function() {

    it('calls the callback function for each item in the object', function() {
      var count = 0;
      subject.forEach(function() {
        count++;
      });
      expect(count).toBe(4);
    });

  });

});
