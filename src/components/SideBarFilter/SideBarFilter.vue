<template>
  <div class="">
    <div class="border border-pileton-blue w-64 mt-10 rounded-lg">
      <div class="flex flex-col mx-5 font-bold ">
        <h1 class="m-auto mt-6">Фильтры</h1>
        <h1 class="mt-12 mb-4">Даты</h1>
        <ul>
          <SidebarCheckbox text="Все" name="all-days" />
          <SidebarCheckbox text="Сегодня" name="today" />
          <SidebarCheckbox text="Завтра" name="tomorrow" />
          <SidebarCheckbox text="Выходные" name="weekend" />
          <SidebarCheckbox text="Ноябрь" name="november" />
        </ul>
        <button
          class="border py-2 rounded my-4 font-bold uppercase text-xs text-pileton-blue border-pileton-blue hover:text-black hover:border-pileton-green transition duration-200"
        >
          Другие Дни
        </button>
        <h1 class="my-4">Категория</h1>
        <ul>
          <SidebarCheckbox text="Все" name="all-categories" />
          <SidebarCheckbox text="Концерты" name="concerts" />
          <SidebarCheckbox text="Шоу" name="show" />
          <SidebarCheckbox text="Театр" name="theater" />
          <SidebarCheckbox text="Выставки" name="exposition" />
          <SidebarCheckbox text="Детям" name="childrens" />
          <SidebarCheckbox text="Семинары" name="seminars" />
          <SidebarCheckbox text="Экскурсии" name="excursions" />
          <SidebarCheckbox text="Музеи" name="musiums" />
          <SidebarCheckbox text="Фестивали" name="festivals" />
          <SidebarCheckbox text="Мюзиклы" name="musicles" />
          <SidebarCheckbox text="Цирки" name="curcuses" />
          <SidebarCheckbox text="Елки" name="сhristmas-trees" />
        </ul>
        <button
          class="border py-3 rounded-md border-none my-4 font-bold uppercase text-xs text-white hover:text-black hover:bg-pileton-green transition duration-200 bg-pileton-blue"
        >
          Показать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarCheckbox from './SidebarCheckbox'
export default {
  components: { SidebarCheckbox },
}
</script>

<style scoped>
select {
  margin: 50px;
  width: 150px;
  padding: 5px 35px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(https://stackoverflow.com/favicon.ico) 96% / 15% no-repeat
    #eee;
}
</style>
