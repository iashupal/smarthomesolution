// global variables declaration
var imgClick = false;
$(window).ready(function () {
    // initialization of wow
    wow = new WOW({
        animateClass: 'animated'
        , offset: 100
        , callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();
    // zoomin function
    $(".scroll").click(function () {
        console.log("hi");
        $("body, html").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});

function zoomInImage() {
    if (imgClick == false) {
        $("#layout img").removeClass("zoomOutImg");
        $("#layout img").addClass("zoomInImg");
        imgClick = true;
    }
    else {
        $("#layout img").removeClass("zoomInImg");
        $("#layout img").addClass("zoomOutImg");
        imgClick = false;
    }
}