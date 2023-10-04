<style lang="scss">
.about-us {
  padding: 10px 200px 0 200px !important;
  .screen--xs & {
    padding: 0px !important;
  }
}
</style>
<template>
  <q-page class="about-us">
    <q-img v-if="$q.screen.gt.sm" src="~assets/images/aboutus.jpg" fit="fill" />
    <div v-else style="min-width: 300px; height: auto">
      <q-img
        v-for="index in 3"
        :key="index"
        :src="`src/assets/images/aboutus-mobile-${index}.jpg`"
      />
    </div>
  </q-page>
</template>
