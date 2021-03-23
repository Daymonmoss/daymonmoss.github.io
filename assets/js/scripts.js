$(document).ready(function () {
$("button").click(function () {
    if ($("body").css("left") == "-180px") {
        $("body").css({left: "initial"});
        $("button").css({transform: "rotate(180deg)"});
    } else {
        $("body").css({left: "-180px"});
        $("button").css({transform: "initial"});
    }
});
});