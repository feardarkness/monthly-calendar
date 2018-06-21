<template>
  <div class="calendar">
    <hello-world></hello-world>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 offset-md3 md6 offset-lg4 lg4 offset-xl4 xl4>
          <v-form>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="menu"
              :nudge-right="40"
              :return-value.sync="date"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="date"
                label="Starting date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <v-text-field
              id="days"
              name="days"
              label="Number of days"
              type="Number"
            >
            </v-text-field>
            <v-text-field
              id="ccode"
              name="ccode"
              label="Country code"
              mask="AA"
              type="String"
            >
            </v-text-field>
          </v-form>
        </v-flex>
        <v-flex xs12 sm12 offset-md3 md6 offset-lg4 lg4 offset-xl4 xl4>
          asdasd sad sa dsa dsa d sa asdasd sad sa dsa dsa d sa asdasd sad sa dsa dsa d sa asdasd sad sa dsa dsa d sa
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Calendar',
  components: {
    'hello-world': HelloWorld
  },
  data () {
    return {
      date: null,
      menu: false,
      msg: 'Calendar will be there'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
