import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import  ScrollSmoother  from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);




const gsapAnimate = () => {
	
	// const tl = gsap.timeline();
	// tl
	// .to('.main__radius', {
	// 	scrollTrigger: {
	// 		trigger: '.main__catalog',
	// 		start: 'top',
	// 		end: 'bottom -100%',
	// 		scrub: true,
	// 		// pin: '.main__catalog',
	// 		markers: true,
	// 	},
	// })
	// .to('.main__radius__ball', {
	// 	top: 'calc(100% - 6.59722vw)',
	// 	left: 'calc(5.69444vw - 17px)',
	// 	transform: 'translate(-50%, -50%)',
	// 	width: 35, 
	// 	height: 35, 
	// 	scrollTrigger: {
	// 		trigger: '.main__catalog',
	// 		start: 'top',
	// 		end: 'bottom 45%',
	// 		scrub: 2,
	// 		// pin: '.main__mini',
	// 		// markers: true,
	// 	},
	// })
	// .to('.main__radius__line.vertical', {
	// 	left: 'calc(5.69444vw - 17px)',
	// 	transform: 'translate(-50%, -50%)',
	// 	scrollTrigger: {
	// 		trigger: '.main__catalog',
	// 		start: 'top',
	// 		end: 'bottom 75%',
	// 		scrub: 1.8,
	// 		// pin: '.main__mini',
	// 		// markers: true,
	// 	},
	// })
	// .to('.main__radius__line.horizont', {
	// 	top: 'calc(100% - 6.59722vw)',
	// 	scrollTrigger: {
	// 		trigger: '.main__catalog',
	// 		start: 'top',
	// 		end: 'bottom 50%',
	// 		scrub: 2,
	// 		// pin: '.main__mini',
	// 		// markers: true,
			
	// 	},
	// })
	const getWidthWindowWidthBall = () => {
		if (window.innerWidth > 680) {
			return 'calc(100vh - 6.59722vw)'
		} else if (window.innerWidth <= 680 && window.innerWidth > 375) {
			return 'calc(100vh - 18vw)'
		}
		return 'calc(100% + 23vw)'

	}
	const smoother = ScrollSmoother.create({
		wrapper: "#smooth-wrapper",
		content: "#smooth-content",
		smooth: 1,
		effects: true,
		preventDefault: true
	});
	let updateLineHorizont = 0
	const tlMain = gsap.timeline();
	tlMain
	// Задаем цвет для главного экрана
	.to('.main', {
		backgroundColor: '#0E1015',
		duration: 8,
		
		scrollTrigger: {
			toggleClass: 'active',
			trigger: '.main',
			start: 'top 0%',
			bottom: 'top 50%',
			scrub: 2,
			// pin: '.main',
			// markers: true,
		}
	})
	// Фиксируем главный экран
	.to('.main', {
		duration: 8,
		scrollTrigger: {
			trigger: '.main__catalog',
			start: 'top 100%',
			bottom: 'top 50%',
			end: 'bottom 100%',
			scrub: 5,
			pin: '.main',
			// markers: true,
		},
	})
	// Крутим горизонтальную линию
	.to('.main__radius__line.horizont', {
		rotate: -90,
		duration: 8,
		scrollTrigger: {
			trigger: '.main',
			// toggleClass: 'active',
			start: 'top 1px',
			// end: 'bottom 100%',
			scrub: 2,
			// pin: '.main',
			// markers: true,
		},
		onUpdate: () => {
			updateLineHorizont++
			console.log();
			if (updateLineHorizont > 5) {
				let element = document.querySelector(".main__radius__line.horizont");
				if (!element) return
				let elementDesc = document.querySelector('.main__mini__text');
				let elementVertical = document.querySelector(".main__radius__line.vertical");
				let style = window.getComputedStyle(element).transform;
				let matrix = new DOMMatrix(style);
				let rotateValue = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
				let count = Math.floor(Math.abs(rotateValue)) + 1
				document.querySelector('.main__radius__deg span').textContent = count <= 90 ? count : 90
				if (count >= 90) {
					elementVertical.classList.add('active')
					elementDesc.classList.add('active')
				} else {
					elementVertical.classList.remove('active')
					elementDesc.classList.remove('active')
				}
			}
			
		}
	})
	// Задаем цвет для градусов
	.to('.main__radius__deg', {
		color: '#15171B',
		scrollTrigger: {
			trigger: '.main',
			start: 'top 0.1%',
			scrub: 2,
			// pin: '.main',
			// markers: true,
		},
	})
	// Скрываем название
	.to('.main__title', {
		opacity: 0,
		scrollTrigger: {
			trigger: '.main',
			start: 'top 0.1%',
			scrub: 2,
			// pin: '.main',
			// markers: true,
		},
	})
	// Скрываем заголовок
	.fromTo('.main__subtitle',{
		opacity: 1
	}, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.main',
			start: 'top 0.1%',
			scrub: 2,
			// pin: '.main',
			// markers: true,
		},
	})
	// Скрываем нижние блоки
	.fromTo('.main__bottom',{
		opacity: 1
	}, {
		opacity: 0,
		pointerEvents: 'none',
		scrollTrigger: {
			trigger: '.main',
			start: 'top 0.1%',
			scrub: 2,
			// pin: '.main',
			// markers: true,
		},
	})
	// Показываем описание
	.to('.main__mini__col', {
		opacity: 1,
		scrollTrigger: {
			trigger: '.main',
			start: 'top 0.1%',
			scrub: 2,
			// pin: '.main',
			// markers: true,
		},
	})
	// Уменьшаем шар
	.to('.main__radius__ball', {
		top: getWidthWindowWidthBall(),
		left:  window.innerWidth > 680 ? '17.88194vw' : '22vw',
		// transform: 'translate(0%, -50%)',
		borderColor: '#ACB9BF',
		width: window.innerWidth > 680 ? '2.43056vw' : '4.86120vw', 
		height: window.innerWidth > 680 ? '2.43056vw' : '4.86120vw', 
		scrollTrigger: {
			trigger: '.main__catalog',
			start: 'top 100%',
			end: 'bottom 100%',
			scrub: 1,
			// pin: '.main__mini',
			// markers: true,
		},
	})
	// Смещаем линии влево и вниз
	.to('.main__radius__line.vertical', {
		left: window.innerWidth > 680 ? '19.09722vw' : 'calc(27vw - 2.5vw)',
		transform: 'translate(0%, -50%)',
		transition: 'none',
		backgroundColor: '#ACB9BF',
		scrollTrigger: {
			trigger: '.main__catalog',
			start: 'top 100%',
			end: 'bottom 100%',
			scrub: 1,
			// pin: '.main__mini',
			// markers: true,
		},
	})
	.to('.main__radius__line.horizont', {
		top: window.innerWidth > 680 ? 'calc(100vh - 6.59722vw)' : 'calc(100vh - 18vw)',
		backgroundColor: '#ACB9BF',
		scrollTrigger: {
			trigger: '.main__catalog',
			start: 'top 100%',
			end: 'bottom 100%',
			scrub: 1,
			// pin: '.main__mini',
			// markers: true,
			
		},
	})
	// Фиксируем экран со слайдером
	// .to('.main__catalog', {
	// 	duration: 2,
	// 	scrollTrigger: {
	// 		trigger: '.about',
	// 		start: 'top 100%',
	// 		bottom: 'top 50%',
	// 		end: 'top 80%',
	// 		scrub: 3,
	// 		pin: '.main__catalog',
	// 		// markers: true,
	// 	},
		
	// })
	// Скрываем динамический радиус
	.to('.main__radius', {
		opacity: 0,
		scrollTrigger: {
			trigger: '.about',
			start: 'top 100%',
			toggleClass: 'stop',
			// bottom: 'top 50%',
			end: 'top 100%',
			scrub: true,
			// pin: '.main__catalog',
			// markers: true,
		},
	})
	// Показываем статичный радиус
	.to('.static__radius', {
		opacity: 1,
		scrollTrigger: {
			trigger: '.about',
			start: 'top 100%',
			toggleClass: 'stop',
			// bottom: 'top 50%',
			end: 'top 100%',
			scrub: true,
			// pin: '.main__catalog',
			// markers: true,
		},
	})
	// Фиксируем экран ABOUT
	.to('.about-first', {
		// marginBottom: '-50%',
		// background: '#000',
		duration: 2,
		scrollTrigger: {
			trigger: '.features',
			start: 'top 100%',
			// bottom: 'top 50%',
			// end: 'top 80%',
			scrub: true,
			pin: '.about-first',
			// markers: true,
		},
	})
	// .to('.about-second', {
	// 	duration: 2,
	// 	scrollTrigger: {
	// 		trigger: '.main-3',
	// 		start: 'top 100%',
	// 		bottom: 'top 50%',
	// 		end: 'top 80%',
	// 		scrub: true,
	// 		pin: '.about-second',
	// 		// markers: true,
	// 	}
	// })
	// .to('.about-three', {
	// 	duration: 2,
	// 	scrollTrigger: {
	// 		trigger: '.main-3',
	// 		start: 'top 100%',
	// 		bottom: 'top 50%',
	// 		end: 'top 20%',
	// 		scrub: true,
	// 		pin: '.about-three',
	// 		// markers: true,
	// 	},
	// 	// onComplete: () => {
	// 	// 	ScrollTrigger.refresh(true);
	// 	// },
	// 	// onStart: () => {
	// 	// 	ScrollTrigger.refresh(true);
	// 	// }
	// })
	
	// Увеличиваем шар на секцию ABOUT
	
		// .from('.main__radius__ball', {
		// 	opacity: 0,
		// 	top: 'calc(100% - 6.59722vw)',
		// 	left: 'calc(17.43056vw - 35px)',
		// 	transform: 'translate(0%, -50%)',
		// 	borderColor: '#ACB9BF',
		// 	width: 35,
		// 	height: 35,
		// })
		// .to('.main__radius__ball', {
		// 	opacity: 1,
		// 	top: '50%',
		// 	left: '50%',
		// 	transform: 'translate(-50%, -50%)',
		// 	borderColor: '#fff',
		// 	width: '40.83333vw', 
		// 	height: '41.11111vw', 
		// 	scrollTrigger: {
		// 		trigger: '.about',
		// 		start: 'top 50%',
		// 		end: '10%',
		// 		scrub: 1,
		// 		// pin: '.main__mini',
		// 		markers: true,
		// 	},
		// })
		// Перетаскиваем линию на секцию ABOUT
		// .from('.main__radius__line.horizont', {
		// 	top: 'calc(100% - 6.59722vw)',
		// 	backgroundColor: '#ACB9BF',
		// })
		// .to('.main__radius__line.horizont', {
		// 	top: '50%',
		// 	backgroundColor: '#fff',
		// 	scrollTrigger: {
		// 		trigger: '.about',
		// 		start: '10% bottom',
		// 		end: '10%',
		// 		scrub: 1,
		// 		// pin: '.main__mini',
		// 		// markers: true,
				
		// 	},
		// })
		
	.fromTo('.about__radius', {
		opacity: 0,
	}, {
		// top: '50%',
		// transform: 'translate(-50%, -50%)',
		opacity: 1,
		scrollTrigger: {
			trigger: '.about',
			start: 'top 20%',
			// bottom: 'top 50%',
			end: '63% 30%',
			scrub: true,
			// toggleActions: "play reset resume reset",
			// pin: '.about__radius',
			// markers: true,
		},
		onComplete: () => {
			// ScrollTrigger.refresh(true);
		}
	})
	// .fromTo('.about__radius__ball', {
	// 	width: 100,
	// 	height: 100,
	// }, {
	// 	width: '40.83333vw',
    // 	height: '41.11111vw',
	// 	// top: '50%',
	// 	// transform: 'translate(-50%, -50%)',
	// 	scrollTrigger: {
	// 		trigger: '.about',
	// 		start: 'top 20%',
	// 		// bottom: 'top 50%',
	// 		end: '63% 30%',
	// 		scrub: true,
	// 		// toggleActions: "play reset resume reset",
	// 		// pin: '.about__radius',
	// 		// markers: true,
	// 	},
	// 	onComplete: () => {
	// 		// ScrollTrigger.refresh(true);
	// 	}
	// })
	.fromTo('.about__radius__line.horizont', {
		width: 0,
	}, {
		width: '100%',
		scrollTrigger: {
			trigger: '.about',
			start: 'top 20%',
			// bottom: 'top 50%',
			// end: '63% 30%',
			scrub: true,
			// markers: true
		}
	})

	// // Появление элементов на секции ABOUT
	
	.fromTo('.about__list-1', {
		opacity: 0
	}, {
		opacity: 1,
		scrollTrigger: {
			trigger: '.about',
			// start: '10% bottom',
			// bottom: 'top 50%',
			// end: '10% bottom',
			// scrub: true,
			toggleActions: "play reset resume reset",
			// markers: true
		}
	})
	.fromTo('.about__radius', {
		opacity: 1,
	}, {
		// top: '50%',
		// transform: 'translate(-50%, -50%)',
		opacity: 0,
		scrollTrigger: {
			trigger: '.features',
			start: 'top center',
			// bottom: 'top 50%',
			// end: '63% 30%',
			// scrub: true,
			toggleActions: "play pause resume reset",
			// pin: '.about__radius',
			// markers: true,
		},
	})
	.to('.features__slider', {
		borderColor: '#ACB9BF',
		scrollTrigger: {
			trigger: '.features',
			start: 'top center',
			// bottom: 'top 50%',
			end: '50% 30%',
			scrub: true,
			// toggleActions: "play reset resume reset",
			// pin: '.about__radius',
			// markers: true,
		}
	})
	// .fromTo('.about__list-2', {
	// 	opacity: 0
	// }, {
	// 	opacity: 1,
	// 	scrollTrigger: {
	// 		trigger: '.about',
	// 		start: '50% bottom',
	// 		// bottom: 'top 50%',
	// 		end: 'bottom 50%',
	// 		// scrub: true,
	// 		toggleActions: "play reset resume reset",
	// 		markers: true
	// 	}
	// })
		
		// .to('.features', {
		// 	duration: 2,
		// 	scrollTrigger: {
		// 		trigger: '.main-3',
		// 		start: 'top 100%',
		// 		bottom: 'top 50%',
		// 		end: 'top 50%',
		// 		scrub: 3,
		// 		pin: '.features',
		// 		// markers: true,
		// 	},
		// })





	

}


export default gsapAnimate;