<template>
  <header class="">
    <div
      class="overlay"
      :class="hamburgerIsOpen ? 'hidden md:block' : 'hidden'"
    ></div>

    <nav
      class="fixed top-0 z-50 w-full flex items-center justify-between bg-white p-2"
    >
      <div class="block z-50">
        <button
          v-on:click="toggleHamburger"
          class="flex items-center px-3 py-2 rounded focus:outline-none"
        >
          <Hamburger :isActive="hamburgerIsOpen" />
        </button>
      </div>
      <img
        :src="currentLogo"
        :class="[
          hamburgerIsOpen ? 'hidden md:block' : 'block',
          windowWidth <= 768 ? 'block w-12 mr-4' : 'w-40 h-12 mr-6 ml-3',
        ]"
        class=" "
        alt="logo"
      />
      <div class="w-full block flex-grow flex items-center w-auto">
        <div class="header-links flex-grow hidden md:block">
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-pileton-blue md:mr-2 lg:mr-4"
          >
            Концерты
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-pileton-blue md:mr-2 lg:mr-4"
          >
            Шоу
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-pileton-blue md:mr-2 lg:mr-4"
          >
            Театр
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-pileton-blue md:mr-2 lg:mr-4"
          >
            Выставки
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-pileton-blue md:mr-2 lg:mr-4"
          >
            Детям
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-pileton-blue md:mr-2 lg:mr-4"
          >
            Еще
          </a>
        </div>
        <div
          :class="hamburgerIsOpen ? 'hidden' : 'block'"
          class="md:hidden text-sm font-semibold text-pileton-blue"
          id="mobile-categories"
        >
          Категории
        </div>
      </div>
      <div
        :class="hamburgerIsOpen ? 'hidden lg:block' : 'block'"
        class="nav-right mr-6"
      >
        <div
          class="search text-pileton-blue border border-pileton-blue hover:border-gray-800 hover:text-gray-800 "
        >
          <font-awesome-icon class="sm:mr-4" :icon="['far', 'search']" />
          <span class="hidden sm:inline">Поиск</span>
        </div>
      </div>
    </nav>
    <div
      :class="
        hamburgerIsOpen
          ? 'toggle-mobile-nav md:toggle-desktop-nav'
          : 'mobile-nav'
      "
      class="mobile-nav fixed top-0 text-black w-full h-screen z-10 px-8 py-4
      "
    >
      <div class="absolute top-0 left-0 bg-white md:w-84 pt-20 pb-24">
        <a href="#">Отмены и переносы</a>
        <a href="#">Условия возврата</a>
        <a href="#">Артисты</a>
        <a href="#">Площадка</a>
        <br />
        <a href="#">О компании</a>
        <a href="#">Контакты</a>
        <a href="#">Кассы</a>
        <a href="#">Реквизиты</a>
        <a href="#">Способы оплаты</a>
        <a href="#">Электронный билет</a>
        <a href="#">Публичная оферта</a>
        <a href="#">Политика конфиденциальности</a>
        <br />
        <a href="#">Подарочные сертификаты</a>
        <a href="#">Промокоды</a>
        <a href="#">Банеры</a>
        <br />
        <a href="#">Корпоративным клиентам</a>
        <a href="#">ЛК органицатора</a>
        <a href="#">Партнерская программа</a>
      </div>
    </div>
  </header>
</template>

<script>
import Hamburger from '../Header/Hamburger.vue'
import logo from '../../assets/img/logo.png'
import logoMobile from '../../assets/img/logo-mobile.png'

export default {
  components: { Hamburger },
  name: 'Header',
  data: () => ({
    hamburgerIsOpen: false,
    logo,
    logoMobile,
    windowWidth: window.innerWidth,
    currentLogo: window.innerWidth < 768 ? logoMobile : logo,
  }),
  watch: {
    // whenever active changes, this function will run
    hamburgerIsOpen: function() {
      document.body.style.overflow = this.hamburgerIsOpen ? 'hidden' : ''
    },

    windowWidth() {
      if (this.windowWidth < 768) {
        this.currentLogo = logoMobile
      } else {
        this.currentLogo = logo
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  methods: {
    toggleHamburger: function() {
      this.hamburgerIsOpen = !this.hamburgerIsOpen
      this.$emit('openModal', {
        hamburgerIsOpen: this.hamburgerIsOpen,
      })
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style>
.header-links {
  font-size: 15px;
}

#mobile-categories {
  font-size: 15px;
}

.search {
  /* @apply bg-blue-300 rounded-lg;
  width: 150px;
  height: 44px; */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 2 150px;
  flex: 1 2 150px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 0;
  max-width: 150px;
  height: 44px;
  margin-left: 30px;
  padding: 0 18px;
  border-radius: 10px;
  cursor: pointer;
}

.mobile-nav {
  display: block;
  left: -100vw;
  transition: all 0.3s;
  overflow-y: auto;
}

.toggle-mobile-nav {
  transform: translateX(100vw);
}

.mobile-nav a {
  display: block;
  font-size: 15px;
  @apply pl-6 text-pileton-blue my-2;
}

.mobile-nav a:hover {
  @apply bg-gray-200;
}

.overlay {
  position: fixed;
  transition-duration: 0s;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}
</style>
