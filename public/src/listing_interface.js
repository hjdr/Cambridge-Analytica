$(document).ready(function() {




  $("#new_listing_button").click(function() {
    var name = $('#new_listing_textbox').val()
    var new_listing = new Listing(name);
    $.post('http://localhost:9292/listing/new/', new_listing.createJsonString());
  });

  // function updateListings() {
  //   $.get('http://localhost:9292/listing/new/', function(listings) {

  //   })
  // }




});
