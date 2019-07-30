$(document).ready(function() {
  ''
  updateListings()

  var id = User.loggedInUser(getLoggedInUserJson()).getId();
  var userName = User.loggedInUser(getLoggedInUserJson()).getUsername();

  $("#new_listing_button").click(function() {
    var name = $('#new_listing_textbox').val()
    var description = $('#new_listing_description').val()
    var price = $('#new_listing_price').val()

    $.post('http://localhost:9292/property/new/', Property.create(name, id, userName, description, price));
    updateUserListings()
  });

  function updateListings() {
    // let listingsJSON = "{\"listings\":[[\"harry\",123],[\"charlie\",456],[\"tim\",789],[\"marvin\",285]]}";
    // var propertyList = Property.all(listingsJSON)
    // propertyList.forEach(function(property) {
    //   $('#listings_table').append("<tr><td>" + property.name + "</td></tr>");
    // });
    $.get('http://localhost:9292/listing/all/', function(listings) {
      var propertyList = Property.all(listings)
      propertyList.forEach(function(property) {
        $('#listings_table').append("<tr><td>" + property.name + "</td></tr>");
    })
    })
  };

  function updateUserListings() {
    $.get('http://localhost:9292/listing/all/user', function(listings) {
      var propertyList = Property.all(listings)
      propertyList.forEach(function(property) {
        $('#listings_table').append("<tr><td>" + property.name + "</td></tr>");
    })
  };

  function getLoggedInUserJson() {
    return $.get('http://localhost:9292/user/logged_in/')
  }
});
