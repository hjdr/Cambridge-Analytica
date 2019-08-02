$(document).ready(function() {

  console.log('calling getallprops...')
  getAllProperties()


  function getAllProperties() {
    return $.get('http://localhost:9292/properties/get_all/', function(data) {
    console.log(data)
    console.log(JSON.parse(data))
    var dataTwo = JSON.parse(data)
    var listings = []
    dataTwo.forEach(function(dat){
      var newer = new Property(dat.name, dat.id, dat.userName, dat.description, dat.price)
      listings.push(newer)
    })
    console.log(listings)
    })
  };
});