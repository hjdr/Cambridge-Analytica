$(document).ready(function() {


  $("#login_button").click(function() {
    var userName = $('#username_textbox').val()
    var password = $('#password_textbox').val()

    $.post('http://localhost:9292/user/login/attempt', User.login(userName, password),
      function(data){
        if(data=='false'){
          $("#incorrect_password").html("silly bastard");
        } else {
          window.location.replace("http://localhost:9292/property/new/");
      };
    });
  });
});
