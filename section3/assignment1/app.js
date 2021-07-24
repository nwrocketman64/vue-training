const app = Vue.createApp({
    data() {
      return {
        showList: true,
        enteredTasksValue: '',
        tasks: []
      };
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTasksValue);
      },
      toggleList() {
          this.showList = !this.showList;
      }
    }
  });
  
  app.mount('#assignment');