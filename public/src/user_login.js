$(document).ready(function() {

  $("#new_listing_button").click(function() {
    var userName = $('#new_username_textbox').val()
    var password = $('#new_surname_textbox').val()

    $.post('http://localhost:9292/user/new/', User.login(userName, password));
    var json = $.get('http://localhost:9292/user/login/')
    var loggedInUser = User.loggedInUser(json);
  });


});
