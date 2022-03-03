const btn_menu = document.querySelector('.btn_menu')
const nav_bar = document.querySelector('.nav_bar')

btn_menu.addEventListener('click',()=>{
    nav_bar.classList.toggle('active')
})

// close de main when scroll

window.onscroll = () =>{
    nav_bar.classList.remove('active');
}

//---- scroll suave en ancla

const links = document.querySelectorAll(".nav_bar ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
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