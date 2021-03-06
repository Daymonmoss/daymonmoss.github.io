$(document).ready(function () {
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
        $('a').click(function() {
            return false;
        }).dblclick(function() {
            a = this.elem.getAttribute('target');
            console.log(a);
            window.open(this.href, 'a');
            return false;
        });
    }

    if ($(window).width() > 1000) {

        $('body').draggable({
            handle: "header",
            cancel: "address a,#sidepanel",
            axis: "x",
            containment: [-215, 0, 0, 0],
            distance: 0,
            cursor: "ew-resize"
        });
    }
});