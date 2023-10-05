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
        :src="CommonFunction.getImageUrl(`images/aboutus-mobile-${index}.jpg`)"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CommonFunction from 'src/common/commonFunction';
// src/assets/images/aboutus-mobile-${index}.jpg
</script>
