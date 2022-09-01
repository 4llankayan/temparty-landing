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

document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var $target = document.getElementById('main-nav');
        $target.classList.toggle('hidden');
      });
    });
  }
});

function navInfo() {
    informacoes.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
}
