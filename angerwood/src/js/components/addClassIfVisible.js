export const addClassIfVisible = (element, elementVisible, classToAdd, threshold = 0.1) => {
	if (document.querySelector(element) && document.querySelector(`.${elementVisible}`)) {
	  const el = document.querySelector(element);
	  const elementVis = document.querySelectorAll(`.${elementVisible}`);

	  const options = {
		threshold: threshold,
	  };

	  const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
		  if (entry.target.classList.contains(elementVisible) && entry.isIntersecting) {
			el.classList.add(classToAdd);
		  } else {
			el.classList.remove(classToAdd);
		  }
		});
	  }, options);
	  elementVis.forEach(item  => {
		observer.observe(item);
	  })
	  
	}
  
}

// addClassIfVisible("element", "elementVisible", "classToAdd");