import Calendar from './Calendar.js';

export default {
  components:{
    Calendar
  },
  template: `
    <label id="DatePickerCmp"> DatePicker: 
      <input @click="showCalendar" @blur="showCalendar" id="DatePicker" placeholder="這是 DatePicker" type="text" >
      <calendar :show="calendar_show"></calendar>
    </label>
  `,
  data() {
    return {
      calendar_show: false,
    }
  },
  methods:{
    showCalendar(){
      this.calendar_show = !this.calendar_show;
    }
  }
};
