$(document).ready(function () {

    $(function() {
    $('.error').hide();
    $(".btn").click(function() {
      // validate and process form here
      
      $('.error').hide();

  		var email = $("input#email").val();
  		if (email == "") {
        $("label#email_error").show();
        $("input#email").focus();
        return false;
      }
  		var password = $("input#password").val();
  		if (password == "") {
        $("label#password_error").show();
        $("input#password").focus();
        return false;
      }
      
      
      var dataString = '&email=' + email + '&password=' + password;
      //alert (dataString);return false;
      $.ajax({
        type: "POST",
        url: "/api/auth",
        data: dataString,
        success: function() {
          $('#criarConta').html("<div id='message'></div>");
          $('#message').html("<h2>Deu certo</h2>")
          .append("<p>Libere recursos confirmando seu email</p>")
          .hide()
          .fadeIn(600, function() {
          $('#message').append('<i class="fa fa-check text-success fa-3x">');
          });
          window.setTimeout(function() {
            window.location.href = "http://brasilia.io/html/dashboard.html";
          }, 1000);
        }
      });
      return false;
  
      
    });
  });
  
  
  
});