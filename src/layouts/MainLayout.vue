<style lang="scss"></style>
<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeader></MainHeader>
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="text-center text-grey text-weight-regular q-mt-md">
      Copyright © 2023. MPSG. All rights reserved
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from 'src/layouts/header/MainHeader.vue';
</script>
