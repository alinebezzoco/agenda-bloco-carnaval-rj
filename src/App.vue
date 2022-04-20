<template>
  <header>
    <h1>
      AGENDA DE BLOCOS
      <small>Rio de Janeiro/RJ</small>
    </h1>
  </header>
  <main>
    <section>
      <Select />
    </section>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Select from "./components/Select.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Select,
    Footer,
  },
});
</script>
<style scoped>

header {
  background-color: #fff;
  padding: 20px 0;
}
h1 {
  font-family: "Calistoga", cursive;
  font-size: 48px;
  text-align: center;
  color: #a779c6;
}

@media (min-device-width: 768px) {
  h1 {
    font-size: 56px;
  }
}

small {
  display: block;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 40px;
  margin: 40px auto;
  font-family: "Roboto", sans-serif;
}
</style>
