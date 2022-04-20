<template>
  <Header />
  <main>
    <section>
      <Select />
    </section>
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import Select from "./components/Select.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Select,
    Footer,
  },
});
</script>
<style scoped>
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
