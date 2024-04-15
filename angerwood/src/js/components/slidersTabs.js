import { Splide } from '@splidejs/splide'
import { arrowSlider } from './arrowSlider.js'
export const slidersTabs = () => {
	document.querySelectorAll('.clg__slider').forEach((item, idx) => {
		if (item) {
			const splide = new Splide( item, {
				type: 'fade',
				lazyLoad: 'nearby',
				pagination: false,
				classes: {
						arrows: 'clg__bottom',
						prev: 'clg__prev',
						next: 'clg__next',
					},
			  } )
			  splide.on('mounted', function ()  {
				arrowSlider('.clg__next')
				arrowSlider('.clg__prev', false)
			})
			splide.mount()
		}
		
	})
	
}