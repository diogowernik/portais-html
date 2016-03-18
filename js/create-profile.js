$(document).ready(function() {

    $(function(){
        $('.create-profile').on('click', function(e){
            e.preventDefault();
            $(this).hide()
            $('.my-profiles-title').hide()
            
            $(this).next('.criar-perfil').show();
            
        });
    });

});