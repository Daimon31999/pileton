<template>
  <div class="flex flex-col md:flex-row justify-center">
    <img
      class="slide-img w-3/4 mx-auto"
      :src="require(`@/assets/img/${imgName}`)"
      alt=""
    />
    <div class="w-3/4 md:w-1/4 flex flex-row flex-wrap md:flex-col mx-auto">
      <!-- Gray container Start  -->
      <div class="flex flex-col bg-gray-700 px-4 pb-4 md:px-10 flex-3">
        <div>
          <h3 class="pt-4 md:pt-10 text-white font-light text-base md:text-xl">
            {{ when }}
          </h3>
          <h1 class="font-medium text-white text-2xl md:text-4xl">Gardenia</h1>
          <h3 class="text-white font-light text-base md:text-xl">
            {{ where }}
          </h3>
        </div>
      </div>
      <!-- Gray container End  -->

      <!-- Blue container Start -->
      <div class="bg-blue-500 flex-1 px-10 flex flex-col justify-center">
        <div
          class="font-medium text-white text-xl md:text-3xl text-center mt-2"
        >
          <span class="mr-1">{{ priceStart }}</span
          >–<span class="ml-1">{{ priceEnd }}</span> €
        </div>
        <button
          class="border py-2 px-4 rounded mb-4 mt-2 font-bold uppercase text-xs text-white border-white hover:text-gray-300 hover:border-gray-300 transition duration-200"
        >
          Купить билет
        </button>
      </div>
      <!-- Blue container End -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgName', 'when', 'where', 'priceStart', 'priceEnd'],
}
</script>

<style></style>
