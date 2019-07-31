$(document).ready(function() {


  $("#login_button").click(function() {
    var userName = $('#username_textbox').val()
    var password = $('#password_textbox').val()
    $.post('http://localhost:9292/user/new/', User.loggin(userName, password));
  });

};
});