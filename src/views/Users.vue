<template>
  <div class="users">
    <h1>Users Page</h1>
    <table>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td>Role</td>
        <td>Id</td>
      </tr>
      <br/>
      <tr  v-for="user in users" v-bind:key="user.id">
        <td>{{user.firstname}}</td>
        <td>{{user.lastname}}</td>
        <td>{{user.email}}</td>
        <td>{{user.role}}</td>
        <td>{{user.id}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)
export default {
  name:"Users",
  data()
  {
    return{users:undefined}
  },
  mounted()
  {
    Vue.axios.get('http://localhost:8082/api/getAllUsers')
    .then((resp) => {
      this.users = resp.data;
    });
  }
}


</script>
