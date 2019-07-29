describe ('Listing', function() {

  let listing;

  beforeEach(function() {
    listing = new Listing();
  });

  it('creates a new listing', function() {
    expect(listing.name).toEqual('newlisting');
  });

  describe('#createJsonString', function() {
    it('returns a JSON string', function() {
      expect(listing.createJsonString()).toEqual('{"name":"newlisting"}');
    });
  });

});
