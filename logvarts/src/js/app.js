document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        accordionShow()
    }, 200)
    scrollClass()
    modalShow()
    // Якорные ссылки
    const header = document.querySelector('.header');
    
    const topOffset = header.offsetHeight;
    const smoothScroll = new ScrollToAnchor({
        // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
        offset: topOffset,
        duration: document.body.clientWidth <= 768 ? 2000 : 1000,
    });

    if ($(".ped__slider").length > 0) {
        ped_slider = new Splide(".ped__slider", {
            perPage: 3,
            rewind: true,
            pagination: false,
            arrows: false,
            loop: true,
            type   : 'loop',
            perMove: 1,
            breakpoints: {
                680: {
                    perPage: 1
                }
            }
        })
        ped_slider.mount();
    
    
        $(".ped__arrows .arrows_next").click(function (params) {
            ped_slider.go(">");
        })
        $(".ped__arrows .arrows_prev").click(function (params) {
            ped_slider.go("<");
        })
        
    }

    if (document.querySelector('.review__slider')) { 
        const reviewSlider =  new Splide( '.review__slider', {
            perPage: 3,
            rewind: true,
            pagination: false,
            arrows: false,
            loop: true,
            type   : 'loop',
            perMove: 1,
            breakpoints: {
                680: {
                    perPage: 1
                }
            }
        } ).mount();
        document.querySelectorAll('.review__slider .splide__slide').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.review__slider .splide__slide').forEach(i => {
                    if (i !== item) {
                        i.classList.remove('active')
                        i.querySelector('video').pause()
                    }
                })
                item.classList.toggle('active')
                if (item.classList.contains('active')) {
                    item.querySelector('video').play()
                } else {
                    item.querySelector('video').pause()
                }
            })
        })
        reviewSlider.on('video:play', function (event) {
            console.log(event);
            event.slide.classList.add('active')
        })
        reviewSlider.on('video:pause', function (event) {
            event.slide.classList.remove('active')
        })
        reviewSlider.on('video:ended', function (event) {
            event.slide.classList.remove('active')
        })
        $("#range-slider").attr('max', $('.splide__slide').length - 1);
        $("#range-slider").on("input", function() {
            reviewSlider.go(+$(this).val());
        });


    }

    
    

    
    const lazyLoad = new LazyLoad({
        elements_selector: '.lazy',
    })
    
    if (document.querySelector('#contacts__map')) initYMap()
    
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', e => e.target.value.length > 0 ? e.target.classList.add('active') : e.target.classList.remove('active'))
    })
    document.querySelectorAll('.form__label .reset').forEach(reset => {
        reset.addEventListener('click', e => {
            e.target.closest('.form__label').querySelector('input').value = ''
            e.target.closest('.form__label').querySelector('.form__input').classList.remove('active')
        })
    })

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    if (document.querySelector('[data-fancybox]')) {
        Fancybox.bind('[data-fancybox]', {
            // Your custom options for a specific gallery
        });
    }


    stepsForm()
    document.querySelectorAll('.form__radio').forEach(item => {
        item.addEventListener('click', () => {
            item.querySelector('input').checked = true
        })
    })
    document.querySelectorAll('.form__polityc input').forEach(item => {
        if (!item.checked) {
           item.closest('form').querySelector('button[type="submit"]').setAttribute('disabled', 'disabled')
        }
        item.addEventListener('change', () => {
            if (!item.checked) {
                item.closest('form').querySelector('button[type="submit"]').setAttribute('disabled', 'disabled')
            } else {
                item.closest('form').querySelector('button[type="submit"]').removeAttribute('disabled')
            }
        })
    })

    const burgerMenu = header.querySelector('.header__burger');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        header.classList.toggle('active');
    })

    const headerMenuItem = header.querySelectorAll('.header__menu a');

    headerMenuItem.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            header.classList.remove('active');
        })
    })



    $('form').on('submit', function(e){
        e.preventDefault();
        var arr = $(this).serialize();
        var form = $(this);
          $.ajax({
              url: "/assets/files/form.php",
              type: "POST",
              data: arr,
              beforeSend: function () {
                form.trigger("reset");
                $('[type="submit"]').prop("disabled", false);
              },
              success: function(data){
                e.target.closest('.modal').classList.remove('active')
                document.querySelector("#modal-success").classList.add('active')
              }
          });
      
      })
      if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('head').insertAdjacentHTML('beforeend', '<link rel="shortcut icon" href="assets/img/favicon-w.png" type="image/x-icon">')
        }
        $("[type='tel']").mask("+7(999) 999-9999");
});