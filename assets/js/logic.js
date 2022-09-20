$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".sticky_cont").addClass("sticky");
    } else {
      $(".sticky_cont").removeClass("sticky");
    }
  });

  $(".promo h2").click(function () {
    $("#pro_inp").slideToggle("fast");
  });

  $("#result")
    .find("p")
    .click(function () {
      var res = $("#result").find(this).text();
      $("#input").val(res);
    });
  $("#icon_search").click(function () {
    $("#input").val("");
    $("#icon_search").css({
      transform: "rotate(0deg)",
    });
    $("#icon_search").attr("class", "fas fa-magnifying-glass");
    $(".result").fadeOut();
    $("#input").removeClass("onchange");
  });
  $("#input").keyup(function () {
    var input = $("#input").val();

    if (input !== "") {
      $("#icon_search").css({
        transform: "rotate(-180deg)",
      });
      $("#icon_search").attr("class", "fas fa-times");
      $("#input").addClass("onchange");
      $(".result").fadeIn("slow");
      $(".result").css("display", "flex");
    }
    if (input === "") {
      $("#icon_search").css({
        transform: "rotate(0deg)",
      });
      $("#icon_search").attr("class", "fas fa-magnifying-glass");
      $(".result").fadeOut();
      $("#input").removeClass("onchange");
    }
  });

  for (i = 0; i < 17; i++) {
    var heart = $("#heart" + i);
    $(heart).click(function () {
      $(this).toggleClass("fa-regular");
      $(this).toggleClass("fa-solid");
      $(this).toggleClass("heart_anim");
      $("#mn-q").css("display", "none");
      setInterval(function(){window.location.href="favourite.html"},800);
    });
  }

  // responsive nav bar

  $("#res_prd").click(function () {
    $("#res-drp-box").toggleClass("height");
  });

  $("#bars").click(function () {
    $("#responsive_bar").toggleClass("height");
  });

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
    if (!$("#portion").fadeOut(200)) {
      $("#portion").fadeOut(200);
    } else {
      $("#searchbar").delay(200);
      $("#searchbar").fadeIn(200);
    }
  });
  $("#searchclose").click(function () {
    if (!$("#searchbar").fadeOut(200)) {
      $("#searchbar").fadeOut(200);
    } else {
      $("#portion").delay(200);
      $("#portion").fadeIn(200);
    }
  });
});

var loader = document.getElementById("loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

SliderIndex = 2;
slider(SliderIndex);

function eachslid(a) {
  SliderIndex = SliderIndex + a;
  slider(SliderIndex);
}

function slider() {
  let slides = document.getElementsByClassName("slid");

  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  if (SliderIndex == slides.length) {
    SliderIndex = 0;
  }
  if (SliderIndex < 0) {
    SliderIndex = slides.length - 1;
  }
  slides[SliderIndex].style.display = "flex";
}

index = 0;
show(index);

function qimg(n) {
  index = n;
  show(index);
}

function show(num) {
  let q_slid = document.querySelectorAll(".img-box .act-q-img");
  for (i = 0; i <= 2; i++) {
    q_slid[i].style.display = "none";
  }
  q_slid[num].style.display = "flex";
}

function eye(e) {
  $(document).ready(function () {
    var eye = $("#eye" + e);
    window.location.href = "#scroll-to-trends";
    var src1 = $(eye).find(".img1").attr("src");
    var src2 = $(eye).find(".img2").attr("src");
    var eye_t = $(eye).find(".c-title").text();
    var eye_c = $(eye).find(".c-c-price").text();
    var eye_p = $(eye).find(".c-price").text();
    $("#q-1img").attr("src", src1);
    $("#q-2img").attr("src", src2);
    $("#q-slid-img1").attr("src", src1);
    $("#q-slid-img2").attr("src", src2);
    $("#clicker3").css("display", "none");
    $("#q-title").text(eye_t);
    $("#q-c-price").text(eye_c);
    $("#q-price").text(eye_p);
    $("#mn-q").fadeIn();
    $("#mn-q").css("display", "flex");
    $("body").css({
      overflow: "hidden",
      height: "100vh",
    });
  });
}
function product(s) {
  $(document).ready(function () {
    var eye = $("#eye" + s);
    var src1 = $(eye).find(".img1").attr("src");
    // alert(src1);
    var src2 = $(eye).find(".img2").attr("src");
    // alert($(eye).find('img').attr('src'));
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
  });
}
