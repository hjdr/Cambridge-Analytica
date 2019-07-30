class Listings {
  constructor() {
    this.list = []
  }

  parseJsonIntoArray(json, object_class = Listing) {
    var newparse = JSON.parse(json);
    var listings = this
    newparse.listings.forEach(function(listing) {
      var newListing = new object_class()
      newListing.newName(listing[0]);
      listings.viewList().push(newListing)
    });
  };

  viewList(){
    return this.list
  }



}

var test = JSON.stringify({ listings : [['harry', 123], ['freddie', 456], ['tim', 789]]})
console.log(test)

listings = new Listings()
listings.parseJsonIntoArray(test)
console.log(listings.viewList())
