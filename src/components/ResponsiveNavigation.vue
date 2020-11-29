<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon v-if="this.mobileSize" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Finance Accounting</v-toolbar-title>

      <v-spacer></v-spacer>

        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

      <template v-if="!this.mobileSize" v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-for="(link, index) in navLinks"
		  	:key="index"
			:to="link.path">
			{{ link.text}}
		</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
	<v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-blue--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item v-for="(link, index) in navLinks"
		  	:key="index"
			:to="link.path">
            <v-list-item-icon>
              <v-icon>{{ link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="700"
    >
      <v-container class="containerStyled" >
		  <div class="content" ref="content">
    		<router-view></router-view>
		  </div>
	  </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
  export default {
	props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
    data () {
		return {
			drawer: false,
			group: null,
			windowWidth: window.innerWidth,
			mobileSize: null
		}
	},
	methods: {

	},
	mounted () {
		window.innerWidth <= 1000 ? this.mobileSize = true : this.mobileSize = false

		window.onresize = () => {
			this.windowWidth = window.innerWidth
			this.windowWidth <= 1000 ? this.mobileSize = true : this.mobileSize = false
		}
	}
  }
</script>

<style lang="scss">

.containerStyled {
	min-height: 600px;
	margin-top: 230px;
}

@media (max-width: 1000px) {
	.containerStyled {
		min-height: 750px;
		margin-top: 130px;
	}
}

</style>