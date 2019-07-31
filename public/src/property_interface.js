$(document).ready(function() {

  updateListings()

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
    let listingsJSON = "{\"listings\": [[\"Palace\",1,\"harry123\",\"A fucking great big palace\",\"£2\",\"07/30/2019 - 07/30/2019\"]]}";
    var propertyList = Property.all(listingsJSON)
    propertyList.forEach(function(property) {
      $('#listings_table').append(propertyHTML(property));
    })
    // $.get('http://localhost:9292/listing/all/', function(listings) {
    //   var propertyList = Property.all(listings)
    //   propertyList.forEach(function(property) {
    //     $('#listings_table').append(propertyHTML(property));
    //   })
    // })
  };

  function propertyHTML(property) {
    return "<tr><td>" + property.name + "</td><td>" + property.description + "</td><td>" + property.price + "</td><td>" + property.dateRange + "</td></tr>"
  }

  function updateUserListings() {
    $.get('http://localhost:9292/listing/all/user', function(listings) {
      var propertyList = Property.all(listings)
      propertyList.forEach(function(property) {
        $('#listings_table').append("<tr><td>" + property.name + "</td></tr>");
      })
    });
  };

  function getLoggedInUserJson() {
    return $.get('http://localhost:9292/user/logged_in/')
  };


  function dateRangePicker() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log(start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'))
      return (start.format('YYYY-MM-DD') + ' - ' + end.format('YYYY-MM-DD'));
    });
  }
});

$(function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  $('input[name="daterange"]').daterangepicker({
    "startDate": today,
    "endDate": today,
  }, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });
});

// $(function getDate() {
//   $('input[name="daterange"]').daterangepicker({
//       "startDate": "07/24/2019",
//       "endDate": "07/30/2019",
//       "minDate": "08/01/2019",
//       "maxDate": "08/05/2019"
//   }, function(start, end, label) {
//     console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
//   });
// });
