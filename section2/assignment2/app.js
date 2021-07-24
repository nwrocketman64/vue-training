const app = Vue.createApp({
    data() {
      return {
        output1: 'OUTPUT',
        output2: 'OUTPUT'
      };
    },
    methods: {
      showAlert() {
        alert("Alert!");
      },
      setInput1(event) {
        this.output1 = event.target.value;
      },
      setInput2(event) {
        this.output2 = event.target.value;
      }
    }
  });
  
  app.mount('#assignment');