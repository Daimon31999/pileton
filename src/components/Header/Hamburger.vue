<template>
  <div class="wrapper">
    <div
      class="flex justify-center hamburger hamburger--squeeze js-hamburger"
      :class="{ 'is-active': isActive }"
    >
      <div class="hamburger-box">
        <div class="hamburger-inner "></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: ['isActive'],
}
</script>

<style scoped>
.wrapper {
  width: 50px;
  margin: 0 auto;
  text-align: center;
}

.hamburger {
  padding: 2px 2px;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}

.hamburger-box {
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 30px;
  height: 4px;
  background: #2d8df0;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

/* .hamburger-inner.bg-white,
.hamburger-inner.bg-white::before,
.hamburger-inner.bg-white::after {
  width: 30px;
  height: 4px;
  border-radius: 4px;
  background-color: white;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
} */

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

/*
 * Squeeze
 */
.hamburger--squeeze .hamburger-inner {
  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--squeeze .hamburger-inner::before {
  transition: top 0.1s 0.14s ease, opacity 0.1s ease;
}
.hamburger--squeeze .hamburger-inner::after {
  transition: bottom 0.1s 0.14s ease,
    transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--squeeze.is-active .hamburger-inner {
  transform: rotate(45deg);
  transition-delay: 0.14s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--squeeze.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease, opacity 0.1s 0.14s ease;
}
.hamburger--squeeze.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease,
    transform 0.1s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
