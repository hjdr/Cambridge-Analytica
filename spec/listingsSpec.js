describe('Listings', function(){
  let listings;
  let listingobj;
  let jsonfile;

  beforeEach(function() {
    listings = new Listings();
    listingobj = jasimine.createSpyObj('Listing')
    json = jasmine.createSpy("{'listings':['{'name':'Listing001'}']}")
  });

  describe('parseJsonIntoArray', function() {
    it('parses a JSON string into an array of new Listing objects', function(){
      listings.parseJsonIntoArray(json)
      expect(listingobj).toHaveBeenCalled()
    });
  });
});