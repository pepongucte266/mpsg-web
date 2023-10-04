<style lang="scss" src="./MainHeader.scss"></style>
<style lang="scss" src="./MainHeaderResponsive.scss"></style>
<template>
  <q-header class="header" reveal elevated>
    <img src="~assets/images/logo-trans.png" class="header-logo" alt="logo" />
    <div v-if="$q.screen.gt.xs" class="header-menu">
      <div
        v-for="(item, index) in menus"
        class="header-menu-item"
        :key="index"
        @click="goTo(item.path)"
      >
        {{ item.label }}
      </div>
    </div>
    <div v-else>
      <q-btn label="Menu" icon="menu" style="width: 280px">
        <q-menu
          square
          persistent
          auto-close
          anchor="bottom middle"
          self="top middle"
          fit
          color="blue"
        >
          <q-list style="min-width: 200px">
            <q-item
              clickable
              v-for="(item, index) in menus"
              :key="index"
              @click="goTo(item.path)"
            >
              <q-item-section>{{ item.label }}</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
var menus = reactive([
  {
    path: '/',
    label: 'PRODUCTS',
  },
  {
    path: '/',
    label: 'ABOUT',
  },
  {
    path: '/',
    label: 'FACILITY LOCATOR',
  },
  {
    path: '/',
    label: 'SUSTAINABILITY',
  },
  {
    path: '/',
    label: 'CAREERS',
  },
  {
    path: '/contact-us',
    label: 'CONTACT US',
  },
  {
    path: '/',
    label: 'ONLINE PAYMENTS',
  },
]);

function goTo(path: string) {
  router.push(path);
}
</script>
