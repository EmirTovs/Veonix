
const accordion = document.querySelectorAll('.accordion')

const accordionShow = () => {
    if (accordion) {
        function accordionsClose() {
            accordion.forEach(accordion => {
                accordion.querySelectorAll('.accordion-item').forEach(item => {
                    item.classList.remove('active')
                    item.style.maxHeight = item.querySelector('.accordion-title').scrollHeight + 'px'
                })
            })
        }
        
        accordion.forEach(accordion => {
            accordion.querySelectorAll('.accordion-item').forEach(item => {
                item.style.maxHeight = item.querySelector('.accordion-title').scrollHeight + 'px'
                item.addEventListener('click', (event)=> {
                    if (!event.target.closest('.accordion-item.active')) {  
                        accordionsClose()
                    }
                    if (event.target.classList.contains('accordion-title')) {
                        item.classList.toggle('active')
                        if(item.classList.contains('active')) {
                            item.style.maxHeight = item.scrollHeight + 'px'
                        } else {
                            item.style.maxHeight = item.querySelector('.accordion-title').scrollHeight + 'px'
                        }
                    }
                })
            })
        })
    }
}
