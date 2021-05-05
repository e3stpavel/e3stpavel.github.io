$(document).ready(function(){
    $(".wrapper").animate({
        marginBottom: '0',
        opacity: '1' 
    });

    //our states click
    var gates = $(".status");
    for(let i = 0; i < gates.length; i++){
        if(gates[i].hasAttribute("data-st")){
            gates[i].addEventListener("click", showYellowPop);
        }
        else{
            gates[i].addEventListener("click", showGreenPop);
        }
    }

    var okbtn = $(".okBtn");
    for(let i = 0; i < okbtn.length; i++){
        okbtn[i].addEventListener("click", closeGreenPopUp)
    }
});

function showGreenPop(){
    $(".popup")[0].style.display = "flex";
    $(".popup-green").addClass("active");
    $(".blured").addClass("default");
    $(".blured").removeClass("hidden");
    $(".popup-green").removeClass("h");
}
function showYellowPop(){
    $(".popup")[0].style.display = "flex";
    $(".popup-yellow").addClass("active");
    $(".blured").addClass("default");
    $(".blured").removeClass("hidden");
    $(".popup-yellow").removeClass("h");
}
function closeGreenPopUp(){
    $(".popup-green").removeClass("active").delay(490).queue(function(next){
        $(this).addClass("h");
        $(".popup")[0].style.display = "none";
        next();
    });
    $(".popup-yellow").removeClass("active").delay(490).queue(function(next){
        $(this).addClass("h");
        $(".popup")[0].style.display = "none";
        next();
    });
    $(".blured").removeClass("default").delay(490).queue(function(next){
        $(this).addClass("hidden");
        next();
    });
}