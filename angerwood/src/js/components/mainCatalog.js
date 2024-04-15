import { Splide } from '@splidejs/splide'
import { arrowSlider } from './arrowSlider.js'
export const mainCatalog = () => {
	if (document.querySelector('.main__catalog-slider')) {
		const mainCatalogSlider = new Splide( '.main__catalog-slider', {
			classes: {
				// arrow: 'main__catalog-navigation',
				prev: 'main__catalog-prev',
				next: 'main__catalog-next',
			},
			pagination: false,		
			type: 'fade',
			speed: 1500
		})
		mainCatalogSlider.on('mounted', function ()  {
			arrowSlider('.main__catalog-next')
			arrowSlider('.main__catalog-prev', false)
		})
		mainCatalogSlider.mount()
	}
}