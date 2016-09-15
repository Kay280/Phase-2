$(document).ready(function() {
    $('#plugin1').dblclick(function() {
        $(this).fadeOut('fast');
    });
    
    $('#plugin2').hover(function() {
        $(this).fadeOut('fast');
    });
    
});

   

$("button").click(function(){
    $.getJSON("http://api.fixer.io/latest", function(result){
        $.each(result, function(i, field){
            $("div#output").append(field + " ");
        });
    });
});



