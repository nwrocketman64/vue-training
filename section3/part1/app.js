const app = Vue.createApp({
  data() {
    return {
      enteredGoalValues: '',
      goals: []
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValues);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
