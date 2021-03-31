$(document).ready(function(){
    $(".wrapper").animate({
        marginBottom: '0',
        opacity: '1' 
    });

    $("#btn").on("click", function(){
        $(this).addClass("clicked").delay(500).queue(function(next){
            $(this).removeClass("clicked");
            next();
        });
        if(document.getElementById("btn").innerHTML == "Turn the module on"){
            document.getElementById("btn").innerHTML = "Turn the module off";
        }
        else{
            document.getElementById("btn").innerHTML = "Turn the module on";
        }
        
    });
});