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
    var newparse = JSON.parse(json);
    var listings = []
    newparse.listings.forEach(function(listing) {
      var newListing = new Property(listing[0])
      listings.push(newListing)
    });
    return listings
  }

  static create(name) {
    return JSON.stringify({ name : name })
  }
}

var test = JSON.stringify({ listings : [['harry', 123], ['charlie', 456], ['tim', 789], ['marvin', 285]]})
console.log(Property.all(test))
console.log(test)
