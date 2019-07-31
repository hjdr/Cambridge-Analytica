$(document).ready(function() {

  // updateListings()

  $("#new_listing_button").click(function() {
    $.get('http://localhost:9292/user/logged_in/', function(data) {
      var name = $('#new_listing_name').val();
      var description = $('#new_listing_description').val();
      var price = $('#new_listing_price').val();
      $.post('http://localhost:9292/property/new/', Property.create(name, user.id, user.userName, description, price));
    })
  });

  function updateListings() {
    $.get('http://localhost:9292/property/new/', function(listings) {
      var propertyList = Property.all(listings)
      propertyList.forEach(function(property) {
        $('#listings_table').append(propertyHTML(property));
      })
    })
  };

  function propertyHTML(property) {
    return "<tr><td>" + property.name + "</td><td>" + property.description + "</td><td>" + property.price + "</td><td>" + property.dateRange + "</td></tr>"
  }

  function updateUserListings() {
    $.get('http://localhost:9292/user/all/', function(listings) {
      var propertyList = Property.all(listings)
      propertyList.forEach(function(property) {
        $('#listings_table').append("<tr><td>" + property.name + "</td></tr>");
      })
    });
  };

  function getLoggedInUserJson() {
    return $.get('http://localhost:9292/user/logged_in/', function(data) {
      return data
    })
  };

});
