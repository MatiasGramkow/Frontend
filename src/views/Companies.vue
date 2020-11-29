<template>

</template>

<script>
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
</style>