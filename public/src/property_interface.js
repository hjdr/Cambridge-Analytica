$(document).ready(function() {
  getLoggedInUserJson()
  updateListings()

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
        $("#" + property.id).click(function() {
          $.get('http://localhost:9292/user/logged_in/', function(loggedInUser) {
            var user = JSON.parse(loggedInUser)
            $.post('http://localhost:9292/booking/new/', Booking.create(user.id, user.id, property.id, property.name, '', '', false))
            clearProperties()
            $('#listings_table').append("<tr><td>" + animatedTick() + "</td><td><h3>Thank you for booking " + property.name + ".</h3></td></tr><td><h3>Please wait for confirmation from the host.</h3></td>")
          })
        })
      })
    })
  };

  function animatedTick() {
    return "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.2 130.2'><circle class='path circle' fill='none' stroke='#73AF55' stroke-width='6' stroke-miterlimit='10' cx='65.1' cy='65.1' r='62.1'/><polyline class='path check' fill='none' stroke='#73AF55' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='100.2,40.2 51.5,88.8 29.8,67.5 '/></svg><p class='success'>Awesome!</p>"
  }

  function propertyHTML(property) {
    return "<tr>" +
    propertyName(property) +
    propertyDescription(property) +
    propertyPrice(property) +
    propertyHost(property) +
    propertyButton(property) +
    "</tr>";
  }

  function propertyName(property) {
    return "<td>Property name: " + property.name + "</td>";
  }

  function propertyDescription(property) {
    return "<td>Property description: " + property.description + "</td>"
  }

  function propertyPrice(property) {
    return "<td>Property price: " + property.price + "</td>";
  }

  function propertyHost(property) {
    return "<td>Host: " + property.userName + "</td>";
  }

  function propertyButton(property) {
    return "<td><button class='new_booking_button' id='" + property.id + "'>BOOK NOW</button></td>";
  }

  function clearProperties(property) {
    $('#listings_table').replaceWith("<table id='listings_table'></table>");
  }

  function getLoggedInUserJson() {
    return $.get('http://localhost:9292/user/logged_in/', function(data) {
      var user = JSON.parse(data)
      $('#logged_in_username').text(user.first_name)
    })
  };

  $('#log_out_link').click(function() {
    $.post('http://localhost:9292/user/logout/');
  });

  $('#log_out_link').click(function() {
    $.get('http://localhost:9292/user/bookings/');
  });

});
