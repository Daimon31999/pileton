<template>
  <div class="carousel">
    <carousel class="" :navigationEnabled="true" :autoplay="true" :perPage="1">
      <slide>
        <img class="slide-img" src="./../../assets/img/slide1.jpg" alt="" />
      </slide>
      <slide>
        <img class="slide-img" src="./../../assets/img/slide2.jpg" alt="" />
      </slide>
      <slide>
        <img class="slide-img" src="./../../assets/img/slide3.jpg" alt="" />
      </slide>
      <slide>
        <img class="slide-img" src="./../../assets/img/slide4.jpg" alt="" />
      </slide>
      <slide>
        <img class="slide-img" src="./../../assets/img/slide5.jpg" alt="" />
      </slide>
      <slide>
        <img class="slide-img" src="./../../assets/img/slide6.jpg" alt="" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
}
</script>

<style>
.carousel img {
  margin: 0 auto;
}
.VueCarousel-pagination > div,
.carousel button:not(.VueCarousel-dot) {
  margin: 0 !important;
  padding: 0 !important;
}

button.VueCarousel-navigation-button {
  font-size: 30px !important;
  color: #2d8df0 !important;
  -webkit-text-fill-color: #2d8df0; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}

.VueCarousel-navigation-prev {
  left: 50px !important;
}
.VueCarousel-navigation-next {
  right: 50px !important;
}
</style>
