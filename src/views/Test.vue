<template>
  <div class="container mt-4">

    <table class="table table-bordered mt-4">
      <thead class="thead-light">
        <tr>
          <th width="1">#</th>
          <th width="15%">Id</th>
          <th width="15%">First Name</th>
          <th width="15%">Last Name</th>
          <th width="15%">Email</th>
          <th width="15%">Role</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td >
            <span v-if="editIndex !== index">{{ item.id }}</span>
            <span v-if="editIndex === index">
              <label :for="item.id"> {{item.id}}</label>
            </span>
                
          </td>
          
          <td>
            <span v-if="editIndex !== index">{{ item.firstname }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.firstname">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.lastname }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.lastname">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.email }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.email">
            </span>
          </td>
          <td>
            <span v-if="editIndex !== index">{{ item.role }}</span>
            <span v-if="editIndex === index">
              <input class="form-control form-control-sm" v-model="item.role">
            </span>
          </td>
   

    
          <td>
            <span v-if="editIndex !== index">
              <button @click="edit(item, index)" class="btn btn-sm btn-outline-secondary mr-2">Edit</button>
              <button @click="remove(item, index)" class="btn btn-sm btn-outline-secondary mr-2">Remove</button>
            </span>
            <span v-else>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="cancel(item)">Cancel</button>
              <button class="btn btn-sm btn-outline-secondary mr-2" @click="save(item)">Save</button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="col-3 offset-9 text-right my-3">
      <button v-show="!editIndex" @click="add" class="btn btn-sm btn-secondary">Create New User</button>
    </div>

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
    return{
        users:undefined,
        editIndex: null,
        originalData: null,
        id: null,
        }
  },
  mounted()
  {
    Vue.axios.get('http://localhost:8082/api/getAllUsers')
    .then((resp) => {
      this.users = resp.data;
    });
  },
  methods: {

    add() {
      this.users.push({id: '',firstname: '', lastname: '', email: '', role: '' })
      this.editIndex = this.users.length - 1
    },

    edit(item, index) {
      this.editIndex = index
    },

    cancel(item) {
      this.editIndex = null

      if (!this.originalData) {
        this.users.splice(this.users.indexOf(item), 1)
        return
      }

      Object.assign(item, this.originalData)
      this.originalData = null
    },

    remove(item, index) {
        this.users.splice(index, 1);
      Vue.axios.delete('http://localhost:8082/api/deleteUser/' + item.id)
                .then(response => {
                    console.log("Removed");
            });
    },

    save(item) {
        const newUser = Vue.axios.post('http://localhost:8082/api/createUser', {
            firstname: item.firstname,
            lastname: item.lastname,
            email: item.email,
            role: item.role,
        }).then(response => {
            this.users.splice(-1, 1);
            this.users.push({id:response.data.id, firstname:item.firstname, lastname:item.lastname, email:item.email, role: item.role});
        });

        this.editIndex = null

    },

  },
}

</script>

<style>
  input[type="number"] {
    text-align: right;
  }
</style>
