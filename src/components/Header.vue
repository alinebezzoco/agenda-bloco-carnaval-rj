<template>
  <header>
    <h1>
      AGENDA DE BLOCOS
      <small>Rio de Janeiro/RJ</small>
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: #fff;
  padding: 20px 0;
  position: sticky;
  top: 0;
}

h1 {
  font-family: "Calistoga", cursive;
  font-size: 40px;
  text-align: center;
  color: #a779c6;
}

small {
  display: block;
}
</style>
