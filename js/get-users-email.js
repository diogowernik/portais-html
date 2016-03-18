$(document).ready(function () {
    
  $('#get-data').click(function () {
    var showData = $('#show-data');
    
    $.getJSON('http://brasilia.io/api/users', function (data) { 
      
      $.each(data, function(){
            var user = this; 
            var email = user.email;
            var p = $("<p>");
            
            p.text(email);
            showData.append(p);
           
      });
      
    });

  });
  
});



