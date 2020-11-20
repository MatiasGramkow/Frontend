<template>
  <div class="users">
    <h1 class="arka_heading">Users</h1>
    <v-card class="arka_card" style="width: 85%;"  elevation="20" shaped>
      <table class="styled-table table_shadow" >
        <thead>
          <tr>
            <th>Id</th>
            <th>Fornavn</th>
            <th>Efternavn</th>
            <th>Email</th>
            <th>Rolle</th>
            <th class="arka_settings">Indstillinger</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id">
          <tr>
            <td> {{ user.id }}</td>
            <td> {{ user.firstname }}</td>
            <td> {{ user.lastname }}</td>
            <td> {{ user.email }}</td>
            <td> {{ user.role }}</td>
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
name: 'Users',
data () {
  return {
      editIndex: null,
      originalData: null,
      id: null,
      users: [{
        firstname: 'Matias',
        lastname: 'Gramkow',
        email: 'Matias@matias.dk',
        role: 'Admin',
        id: '1234'
      },
      {
        firstname: 'Søren',
        lastname: 'Gramkow',
        email: 'Søren@søren.dk',
        role: 'Staff',
        id: '4231'
      },
      {
        firstname: 'Emilie',
        lastname: 'Lydolph',
        email: 'Krumme-line@live.dk',
        role: 'Admin',
        id: '1423'
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