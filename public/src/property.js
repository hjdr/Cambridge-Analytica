class Property {

  constructor(name) {
    this.name = name;
  }

  newName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  static all(json) {
    var listingsParse = JSON.parse(json);
    var listings = []
    listingsParse.listings.forEach(function(listing) {
      var newListing = new Property(listing[0])
      listings.push(newListing)
    });
    return listings
  }

  static create(name) {
    return JSON.stringify({ name : name })
  }
}
