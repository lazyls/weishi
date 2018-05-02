/// <reference path="../scripts/template-web.js" />
/// <reference path="../scripts/jquery-3.3.1.js" />

$(document).ready(function () {

    $("video").click(function () {
        var $t = $(this);
        var status = $t.data("status") || "pause";
        if (status == "pause") {
            $t.get(0).play();
            $t.data("status", "play");
        }
        else {
            $t.get(0).pause();
            $t.data("status", "pause");
        }
    });
})