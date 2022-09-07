

$(document).ready(function () {

    $(document).ready(function () {

        $(window).bind('load', function () {
            $(".center").css("display", "flex");
            $(".center").css({
                "opacity": "1",

            });
            setTimeout(function () {
                // alert("taha");
                $(".center").css({
                    "opacity": ".5",
                    "min-height": "0vh",
                    "max-height": "0vh",
                    "overflow": "hidden"
                });
            }, 1000)
        })

        $(".pro-info").click(function () {
            if ($(this).find("i").attr("class") == "fas fa-plus") {
                $(".pro-info").find("i").css({
                    'transform': 'rotate(0deg)',
                });
                $(".pro-info").find("i").attr("class", "fas fa-plus");
                $(".pro-info").find(".lorem").css({ "height": "0px" })
                $(this).find(".lorem").css({
                    "height": "80px"
                })
                $(this).find("i").css({
                    'transform': 'rotate(-180deg)',
                });
                $(this).find("i").attr("class", "fas fa-minus");
            }
            else {
                $(this).find(".lorem").css({
                    "height": "0px"
                })
                $(this).find("i").css({
                    'transform': 'rotate(0deg)',
                });
                $(this).find("i").attr("class", "fas fa-plus");
            }
        })

    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.sticky_cont').addClass("sticky");
        }
        else {
            $('.sticky_cont').removeClass("sticky");
        }
    });

    setTimeout(() => {
        $("#loader").fadeOut("slow")
    }, 500);

    $(".promo h2").click(function () {
        $("#pro_inp").slideToggle("fast");
    })

    $("#result").find('p').click(function () {
        var res = $('#result').find(this).text();
        $("#input").val(res);
    })
    $("#icon_search").click(function () {
        $("#input").val("");
        $("#icon_search").css({
            'transform': 'rotate(0deg)',
        });
        $("#icon_search").attr("class", "fas fa-magnifying-glass");
        $(".result").fadeOut();
        $("#input").removeClass("onchange");

    })
    $("#input").keyup(function () {
        var input = $("#input").val();


        if (input !== "") {
            $("#icon_search").css({
                'transform': 'rotate(-180deg)',
            });
            $("#icon_search").attr("class", "fas fa-times");
            $("#input").addClass("onchange");
            $(".result").fadeIn("slow");
            $(".result").css("display", "flex");

        }
        if (input === "") {
            $("#icon_search").css({
                'transform': 'rotate(0deg)',
            });
            $("#icon_search").attr("class", "fas fa-magnifying-glass");
            $(".result").fadeOut();
            $("#input").removeClass("onchange");

        }

    })

    for (i = 0; i < 17; i++) {
        var heart = $("#heart" + i);
        $(heart).click(function () {
            $(this).toggleClass("fa-regular");
            $(this).toggleClass("fa-solid");
            $(this).toggleClass("heart_anim");
            $("#mn-q").css("display", "none");
        })
    }


    // responsive nav bar

    $("#res_prd").click(function () {
        $("#res-drp-box").toggleClass("height");
    })

    $("#bars").click(function () {
        $("#responsive_bar").toggleClass("height")
    })


    $("#close").click(function () {
        $("#mn-q").fadeOut();
        $("html, body").css({
            overflow: "visible",
            height: "auto",
        });
    });

    $("#clicker1").click(function () {
        $("#clicker3").removeClass("click-active");
        $("#clicker2").removeClass("click-active");
        $("#clicker1").addClass("click-active");
    });
    $("#clicker2").click(function () {
        $("#clicker3").removeClass("click-active");
        $("#clicker1").removeClass("click-active");
        $("#clicker2").addClass("click-active");
    });
    $("#clicker3").click(function () {
        $("#clicker2").removeClass("click-active");
        $("#clicker1").removeClass("click-active");
        $("#clicker3").addClass("click-active");
    });
    $("#searchbar").fadeOut(10);

    $("#click_search").click(function () {
        $("#searchbar").slideDown(200);
        $("#portion").slideUp(10);
    })
    $("#searchclose").click(function () {
        $("#searchbar").slideUp(10);
        $("#portion").slideDown(200);
    })
});

function eye(e) {
    $(document).ready(function () {
        var eye = $("#eye" + e);
        window.location.href = "#scroll-to-trends";
        var src1 = $(eye).find(".img1").attr('src');
        var src2 = $(eye).find(".img2").attr('src');
        var eye_t = $(eye).find(".c-title").text();
        var eye_c = $(eye).find(".c-c-price").text();
        var eye_p = $(eye).find(".c-price").text();
        $("#q-1img").attr("src", src1);
        $("#q-2img").attr("src", src2);
        $("#q-slid-img1").attr("src", src1);
        $("#q-slid-img2").attr("src", src2);
        $("#clicker3").css('display', 'none');
        $("#q-title").text(eye_t);
        $("#q-c-price").text(eye_c);
        $("#q-price").text(eye_p);
        $("#mn-q").fadeIn();
        $("#mn-q").css("display", "flex");
        $("body").css({
            overflow: "hidden",
            height: "100vh",
        });
    })

}
function incrementValue(x) {
    var cart = parseInt(document.getElementById("valcart" + x).value);

    cart = isNaN(cart) ? 0 : cart;
    if (isNaN(cart)) {
        cart = 0;
    }
    else {
        cart = cart
    }
    if (cart < 12) {
        cart++;
        document.getElementById('valcart' + x).value = cart;
    }
}


function dencrementValue(x) {
    var cart = parseInt(document.getElementById("valcart" + x).value);

    cart = isNaN(cart) ? 0 : cart;
    if (isNaN(cart)) {
        cart = 0;
    }
    else {
        cart = cart
    }
    if (cart > 1) {
        cart--;
        document.getElementById('valcart' + x).value = cart;
    }
}

function product(s) {

    $(document).ready(function () {
        var eye = $("#eye" + s);
        var src1 = $(eye).find(".img1").attr('src');
        var src2 = $(eye).find(".img2").attr('src');
        var eye_t = $(eye).find(".c-title").text();
        var eye_c = $(eye).find(".c-c-price").text();
        var eye_p = $(eye).find(".c-price").text();
        $("#pro_img1").attr("src", src1);
        $("#pro_img2").attr("src", src2);
        sessionStorage.setItem("src1", src1);
        sessionStorage.setItem("src2", src2);
        sessionStorage.setItem("eye_t", eye_t);
        sessionStorage.setItem("eye_c", eye_c);
        sessionStorage.setItem("eye_p", eye_p);
        window.location.href = "productpage.html";

    })
}