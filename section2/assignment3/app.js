const app = Vue.createApp({
    data() {
      return {
        amount: 0,
        interval: ''
      };
    },
    watch: {
        result(){
            const that = this;
            setTimeout(function(){
                that.amount = 0;
            }, 5000);
        }
    },
    computed: {
      result() {
        if (this.amount < 37){
            return 'Not there yet';
        } else if (this.amount > 37) {
            return 'Too much!';
        } else {
            return this.amount;
        }
      }
    },
    methods: {
      add(num) {
          this.amount = this.amount + num;
      }
    }
  });
  
  app.mount('#assignment');
  