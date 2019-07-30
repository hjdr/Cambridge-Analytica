describe ('Listing', function() {

  let listing;

  beforeEach(function() {
    listing = new Listing();
    listing.newname('newListing')
  });

  it('creates a new listing', function() {
    expect(listing.name).toEqual('newListing');
  });

  describe('#createJsonString', function() {
    it('returns a JSON string', function() {
      expect(listing.createJsonString()).toEqual('{"name":"newListing"}');
    });
  });

});
