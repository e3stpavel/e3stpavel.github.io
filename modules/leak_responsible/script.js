

$(document).ready(function(){
    $(".wrapper").animate({
        marginBottom: '0',
        opacity: '1' 
    });

    /* Default level -180 deg - 0%, -90deg - 50%,  0 - 100% */ 
    var level = 0;
    
    //count degrees
    var x = (level * 180 / 100) - 180;

    $(".clipped").css("transform", "rotate(" + x.toString() + "deg)");
    document.getElementById("percentage").innerHTML = level.toString() + "%";

    console.log(x);


});
