gsap.registerPlugin(CSSRulePlugin);

document.addEventListener('DOMContentLoaded', function(event){
    window.addEventListener("load", function(){
        console.log("reade");
        var days = $(".day-container");
        var index_sender = $(".wrapper .header-day #sender");
        
        for(var i = 0; i < days.length; i++){
            days[i].addEventListener('click', function(){
                var num = parseInt(this.getAttribute("data-num"));
                console.log("clicked", this, num);
        
                var href = "pages/" + num + ".html";
                transitionToPage(href);
            });
        }
        
        index_sender.on('click', function(){
            transitionToPage("../index.html");
        });
        
        function transitionToPage(href){
            var tl = gsap.timeline();
            tl.to(CSSRulePlugin.getRule("body::before"), {duration: .3, transform: "scale(1)", transformOrigin: "bottom right", ease: Power2.ease} );
            var selfhref = href;
            setTimeout(function(){
                window.location.href = selfhref;
            }, 1000);
        }
        
        window.addEventListener('pageshow', function(){
            /*gsap.to(CSSRulePlugin.getRule('body'), { duration: 1, ease: Power2.easeInOut, opacity: 1, transform: "scale(1)" } );*/
            /*$('body').addClass('transition');
            gsap.to(CSSRulePlugin.getRule('body .transition::before'), {duration: 0.3 });*/
            var tl = gsap.timeline();
            /*tl.to(CSSRulePlugin.getRule("body::before"), {duration: .1, transform: "scale(1)", transformOrigin: "bottom left", ease: Power2.ease} );*/
            /*tl.from(CSSRulePlugin.getRule("body::before"), {transform: "scale(1)", transformOrigin: "bottom left"} );*/
            tl.to(CSSRulePlugin.getRule("body::before"), {delay: 1, duration: .3, transform: "scale(0)", transformOrigin: "bottom right", ease: Power2.ease } );
            
        });
        
        window.addEventListener('pagehide', function(){
            var tl = gsap.timeline();
            tl.to(CSSRulePlugin.getRule("body::before"), {duration: .3, transform: "scale(1)", transformOrigin: "bottom right", ease: Power2.ease} );
        });
    });
});