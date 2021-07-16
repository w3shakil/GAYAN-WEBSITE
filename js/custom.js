$(function() {

    // preloader part start 

    $(window).on('load', function() {
        $('.preloader').delay(500).fadeOut(500);
    });

    // preloader part end
    // navbar stricky part start

    $(window).on('scroll', function() {
        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.navbar').addClass('bg');
        } else { $('.navbar').removeClass('bg'); }
    });

    // navbar stricky part end
    // smooth scroll part start

    var scrollLink = $('.scroll-link');
    $(scrollLink).on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top - 80 });
    });
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        scrollLink.each(function() {
            var sectionhead = $(this.hash).offset().top - 85;
            if (scrollTop >= sectionhead) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    // smooth scroll part end
    // scroll spy js start

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '.navbar'
    })

    // scroll spy js end
    //Navar toggler animation start

    $('.navbar-toggler').click(function() {
        $('.navbar-toggler').toggleClass('animation')
    });

    //Navar toggler animation end
    // banner slider start

    $('.banner-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        pauseOnHover: false,
    });

    // banner slider end
    // banner typed js start

    $(".typed").typed({
        strings: ["Future", "Life", "person"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 10,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    });

    // banner typed js end
    // about part star 


    //about part end
    //counter up start

    $('.counter').counterUp({
        delay: 5,
        time: 1500,
    });

    //counter up end
    //course slider start

    $('.main-course').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        arrows: true,
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right',
        pauseOnHover: false,

        responsive: [{
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]

    });

    //course slider end
    //event slider start

    $('.event-slider-main').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                }
            },
        ]
    });

    //event slider end
    //test slider start

    $('.test-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        arrows: false,
        pauseOnHover: false,
        fade: true,
        asNavFor: '.main-text',

    });
    $('.main-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        arrows: false,
        pauseOnHover: false,
        fade: true,
        asNavFor: '.test-slider-main',
    });

    //test slider end
    //wow js part start

    new WOW().init();

    //wow js part end
    //portfolio part start

    var containerEl = document.querySelector('.portfolio-main');

    var mixer = mixitup(containerEl);

    $('.venobox').venobox({
        spinner: 'double-bounce',
        spinColor: '#FBAA33',
        arrowsColor: '#FBAA33',
        closeColor: '#FBAA33',
    });

    //portfolio part end
    //footer slider start

    $('.foot-main').slick({
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            }
        ]
    });


    //footer slider end
    // back-to-top part start

    $('.back').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 300) {
            $('.back').fadeIn(500);
        } else {
            $('.back').fadeOut(500);
        }
    });
    // back-to-top part end

});