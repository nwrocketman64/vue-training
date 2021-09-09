<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed, watch } from 'vue';

export default {
  setup() {
    // const uName = ref('Nathan');
    // const uAge = ref(23);

    const user = reactive({
      name: 'Nathan',
      age: 23
    });

    const firstName = ref('');
    const lastName = ref('');

    watch(user, function(newValues, oldValues) {
      console.log('Age 1: ' + newValues.age);
      console.log('Age 2: ' + oldValues.age);
      console.log('Name 1: ' + newValues.name);
      console.log('Name 2: ' + oldValues.name);
    });

    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    function setNewAge() {
      user.age = 32;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    return {
      user: user,
      setAge: setNewAge,
      setFirstName,
      setLastName,
      uName
    };
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>