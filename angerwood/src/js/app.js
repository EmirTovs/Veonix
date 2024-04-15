import { addClassIfVisible } from './components/addClassIfVisible.js';
import  gsapAnimate  from './components/gsapAnimate.js';
import { mainBlock } from './components/mainBlock.js';
import { mainCatalog } from './components/mainCatalog.js';
import scrollClass from './components/scrollClass.js';
import ScrollToAnchor from './components/scrollToAnchor.js'
import LazyLoad from "vanilla-lazyload";
import { slidersTabs } from './components/slidersTabs.js';
import ItcTabs from './components/ItcTabs.js';
import { sliders } from './components/sliders.js';
import { cart } from './components/cart.js';
import modalShow from './components/modalShow.js';



document.addEventListener('DOMContentLoaded', () => {
  scrollClass();
  modalShow()
  addClassIfVisible(".header", "first", "menu-show", 1);
  // addClassIfVisible(".header", "about", "black", 0.1);
  addClassIfVisible(".header", "black", "white", 0.1);

    cart()
    if (document.querySelector('.catalog__burger')) {
      const btn = document.querySelector('.catalog__burger')
      btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        document.querySelector('.catalog__menu-box').classList.toggle('active')
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.catalog__menu-box') && e.target != btn) {
            document.querySelector('.catalog__menu-box').classList.remove('active')
            btn.classList.remove('active')
          }
        }, true)
      })
    }
    sliders()
    // Якорные ссылки
    const header = document.querySelector('.header');
    
    const topOffset = header.offsetHeight;
    const smoothScroll = new ScrollToAnchor({
        // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
        offset: topOffset,
        duration: document.body.clientWidth <= 768 ? 2000 : 1000,
    });
    mainBlock()
    mainCatalog()
    document.querySelector('body').style.overflow = 'hidden'
    gsapAnimate()

    const modalMenu = () => {
        const btn = document.querySelector('.header__burger')
        const modal = document.querySelector('.modal-menu')
        btn.addEventListener('click', () => {
            btn.classList.toggle('active')
            if (window.innerWidth <= 680) {
              modal.classList.toggle('active')
              document.querySelector('body').classList.toggle('hidden')
              header.classList.toggle('call-menu')
            }
            header.classList.toggle('menu-active')
            document.addEventListener('click', (e) => {
              if (!e.target.closest('.header') && e.target != btn) {
                document.querySelector('.modal-menu').classList.remove('active')
                header.classList.remove('menu-active')
                btn.classList.remove('active')
                document.querySelector('body').classList.remove('hidden')
                header.classList.remove('call-menu')
              }
            }, true)
        })
    }

    modalMenu()

    var myLazyLoad = new LazyLoad();
    // After your content has changed...
    myLazyLoad.update();
    function scrollToTop() {
        // Добавляем задержку для обеспечения корректной работы
        setTimeout(function () {
            window.scrollTo(0, 0);
            document.querySelector('body').style.overflow = null
        }, 0);
    }

    // Вызываем функцию при перезагрузке страницы
    window.onload = scrollToTop;
    const addClassHeaderIsBlack = (element) => {
      let header = document.querySelector('.header')
      let el = document.querySelector(element)
      if (!el) return
      var isHeaderActive = false;
      window.addEventListener('scroll', function() {
        var aboutBlockRect = el.getBoundingClientRect();
        var aboutBlockTop = aboutBlockRect.top - 100;
        var aboutBlockBottom = aboutBlockRect.bottom - 100;
  
        if (aboutBlockTop <= 0 && aboutBlockBottom >= 0 && !isHeaderActive) {
            header.classList.add('black');
            isHeaderActive = true;
        } else if ((aboutBlockTop > 0 || aboutBlockBottom < 0) && isHeaderActive) {
            header.classList.remove('black');
            isHeaderActive = false;
        }
      });
    }
    
    addClassHeaderIsBlack('.about')
    

    slidersTabs()
    new ItcTabs('.clg__tabs', '.clg__tabs-button', '.clg__tab', 'tab-show')
  //  let aboutVertival = document.querySelector('.static__radius__line.vertical').style.left = 'calc(17.43056vw - 17px)'
});