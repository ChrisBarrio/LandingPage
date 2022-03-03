const btn_menu = document.querySelector('.btn_menu')
const nav_bar = document.querySelector('.nav_bar')

btn_menu.addEventListener('click',()=>{
    nav_bar.classList.toggle('active')
})

// close de main when scroll

window.onscroll = () =>{
    nav_bar.classList.remove('active');
}


//-------carrousel--------

var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    });