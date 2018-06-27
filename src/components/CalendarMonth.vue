<template>
  <div class="month">
    <div>
      <div
        class="day"
        :key="dow"
        v-for="dow in daysOfWeek"
      >
        {{dow.charAt(0)}}
      </div>
    </div>
    <div class="month-name">
      {{monthName}} - {{year}}
    </div>
    <div>
      <div
        class="day"
        :class="{
          active: day < 0,
          weekend: day > 0 && (indice % 7 === 0 || indice % 7 === 6),
          weekday: day > 0 && indice % 7 !== 0 && indice % 7 !== 6,
          holiday: isHoliday(day)
        }"
        :key="day" v-for="(day, indice) in totalDays"
      >
        {{day &lt; 0 ? '&nbsp;' : day}}
      </div>
    </div>
    <div>
      <span class="holiday-list" :key="holiday.day" v-for="holiday in holidays">{{holiday.day}} - {{holiday.name}}<br></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarMonth',
  props: {
    dayName: String,
    startDay: Number,
    lastDay: Number,
    monthName: String,
    year: String,
    holidays: Array
  },
  data () {
    return {
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      totalDays: 0,
      weeksNumber: 0,
      startDateCounter: 0,
      fromDay: 0
    }
  },
  mounted () {
    this.start = this.daysOfWeek.indexOf(this.dayName)

    this.totalDays = new Array(this.lastDay - this.startDay + 1).fill(this.startDay).map((n, i) => n + i)

    const extraInitialDays = new Array(this.start).fill('-1').map((n, i) => n - i)
    this.totalDays = extraInitialDays.concat(this.totalDays)

    const extraDays = 7 - (this.totalDays.length % 7)
    const extraEndDays = new Array(extraDays === 7 ? 0 : extraDays).fill(-20).map((n, i) => n - i)
    this.totalDays = this.totalDays.concat(extraEndDays)
  },
  methods: {
    isHoliday: function (day) {
      if (day === -1) {
        return false
      }
      return this.holidays.find(holiday => holiday.day === day) !== undefined
    }
  }
}
</script>

<style scoped>
.month {
  width: 200px;
  box-shadow: 0 0 7px #212121;
  border-radius: 2px;
  padding: 5px;
}
.day {
  width: 25px;
  display: inline-block;
  padding: 0px;
  margin: 1px;
  text-align: center;
}
.month-name {
  text-align: center;
}
.active {
  background-color: #E0E0E0;
}
.weekend {
  background-color: #FDD835;
}
.weekday {
  background-color: #76FF03;
}
.holiday {
  background-color: #ff578a !important;
}
.holiday-list {
  font-size: 70%;
}
</style>
