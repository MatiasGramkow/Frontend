<template>
  <div class="roles">
    <h1 class="arka_heading">Roles</h1>
    <v-card class="arka_card" style="width: 50%;" elevation="20" shaped>
      <table class="styled-table table_shadow" >
        <thead>
          <tr>
            <th>Navn</th>
            <th>Id</th>
            <th class="arka_settings">Indstillinger</th>
          </tr>
        </thead>
        <tbody v-for="role in roles" :key="role.id">
          <tr>
            <td> {{ role.name }}</td>
            <td> {{ role.id }}</td>
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
      roles: [{
        id: '052fde82-e3be-4dd5-848a-510203493c1d',
        name: 'Staff'
      },
      {
        id: '077bdfb5-773b-498e-908b-5063f1f838f4',
        name: 'Founder'
      },
      {
        id: '810f624f-7d15-4d43-b20f-a01d7fb7a058',
        name: 'Extended Admin'
      },
      {
        id: '	c552de22-ab4e-497d-a767-e793818b75a8',
        name: 'Admin'
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