$(document).ready(function () {
    var async = async || [];
    (function () {
        var done = false;
        var script = document.createElement("script"),
            head = document.getElementsByTagName("head")[0] || document.documentElement;
        script.src = 'assets/js/jquery-3.6.0.min.js';
        script.type = 'text/javascript';
        script.async = true;
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                done = true;
                // Process async variable
                while(async.length) { // there is some syncing to be done
                    var obj = async.shift();
                    if (obj[0] =="ready") {
                        $(obj[1]);
                    }else if (obj[0] =="load"){
                        $(window).load(obj[1]);
                    }
                }
                async = {
                    push: function(param){
                        if (param[0] =="ready") {
                            $(param[1]);
                        }else if (param[0] =="load"){
                            $(window).load(param[1]);
                        }
                    }
                };
                // End of processing
                script.onload = script.onreadystatechange = null;
                if (head && script.parentNode) {
                    head.removeChild(script);
                }
            }
        };
        head.insertBefore(script, head.firstChild);
    })();

    $('a').click(function() {
        return false;
    }).dblclick(function() {
        window.open(this.href, '_blank');
        return false;
    });

$("#sidepanel").click(function () {
    if ($("body").css("left") == "-215px") {
        $("body").css({left: "initial"});
        $("#sidepanel").css({transform: "rotate(180deg)"});
    } else {
        $("body").css({left: "-215px"});
        $("#sidepanel").css({transform: "initial"});
    }
});
    $("#return").hide();
    $(window).scroll(function () {
        $(this).scrollTop() > 450 ? $("#return").fadeIn() : $("#return").fadeOut()
    });
    $("#return").click(function () {
        $("html, body").animate({scrollTop:0}, 1000, 'swing')
    });

    if ($(window).width() < 1000) {
        $("#sidepanel").remove();
    } else {
        if ($("#sidepanel").length < 1){
            $("h2").prepend('<button id="sidepanel"><svg x="0px" y="0px" viewBox="0 0 337.792 337.792"><path d="M337.792,134.824l-130.824,99.441v-52.216C117.061,173.419,30.735,207.817,0.001,302.41 C-0.337,180.728,99.895,111.781,206.968,88.488V35.382L337.792,134.824z"/></svg></button>')
        }
    }

   // $( "header" ).draggable({ cursor: "ew-resize", axis: "x", cursorAt: { right: 0 }, containment:[0,0,170,0], distance:0 });
});