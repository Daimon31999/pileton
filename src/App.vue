<template>
  <div id="app">
    <Header @openModal="onOpenModal" />
    <div :class="modalIsOpen ? 'hidden md:block' : 'block'">
      <Carousel />
      <div class="flex mt-10 justify-between mx-8">
        <Cards />
        <SideBarFilter />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'
import Cards from './components/Cards/Cards'
import SideBarFilter from './components/SideBarFilter/SideBarFilter'

export default {
  name: 'App',
  components: { Header, Carousel, Cards, SideBarFilter },
  data: () => ({
    modalIsOpen: false,
  }),
  methods: {
    onOpenModal(data) {
      this.modalIsOpen = data.hamburgerIsOpen
    },
  },
}
</script>
<style>
#app {
  font-family: 'Helvetica Neue';
}

#app button:focus {
  outline: 0;
}
</style>
