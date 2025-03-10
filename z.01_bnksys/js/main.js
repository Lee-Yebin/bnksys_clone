
$(function () {
    $(window).on("scroll", function () {

        // main4 card_wrap 스크롤시 상단 고정
        cardScroll(".main4 .card_wrap .card1");
        cardScroll(".main4 .card_wrap .card2");
        cardScroll(".main4 .card_wrap .card3");
        cardScroll(".main4 .card_wrap .card4");
        cardScroll(".main4 .card_wrap .card5");
    });
});

// main4 card_wrap 스크롤시 상단 고정
function cardScroll(cardClass) {
    let scrollY = $(window).scrollTop();
    // 고정할 섹션
    let fixedPointCont = $(cardClass);
    let fixedPoint = fixedPointCont.offset().top;

    fixedPoint += -150; // 상단여백 추가
    // 모바일 - 상단여백 추가
    if ($(window).width() <= 800) { 
        fixedPoint += -250;
    }

    // 스크롤시 클래스 추가
    if (scrollY > fixedPoint) {
        fixedPointCont.addClass("active");
    } else {
        fixedPointCont.removeClass("active");
    }
}