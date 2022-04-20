<template>
  <header>
    <h1>
      AGENDA DE BLOCOS
      <small>Rio de Janeiro/RJ</small>
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
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

small {
  display: block;
}
</style>
