<template>
  <li class="my-2">
    <div class="flex items-center">
      <input
        class="mr-2"
        type="checkbox"
        :id="name"
        :name="name"
        :value="name"
      />
      <label class="font-normal text-sm" :for="name"> {{ text }} </label><br />
    </div>
  </li>
</template>

<script>
export default {
  props: ['text', 'name'],
}
</script>

<style scoped>
label {
  padding-top: 2px;
}
</style>
