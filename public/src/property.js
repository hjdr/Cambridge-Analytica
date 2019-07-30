class Property {

  constructor(name, id, userName) {
    this.name = name;
    this.userID = id;
    this.userName = userName;
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

  static create(name, userID, userName) {
    return JSON.stringify({ name : name, userID : userID, userName : userName })
  }
}
