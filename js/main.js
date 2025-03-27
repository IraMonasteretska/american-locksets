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

    // styled select
    if ($('select').length) {
        $('.signsection .styledselect').select2({
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


    // product page
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        speed: 700,
        breakpoints: {
            768: {
                slidesPerView: 5,
            },
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 12,
        speed: 700,
        navigation: {
            nextEl: ".swiper-button-next.prarr",
            prevEl: ".swiper-button-prev.prarr",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    // tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // styled selects
    if ($('select').length) {
        $('.selectwrapper .styledselect').select2({
            placeholder: "",
            minimumResultsForSearch: Infinity,
        });
    }

    var swiper = new Swiper(".productsslider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 700,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        },
    });

    var swiper = new Swiper(".reviews-slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 700,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".slider-arrowstop .swiper-button-next",
            prevEl: ".slider-arrowstop .swiper-button-prev",
        },
        breakpoints: {

            992: {
                slidesPerView: 2,
            },

        },
    });

    $('.addproductbox__btn .cartbtn').click(function () {
        $(this).toggleClass('active');
    });

    // write review
    $('.write-review__btn').click(function (e) {
        e.preventDefault();
        $('.product-reviewssect').addClass('hide');
        $('.write-review').removeClass('hide');

    });

    document.querySelectorAll('.chooserating input[type="radio"]').forEach((radio, index, radios) => {
        radio.addEventListener('change', () => {
            radios.forEach((r, i) => {
                r.parentElement.classList.toggle('filled', i <= index);
            });
        });
    });

    // remove disabled
    const textarea = document.getElementById("review");
    const ratingInputs = document.querySelectorAll(".chooserating__star input");
    const submitButton = document.querySelector(".leavereview");

    function checkForm() {
        const isTextFilled = textarea.value.trim().length > 0;
        const isRatingSelected = [...ratingInputs].some(input => input.checked);

        if (isTextFilled && isRatingSelected) {
            submitButton.classList.remove("disabled");
        } else {
            submitButton.classList.add("disabled");
        }
    }

    textarea.addEventListener("input", checkForm);
    ratingInputs.forEach(input => input.addEventListener("change", checkForm));

    // review ty
    $('.leavereview').click(function () {
        $('.write-review').addClass('hide');
        $('.review-ty').removeClass('hide');
    })

    // open tab btn
    const tabOpenBtn = document.querySelector(".tabopenbtn"); 
    const reviewTab = document.querySelector("#myTab button[data-bs-target='#review-tab-pane']");
    const tabContainer = document.getElementById("myTab"); 
    const moreDetailsBtn = document.querySelector(".more-prdetails"); 
    const detailsTab = document.getElementById("details-tab"); 

    if (tabOpenBtn && reviewTab && tabContainer) {
        tabOpenBtn.addEventListener("click", function (event) {
            event.preventDefault(); 

            const tab = new bootstrap.Tab(reviewTab);
            tab.show();

            tabContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    if (moreDetailsBtn && detailsTab && tabContainer) {
        moreDetailsBtn.addEventListener("click", function (event) {
            event.preventDefault(); 

            tabContainer.scrollIntoView({ behavior: "smooth", block: "start" });

            const tab = new bootstrap.Tab(detailsTab);
            setTimeout(() => tab.show(), 300); 
        });
    }


})