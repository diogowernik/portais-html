$(document).ready(function() {


  $("#buscar").on("input",function(){
      var pesquisa =   $(this).val().trim();
      var regex = new RegExp(pesquisa, "i") ;
    
    $(".card-mural")
      .hide()
      .filter(function(){
      var textoparagrafo =  $(this).text();
      return regex.test(textoparagrafo);
    })
      .show();
    
  });

});


