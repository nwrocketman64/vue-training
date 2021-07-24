const app = Vue.createApp({
    data() {
        return {
            name: 'Nathan Webb',
            age: 23,
            imageUrl: 'https://www.jobillico.com/blog/wp-content/uploads/2020/08/How-To-Improve-Your-Internet-Connection-While-Remote-Working.jpg',
            description: 'A stock photo of the internet'
        }
    },
    methods: {
        agePlus() {
            return this.age + 5;
        },
        randomNumber () {
            return Math.random();
        }
    }
});

app.mount('#assignment');