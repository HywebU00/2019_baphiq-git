// 自行加入的JS請寫在這裡
$(function() {
    // banner slider
    $('.adSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
        }]
    });

    // 首頁背景圖輪播
    

    // 進階查詢  -----------------------------------------------
    $(window).bind('resize load', function(e) {
        var windowWidth = $(window).width();
        if (windowWidth <= 1024) {
            $('.advance_search button').off().click(function(e) {
                $('.advance_block').stop(true, true).slideToggle();
            });
        }else{
            $('.advance_search button').click(function(e) {
                $('.advance_block').stop(true, true).slideToggle();
            });
        }

    });


    // 相關照片  -----------------------------------------------
    $('.Multiple_slider').slick({
        // dots: true,
        // dotsClass: 'slick-dots', //原點可以換成數字
        // infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // slidesToShow: 3, //一次顯示幾張
        // slidesToScroll: 1 //一次輪播幾張
        dots: true,
        dotsClass: 'slick-dots', //原點可以換成數字
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
        }]

    });

    // QP 執業範圍  --------------------------------------------
    // 當switch被點選的時候
    $('.switch').click(function(event) {

        // 假如 .Range 有 .Open 的時候，就 移除 .Open
        // 然後在這個假設下，.switch 文字改為“更多資訊”
        // 如果沒有，就加入 .Open
        // 然後在這個假設下，.switch 文字改為“隱藏資訊”
        if ( $(this).siblings('.Range').hasClass('Open') ) {
            $(this).removeClass('icon-minus');
            $(this).addClass('icon-plus-1');
            $(this).siblings('.Range').removeClass('Open');
            $(this).html("更多資訊");
            $(this).attr('name', '更多資訊');

        } else {
            $(this).removeClass('icon-plus-1');
            $(this).addClass('icon-minus');
            $(this).siblings('.Range').addClass('Open');
            $(this).html("隱藏資訊");
            $(this).attr('name', '隱藏資訊');
        }
    });
});



