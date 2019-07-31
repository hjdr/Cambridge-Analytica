$(document).ready(function() {


  $("#new_user_button").click(function() {
    var name = $('#new_username_textbox').val()
    var first_name = $('#new_password_textbox').val()
    var surname = $('#new_firstname_textbox').val()
    var password = $('#new_surname_textbox').val()
    var email = $('#new_email_textbox').val()

    $.post('http://localhost:9292/user/new/', User.create(name, first_name, surname, password, email));
  });

  };
});
