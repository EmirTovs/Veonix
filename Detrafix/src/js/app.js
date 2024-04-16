document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('notificationShown')) {
        // Создание элемента плашки
        const notification = document.querySelector('.notification');
      
        // Добавление кнопки "Хорошо" на плашку
        const closeBtn = document.querySelector('.notification__close');
      
      
        // Анимация появления плашки
        notification.style.transform = 'translate(-50%, 100%)';
        notification.style.opacity = '0';
      
        setTimeout(() => {
          notification.style.transform = 'translate(-50%, 0)';
          notification.style.opacity = '1';
        }, 1000);
      
        // Закрытие плашки по клику на кнопку "Хорошо"
        closeBtn.addEventListener('click', () => {
          notification.style.transform = 'translate(-50%, 100%)';
          notification.style.opacity = '0';
          localStorage.setItem('notificationShown', true);
        });
      } else {
        document.querySelector('.notification').remove()
      }
    scrollClass()
    modalShow()
    
        if (window.pageY !== 0) {
            window.scrollTo(0, 0); // Прокрутка вверх перед инициализацией анимаций
        }
        // Якорные ссылки
        // const header = document.querySelector('.header');
        
        // const topOffset = header.offsetHeight;
        // const smoothScroll = new ScrollToAnchor({
        //     // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
        //     offset: topOffset,
        //     duration: document.body.clientWidth <= 768 ? 2000 : 1000,
        // });


        if (document.querySelector('.features__slider')) {
            const featuresSlider = new Splide('.features__slider', {
                perPage: 3,
                perMove: 1,
                pagination: false,
                arrows: false,
                breakpoints: {
                    680: {
                        perPage: 1
                    }
                }
            }).mount()

            document.querySelector('.features__prev').addEventListener('click', () => {
                featuresSlider.go('<')
            })
            document.querySelector('.features__next').addEventListener('click', () => {
                featuresSlider.go('>')
            })
        }

        if (document.querySelector('.cloud__slider')) {
            const featuresSlider = new Splide('.cloud__slider', {
                perPage: 1,
                perMove: 1,
                pagination: false,
                arrows: false,
                autoplay: true,
                type: 'loop',
            }).mount()
        }

        if (document.querySelector('.cases__slider')) {
            const casesSlider = new Splide('.cases__slider', {
                perPage: 2,
                perMove: 1,
                pagination: false,
                arrows: false,
                breakpoints: {
                    680: {
                        perPage: 1
                    }
                }
            }).mount()

            document.querySelector('.cases__prev').addEventListener('click', () => {
                casesSlider.go('<')
            })
            document.querySelector('.cases__next').addEventListener('click', () => {
                casesSlider.go('>')
            })
        }

        if (document.querySelector('.main__slider-text')) {

            var splide = new Splide( '.main__slider-text', {
                direction: 'ttb',
                height   : '1.38889vw',
                type   : 'loop',
                arrows: false,
                pagination: false,
                autoplay: true,
                breakpoints: {
                    680: {
                        height: '6.76471vw'
                    }
                }

            } );
              
            splide.mount();

        }
        
        


        new WOW({
            animateClass: 'animate__animated',
        }).init();

        

        

    
    const lazyLoad = new LazyLoad({
        elements_selector: '.lazy',
    })
    
    if (document.querySelector('#contacts__map')) initYMap()
    if (document.querySelector('[data-fancybox]')) {
        Fancybox.bind('[data-fancybox]', {
            // Your custom options for a specific gallery
        });
    }

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
                if (e.target.closest('.modal')) e.target.closest('.modal').classList.remove('active')
                
                document.querySelector("#modal-success").classList.add('active')
              }
          });
      
      })
      
});