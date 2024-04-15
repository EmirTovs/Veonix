document.addEventListener('DOMContentLoaded', () => {

    // scrollClass()
    modalShow()
    // Якорные ссылки
    const header = document.querySelector('.header');
    
    const topOffset = header.offsetHeight;
    const smoothScroll = new ScrollToAnchor({
        // offset: document.body.clientWidth <= 768 ? topOffset - 30 : topOffset - 40,
        offset: topOffset,
        duration: document.body.clientWidth <= 768 ? 2000 : 1000,
    });


    const burgerMenu = header.querySelector('.header__burger');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        header.classList.toggle('active');
    })

    const headerMenuItem = header.querySelectorAll('.header__menu a');

    headerMenuItem.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            header.classList.remove('active');
        })
    })


    
    const lazyLoad = new LazyLoad({
        elements_selector: '.lazy',
    })
    
    if (document.querySelector('#contacts__map')) initYMap()
    


    new WOW({
        animateClass: 'animate__animated',
    }).init();


    if (document.querySelector('[data-fancybox]')) {
        Fancybox.bind('[data-fancybox]', {
            // Your custom options for a specific gallery
        });
    }
    // Проверяем, была ли плашка уже показана
    if (!localStorage.getItem('notificationShown')) {
    // Создание элемента плашки
    const notification = document.createElement('div');
    notification.classList.add('cookies');
    notification.innerHTML = 
        `<p>
            Пользуясь нашим сайтом, вы соглашаетесь с тем, что <a href="#">мы используем cookies</a>
        </p>`;
  
    // Добавление кнопки "Хорошо" на плашку
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('btn');
    closeBtn.textContent = 'ОК';
    notification.appendChild(closeBtn);
  
    // Добавление плашки внизу экрана
    document.body.appendChild(notification);
  
    // Анимация появления плашки
    notification.style.transform = 'translate(-50%, 100%)';
    notification.style.opacity = '0';
  
    setTimeout(() => {
      notification.style.transform = 'translate(-50%, 0)';
      notification.style.opacity = '1';
    }, 1000);
  
    // Закрытие плашки по клику на кнопку "Хорошо"
    closeBtn.addEventListener('click', () => {
      notification.style.transform = 'translate(-50%, 100%)';
      notification.style.opacity = '0';
      localStorage.setItem('notificationShown', true);
    });
  }

    document.querySelectorAll('.form__check input').forEach(item => {
        if (!item.checked) {
        item.closest('form').querySelector('button[type="submit"]').setAttribute('disabled', 'disabled')
        }
        item.addEventListener('change', () => {
            if (!item.checked) {
                item.closest('form').querySelector('button[type="submit"]').setAttribute('disabled', 'disabled')
            } else {
                item.closest('form').querySelector('button[type="submit"]').removeAttribute('disabled')
            }
        })
    })

  $('form').on('submit', function(e){
    e.preventDefault();
    var arr = $(this).serialize();
    var form = $(this);
      $.ajax({
          url: "/assets/files/form.php",
          type: "POST",
          data: arr,
          beforeSend: function () {
            form.trigger("reset");
            $('[type="submit"]').prop("disabled", false);
          },
          success: function(data){
            e.target.closest('.modal').classList.remove('active')
           document.querySelector("#modal-success").classList.add('active')
          }
      });
  
  })
});