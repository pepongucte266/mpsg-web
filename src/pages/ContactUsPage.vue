<style lang="scss">
.contact-us {
  padding: 10px 200px 0 200px !important;
  .screen--xs & {
    padding: 0px !important;
  }
}
</style>
<template>
  <q-page class="contact-us">
    <q-img
      v-if="$q.screen.gt.sm"
      src="~assets/images/contactus.jpg"
      fit="fill"
    />
    <div v-else style="min-width: 300px; height: auto">
      <q-img
        v-for="index in 4"
        :key="index"
        :src="
          CommonFunction.getImageUrl(`images/contactus-mobile-${index}.jpg`)
        "
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import CommonFunction from 'src/common/commonFunction';
</script>
