import ItcTabs from './components/ItcTabs.js';
import autoHeightTextarea from './components/autoHeightTextarea.js';
import initYMap from './components/initYMap.js';
import scrollClass from './components/scrollClass.js';
import ScrollToAnchor from './components/scrollToAnchor.js'
import LazyLoad from 'vanilla-lazyload';
import Splide from '@splidejs/splide';
import modalShow from './components/modalShow.js';



document.addEventListener('DOMContentLoaded', () => {
    console.time('All time')
    scrollClass()
    modalShow()
    const marginRightVW = (mr) => {
        return window.innerWidth > 680 ? `${100 / (1920 / mr)}vw` : `${100 / (680 / mr)}vw`
    }
    const pointSliderSlick = (slider, el) => {
        let bar    = document.querySelector( el );
        let line   = bar.closest('.progress').querySelector('.progress__value')
        // Updates the bar width whenever the carousel moves:
        slider.on( 'mounted move', function () {
            let end  = slider.Components.Controller.getEnd() + 1;
            let rate = Math.min( ( slider.index + 1 ) / end, 1 );
            bar.style.left =  (100 * rate ) + '%';
            line.style.backgroundSize = (100 * rate ) + '% 100%';
        } );
    }
    // Якорные ссылки   
    // const header = document.querySelector('.header');
    
    // const topOffset = header.offsetHeight;
    // const smoothScroll = new ScrollToAnchor({
    //     // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
    //     offset: topOffset,
    //     duration: document.body.clientWidth <= 768 ? 2000 : 1000,
    // });

    const slideHideShow = (el) => {
        const elemets = document.querySelectorAll(el)
        elemets.forEach(item => {
            item.addEventListener('mousemove', ()=> {
                elemets.forEach(i => i.classList.add('hide'))
                item.classList.remove('hide')
            })
            item.addEventListener('mouseout', ()=> {
                elemets.forEach(i => i.classList.remove('hide'))
            })
        })
    }



    if (document.querySelector('.main__slider-container')) {
        const mainSliderSplide = new Splide('.main__slider-container', {
            autoWidth: true,
            focus    : 0,
            gap: `${marginRightVW(50)}`,
            omitEnd  : true,
            pagination: false,
            rewind: true,
            arrows: {
                next: '.main__next'
            },
            breakpoints: {
                680: {
                    // perPage: 1,
                    gap: `${marginRightVW(30)}`,
                },
            }
        })
        
        
        
        pointSliderSlick(mainSliderSplide, '.main__top .progress__point')
        
        mainSliderSplide.mount()
        
        // document.querySelectorAll('.main__slide-info').forEach(item  => {
        //     item.style.maxWidth = item.querySelector('.main__title').offsetWidth + 'px'
        // })
        slideHideShow('.main__slide')
    }
    
    
    
    

    

    if (document.querySelector('.team__slider-container')) {
        const teamSliderSplide = new Splide('.team__slider-container', {
            perPage: 4,
            perMove: 1,
            rewind: true,
            pagination: false,
            gap: `${marginRightVW(84)}`,
            arrows: {
                prev: '.team__prev',
                next: '.team__next'
            },
            breakpoints: {
                680: {
                    perPage: 1,
                    gap: `${marginRightVW(30)}`,
                },
            }
        })
        

        pointSliderSlick(teamSliderSplide, '.team__bottom .progress__point')
        teamSliderSplide.mount()
        slideHideShow('.team__slide')
    }

    
    

    

    if (document.querySelector('.news__slider-splide')) {
        const newsSliderSplide = new Splide('.news__slider-splide', {
            perPage: 4,
            perMove: 1,
            rewind: true,
            pagination: false,
            gap: `${marginRightVW(50)}`,
            arrows: {
                prev: '.news__prev',
                next: '.news__next'
            },
            breakpoints: {
                680: {
                    perPage: 1,
                    autoWidth: true,
                    gap: `${marginRightVW(30)}`,
                },
            }
        })
        document.querySelector('.news__bottom-swipe-news').addEventListener('click', () => {
            newsSliderSplide.go('>')
        })
        pointSliderSlick(newsSliderSplide, '.news__bottom-points .progress__point')
        newsSliderSplide.mount()
    }



    if (document.querySelector('.event__slider-splide')) {
        const eventSliderSplide = new Splide('.event__slider-splide', {
            perPage: 4,
            perMove: 1,
            rewind: true,
            pagination: false,
            gap: `${marginRightVW(50)}`,
            arrows: {
                prev: '.event__prev',
                next: '.event__next'
            },
            breakpoints: {
                680: {
                    perPage: 1,
                    autoWidth: true,
                    gap: `${marginRightVW(30)}`,
                },
            }
        })
        document.querySelector('.event__bottom-swipe').addEventListener('click', () => {
            eventSliderSplide.go('>')
        })

        pointSliderSlick(eventSliderSplide, '.event__bottom-points .progress__point')
        eventSliderSplide.mount()
    }



    
    if (document.querySelector('.event__slider-splide')) {
        const projectstSliderSplide = new Splide('.projects__slider-container', {
            perPage: 4,
            perMove: 1,
            rewind: true,
            pagination: false,
            gap: `${marginRightVW(66)}`,
            arrows: {
                prev: '.projects__prev',
                next: '.projects__next'
            },
            breakpoints: {
                680: {
                    perPage: 1,
                    autoWidth: true,
                    gap: `${marginRightVW(50)}`,
                },
            }
        })

        projectstSliderSplide.mount()
    }

    if (document.querySelector('.recommended__splide')) {
        const recommendedSliderSplide = new Splide('.recommended__splide', {
            perPage: 3,
            perMove: 1,
            rewind: true,
            pagination: false,
            gap: `${marginRightVW(22)}`,
            arrows: {
                next: '.recommended__next',
            },
            breakpoints: {
                680: {
                    perPage: 1,
                    autoWidth: true,
                    width: `90vw`,
                    gap: `${marginRightVW(30)}`,
                },
            }
        })
        pointSliderSlick(recommendedSliderSplide, '.recommended__top .progress__point')

        recommendedSliderSplide.mount()
    }

    
    

    const lazyLoad = new LazyLoad({
        elements_selector: '.lazy',
    })

    new ItcTabs('.news__tabs', '.news__tabs-button', '.news__tab', 'tab-show')
    autoHeightTextarea()

    initYMap()
    console.timeEnd('All time')
});