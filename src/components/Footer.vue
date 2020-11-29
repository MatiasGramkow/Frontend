<template>
  <v-footer
    dark
    padless class="footerStyled"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue somefooter">
        <strong class="subheading"></strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-5"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        2020 — <strong>Matias Gramkow A/S</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram'
      ]
    })
  }
</script>

<style lang="scss">
    .footerStyled {
        position: absolute !important;
        bottom: 0;
        width: 100vw;
    }
    .somefooter {
        height: 45px;
        padding: 0;
    }
</style>