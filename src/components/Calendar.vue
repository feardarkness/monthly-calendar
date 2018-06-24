<template>
  <div class="calendar">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 offset-md3 md6 offset-lg4 lg4 offset-xl4 xl4>
          <v-form>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="menu"
              :nudge-right="40"
              :return-value.sync="startingDate"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="startingDate"
                label="Starting date"
                prepend-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="startingDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.menu.save(startingDate)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <v-text-field
              id="days"
              name="days"
              label="Number of days"
              type="Number"
              v-model="daysNumber"
            >
            </v-text-field>
            <v-text-field
              id="ccode"
              name="ccode"
              label="Country code"
              mask="AA"
              type="String"
              v-model="countryCode"
            >
            </v-text-field>
            <v-btn
              v-on:click="drawCalendar()"
            >
              Generate calendar!!!
            </v-btn>
          </v-form>
        </v-flex>
        <v-flex xs12 sm12 md12 lg12 xl12>
          <month
            day-name="Saturday"
            :start-day="14"
            :last-day="31"
            month-name="JANUARY"
          >
          </month>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CalendarMonth from '@/components/CalendarMonth'
import moment from 'moment'

export default {
  name: 'Calendar',
  components: {
    'month': CalendarMonth
  },
  data () {
    return {
      startingDate: null,
      menu: false,
      countryCode: null,
      daysNumber: null
    }
  },
  methods: {
    drawCalendar () {
      this.daysNumber = 10
      console.log(this.daysNumber)
      console.log(this.countryCode)
      console.log(this.startingDate)
      return moment()
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
