$(document).ready(function() {
    //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'inline';     
    
    //make username editable
    $('#username').editable({
        // showbuttons: false,
    });
    
    //make status editable
    $('#status').editable({
        showbuttons: false,
        type: 'select',
        title: 'Select status',
        placement: 'right',
        value: 2,
        source: [
            {value: 1, text: 'Hatha Yoga'},
            {value: 2, text: 'Ashtanga Yoga'},
            {value: 3, text: 'Iyengar Yoga'},
            {value: 4, text: 'Multiplos Estilos'}
        ]
        /*
        //uncomment these lines to send data on server
        ,pk: 1
        ,url: '/post'
        */
        
    });
    
    $('#firstname').editable({
        validate: function(value) {
           if($.trim(value) == '') return 'This field is required';
        }
    });
    
    
    $('#sex').editable({
        prepend: "not selected",
        source: [
            {value: 1, text: 'Male'},
            {value: 2, text: 'Female'}
        ],
        display: function(value, sourceData) {
             var colors = {"": "gray", 1: "green", 2: "blue"},
                 elem = $.grep(sourceData, function(o){return o.value == value;});
                 
             if(elem.length) {    
                 $(this).text(elem[0].text).css("color", colors[value]); 
             } else {
                 $(this).empty(); 
             }
        }   
    });
    
    $('#quem-sou').editable({
        inputclass: 'quem-sou-edit'
        // showbuttons: 'bottom'
    }); 

    
    
    //make tags editable
    $('#tags').editable({
        inputclass: 'input-large',
        select2: {
            tags: ['Hatha Yoga', 'Ashtanga Yoga', 'Kundalini Yoga', 'Yoga Integral'],
            tokenSeparators: [",", " "]
        }
    }); 

});