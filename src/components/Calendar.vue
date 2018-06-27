<template>
  <div>
    <v-container grid-list-md>
      <p v-if="errors.length">
        <b>Please fix the following error(s):</b>
        <ul>
          <li :key="error" v-for="error in errors">{{ error }}</li>
        </ul>
      </p>
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
              :error-messages="errors.startingDate"
              readonly
            ></v-text-field>
            <v-date-picker v-model="startingDate" @input="$refs.menu.save(startingDate)"></v-date-picker>

          </v-menu>
        </v-flex>
        <v-flex xs12 sm12 md2 lg2 xl2>
          <v-text-field
            id="days"
            name="days"
            label="Number of days"
            mask="#####"
            min="1"
            v-model="daysNumber"
            :error-messages="errors.daysNumber"
          >
          </v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md2 lg2 xl2>
          <v-select
            :items="codes"
            id="ccode"
            name="ccode"
            label="Country code"
            mask="AA"
            type="String"
            v-model="countryCode"
            autocomplete
            :error-messages="errors.countryCode"
          ></v-select>
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
        <v-flex xs12 sm12 md12 lg12 xl12 align-center justify-center class="month-container">
          <month
            :key="month.monthName"
            v-for="month of months"
            :day-name="month.dayName"
            :start-day="month.startDay"
            :last-day="month.lastDay"
            :month-name="month.monthName"
            :year="month.year"
            :holidays="month.holidays"
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
import axios from 'axios'

export default {
  name: 'Calendar',
  components: {
    'month': CalendarMonth
  },
  data () {
    return {
      errors: {
        startingDate: [],
        countryCode: [],
        daysNumber: []
      },
      infoMessage: '',
      startingDate: null,
      menu: false,
      countryCode: null,
      daysNumber: null,
      months: [],
      monthsNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      codes: []
    }
  },
  mounted () {
    axios.get('https://restcountries.eu/rest/v2/all?fields=alpha2Code')
      .then((countryCodes) => {
        this.codes = countryCodes.data.map(countryCode => countryCode.alpha2Code)
      })
      .catch((err) => {
        console.error(err)
        alert('Error fetching data')
      })
  },
  methods: {
    isValid () {
      this.errors = {
        startingDate: [],
        countryCode: [],
        daysNumber: []
      }
      let valid = true
      if (!/\d{4}-\d{1,2}-\d{1,2}/.test(this.startingDate)) {
        this.errors.startingDate = 'Starting date must have the format yyyy-mm-dd'
        valid = false
      }
      if (!/\d{1,5}/.test(this.daysNumber) || this.daysNumber <= 0) {
        this.errors.daysNumber = 'The number of days must be greater than 0'
        valid = false
      }
      if (!/[A-Z]{2}/.test(this.countryCode)) {
        this.errors.countryCode = 'The country code must be selected and with 2 characters length'
        valid = false
      }
      return valid
    },
    makeHolidaysByMonth (holidays) {
      const months = {
        January: [],
        February: [],
        March: [],
        April: [],
        May: [],
        June: [],
        July: [],
        August: [],
        September: [],
        October: [],
        November: [],
        December: []
      }
      Object.keys(holidays).forEach(holidayDate => {
        const [, month, day] = holidayDate.split('-')
        const monthName = this.monthsNames[+month - 1]
        months[monthName].push({
          day: +day,
          name: holidays[holidayDate][0].name
        })
      })
      return months
    },
    drawCalendar () {
      if (!this.isValid()) {
        return
      }
      this.months.splice(0, this.months.length)
      axios.get(`https://holidayapi.com/v1/holidays?key=d08155cc-f5e5-4243-a95c-4287c34d471b&country=${this.countryCode}&year=2017&public=true`)
        .then((holidaysResponse) => {
          if (holidaysResponse.data.status !== '200') {
            this.infoMessage = 'Country code not found in holiday API, plz try another one (CLUE: US)'
          }
          const holidays = this.makeHolidaysByMonth(holidaysResponse.data.holidays)
          this.$nextTick(() => {
            let totalDays = this.daysNumber - 1
            let startDate = moment(this.startingDate, 'YYYY-MM-DD')
            if (totalDays === 0) {
              this.months.push({
                dayName: startDate.format('dddd'),
                startDay: +startDate.format('D'),
                lastDay: +startDate.format('D'),
                monthName: startDate.format('MMMM'),
                year: startDate.format('YYYY'),
                holidays: holidays[startDate.format('MMMM')]
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
                year: monthStart.format('YYYY'),
                holidays: holidays[startDate.format('MMMM')]
              })
              monthEnd.add(1, 'days')
              startDate = monthEnd
            }
          })
        })
        .catch((err) => {
          console.log(err)
          alert('Error fetching holiday data')
        })
    }
  }
}
</script>

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
.month-container {
  margin-bottom: 30px;
}
</style>
