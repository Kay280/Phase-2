$(document).ready(function() {
    $('div#plugin1').dblclick(function() {
        $(this).fadeOut('fast');
    });
});
   

$("button").click(function(){
    $.getJSON("http://api.fixer.io/latest", function(result){
        $.each(result, function(field){
            $("div#output").append(field + " ");
        });
    });
});

$('div#plugin2').dbclick(function() {
        $(this).fadeOut('fast');
    });

