describe ('Property', function() {

  let property;
  let json;

  beforeEach(function() {
    property = new Property();
    json = "{\"listings\":[[\"Buckingham Palace\",123],[\"House of Commons\",456],[\"Pizza Hut\",789],[\"Nandos\",285]]}"
  });

  describe ('#all', function() {
    it('returns an array of properties', function() {
      var propertyList = Property.all(json)
      expect(propertyList[3].getName()).toEqual('Nandos')
    })
  })

  describe ('#create', function() {
    it('returns a property JSON', function() {
      expect(Property.create('Nandos')).toEqual('{"name":"Nandos"}')
    })
  })
});
