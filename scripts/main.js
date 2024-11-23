document.addEventListener('alpine:init', () => {
    Alpine.data('imageSlider', () => ({
        currentIndex: 1,
        images: [
            './img/slider/temparty1.webp',
            './img/slider/temparty2.webp',
            './img/slider/temparty3.webp',
            './img/slider/temparty4.webp',
            './img/slider/temparty5.webp',
            './img/slider/temparty6.webp',
            './img/slider/temparty7.webp'
        ],
        previous() {
            if (this.currentIndex > 1) {
                this.currentIndex = this.currentIndex - 1;
            }
        },
        forward() {
            if (this.currentIndex < this.images.length) {
                this.currentIndex = this.currentIndex + 1;
            }
        }
    }))
})

function navInfo() {
    informacoes.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
}

function initMobileMenu() {
  const burger = document.getElementById('navbar-burger');
  const menu = document.getElementById('main-nav');
  
  if (burger && menu) {
    burger.addEventListener('click', (e) => {
      e.preventDefault();
      menu.classList.toggle('hidden');
      burger.classList.toggle('is-active');
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
});
