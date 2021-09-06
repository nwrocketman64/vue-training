<template>
    <div>
        <section>
            <based-card>
                <h2>{{ fullName }}</h2>
                <h3>${{ rate }}/hour</h3>
            </based-card>
        </section>
        <section>
            <based-card>
                <header>
                    <h2>Interested? Reach out now!</h2>
                    <based-button link :to="contactLink">Contact</based-button>
                </header>
                <router-view></router-view>
            </based-card>
        </section>
        <section>
            <based-card>
                <based-badge v-for="area in areas" :key="area" :type="area" :title="area"></based-badge>
                <p>{{ description }}</p>
            </based-card>
        </section>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            selectedCoach: {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'Schwarzmüller',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                }
        };
    },
    computed: {
        fullName() {
            return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
        },
        contactLink() {
            return this.$route.path + '/' + this.id + '/contact';
        },
        area() {
            return this.selectedCoach.areas;
        },
        rate() {
            return this.selectedCoach.hourlyRate;
        },
        description() {
            return this.selectedCoach.description;
        }
    },
    created() {
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(
            (coach) => coach.id === this.id
        );
    }
}
</script>