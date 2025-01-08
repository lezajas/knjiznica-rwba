<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="naslov"
        label="Naslov knjige *"
        hint="Naslov knjige"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input filled
        type="Autor"
        v-model="autor"
        label="Autor knjige *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input filled
        type="Opis knjige"
        v-model="opis"
        label="Opis knjige *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input filled
        type="Slika"
        v-model="slika"
        label="URL slike od knjige *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input filled
        type="Broj knjiga na raspolaganju"
        v-model="stanje"
        label="Broj knjiga na raspolaganju knjige *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <div>
        <q-btn label="Unesi" type="Unos" color="primary" @click="insertBooks"/>
      </div>
    </q-form>

  </div>
</template>
<script>

import { useQuasar } from 'quasar'
import { ref } from 'vue'
import axios from 'axios';


export default {
  setup () {
    
    const $q = useQuasar()
        const naslov = ref(null)
        const autor = ref(null)
        const opis = ref(null)
        const slika = ref(null)
        const stanje = ref(null)
       
        const insertBooks = async () => {
        const formData ={
        naslov: naslov.value,
        autor: autor.value,
        opis: opis.value,
        slika: slika.value,
        stanje: stanje.value,
      }
        await axios.post('http://localhost:3000/api/unos_knjiga/', formData)
        .then(result => {
          console.log(result.data); 
        })
        .catch(error => {
          console.error("Error loading books:", error);
        });
    }
        
    return {
      naslov,
      autor,
      opis,
      slika,
      stanje,
      insertBooks,

      
    }
  }
}
</script>