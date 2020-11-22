<template>
  <div class="carousel mt-24">
    <carousel id="header-carousel" :autoplay="false" :perPage="1">
      <slide class="flex justify-center">
        <PiletonSlide
          imgName="slide2.jpg"
          when="28-29 Ноября"
          where="Театр Geneza Art, 19:00"
          priceStart="20"
          priceEnd="50"
        />
      </slide>
      <slide class="flex justify-center">
        <PiletonSlide
          imgName="slide1.jpg"
          when="28-29 Ноября"
          where="Театр Geneza Art, 19:00"
          priceStart="20"
          priceEnd="50"
        />
      </slide>
      <slide class="flex justify-center">
        <PiletonSlide
          imgName="slide3.jpg"
          when="28-29 Ноября"
          where="Театр Geneza Art, 19:00"
          priceStart="20"
          priceEnd="50"
        />
      </slide>
      <slide class="flex justify-center">
        <PiletonSlide
          imgName="slide4.jpg"
          when="28-29 Ноября"
          where="Театр Geneza Art, 19:00"
          priceStart="20"
          priceEnd="50"
        />
      </slide>
      <slide class="flex justify-center">
        <PiletonSlide
          imgName="slide5.jpg"
          when="28-29 Ноября"
          where="Театр Geneza Art, 19:00"
          priceStart="20"
          priceEnd="50"
        />
      </slide>
      <slide class="flex justify-center">
        <PiletonSlide
          imgName="slide6.jpg"
          when="28-29 Ноября"
          where="Театр Geneza Art, 19:00"
          priceStart="20"
          priceEnd="50"
        />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import PiletonSlide from './PiletonSlide'

export default {
  components: {
    Carousel,
    PiletonSlide,
    Slide,
  },
}
</script>

<style>
/* .carousel img {
  margin: 0 auto;
} */
/* .VueCarousel-pagination > div,
.carousel button:not(.VueCarousel-dot) {
  margin: 0 !important;
  padding: 0 !important;
} */

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
