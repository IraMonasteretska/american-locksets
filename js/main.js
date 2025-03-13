$(document).ready(function () {

    $('.cmlist-item .more').click(function () {
        let $this = $(this);
        let $ul = $this.prev('ul');

        $ul.toggleClass('show');

        let newText = $ul.hasClass('show') ? "Show less" : "View more";
        $this.find('i').text(newText);
    });


    $('.header__nav li.category').click(function () {
        $(this).toggleClass('active');
        $('.categories-menu').toggleClass('show');

        if ($('.overlay').length === 0) {
            $('body').append('<div class="overlay"></div>'); // Додаємо затемнення
            $('.overlay').hide().fadeIn(300); // Плавне появлення
        } else {
            $('.overlay').fadeOut(300, function () {
                $(this).remove(); // Видаляємо після завершення анімації
            });
        }
    });

    // menu tabs
    $('.categories-menu__leftcat li').click(function () {
        let tabID = $(this).data('tab'); // Отримуємо значення data-tab
        let menu = $(this).closest('.categories-menu'); // Знаходимо відповідне меню

        // Знімаємо активний клас у всіх li та додаємо тільки обраному
        menu.find('.categories-menu__leftcat li').removeClass('active');
        $(this).addClass('active');

        // Ховаємо всі вкладки в цьому меню
        menu.find('.categories-menu__tab').removeClass('active').hide();

        // Показуємо тільки потрібний таб
        menu.find('.categories-menu__tab[data-tab="' + tabID + '"]').fadeIn(300).addClass('active');
    });

    // flip text
    var swiper = new Swiper(".fliptext", {
        direction: "vertical",
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            speed: 500,
        },
    });
})