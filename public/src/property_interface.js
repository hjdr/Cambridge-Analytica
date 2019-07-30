$(document).ready(function() {




  $("#new_listing_button").click(function() {
    var name = $('#new_listing_textbox').val()
    $.post('http://localhost:9292/listing/new/', Property.create(create));
  });


  // function updateListings() {
  //   $.get('http://localhost:9292/listing/new/', function(listings) {

  //   })
  // }




});
