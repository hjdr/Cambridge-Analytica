
class Listings {
  constructor(listing = new Listing()) {
    this.list = []
    this.listing = listing
  }

  parseJsonIntoArray(json) {
    let newparse = JSON.parse(json)
    newparse.listings.forEach(json_object) {
      let newObject = JSON.parse(json_object);
      let newListing = new Listing(newObject.name)
      this.list.push(newListing)

    }

  }

}