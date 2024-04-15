import { Splide } from '@splidejs/splide';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
export const mainBlock = () => {
	// const splide = new Splide( '.main__slider', {
  //       direction: 'ttb',
  //       height   : '100vh',
  //       wheel    : true,
  //       waitForTransition: true,
  //       wheelSleep: 1000,
  //       arrows: false,
  //       pagination: false,
  //       speed: 2000,
  //       lazyLoad: 'nearby',
  //       drag: false
  //   } )
      
  //   splide.mount()
    // let  countSrollSlide = 0
    // splide.on('moved' , () => {
    //   countSrollSlide++
    //   console.log(countSrollSlide);
    //   // ScrollTrigger.refresh(true)
    //   let a = document.querySelectorAll('.splide__slide')
    //   for (let i = 0; i <= a.length; i++) {
    //     if (a[i].classList.contains('is-active')) {
    //       a[i].closest('.splide').classList.add('points')
    //     } else {
    //       a[i].closest('.splide').classList.remove('points')
    //     }
    //   }
      
    // })
    // let radiusMain = document.querySelector('.main');
    // radiusMain.addEventListener('mousemove', (m) => {
    //   if (!radiusMain.classList.contains('active')) {
    //     let line = document.querySelector('.main__radius__line');
    //     let mouseX = (line.getBoundingClientRect().left);
    //     let mouseY = (line.getBoundingClientRect().top);
    //     let radianDegrees = Math.atan2(m.pageX - mouseX, m.pageY - mouseY);
    //     let rotationDegrees = (radianDegrees * (180/ Math.PI) * -1) + 180;
    //     if (rotationDegrees > 180) {
    //       rotationDegrees = 180
    //     }
    //     if (rotationDegrees < 90) {
    //       rotationDegrees = 90
    //     }
    //     line.style.transform = `translate(-50%, -50%) rotate(${rotationDegrees}deg)`;
    //     document.querySelector('.main__radius__deg span').textContent = Math.floor(rotationDegrees / 2)
    //   }
    // });
}