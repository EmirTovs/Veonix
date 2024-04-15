const scrollClass = () => {

    let scrollpos = window.scrollY

    const header = document.querySelector("header")
    const menu = document.querySelector(".modal-menu")
    const scrollChange = 1

    const add_class_on_scroll = () => {header.classList.add("fixed"), menu.classList.add("fixed")}
    const remove_class_on_scroll = () => {header.classList.remove("fixed"), menu.classList.remove("fixed")}

    if (scrollpos > 10) {
        add_class_on_scroll()
    }

    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;

        if (scrollpos >= scrollChange) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
    
    })


}


export default scrollClass;