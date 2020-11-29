<template>
  <v-app>
    <ResponsiveNavigation
        :nav-links="navLinks"
        image-path="https://i.imgur.com/kB90ZxK.png"
        background="#fff"
        link-color="#777"
        hoverBackground="#ddd"
        />
    <Footer/>

  </v-app>
</template>

<script>
import ResponsiveNavigation from './components/ResponsiveNavigation.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    ResponsiveNavigation,
    Footer
    },
  name: 'App',

  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/home',
        icon: 'ion-ios-home'
      },
      {
        text: 'Users',
        path: '/users',
        icon: 'ion-ios-people'
      },
      {
        text: 'Roles',
        path: '/roles',
        icon: 'ion-ios-cog'
      },
      {
        text: 'Companies',
		    path: '/companies',
        icon: 'ion-ios-business'
      },
      {
        text: 'Profile',
        path: '/profile',
        icon: 'ion-ios-man'
      },
            {
        text: 'Logout',
        path: '/logout',
        icon: 'ion-ios-log-out'
      }
    ]
  })
}
</script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

</style>
