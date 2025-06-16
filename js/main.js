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
        $('.account-menu').removeClass('show');


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
        let tabID = $(this).data('tab');
        let menu = $(this).closest('.categories-menu');

        menu.find('.categories-menu__leftcat li').removeClass('active');
        $(this).addClass('active');

        menu.find('.categories-menu__tab').removeClass('active').hide();

        menu.find('.categories-menu__tab[data-tab="' + tabID + '"]').fadeIn(300).addClass('active');
    });

    // flip text
    var swiper = new Swiper(".fliptext", {
        direction: "vertical",
        loop: true,
        simulateTouch: false,
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
        // $('.overlay').toggleClass('show');
        $('header.header nav').slideToggle();
        $('.account-menu').removeClass('show');

    })

    $('.burger').click(function () {
        $('body').toggleClass('hidden');
        $('.mobilemenu').toggleClass('show');
        window.scrollTo(0, 0);
    })



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

    if ($('#review').length) {
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
    }

    // quote request
    $('.areas-add').on('click', function () {
        let index = $('.reqquote__area').length + 1; // Визначаємо новий індекс

        let newBlock = `
            <div class="reqquote__area">
                <div class="reqquote__item">
                    <span>${index}</span>
                </div>
                <div class="reqquote__manufacturer">
                    <input type="text">
                </div>
                <div class="reqquote__model">
                    <input type="text">
                </div>
                <div class="reqquote__descr">
                    <input type="text">
                </div>
                <div class="reqquote__finish">
                    <input type="text">
                </div>
                <div class="reqquote__qty">
                    <div class="selectwrapper">
                        <select name="" id="sl${index}" class="styledselect" data-placeholder="Please select">
                            <option value="0">1</option>
                            <option value="1">2</option>
                            <option value="2">3</option>
                        </select>
                    </div>
                </div>
            </div>
        `;

        $('.reqquote__areasgroup').append(newBlock);

        // Ініціалізуємо select2 для нового select, якщо існують селекти
        if ($('select').length) {
            $('.selectwrapper .styledselect').select2({
                placeholder: "",
                minimumResultsForSearch: Infinity,
            });
        }
    });

    $('.clearform').on('click', function () {
        $('input[type="text"], input[type="email"], input[type="number"], textarea').val('');
        $('.styledselect').each(function () {
            $(this).val($(this).find('option:first').val()).trigger('change');
        });
    });

    // header search
    const input = document.querySelector('.header__search input');
    const dropdown = document.querySelector('.search-dropdown');
    const form = document.querySelector('.header__search');

    function toggleDropdown() {
        if (input.value.trim() !== '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    }

    input.addEventListener('input', toggleDropdown);

    input.addEventListener('focus', toggleDropdown);

    document.addEventListener('click', function (e) {
        if (!form.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });


    // cart page
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // CHECKOUT PAGE
    document.querySelectorAll('input[type="radio"][name="payment"]').forEach(radio => {
        radio.addEventListener('change', function () {
            document.querySelectorAll('input[type="radio"][name="payment"]').forEach(r => {
                const box = r.closest('.ps-row');
                if (box) box.classList.remove('active');
            });

            const selectedBox = this.closest('.ps-row');
            if (selectedBox) selectedBox.classList.add('active');
        });
    });

    // card number
    const input1 = document.getElementById('cardnum');
    if (input1) {
        input1.addEventListener('input', function (e) {
            let value = e.target.value;
            value = value.replace(/\D/g, '');
            value = value.slice(0, 16);

            let formatted = '';
            for (let i = 0; i < value.length; i++) {
                if (i > 0 && i % 4 === 0) {
                    formatted += ' ';
                }
                formatted += value[i];
            }

            e.target.value = formatted;
        });
    }

    // card date
    const expiryInput = document.getElementById('expiry-input');
    if (expiryInput) {
        expiryInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 4) value = value.slice(0, 4);

            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
            }

            e.target.value = value;
        });
    }

    // saved adress

    const addressRadios = document.querySelectorAll('input[name="adress"]');
    const chooseAdr = document.querySelector('.chooseadr');

    addressRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (document.getElementById('adress2').checked) {
                chooseAdr.classList.remove('hide');
            } else {
                chooseAdr.classList.add('hide');
            }
        });
    });

    // steps
    document.querySelectorAll('.checkoutsect').forEach((section, index) => {
        if (index < 2) {
            section.classList.add('reached');
        }
    });

    const continueButtons = document.querySelectorAll('.checkout-continue');

    continueButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const currentSection = button.closest('.checkoutsect');
            const allSections = document.querySelectorAll('.checkoutsect');
            let showNext = false;

            allSections.forEach(function (section) {
                section.classList.add('hide');

                if (section === currentSection) {
                    showNext = true;
                } else if (showNext) {
                    section.classList.remove('hide');
                    section.classList.add('reached');
                    showNext = false;
                }
            });
        });
    });


    $('.togglebtn button').click(function (e) {
        e.preventDefault();
        const section = $(this).closest('.checkoutsect');

        if (section.hasClass('reached')) {
            section.toggleClass('hide');
        }
    });



    const allSections = document.querySelectorAll('.checkoutsect');

    function openSectionById(id, skipSection = null) {
        allSections.forEach(section => {
            if (section !== skipSection) {
                section.classList.add('hide');
            }
        });

        const target = document.getElementById(id);
        if (target) {
            target.classList.remove('hide');
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const editLinks = document.querySelectorAll('[data-target]');

    editLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.dataset.target;
            const parentSection = this.closest('.checkoutsect');
            openSectionById(targetId, parentSection);
        });
    });





    // header - account dropdown
    $('.headerr__acc').click(function (e) {
        e.preventDefault();
        $('.account-menu').toggleClass('show');

        if ($('.account-menu.show').length > 0) {
            if (!$('.overlay').hasClass('show')) {
                $('.overlay').addClass('show');
            }
        } else {
            $('.overlay').removeClass('show');
        }

        $('.overlay').removeClass('burger-opened');
        $('.sbmenu').removeClass('show');
        $('.header__nav li a').removeClass('active');


        if ($(window).width() < 1200) {
            $('.header.header nav').slideUp();
            $('.burger').removeClass('on');
        }

        if ($(window).width() < 768) {
            $('.header__search').fadeOut();
        }

    })

    $('.overlay').click(function () {
        $(this).removeClass('show');
        $('.account-menu').removeClass('show');
        $('.sbmenu').removeClass('show');
        $('.header__nav li a').removeClass('active');

        if ($(window).width() < 1200) {
            $('.header.header nav').slideUp();
            $('.burger').removeClass('on');
        }
    })

    $('.burger').click(function () {
        const $overlay = $('.overlay');

        if (!$overlay.hasClass('burger-opened')) {
            $('.account-menu').removeClass('show');

            $overlay.addClass('show burger-opened');
        } else {
            $overlay.removeClass('show burger-opened');
        }

        $('.header__search').fadeOut();
    });

    $('.searchbtn-mob').click(function () {
        $('.header__search').fadeToggle();
        $('.overlay').removeClass('show burger-opened');
        $('.account-menu').removeClass('show');

        if ($(window).width() < 768) {
            $('.header.header nav').slideUp();
            $('.burger').removeClass('on');
        }

    });

    // Search results - slider
    var swiper = new Swiper(".popularcat", {
        // slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        speed: 700,
        navigation: {
            nextEl: ".popularcat-arrows .swiper-button-next",
            prevEl: ".popularcat-arrows .swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            450: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },


    });

})


