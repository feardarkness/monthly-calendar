<template>
  <div>
    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12 sm12 md2 lg2 xl2>
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
        </v-flex>
        <v-flex xs12 sm12 md2 lg2 xl2>
          <v-text-field
            id="days"
            name="days"
            label="Number of days"
            type="Number"
            v-model="daysNumber"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md2 lg2 xl2>
          <v-text-field
            id="ccode"
            name="ccode"
            label="Country code"
            mask="AA"
            type="String"
            v-model="countryCode"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md3 lg3 xl3>
          <v-btn
            v-on:click="drawCalendar()"
          >
            Generate calendar!!!
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12 lg12 xl12 align-center justify-center>
          <month
            :key="month.monthName"
            v-for="month of months"
            :day-name="month.dayName"
            :start-day="month.startDay"
            :last-day="month.lastDay"
            :month-name="month.monthName"
            :year="month.year"
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
      daysNumber: null,
      months: []
    }
  },
  methods: {
    drawCalendar () {
      this.months.splice(0, this.months.length)
      this.$nextTick(() => {
        let totalDays = this.daysNumber - 1
        let startDate = moment(this.startingDate, 'YYYY-MM-DD')
        if (totalDays === 0) {
          this.months.push({
            dayName: startDate.format('dddd'),
            startDay: +startDate.format('D'),
            lastDay: +startDate.format('D'),
            monthName: startDate.format('MMMM'),
            year: startDate.format('YYYY')
          })
        }
        while (totalDays > 0) {
          const monthStart = startDate
          let monthEnd = startDate.clone()
          monthEnd.endOf('month')
          let daysInMonth = monthEnd.diff(monthStart, 'days') + 1
          if (totalDays - daysInMonth < 0) {
            monthEnd = startDate.clone()
            monthEnd.add(totalDays, 'days')
            totalDays = 0
          } else {
            totalDays -= daysInMonth
          }
          this.months.push({
            dayName: monthStart.format('dddd'),
            startDay: +monthStart.format('D'),
            lastDay: +monthEnd.format('D'),
            monthName: monthStart.format('MMMM'),
            year: monthStart.format('YYYY')
          })
          monthEnd.add(1, 'days')
          startDate = monthEnd
        }
      })
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
.month {
  display: inline-block;
  margin: 10px;
  vertical-align: top;
}
</style>
