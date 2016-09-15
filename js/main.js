$(document).ready(function() {
    $('div#plugin1').dblclick(function() {
        $(this).fadeOut('fast');
    });
});
   

$("button").click(function(){
    $.getJSON("http://api.fixer.io/latest", function(result){
        $.each(result, function(i, field){
            $("div#output").append(result.rates + " ");
        });
    });
});

$('div#plugin2').dbclick(function() {
        $(this).fadeOut('fast');
    });

