$(document).ready(function() {
  getLoggedInUserJson()
  updateListings()

  // $("#new_listing_button").click(function() {
  //   $.get('http://localhost:9292/user/logged_in/', function(data) {
  //     var name = $('#new_listing_name').val();
  //     var description = $('#new_listing_description').val();
  //     var price = $('#new_listing_price').val();
  //     var user = JSON.parse(data)
  //     $.post('http://localhost:9292/property/new/', Property.create(name, user.id, user.user_name, description, price));
  //     updateListings()
  //   })
  // });

  // $('.new_listing_button').one('click', function() {
  //   $('#new_listing_table').animate({
  //     'marginLeft': "-=700px"
  //   });
  // })

  function updateListings() {
    $.get('http://localhost:9292/user/all_bookings/', function(data) {
      var bookingList = Booking.all(data)
      clearBookings()
      bookingList.forEach(function(booking) {
        console.log(booking)
        $('#listings_table').append(propertyHTML(booking));
        $("#" + booking.id).click(function() {
          // $.get('http://localhost:9292/booking/confirm/', function(booking) {
          // $.post('http://localhost:9292/booking/confirm/', Booking.create(user.id, user.id, property.id, property.name, '', '', false))
          $("#confirm" + booking.id).fadeOut("fast", function() {
            $("#tickani").fadeIn("fast")
            $("#tick").replaceWith(animatedTick()).hide("slow");
            $("#tickani").delay(1500).hide("slow");
          });
          // $("#confirm" + booking.id).replaceWith("<td>" + animatedTick() + "</td><td>Booking confirmed</td>")
          // })
        })
      })
    })
  };

  function animatedTick() {
    return "<svg id='tickani' class=\"checkmark\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 52 52\"><circle class=\"checkmark__circle\" cx=\"26\" cy=\"26\" r=\"25\" fill=\"none\"/><path class=\"checkmark__check\" fill=\"none\" d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"/></svg>"
  }

  function propertyHTML(booking) {
    if (booking.confirmed == 'true') {
      return "<tr>" + propertyName(booking) + propertyConfirmed(booking) + "</tr>";
    } else {
      return "<tr>" + propertyName(booking) + propertyConfirmed(booking) + propertyButton(booking) + "</tr>";
    }
  }

  function propertyName(booking) {
    return "<td>Booking name: " + booking.property_name + " </td>";
  }

  function propertyConfirmed(booking) {
    return "<td> Confirmed by host? " + isConfirmed(booking) + " </td>"
  }

  function isConfirmed(booking) {
    if (booking.confirmed == 'true') {
      return 'Yes!'
    } else return 'Not yet.'
  }

  function propertyButton(booking) {
    return "<td id='confirm" + booking.id + "'><button class='confirm_booking_button' id='" + booking.id + "'>Confirm</button></td>";
  }

  function clearBookings(booking) {
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
