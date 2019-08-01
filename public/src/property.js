class Property {

  constructor(name, userid, userName, description, price, id) {
    this.name = name;
    this.userID = userid;
    this.userName = userName;
    this.description = description
    this.price = price
    this.id = id
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
    console.log(listingsParse)
    listingsParse.forEach(function(listing) {
      console.log(listing)
      var newListing = new Property(listing.name, listing.userID, listing.userName, listing.description, listing.price, listing.id)
      console.log(newListing)
      listings.push(newListing)
    });
    return listings
  }

  static create(name, userID, userName, description, price, dateRange) {
    return JSON.stringify({
      name: name,
      userID: userID,
      userName: userName,
      description: description,
      price: price,
      dateRange: dateRange
    })
  }
}
