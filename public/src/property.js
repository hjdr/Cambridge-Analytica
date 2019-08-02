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
    listingsParse.forEach(function(listing) {
      var newListing = new Property(listing.name, listing.id, listing.userName, listing.description, listing.price)
      listings.push(newListing)
    });
    return listings
  }

  // static getAllPropertiesArray(properties) {
  //   var listings = []
  //
  //   for (property key in properties){
  //     var newListing = new Property(property.name, property.userName, property.description, property.price)
  //     listings.push(newListing)
  //   }
  //   properties.forEach(function(property){
  //     var newListing = new Property(property.name, property.userName, property.description, property.price)
  //     listings.push(newListing)
  //   })
  //   return listings
  // }

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
