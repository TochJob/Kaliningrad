$(document).ready(function(){

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });


   //burger

   $('.burger-btn').on('click', function () {
    $('.fa-bars').toggleClass('fas-hidden');
    $('.burger-btn .fa-times').toggleClass('fas-hidden');
    if ($('.burger-nav').css('right') == '0px') {
        $('.burger-nav').css({
            'right': '-100%'
        });
    } else {
        $('.burger-nav').css({
            'right': '0'
        });
    }
})

//burger end

// scrollto
      window.scrollto = function(destination, speed) {
        if (typeof speed == 'undefined') {
          speed = 800;
        }
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-60}, speed);
      };
      $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        scrollto(destination);
        return false;
      });
// end scrollto


    $(".pay-button").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.option-block__wrapper').on('click',function(){
      $(this).toggleClass('active')
      $(this).parent().toggleClass('active')
      console.log($(this))
      $(this).siblings(".option-hidden").slideToggle();

    })


    $('.more-link').on('click', function(event){
      event.preventDefault()
      $(this).prev('.hidden-el').toggleClass('hidden')
      if($(this).prev('.hidden-el').hasClass('hidden')){
        $(this).text('Ещё...')
      }else{
        $(this).text('Свернуть')
      }
    })


    $('.reviews__box').children().each(function(index, item){
      if(index>=2){
        $(this).fadeOut()
      }
    })

    $('.more-button-recviews').on('click', function(){
      $(this).toggleClass('open')
      if($(this).hasClass('open')){
        $(this).prev().find('.reviews__item').fadeIn()
        $(this).text('Меньше отзывов')
      }else{
        $(this).text('Больше отзывов')
        $('.reviews__box').children().each(function(index, item){
          if(index>=2){
            $(this).fadeOut()

          }
        })
      }

    })

    $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });

  $('.chat__link').on('click', function(event){
    event.preventDefault()
    $('.popup-form').fadeIn()
  })



  // Close Form
  $('.close-btn').on('click', function(){
    $('.popup').fadeOut()
  })

  $(".pay-button").on("click", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.minus').on('click', function(){
    $(this).next()[0].stepDown();
    $(this).next().trigger('change');
  });
  $('.plus').on('click', function(){
      $(this).prev()[0].stepUp();
      $(this).prev().trigger('change');
  });

  $('#product_price').on('change', function(){
      $(this).attr('value', Number($(this).val()))
  });

  $('.format-item__link').on('click',function(event){
    event.preventDefault()
  })

  if(window.matchMedia('(max-width: 576px)').matches){
    $('.price-block').after( $('.buy-block__button'))
  }



  // active format

  $('.format-item__link').hover(function(){
    $(this).siblings('.active-format-now').fadeIn(300)
  }, function(){
    $(this).siblings('.active-format-now').fadeOut(300)

  })



  $('.switch-btn').on('click', function(){
    $('.switch-btn').removeClass('active')
    $(this).addClass('active')
  })



  $(".chat").pin({
    minWidth: 1200
  })
  $(".chat").pin({
    containerSelector: ".container"
  })


});



  Fancybox.bind('[data-fancybox="gallery"]', {
    animated: false,
    showClass: false,
    hideClass: false,

    Toolbar: false,

    closeButton: "top",
    click: false,
    dragToClose: false,

    Carousel: {
      // Disable content slide animation
      friction: 0,

      // Disable touch guestures
      Panzoom: {
        touch: false,
      },

      Navigation: false,
    },

    Image: {
      // Disable animation from/to thumbnail on start/close
      zoom: false,

      // Disable zoom on scroll event
      wheel: false,

      // Disable zoom on image click
      click: false,

      // Fit image horizontally only
      fit: "contain-w",
    },

    // Center thumbnails only if draggable
    Thumbs: {
      minScreenHeight: 0,
      Carousel: {
        center: function () {
          return this.elemDimWidth > this.wrapDimWidth;
        },
      },
    },
  });