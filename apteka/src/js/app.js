import ScrollToAnchor from './components/scrollToAnchor.js'
import LazyLoad from 'vanilla-lazyload';
import Parallax from 'parallax-js'
import {WOW} from 'wowjs'
import {Fancybox} from '@fancyapps/ui'
import scrollClass from './components/scrollClass.js';
import modalShow from './components/modalShow.js';

document.addEventListener('DOMContentLoaded', () => {

    scrollClass()
    modalShow()
    // Якорные ссылки
    const header = document.querySelector('.header');
    
    const topOffset = header.offsetHeight;
    const smoothScroll = new ScrollToAnchor({
        offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
        offset: topOffset,
        duration: document.body.clientWidth <= 768 ? 2000 : 1000,
    });

    const elemHideShow = (el, notClass = null) => {
        const elemets = document.querySelectorAll(el)
        elemets.forEach(item => {
            item.addEventListener('mousemove', ()=> {
                if (notClass && item.classList.contains(notClass)) {
                    elemets.forEach(i => i.classList.remove('hide'))
                } else {
                    elemets.forEach(i => i.classList.add('hide'))
                }
                item.classList.remove('hide')
            })
            item.addEventListener('mouseout', ()=> {
                elemets.forEach(i => i.classList.remove('hide'))
            })
        })
    }

    elemHideShow('.features__item', 'animate__animated')
    var scene = document.getElementById('main__phones');
    var parallaxInstance = new Parallax(scene, {
        hoverOnly: true,
        relativeInput: false
    });

    document.querySelectorAll('.main__img').forEach(item => {
        new Parallax(item, {
            hoverOnly: true,
            relativeInput: true
        })
    })

    document.querySelectorAll('.user__img-parallax').forEach(item => {
        new Parallax(item, {
            hoverOnly: true,
            relativeInput: true,
            limitY: 4,
            limitX: 4,
        })
    })

    document.querySelectorAll('.app__icons').forEach(item => {
        new Parallax(item, {
            hoverOnly: true,
            relativeInput: true,
        })
    })


    var lazyLoadInstance = new LazyLoad({
        // Your custom settings go here
    });
    lazyLoadInstance.update();
    new WOW({
        animateClass: 'animate__animated',
        mobile: false,
    }).init();


    $('form').on('submit', function(e){
        e.preventDefault();
        var arr = $(this).serialize();
        var form = $(this);
          $.ajax({
              url: "../send-form.php",
              type: "POST",
              data: arr,
              beforeSend: function () {
                form.trigger("reset");
                if (e.target.closest('.modal')) {
                    e.target.closest('.modal').classList.remove('active')
                }
                $('[type="submit"]').prop("disabled", false);;
                Fancybox.close();
                Fancybox.show([{
                  type: "html",
                  src: '<div class="message modal"><div class="modal__content"><p class="modal__title">Спасибо за заявку!</p><p class="modal__subtitle">На менеджер свяжется в Вами <br> в ближайшее время</p></div></div>'
                }]); 
              },
              success: function(data){
               
              }
          });
      
      })

});