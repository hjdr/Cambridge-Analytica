$(document).ready(function() {


  $("#login_button").click(function() {

    $.post('http://localhost:9292/user/login/');
  });

  $("#signup_button").click(function() {

    $.post('http://localhost:9292/user/new/');
  });
  };
});
