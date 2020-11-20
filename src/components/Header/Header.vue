<template>
  <header>
    <nav class="flex items-center justify-between bg-white p-2">
      <div class="block">
        <button
          v-on:click="toggleHamburger"
          class="flex items-center px-3 py-2 rounded focus:outline-none"
        >
          <Hamburger :isActive="hamburgerIsOpen" />
        </button>
      </div>
      <img
        :src="logo"
        :class="hamburgerIsOpen ? 'hidden' : 'block'"
        class="w-40 h-12 mr-6 ml-3 "
        alt="logo"
      />
      <div class="w-full block flex-grow flex items-center w-auto">
        <div class="text-sm flex-grow hidden md:block">
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-blue-400 md:mr-2 lg:mr-4"
          >
            Концерты
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-blue-400 md:mr-2 lg:mr-4"
          >
            Шоу
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-blue-400 md:mr-2 lg:mr-4"
          >
            Театр
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-blue-400 md:mr-2 lg:mr-4"
          >
            Выставки
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-blue-400 md:mr-2 lg:mr-4"
          >
            Детям
          </a>
          <a
            href="#"
            class="block mt-0 inline-block text-black hover:text-blue-400 md:mr-2 lg:mr-4"
          >
            Еще
          </a>
        </div>
        <div
          :class="hamburgerIsOpen ? 'hidden' : 'block'"
          class="md:hidden text-sm font-semibold text-pileton-blue"
        >
          Категории
        </div>
      </div>
      <div :class="hamburgerIsOpen ? 'hidden' : 'block'" class="nav-right">
        <div class="search text-pileton-blue border border-pileton-blue ">
          <font-awesome-icon class="mr-4" :icon="['far', 'search']" />
          <span>Поиск</span>
        </div>
      </div>
    </nav>
    <div
      :class="hamburgerIsOpen ? 'toggle-mobile-nav ' : 'block'"
      class="mobile-nav absolute top-4 bg-white text-black w-full h-full z-10 md:hidden px-8 py-4"
    >
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
  </header>
</template>

<script>
import Hamburger from '../Header/Hamburger.vue'
import logo from '../../assets/img/logo.png'
export default {
  components: { Hamburger },
  name: 'Header',
  data: () => ({
    hamburgerIsOpen: false,
    logo,
  }),
  methods: {
    toggleHamburger: function() {
      this.hamburgerIsOpen = !this.hamburgerIsOpen
      this.$emit('openModal', {
        hamburgerIsOpen: this.hamburgerIsOpen,
      })
    },
  },
}
</script>

<style>
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
  left: -100vw;
  transition: all 0.3s;
  overflow-y: auto;
}

.toggle-mobile-nav {
  transform: translateX(100vw);
}

.mobile-nav a {
  display: block;
}
</style>
