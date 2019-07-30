class Property {

  constructor(name, id, userName, description, price) {
    this.name = name;
    this.userID = id;
    this.userName = userName;
    this.description = description
    this.price = price
  }

  getName() {
    return this.name
  }

  getId() {
    return this.userID
  }

  getUsername() {
    return this.userName
  }

  getDescription() {
    return this.description
  }

  getPrice() {
    return this.price
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

  static create(name, userID, userName, description, price) {
    return JSON.stringify({ name : name, userID : userID, userName : userName , description : description, price : price})
  }
}
