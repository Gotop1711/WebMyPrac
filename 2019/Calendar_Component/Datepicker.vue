<template>
  <div class="calendar-wrap">
    <div class="calendar-head">
      <div class="calendar-head-option">
        <div class="calendar-vue-day" v-show="panelType == 'day'">
          <div class="calendar-head-content" @click="panelType = 'month'">
            <span>{{tmpYear}}</span>
            <span>{{changeTmpMonth}}</span>
          </div>
        </div>
        <div class="calendar-vue-month" v-show="panelType == 'month'">
          <div class="calendar-head-content" @click="panelType = 'year'">
            <span>{{tmpYear}}</span>
          </div>
        </div>
        <div class="calendar-vue-year" v-show="panelType == 'year'">
          <div class="calendar-head-content">
            <span>{{ yearList[0]}} - {{ yearList[11]}}</span>
          </div>
        </div>
        <div class="calendar-btn pre" @click="selectPre()"></div>
        <div class="calendar-btn next" @click="selectNext()"></div>
      </div>
    </div>
    <div class="calendar-body">
      <div class="calendar-vue-day_type" v-show="panelType == 'day'">
        <ul class="calendar-body-title">
          <li v-for="(item, index) in weekList" :key="index" v-text="item.label"></li>
        </ul>
        <ul class="calendar-body-box">
          <li
            v-for="(item, index) in dateList"
            :key="index"
            v-text="item.value"
            :class="{pre: item.previousMonth,
                            next: item.nextMonth,
                            curry: date === item.value && month === tmpMonth && item.currentMonth,
                            choose: nowValue === item.value && item.currentMonth}"
            @click="selectDate(item)"
          ></li>
        </ul>
      </div>
      <div class="calendar-vue-month_type" v-show="panelType == 'month'">
        <ul class="calendar-body-box">
          <li
            v-for="(item, index) in monthList"
            :key="index"
            v-text="item.label"
            :class="{choose:item.value == tmpMonth}"
            @click="selectMonth(item)"
          ></li>
        </ul>
      </div>
      <div class="calendar-vue-year_type" v-show="panelType == 'year'">
        <ul class="calendar-body-box">
          <li
            v-for="(item,index) in yearList"
            :key="index"
            v-text="item"
            :class="{choose:item === tmpYear && fixedYear === 0}"
            @click="selectYear(item)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getDate(), // 當前日期
      month: new Date().getMonth(), // 當前月份
      tmpMonth: new Date().getMonth(), // 臨時月份，可修改
      tmpYear: new Date().getFullYear(), // 臨時年份，可修改
      fixedYear: 0, // 固定年份，不可修改
      weekList: [
        { label: "Sun" },
        { label: "Mon" },
        { label: "Tue" },
        { label: "Wed" },
        { label: "Thu" },
        { label: "Fri" },
        { label: "Sat" }
      ], // 周
      monthList: [
        { label: "Jan", value: 0, fullname: "January" },
        { label: "Feb", value: 1, fullname: "February" },
        { label: "Mar", value: 2, fullname: "March" },
        { label: "Apr", value: 3, fullname: "April" },
        { label: "May", value: 4, fullname: "May" },
        { label: "Jun", value: 5, fullname: "June" },
        { label: "Jul", value: 6, fullname: "July" },
        { label: "Aug", value: 7, fullname: "August" },
        { label: "Sept", value: 8, fullname: "September" },
        { label: "Oct", value: 9, fullname: "October" },
        { label: "Nov", value: 10, fullname: "November" },
        { label: "Dec", value: 11, fullname: "December" }
      ], // 月
      // nowValue: new Date().getDate(), // 當前選中之日期值
      panelType: "day" // 面板狀態
    };
  },
  props: {
    nowValue: {
      type: Number,
      default: new Date().getDate()
    }
  },
  methods: {
    selectDate(item) {
      // 賦予當前nowValue,用於控制樣式突出顯示
      this.nowValue = item.value;
      // 如選擇到上個月
      if (item.previousMonth) {
        // 如選擇到上個年
        if (this.tmpMonth > 0) {
          this.tmpMonth -= 1;
        } else {
          this.tmpYear -= 1;
          this.tmpMonth = 11;
        }
      }
      // 如選擇到下個月
      if (item.nextMonth) {
        // 如選擇到下個年
        if (this.tmpMonth < 11) {
          this.tmpMonth += 1;
        } else {
          this.tmpYear += 1;
          this.tmpMonth = 0;
        }
      }
    },
    selectMonth(item) {
      this.tmpMonth = item.value;
      this.panelType = "day";
    },
    selectYear(item) {
      this.tmpYear = item;
      this.fixedYear = 0;
      this.panelType = "day";
    },
    selectPre() {
      let preMongthLength = new Date(this.tmpYear, this.tmpMonth, 0).getDate();
      if (this.panelType === "year") {
        this.tmpYear -= 12;
        this.fixedYear -= 1;
      } else if (this.panelType === "month") {
        if (this.tmpMonth > 0) {
          this.tmpMonth -= 1;
        } else {
          this.tmpYear -= 1;
          this.tmpMonth = 11;
        }
      } else if (this.panelType === "day") {
        if (this.nowValue > 1) {
          this.nowValue -= 1;
        } else {
          if (this.tmpMonth > 0) {
            this.tmpMonth -= 1;
          } else {
            this.tmpYear -= 1;
            this.tmpMonth = 11;
          }
          this.nowValue = preMongthLength;
        }
      }
    },
    selectNext() {
      let curMongthLength = new Date(
        this.tmpYear,
        this.tmpMonth + 1,
        0
      ).getDate();
      if (this.panelType === "year") {
        this.tmpYear += 12;
        this.fixedYear += 1;
      } else if (this.panelType === "month") {
        if (this.tmpMonth < 11) {
          this.tmpMonth += 1;
        } else {
          this.tmpYear += 1;
          this.tmpMonth = 0;
        }
      } else if (this.panelType === "day") {
        if (this.nowValue < curMongthLength) {
          this.nowValue += 1;
        } else {
          if (this.tmpMonth < 11) {
            this.tmpMonth += 1;
          } else {
            this.tmpYear += 1;
            this.tmpMonth = 0;
          }
          this.nowValue = 1;
        }
      }
    }
  },
  computed: {
    dateList() {
      //獲取當月的總天數
      let currentMonthLength = new Date(
        this.tmpYear,
        this.tmpMonth + 1,
        0
      ).getDate();
      //先將當月的日期塞入dateList
      let dateList = Array.from(
        { length: currentMonthLength },
        (val, index) => {
          return {
            currentMonth: true,
            value: index + 1
          };
        }
      );
      // 獲取當月1號的星期以確定需要在前插入多少天
      let startDay = new Date(this.tmpYear, this.tmpMonth, 1).getDay();
      // 確認上個月的總天數
      let previousMongthLength = new Date(
        this.tmpYear,
        this.tmpMonth,
        0
      ).getDate();
      // 在1號前插入上個月的日期
      for (let i = 0, len = startDay; i < len; i++) {
        dateList = [
          { previousMonth: true, value: previousMongthLength - i }
        ].concat(dateList);
      }
      // 補足剩餘的天數
      for (let i = 1, item = dateList.length; i < 43 - item; i++) {
        dateList[dateList.length] = { nextMonth: true, value: i };
      }
      return dateList;
    },
    changeTmpMonth() {
      return this.monthList[this.tmpMonth].fullname;
    },
    yearList() {
      let curryYear = Math.floor(this.tmpYear / 12);
      let curryYearList = Array.from(
        { length: 12 },
        (value, index) => curryYear * 12 + index
      );
      return curryYearList;
    }
  }
};
</script>

<style scoped>
</style>
