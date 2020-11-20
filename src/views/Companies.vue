<template>
  <div class="users">
    <h1 class="arka_heading">Companies</h1>
    <v-card class="arka_card" style="width:30%;" elevation="20" shaped>
      <table class="styled-table table_shadow" >
        <thead>
          <tr>
            <th>Navn</th>
            <th class="arka_settings">Indstillinger</th>
          </tr>
        </thead>
        <tbody v-for="company in companies" :key="company.id">
          <tr>
            <td> {{ company.name }}</td>
            <td class="arka_settings">
              <span>Opdater</span>
              <span>|</span>
              <span>Slet</span>
            </td>
          </tr>
        </tbody>
      </table>
    </v-card>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueAxios, axios)
Vue.use(Vuetify)
export default {
name: 'Companies',
data () {
  return {
      editIndex: null,
      originalData: null,
      id: null,
      companies: [{
        name: 'Circle K'
      },
      {
        name: 'Power'
      },
      {
        name: 'Arka'
      }
      ]
    }
},
mounted () {
  /*
  Vue.axios.get('http://localhost:8082/api/getAllUsers')
  .then((resp) => {
    this.users = resp.data;
  });
  */
}
}
</script>

<style lang="scss">
@import "../assets/scss/arka_table.scss";
</style>