
$(function () {
    $(window).on("scroll", function () {
        topBtnScroll(".top_btn"); // top Btn 스크롤시 보이게
    });


});
// 슬라이드, 터치시 img 사라지게
function swiperMotion(sliderTouch, motionImage) {
    $(document).on("touchstart mousedown", sliderTouch, function () {
        const currentSlider = $(this);
        const currentImage = currentSlider.find(motionImage);

        currentImage.animate({ opacity: 0, bottom: "0", visibility: "hidden" });
    });
}

swiperMotion(".drag_slide", ".drag_swipe img");

// header menu hover
function headerMenuHover(el, show) {
    const depth2 = $(".header .gnb .depth2");
    const headerBg = $(".header .header_bg");

    depth2.css("display", show ? "block" : "none");
    headerBg.css("display", show ? "block" : "none");

}

//header hamMenu
function hamMenu(e) {
    $(e).parents().toggleClass("active");
}

// 웹접근성 - header hamMenu Close focus
function hamMenuFocusLeave() {
    $(".ham_menu_wrap .menu_btn").focus();
}
// footer familysite 
function familySite(e) {
    $(e).siblings(".family_layer").slideToggle();
    $(e).parents().toggleClass("active");
}
// 웹접근성 - footer familysite 닫히게
function familySiteLeave() {
    $(".footer .top .familysite.active .family_layer").slideUp();
    $(".footer .top .familysite.active").removeClass("active");
}
// top Btn 스크롤시 보이게
function topBtnScroll(e) {
    let lastScrollTop = 0;
    let currentScroll = $(window).scrollTop();;
        
    if (currentScroll > lastScrollTop) {
        // 아래로 스크롤 → 요소 보이기
        $(e).css("opacity", "1");
        setTimeout(function() {
            $(e).show();
        }, 200);
    } else {
        // 위로 스크롤 → 요소 숨기기
        $(e).css("opacity", "0");
        setTimeout(function() {
            $(e).hide();
        }, 200);
    }

    lastScrollTop = currentScroll;
}
// top Btn 클릭시 상단으로
function topBtn() {
    $('html, body').animate({
        scrollTop: 0
    }, 400)
    return false;
}
