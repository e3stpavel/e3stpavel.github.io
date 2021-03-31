$(document).ready(function(){
    $(".wrapper").animate({
        marginBottom: '0',
        opacity: '1' 
    });

    $(".control[data-open]").on("click", function(){
        if(this.getAttribute("data-open") == "open"){
            this.setAttribute("data-open", "close");
            this.querySelector(".opensvg").style.transform = "rotate(180deg)";
            this.querySelector("span").innerHTML = "Close Gates";
            $(".okBtn")[0].innerHTML = "EMERGENCY CLOSE";
        }
        else if(this.getAttribute("data-open") == "close"){
            this.setAttribute("data-open", "open");
            this.querySelector(".opensvg").style.transform = "rotate(0deg)";
            this.querySelector("span").innerHTML = "Open Gates";
            $(".okBtn")[0].innerHTML = "EMERGENCY OPEN";
        }
    });

    $(".control[data-emer]").on("click", function(){
        if(this.getAttribute("data-emer") == "emer"){
            $(".popup")[0].style.display = "flex";
            $(".popup-attention").addClass("active");
            $(".blured").addClass("default");
            $(".blured").removeClass("hidden");
            $(".popup-attention").removeClass("h");
        }
    });

    console.log($(".okBtn"));
    $(".okBtn")[0].addEventListener("click", function(){
        if(this.innerHTML == "EMERGENCY CLOSE"){
            $(".control[data-open]")[0].setAttribute("data-open", "open");
            $(".control[data-open]")[0].querySelector(".opensvg").style.transform = "rotate(0deg)";
            $(".control[data-open]")[0].querySelector("span").innerHTML = "Open Gates";
            this.innerHTML = "EMERGENCY OPEN";
        }
        else if(this.innerHTML == "EMERGENCY OPEN"){
            $(".control[data-open]")[0].setAttribute("data-open", "close");
            $(".control[data-open]")[0].querySelector(".opensvg").style.transform = "rotate(180deg)";
            $(".control[data-open]")[0].querySelector("span").innerHTML = "Close Gates";
            this.innerHTML = "EMERGENCY CLOSE";
        }
        $(".popup-attention").removeClass("active").delay(490).queue(function(next){
            $(this).addClass("h");
            $(".popup")[0].style.display = "none";
            next();
        });
        $(".blured").removeClass("default").delay(490).queue(function(next){
            $(this).addClass("hidden");
            next();
        });
    });

});
