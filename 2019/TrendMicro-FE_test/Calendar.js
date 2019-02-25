export default {
  template: `
    <div v-if="show" id="Calendar">
      <h3>Calendar 元件</h3>
      <p>預設日期: {{ date.thisDate }}</p>
    </div>
  `,
    props:{
      show:{
        type: Boolean,
        default: false,
      },
      date:{
        type: Object,
        default:function(){
          return {
            thisDate: '02/25',
            thisMonth: '02'
          };
        },
      }
    },

}