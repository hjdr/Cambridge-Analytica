$(document).ready(function() {

  updateListings()

  $.get('http://localhost:9292/user/all/', function(data) {
    console.log(data)
  })

  var id = User.loggedInUser(getLoggedInUserJson()).getId();
  var userName = User.loggedInUser(getLoggedInUserJson()).getUsername();

  $("#new_listing_button").click(function() {
    var name = $('#new_listing_textbox').val()
    var description = $('#new_listing_description').val()
    var price = $('#new_listing_price').val()
    var date = $('#new_listing_date_range').val()

    $.post('http://localhost:9292/property/new/', Property.create(name, id, userName, description, price, date));
    updateUserListings()
  });

  function updateListings() {
    // let listingsJSON = "{\"listings\": [[\"Palace\",1,\"harry123\",\"A fucking great big palace\",\"£2\",\"07/30/2019 - 07/30/2019\"]]}";
    // var propertyList = Property.all(listingsJSON)xw
    // propertyList.forEach(function(property) {
    //   $('#listings_table').append(propertyHTML(property));
    // })
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
    return $.get('http://localhost:9292/user/logged_in/')
  };

});
