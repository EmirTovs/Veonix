const scrollClass = () => {
    const marginTopPX = (mr) => {
        let a = window.innerWidth > 680 ? 1920 / mr : 680 / mr
        return  (100 / a) * (window.innerWidth / 100)
    }
    // console.log(marginTopPX(80));
    let scrollpos = window.scrollY

    const header = document.querySelector("header")
    let scrollChange = window.innerWidth > 680 ? marginTopPX(60) : marginTopPX(30)

    const add_class_on_scroll = () => header.classList.add("fixed")
    const remove_class_on_scroll = () => header.classList.remove("fixed")

    if (scrollpos > 10) {
        add_class_on_scroll()
    }
    window.addEventListener('resize', () => {
        scrollChange = window.innerWidth > 680 ? marginTopPX(60) : marginTopPX(30)
    })
    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;

        if (scrollpos >= scrollChange) { add_class_on_scroll() }
        else { remove_class_on_scroll() }
    
    })


}


export default scrollClass;