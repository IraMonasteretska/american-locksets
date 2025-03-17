$(document).ready(function () {

    $('.cmlist-item .more').click(function () {
        let $this = $(this);
        let $ul = $this.prev('ul');

        $ul.toggleClass('show');

        let newText = $ul.hasClass('show') ? "Show less" : "View more";
        $this.find('i').text(newText);
    });

    $('.header__nav li a').click(function (e) {
        e.preventDefault();

        let $this = $(this);
        let $menu = $this.next('.sbmenu');

        $this.toggleClass('active');
        $menu.toggleClass('show');

        $('.sbmenu').not($menu).removeClass('show');
        $('.header__nav li a').not($this).removeClass('active');


        if ($(window).width() > 1199) {
            if ($('.sbmenu.show').length > 0) {
                if (!$('.overlay').hasClass('show')) {
                    $('.overlay').addClass('show');
                }
            } else {
                $('.overlay').removeClass('show');
            }
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

    // burger
    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('.adaptmenu').toggleClass('show');
        $('.header__bottsect').toggleClass('open');
        $('.overlay').toggleClass('show');
        $('header.header nav').slideToggle();
    })

    $('.burger').click(function () {
        $('body').toggleClass('hidden');
        $('.mobilemenu').toggleClass('show');
        window.scrollTo(0, 0);
    })

    $('.searchbtn-mob').click(function () {
        $('.header__search').fadeToggle();
    });

    // // sign tabs
    // const tabs = $(".sign__tabs button");
    // const tabContents = $(".sign__tab");

    // // Активуємо перший таб і його вміст за замовчуванням
    // tabs.first().addClass("active");
    // tabContents.hide().first().show();

    // tabs.click(function () {
    //     let index = $(this).parent().index(); // Отримуємо індекс кнопки

    //     tabs.removeClass("active");
    //     tabContents.hide();

    //     $(this).addClass("active");
    //     tabContents.eq(index).show();
    // });

    // next step
    $('.signnext').click(function (e) {
        e.preventDefault();
        $(this).parents('.signstep').hide();
        $(this).parents('.signstep').next('.signstep').show();
    })

    $('.signback').click(function (e) {
        e.preventDefault();
        $(this).parents('.signstep').hide();
        $(this).parents('.signstep').prev('.signstep').show();
    })

    // style select
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "",
            minimumResultsForSearch: Infinity,
            dropdownParent: $('.selectwrapper')
        });

        // $('.styledselectmodal').select2({
        //     placeholder: "",
        //     minimumResultsForSearch: Infinity,
        //     dropdownParent: $('.modal')
        // });


    }



})