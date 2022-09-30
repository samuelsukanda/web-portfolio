// Page Scroll

$('.page-scroll').on('click', function(e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeOutExpo');

    e.preventDefault();
});

// Parallax

$(window).scroll(function() {
    let wScroll = $(this).scrollTop();

    // Jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, ' + wScroll/4 + '%'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, ' + wScroll/2 + '%'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, ' + wScroll/1 + '%'
    });

    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 450) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            },200 * (i+1));
        });
    }
});

// About

$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});