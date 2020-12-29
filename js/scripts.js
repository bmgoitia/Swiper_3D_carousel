
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      var name = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-name');
        console.log(name);
      return '<span class="' + className + '">' + name + '</span>'
    }
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

/* Replace images on resize */

/*$(document).ready(function() {
    var $window = $(window);
    var $pane = $('#pane1');
    var imgs = ["./img/pic_mov1.jpg", "./img/pic_mov2.jpg", "./img/pic_mov3.jpg"]
    var imgs2 = ["./img/pic1.jpg", "./img/pic2.jpg", "./img/pic3.jpg"]


    function checkWidth() {
        var windowsize = $window.width();
        console.log(windowsize)
        
          $(".swiper-slide img").each(function(i, el){
            if (windowsize < 550) {
              console.log("pantalla pequeña");
              $( this ).attr("src", imgs[i]);
            }else{
              console.log("pantalla grande")
              $( this ).attr("src", imgs2[i]);
            }
         });
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});*/