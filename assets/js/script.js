
let moraSwiper = new Swiper(".slider-mora", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".mora-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".mora-button-next",
        prevEl: ".mora-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    }
});

let diodeSwiper = new Swiper(".slider-diode", {
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".diode-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".diode-button-next",
        prevEl: ".diode-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    }
});





let mastSwiper = new Swiper(".masterpiece-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    breakpoints: {

        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
    pagination: {
        el: ".mast-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".mast-button-next",
        prevEl: ".mast-button-prev",
    },
});


let lessSwiper = new Swiper(".more-less-slider", {
    slidesPerView: 1,
    spaceBetween: 14,
    pagination: {
        el: ".more-less-pagination",
        clickable: true,
    }
});




$('.poss-mora').on('click', function () {
    $('.poss-diode').removeClass('poss-mora-active');
    $(this).addClass('poss-mora-active');
    $('.poss-slider-mora').addClass('slider-mora-active');
    $('.poss-slider-diode').removeClass('slider-mora-active');
})

$('.poss-diode').on('click', function () {
    $('.poss-mora').removeClass('poss-mora-active');
    $(this).addClass('poss-mora-active');
    $('.poss-slider-mora').removeClass('slider-mora-active');
    $('.poss-slider-diode').addClass('slider-mora-active');
})







$(document).ready(function () {
    $('.thicker-name').on('click', function () {
        $('.thicker-name').removeClass('thicker-name-act');
        $('.thicker-data').removeClass('active-data');

        $(this).addClass('thicker-name-act');

        const target = $(this).data('target');
        $('.' + target).addClass('active-data');
    });
});




let powersSwiper = new Swiper(".powers-slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    pagination: {
        el: ".powers-pagination",
        clickable: true,
    },
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '767': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    },
});







$('.open_modal').on('click', function () {
    $('body').addClass('body-fixed')

    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn();
});

$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out');

    $('body').removeClass('body-fixed')

    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut();
            }, 100);

            $('body').removeClass('body-fixed')

        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut();
            }, 100);
            $('body').removeClass('body-fixed')

        }


    })
});



const names = document.querySelectorAll('.powerful-name');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    names.forEach((el, i) => {
        const min = i * windowHeight;
        const max = (i + 1) * windowHeight;

        if (scrollTop >= min && scrollTop < max) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
});


$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});





let smSwiper = new Swiper(".slider-sm-mora", {
    spaceBetween: 16,
    slidesPerView: 8,
    watchSlidesProgress: true,
    direction: "vertical",
    breakpoints: {
        '1028': {
            slidesPerView: 8,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 8,
            slidesPerGroup: 1,
            spaceBetween: 16,
            direction: "horizontal",

        },
        '570': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 16,
            direction: "horizontal",

        },
        '320': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 16,
            direction: "horizontal",

        },
    },
});
let bigSwiper2 = new Swiper(".slider-big-mora", {
    spaceBetween: 10,
    mousewheel: true,
    direction: "vertical",
    slidesPerView: 1,
    thumbs: {
        swiper: smSwiper,
    },
});



let smSwiperTwo = new Swiper(".slider-sm-mora-two", {
    spaceBetween: 16,
    slidesPerView: 8,
    watchSlidesProgress: true,
    direction: "vertical",
    breakpoints: {
        '1028': {
            slidesPerView: 8,
            slidesPerGroup: 1,
            spaceBetween: 16,
        },
        '767': {
            slidesPerView: 8,
            slidesPerGroup: 1,
            spaceBetween: 16,
            direction: "horizontal",

        },
        '570': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 16,
            direction: "horizontal",

        },
        '320': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 16,
            direction: "horizontal",

        },
    },
});
let bigSwiper2Two = new Swiper(".slider-big-mora-two", {
    spaceBetween: 10,
    mousewheel: true,
    direction: "vertical",
    slidesPerView: 1,
    thumbs: {
        swiper: smSwiperTwo,
    },
});

