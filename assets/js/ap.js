$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 0,
    cssEase: 'Linear',
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            speed: 1000,
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    }
    ]

})


$('.slider2').slick({
    dots: false,
    rtl: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    arrows:false,
    autoplaySpeed: 0,
    cssEase: 'Linear',
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            cssEase: 'Linear',
            speed: 1000,
        }
    },
    {
        breakpoint: 650,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 580,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 0,
            cssEase: 'Linear',
        }
    }
    ]

})
// main slider
$('.myslider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                prevArrow: false,
                nextArrow: false,
            }
        }

    ]
});


