$(document).ready(function() {

  $("#new_listing_button").click(function() {
    var name = $('#new_listing_textbox').val()
    var new_listing = new Listing(name);
    console.log(new_listing)
    // $.post('http://localhost:9292/listing/new/', );
  });
});
