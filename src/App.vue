<template>
  <div id="app">
    <v-app>
      <v-toolbar class="deep-orange">
        <v-toolbar-title><b>CALENDAR</b></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer class="deep-orange pa-3" :absolute="true">
        <v-spacer></v-spacer>
        2018 - aalvarado
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
