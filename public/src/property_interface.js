$(document).ready(function() {
  ''
  updateListings()

  $("#new_listing_button").click(function() {
    var name = $('#new_listing_textbox').val()
    var userID = User.loggedInUser(json);
    $.post('http://localhost:9292/property/new/', Property.create(name, userID));
    updateListings()
  });

  function updateListings() {
    let listingsJSON = "{\"listings\":[[\"harry\",123],[\"charlie\",456],[\"tim\",789],[\"marvin\",285]]}";
    var propertyList = Property.all(listingsJSON)
    propertyList.forEach(function(property) {
      $('#listings_table').append("<tr><td>" + property.name + "</td></tr>");
    });
    // $.get('http://localhost:9292/listing/all/', function(listings) {
    //   var propertyList = Property.all(listings)
    //   propertyList.forEach(function(property) {
    //     $('#listings_table').append("<tr><td>" + property.name + "</td></tr>");
    // })
    // })
  };
});
