$(document).ready(function(){
    $(".content-panel").hide();
});

$( ".row-panel" ).on("click", function() {
    $(this).parent().next().children('.content-panel').slideToggle( 800 );
});
