<template>

</template>

<script>
export default {
name: 'Roles',
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
</style>