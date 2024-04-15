document.addEventListener('DOMContentLoaded', () => {

    scrollClass()
    modalShow()
    // Якорные ссылки
    // const header = document.querySelector('.header');
    
    // const topOffset = header.offsetHeight;
    // const smoothScroll = new ScrollToAnchor({
    //     // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
    //     offset: topOffset,
    //     duration: document.body.clientWidth <= 768 ? 2000 : 1000,
    // });


    const marginRightVW = (mr) => {
        return window.innerWidth <= 340 ? `${100 / (340 / mr)}vw` : window.innerWidth <= 640 ? `${100 / (640 / mr)}vw` : window.innerWidth <= 1000 ? `${100 / (1000 / mr)}vw` : window.innerWidth <= 1600 ? `${100 / (1600 / mr)}vw` : `${100 / (1920 / mr)}vw`;
    }

    if (document.querySelector('.comp__slider')) {
        var compSlider = new Splide( '.comp__slider', {
            // perPage: 1,
            arrows: false,
            pagination: false,
        } );
        compSlider.mount()
    }

    if (document.querySelector('.actual__slider')) {
        var actualSlider = new Splide( '.actual__slider', {
            perPage: 3,
            arrows: false,
            pagination: false,
            gap: marginRightVW(30),
            breakpoints: {
                1600: {
                    gap: marginRightVW(20),
                },
                1000: {
                    perPage: 2,
                    gap: marginRightVW(20),
                },
                499: {
                    perPage: 1,
                    pagination: true
                }
            }
        } );
        actualSlider.mount()
    }
    if (document.querySelector('.certificates__slider')) {
        var certificatesSlider = new Splide( '.certificates__slider', {
            perPage: 3,
            arrows: false,
            gap: marginRightVW(80),
            breakpoints: {
                1600: {
                    gap: marginRightVW(20),
                },
                640: {
                    perPage: 2,
                    gap: marginRightVW(20),
                    moveTo: 1
                },
                499: {
                    gap: marginRightVW(10),
                }
            }
        } );
        certificatesSlider.mount()
        certificatesSlider.on('resize', () => {
            let marginValue = window.innerWidth <= 499 ? marginRightVW(10) : window.innerWidth <= 640 ? marginRightVW(20) : window.innerWidth <= 1600 ? marginRightVW(20) : marginRightVW(80);
            document.querySelectorAll('.certificates__slider .splide__slide').forEach(function(slide) {
                slide.style.marginRight = marginValue;
            });
        })
    }
    
    if (document.querySelector('.review__slider')) {
        var reviewSlider = new Splide( '.review__slider', {
            perPage: 3,
            arrows: false,
            gap: marginRightVW(30),
            breakpoints: {
                1600: {
                    gap: marginRightVW(20),
                },
                1000: {
                    perPage: 2,
                    moveTo: 1,
                    gap: marginRightVW(20),
                    moveTo: 1
                },
                640: {
                    gap: marginRightVW(20),
                },
                499: {
                    perPage: 1,
                    gap: marginRightVW(20),
                }
            }
        } );
        reviewSlider.mount()
        reviewSlider.on('resize', () => {
            let marginValue = window.innerWidth <= 499 ? marginRightVW(10) : window.innerWidth <= 640 ? marginRightVW(20) : window.innerWidth <= 1600 ? marginRightVW(20) : marginRightVW(80);
            document.querySelectorAll('.certificates__slider .splide__slide').forEach(function(slide) {
                slide.style.marginRight = marginValue;
            });
        })
    }
    const lazyLoad = new LazyLoad({
        elements_selector: '.lazy',
    })
    
    if (document.querySelector('#contacts__map')) initYMap()
    


    new WOW({
        animateClass: 'animate__animated',
    }).init();


    Fancybox.bind('[data-fancybox]', {
        // Your custom options for a specific gallery
    });
});