$(document).ready(function() {

  $("#new_listing_button").click(function() {
    $.get('http://localhost:9292/user/logged_in/', function(data) {
      var name = $('#new_listing_name').val();
      var description = $('#new_listing_description').val();
      var price = $('#new_listing_price').val();
      var user = JSON.parse(data)
      $.post('http://localhost:9292/property/new/', Property.create(name, user.id, user.user_name, description, price));
      updateListings()
    })
  });

  function updateListings() {
    $.get('http://localhost:9292/user/all_listings/', function(data) {
      var propertyList = Property.all(data)
      clearProperties()
      propertyList.forEach(function(property) {
        $('#listings_table').append(propertyHTML(property));
      })
    })
  };

  function propertyHTML(property) {
    return "<tr><td>" + property.name + "</td><td>" + property.description + "</td><td>" + property.price + "</td></tr>"
  }

  function clearProperties(property) {
    $('#listings_table').replaceWith("<table id='listings_table'></table>");
  }

  function getLoggedInUserJson() {
    return $.get('http://localhost:9292/user/logged_in/', function(data) {
      return data
    })
  };

});