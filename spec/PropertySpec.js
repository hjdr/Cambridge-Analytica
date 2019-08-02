describe ('Property', function() {

  let property;
  let json;

  beforeEach(function() {
    property = new Property();
    json = "{\"listings\":[[\"Buckingham Palace\",123],[\"House of Commons\",456],[\"Pizza Hut\",789],[\"Nandos\",285]]}"
    jsonProperties = '{"id":1,"name":"qlkjw","user_id":"3","userName":"kettzasd","description":"ajlskvd","price":"vadklj"}{"id":2,"name":"qlkjw","user_id":"3","userName":"kettzasd","description":"ajlskvd","price":"vadklj"}'
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

  describe('#getAllPropertiesArray', function(){
    it('returns the array of jsons to a list of properties', function() {
      expect(Property.getAllPropertiesArray(jsonProperties)).toEqual("Name: qlkjw - Description: ajlskvd - Price per Night: vadklj \n Name: qlkjw - Description: ajlskvd - Price per Night: vadklj" )
    });
  });
});
