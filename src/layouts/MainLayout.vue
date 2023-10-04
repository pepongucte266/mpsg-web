<style lang="scss"></style>
<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeader></MainHeader>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MainHeader from 'src/layouts/header/MainHeader.vue';
</script>
