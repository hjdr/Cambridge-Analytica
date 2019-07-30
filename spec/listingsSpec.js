describe('Listings', function(){
  let listings;
  let listingobj;
  let json;

  beforeEach(function() {
    listings = new Listings();
    json = jasmine.createSpy("\"{listings:[[\"name\",123]]}\"")
  });

  describe('parseJsonIntoArray', function() {
    it('parses a JSON string into an array of new Listing objects', function(){
      listings.parseJsonIntoArray(json, listingobj)
      expect(listings.list).toEqual()
    });
  });


});
