$(".wrapper").addClass("loaded");

$(".header-menu__icon").click(function (e) {
  $(this).toggleClass("active");
  $(".header-menu").toggleClass("active");
  $("body").toggleClass("lock");
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

let tabBtn = document.querySelectorAll('.tab__navitem');
let tabBody = document.querySelectorAll('.tab__item')
tabBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    tabBtn.forEach(item => {
      item.classList.remove('active')
    })
    tabBody.forEach(item => {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
    let target = e.target.getAttribute('data-tab')
    tabBody[target].classList.add('active')
  })
})

$(window).resize(function (e) {
  adaptive_function()
})

const adaptive_header = (w, h) => {
  let headerMenu = $('.header-menu')
  let headerLang = $('.header-top-lang')
  if (w < 767) {
    if (!headerLang.hasClass('done')) {
      headerLang.addClass('done').appendTo(headerMenu)
    } else {
      if (headerLang.hasClass('done')) {
        headerLang.removeClass('done').prependTo($('.header-top'))
      }
    }
  }
  if (w < 767) {
    if (!$('.header-bottom-menu').hasClass('done')) {
      $('.header-bottom-menu').addClass('done').appendTo(headerMenu)
    } else {
      $.each($('.header-bottom-menu'), function (index, val) {
        if ($(this).hasClass('header-bottom-menu_right')) {
          if ($(this).hasClass('done')) {
            $(this).removeClass('done').prependTo($('.header-bottom__col').eq(2))
          }
        } else {
          if ($(this).hasClass('done')) {
            $(this).removeClass('done').prependTo($('.header-bottom__col').eq(0))
          }
        }
      })
    }
  }
}

const adaptive_function = () => {
  let w = $(window).outerWidth()
  let h = $(window).outerHeight()
  adaptive_header(w, h)
}
adaptive_function()