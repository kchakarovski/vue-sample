<template>
  <div class="sample">
    <div class="form">
      <h2 class="sampleh2">Form</h2>
      <form action="#" class="flexbox-container">
        <input
          class="flex-box-input"
          type="text"
          v-model="firstName"
          required
          placeholder="First Name"
        />
        <input
          class="flex-box-input"
          type="text"
          v-model="lastName"
          required
          placeholder="Last Name"
        />
        <input
          class="flex-box-input"
          type="email"
          v-model="eMail"
          required
          placeholder="Mail"
        />
        <br />
        <button class="flex-box-btn" @click="sendData">Click Me</button>
      </form>
    </div>
    <div class="form formbind">
      <h2 class="sampleh2">Binding</h2>
      <form action="#" class="flexbox-container">
        <input
          class="flex-box-input"
          type="text"
          readonly
          v-model="firstName"
          placeholder="First Name"
          
        />
        <input
          class="flex-box-input"
          type="text"
          readonly
          v-model="lastName"
          placeholder="Last Name"
        />
        <input
          class="flex-box-input"
          type="email"
          readonly
          v-model="eMail"
          placeholder="Mail"
          
        />
        <br />
      </form>
    </div>
    <!-- <h2>Name: {{firstName}} Last Name:{{lastName}}Mail:{{eMail}}</h2> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "",
      lastName: "",
      eMail: "",
    };
  },
  methods: {
    sendData() {
      alert(
        "Name: " +
          this.firstName +
          " Surname: " +
          this.lastName +
          " Email: " +
          this.eMail
      );
    },
  },
};
</script>

<style></style>
