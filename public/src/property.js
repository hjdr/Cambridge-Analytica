class Property {

  constructor(name, id, userName, description, price, dateRange) {
    this.name = name;
    this.userID = id;
    this.userName = userName;
    this.description = description
    this.price = price
    this.dateRange = dateRange
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
      var newListing = new Property(listing[0], listing[1], listing[2], listing[3], listing[4], listing[5])
      listings.push(newListing)
    });
    return listings
  }

  static create(name, userID, userName, description, price, dateRange) {
    return JSON.stringify({ name : name, userID : userID, userName : userName , description : description, price : price, dateRange : dateRange })
  }
}
