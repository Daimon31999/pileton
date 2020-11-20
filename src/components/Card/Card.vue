<template>
  <div class="my-10">
    <div
      class="card-wrapper mx-1 border border-pileton-blue border-b-0 bg-gray-100 flex flex-col"
    >
      <img :src="image" class="card-image h-80" alt="" />
      <div class="content px-4">
        <h1 class="text-base mb-5 mt-2">{{ title }}</h1>
        <h2 class="text-sm mt-4 mb-2">
          <b>{{ date }}</b>
        </h2>
        <div class="mt-4 mb-2">
          <font-awesome-icon class="mr-2" :icon="['far', 'map-marker-alt']" />
          <span> {{ location }} </span>
        </div>
        <div>
          <font-awesome-icon class="mr-2" :icon="['far', 'euro-sign']" />
          <span>{{ cost }}</span>
        </div>
        <button
          class="buy-ticket mb-2 bg-success w-full border rounded text-white mt-6
        hover:bg-pileton-blue transition-colors duration-300 mx-auto
        "
        >
          Buy ticket
        </button>
      </div>
    </div>
    <div class="ticket-bottom mx-1 bg-white shadow-none"></div>
  </div>
</template>

<script>
export default {
  props: ['title', 'date', 'location', 'cost', 'image'],
}
</script>

<style>
.card-wrapper {
  width: 223px;
  position: relative;
}

.ticket-bottom {
  height: 10px;
  width: auto;
  background: radial-gradient(
      circle,
      transparent,
      transparent 50%,
      #2d8df0 65%,
      #f7fafc 0%,
      #f7fafc 100%
    )
    1px 0px / 20px 26px repeat-x;
  border-right: 1px solid #2d8df0;
  border-left: 1px solid #2d8df0;
}

.card-image {
  width: 223px;
  height: 323px;
}
</style>
