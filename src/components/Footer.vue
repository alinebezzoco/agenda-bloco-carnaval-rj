<template>
  <footer>
    <p>
      Feito com amor e muito glitter por
      <a href="//about.me/alinebezzoco" target="_blank">Aline Bezzoco</a>
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped>
footer {
    background-color: white;
    padding: 10px 0;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 14px;
    bottom: 0;
    position: relative;
    width: 100%;
    height: 20px;
    top: auto;
}
</style>