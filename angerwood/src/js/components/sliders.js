
import { Splide } from '@splidejs/splide';
import { arrowSlider } from './arrowSlider.js';
import { gsap } from "gsap";

export const sliders = () => {
	if (document.querySelector('.features__slider')) {

  
		const splide = new Splide( '.features__slider', {
		  type: 'fade',
		  lazyLoad: 'nearby',
		  pagination: false,
		  classes: {
			arrows: 'features__bottom',
			prev: 'features__prev',
			next: 'features__next',
		  },
		} )
		splide.on('mounted', function ()  {
		  arrowSlider('.features__next')
		  arrowSlider('.features__prev', false)
		})
			
		  splide.mount()
	}
	
	const aboutTl = gsap.timeline()
	if (document.querySelector('.about__slider')) {
		const aboutSplide = new Splide( '.about__slider', {
			height      : '100vh',
			arrows      : false,
			pagination  : false,
			speed       : 2000,
			direction   : 'ttb',
			wheel       : true,
			releaseWheel: true,
			drag        : false,
			wheelSleep  : 1500,
			breakpoints  : {
				680: {
					drag: true,
				}
			}
		} )
		if (window.innerWidth > 680) {
			aboutSplide.mount()
		} else {
			
			aboutTl.to('.about__mq', {
				x: '-100%',
				duration: 2,
				scrollTrigger: {
					trigger: '.about__splide-mq',
					start: 'top',
					scrub: true,
				}
			})
			.to('.about__mq svg path', {
				fill: '#fff',
				scrollTrigger: {
					trigger: '.about__splide-mq',
					start: 'top',
					scrub: true,
				}
			})
		}
		aboutSplide.on('move', function (e)  {
			if (e == 1) {
				document.querySelector('.about__mq').classList.add('active')
				aboutTl.to('.about__mq', {
					x: '-100%',
					duration: 2,
				})
			} else {
				setTimeout(() => {
					document.querySelector('.about__mq').classList.remove('active')
				}, 500)
				aboutTl.to('.about__mq', {
					x: '0%',
					duration: 2
				})
			}
		})
	}

	if (document.querySelector('.product__sliders')) {
		const products = document.querySelectorAll('.product').forEach((item, idx) => {
			item.classList.add(`product-${idx}`)
			const productThumbs = new Splide( `.product-${idx} .product__thumbs`, {
				perPage: 5,
				rewind: true,
				direction: 'ttb',
				height: 'auto',
				arrows: false,
				pagination: false,
				isNavigation: true,
			}).mount()
	
			const productSlider = new Splide( `.product-${idx} .product__slider`, {
				type: 'fade',
				rewind: true,
				pagination: false,
				arrows: false,
				perPage: 1
			}).sync(productThumbs).mount()
		})
		

	}
}