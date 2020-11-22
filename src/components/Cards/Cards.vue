<template>
  <div class="cards">
    <div class="row">
      <Card
        :image="cardImg1"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
      <Card
        :image="cardImg2"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
      <Card
        :image="cardImg3"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
      <Card
        :image="cardImg4"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
      <Card
        :image="cardImg1"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
      <Card
        :image="cardImg2"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
      <Card
        :image="cardImg3"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
      <Card
        :image="cardImg4"
        title="Body Worlds"
        date="Сб 12.12.2020 - Ср 30.12.2020"
        location="EMTA suur saal, Tatari 13, Tallinn, Эстония"
        cost="10.50 - 45.80"
      />
    </div>
  </div>
</template>

<script>
import Card from './../Card/Card'
import cardImg1 from './../../assets/img/card1.png'
import cardImg2 from './../../assets/img/card2.png'
import cardImg3 from './../../assets/img/card3.png'
import cardImg4 from './../../assets/img/card4.png'
import cardImg5 from './../../assets/img/card5.png'
export default {
  data: () => ({
    cardImg1,
    cardImg2,
    cardImg3,
    cardImg4,
    cardImg5,
  }),
  components: { Card },
}
</script>

<style>
.cards .row {
  @apply flex flex-wrap flex-row w-full;
}
</style>
