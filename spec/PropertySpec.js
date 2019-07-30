describe ('Property', function() {

  let property;
  let json;

  beforeEach(function() {
    property = new Property();
    json = "{\"listings\":[[\"harry\",123],[\"charlie\",456],[\"tim\",789],[\"marvin\",285]]}"
  });

  describe ('#all', function() {
    it('returns an array of properties', function() {
      var propertyList = Property.all(json)
      expect(propertyList[3].getName()).toEqual('marvin')
    })
  })

  describe ('#create', function() {
    it('returns a property JSON', function() {
      expect(Property.create('charlie')).toEqual('{"name":"charlie"}')
    })
  })
});
