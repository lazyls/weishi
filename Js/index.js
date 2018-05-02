/// <reference path="../scripts/template-web.js" />
/// <reference path="../scripts/jquery-3.3.1.js" />

$(document).ready(function () {

    !function init_view() {
        var tmp = '\
<div class="view_win" >\
        <ul class="movie">\
            {{each $data}}\
            <li>\
                <a href="{{$value.href}}" style="background-image:url({{$value.src}})"></a>\
            </li >\
            {{/each}}\
        </ul>\
        <ul class="thumb">\
            {{each $data}}\
            <li></li>\
            {{/each}}\
        </ul>\
</div>';
        var $t = $(".image_list");
        var data = [];
        $t.find("a").each(function () {
            var $a = $(this);
            var obj = {};
            obj.href = $a.attr("href");
            obj.src = $a.children().first().attr("src");
            data.push(obj);
        });
        $t.before($(template.render(tmp, data)));
    }();

    var scroll_to = function (index) {
        $(".movie").animate({
            left: -index * $(".view_win").width()
        }, 1000, "swing", function () {
            $(".thumb").children().eq(index).addClass("active").siblings().removeClass("active");
        })
    };
    $(".thumb").on("mouseenter", ">li", function () {
        var $t = $(this);
        scroll_to($t.index());
    });
    $(".movie").hover(function () {
        var $t = $(this);
        $t.addClass("pause");
    }, function () {
        var $t = $(this);
        $t.removeClass("pause");
    });

    setInterval(function () {
        if (!$(".movie").hasClass("pause")) {
            var index = $(".thumb .active").index() || 0;
            scroll_to(++index % $(".thumb").children().length);
        }
    }, 10000);
})