$(document).ready(function() {
    
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        
        $('.list').append('<div class="item">' + toAdd + '</div>');
    });
    
    $(this).on('click', '.item', function() {
        $(this).remove();   
    });

    $('.container').accordion({collapsible:true});


    
    $('#nav-button').click(function() {

    	$('#header').slideToggle("slow");

    });


});