$(document).ready(function() {

    $('#login').on('click', function() {
    
        $.ajax({
            url: "/api/auth/sign_in",
            dataType:"json",
            method:"POST",
                });

    });
    
    $('#create-account').on('click', function() {
    
        $.ajax({
            url: "/api/auth/sign_in",
            dataType:"json",
            method:"POST",
                });

    });

});

