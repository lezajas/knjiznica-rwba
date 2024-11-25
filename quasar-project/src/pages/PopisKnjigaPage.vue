<template>
<<<<<<< HEAD:Qarsar/quasar-project/src/pages/PopisKnjigaPage.vue
  <div class="q-pa-md">
    <q-table
      title="Knjige"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: 'Naslov knjige',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'ID_knjige', align: 'center', label: 'ID_knjige', field: 'ID_knjige', sortable: true },
  { name: 'Autor', label: 'Autor', field: 'autor', sortable: true },
  { name: 'Opis', label: 'Opis', field: 'opis' },
  { name: 'Slika', label: 'Slika', field: 'slika' },
  { name: 'Stanje', label: 'Stanje', field: 'stanje' }
]
const rows = [
  {
    name: 'Knjiga1',
    ID_knjige: 1,
    autor: 'Autor1',
    opis: 'opis knjige1',
    slika: 4.0,
    stanje: '10',
    
  }
]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
=======
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
>>>>>>> ed0e16bf341dc654c2e7d10f2c7713797e095312:quasar-project/src/pages/PopisKnjigaPage.vue
