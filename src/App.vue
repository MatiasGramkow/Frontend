<template>
  <div id="app">
    <ResponsiveNavigation
		:nav-links="navLinks"
		image-path="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
		background="#fff"
		link-color="#777"
		hoverBackground="#ddd"
    />
    <router-view/>
  </div>
</template>

<script>
import ResponsiveNavigation from '@/components/ResponsiveNavigation'

export default {
  components: {
    ResponsiveNavigation
  },
  data: () => ({
    navLinks: [
      {
        text: 'Søg',
        path: '/search',
        icon: 'ion-ios-search'
      },
      {
        text: 'Kort',
        path: '/map',
        icon: 'ion-ios-navigate'
      },
      {
        text: 'Nærmeste',
		    path: '/nearest',
        icon: 'ion-ios-pin'
      },
      {
        text: 'Om os',
        path: '/about',
        icon: 'ion-ios-information-circle'
      },
            {
        text: 'Tilmeld',
        path: '/signup',
        icon: 'ion-ios-person'
      }
    ]
  })
}

</script>

<style lang="scss">
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

figure {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 10px;
	margin-inline-end: 0;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
