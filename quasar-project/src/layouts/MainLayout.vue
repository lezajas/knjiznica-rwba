<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-h3 text-weight-bolder">
          Knjiznica
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Izbornik
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Naslovnica',
    caption: 'početna stranica',
    icon: 'school',
    link: '#/'
  },
  {
    title: 'Popis svih knjiga',
    caption: 'popis svih knjiga',
    icon: 'library_books',
    link: '#/popisKnjiga'
  },
  {
    title: 'Popis svih  baza knjiga',
    caption: 'popis svih knjiga u bazi',
    icon: 'library_books',
    link: '#/baza'
  },
  {
    title: 'Pretraživanje',
    caption: 'pretraživanje',
    icon: 'search',
    link: '#/pretrazivanje'
  },
  {
    title: 'O nama',
    caption: 'o nama',
    icon: 'info',
    link: '#/o_nama'
  },
  {
    title: 'Lokacija',
    caption: 'lokacija',
    icon: 'pin_drop',
    link: '#/lokacija'
  },
  {
    title: 'Login',
    caption: 'login',
    icon: 'login',
    link: '#/login'
  },
  {
    title: 'Registracija',
    caption: 'registracija',
    icon: 'app_registration',
    link: '#/registracija'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
