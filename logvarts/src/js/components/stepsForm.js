

const stepsForm = () => {
	
	if (!document.querySelector('.steps__form')) {
		return
	}

	const form = document.querySelector('.steps__form')
	const stepsTab = form.querySelectorAll('.steps__tab')
	const nextStep = form.querySelector('.steps__next')
	const prevStep = form.querySelector('.steps__prev')
	const formRadio = form.querySelectorAll('.form__radio')
	let countTab = 0;
	// Задаем первый шаг активным
	stepsTab.forEach((step, idx) => {
		if (idx === 0) {
			step.classList.add('active')
			form.classList.add('start')
		}
	})

	// Следующий шаг
	nextStep.addEventListener('click', (event) => {
		stepsTab[countTab].querySelectorAll('.form__radio input').forEach((input) => {
			if (input.checked) {
				if (!form.classList.contains('finish')) {
					event.preventDefault()
				} else {
					event.stopPropagation()
				}
				stepsTab.forEach((step) => step.classList.remove('active'))
				if (countTab < stepsTab.length - 1) {
					countTab++;
				} else {
					countTab = stepsTab.length - 1
				}
				form.classList.remove('start')
				stepsTab[countTab].classList.remove('active')
				stepsTab[countTab].classList.add('active')
				if (countTab === stepsTab.length - 1) {
					form.classList.add('finish')
					nextStep.textContent = 'Отправить'
				} 
			} else {
				event.preventDefault()
			}
		})

		
	})

	// Предыдущий шаг
	prevStep.addEventListener('click', (event) => {
		event.preventDefault()
		stepsTab.forEach((step) => step.classList.remove('active'))
		countTab--;
		form.classList.remove('finish')
		if (countTab < 0) {
			countTab++
		};
		if (countTab === 0) {
			form.classList.add('start')
		}
		stepsTab[countTab].classList.remove('active')
		stepsTab[countTab].classList.add('active')
		if (countTab !== stepsTab.length - 1) {
			form.classList.remove('finish')
			nextStep.textContent = 'Далее'
		} 
	})

	formRadio.forEach((radio) => {
		radio.addEventListener('click', (event) => {
			setTimeout(() => {
				stepsTab.forEach((step) => step.classList.remove('active'))
				if (countTab < stepsTab.length - 1) {
					countTab++;
				} else {
					countTab = stepsTab.length - 1
				}
				form.classList.remove('start')
				stepsTab[countTab].classList.remove('active')
				stepsTab[countTab].classList.add('active')
				if (countTab === stepsTab.length - 1) {
					form.classList.add('finish')
					nextStep.textContent = 'Отправить'
				} 
			}, 600)
		})
	})


}