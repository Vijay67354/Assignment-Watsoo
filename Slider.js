
$('.logo-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,  // Ensure autoplay is enabled
    autoplaySpeed: 1000,
    speed: 1000, // Set the animation speed to 1 second (1000ms)


    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
            }
        },
        {
            breakpoint: 560,  // New breakpoint for 560px
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
});




/*****************Blog Slider********************************/

$(document).ready(function () {
    $('.logo-slidercard').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,  // New breakpoint for 560px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: $('.prev-btn'), // Custom prev button
        nextArrow: $('.next-btn')  // Custom next button
    });

    // Optional: Attach custom functionality to the buttons
    $('.prev-btn').on('click', function () {
        $('.logo-slidercard').slick('slickPrev');
    });

    $('.next-btn').on('click', function () {
        $('.logo-slidercard').slick('slickNext');
    });
});