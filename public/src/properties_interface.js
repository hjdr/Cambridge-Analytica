$(document).ready(function() {
  getLoggedInUserJson()

  console.log('calling getallprops...')
  getAllProperties()

  $("#search_properties").click(function() {
    var searched_prop = $('#search_property').val();
    getAllSearchedProperties(searched_prop)
  });


  function getAllProperties() {
    return $.get('http://localhost:9292/properties/get_all/', function(data) {
      var properties = Property.all(data)
      properties.forEach(function(property){
      $('#listings_table').append(propertyHTML(property));
      })
    })
  }

  function clearProperties(property) {
    $('#listings_table').replaceWith("<table id='listings_table'></table>");
  }

  function getAllSearchedProperties(property_name) {
    clearProperties()
    return $.post('http://localhost:9292/properties/get_all_searched/', property_name, function(data) {
      var searched_properties = Property.all(data)
      searched_properties.forEach(function(property){

      $('#listings_table').append(propertyHTML(property));
      })
    })
  }

function propertyHTML(property) {
  return "<tr><td>Name: " + property.name + " </td><td>Description: " + property.description + " </td><td>Price: " + property.price + " </td><td>Host: " + property.userName + "</td></tr>"
}

function getLoggedInUserJson() {
  return $.get('http://localhost:9292/user/logged_in/', function(data) {
    var user = JSON.parse(data)
    $('#logged_in_username').text(user.first_name)
    })
  };
});
