<template>
  <main>
    <section class="content">
      <h1 aria-label="Agenda de blocos carnaval 2022 - Rio de Janeiro/RJ">
        AGENDA DE BLOCOS
        <small>Rio de Janeiro/RJ</small>
      </h1>
      <label aria-label="Selecione um dia">Selecione um dia</label>
      <select v-model="selectedDate" @change="onChangeDate">
        <option value="" disabled selected aria-label="Selecionar">
          Selecione
        </option>
        <option value="quarta" aria-label="Quarta - 20/04">
          Quarta - 20/04
        </option>
        <option value="quinta" aria-label="Quinta - 21/04">
          Quinta - 21/04
        </option>
        <option value="sexta" aria-label="Sexta - 22/04">Sexta - 22/04</option>
        <option value="sabado" aria-label="Sábado - 23/04">
          Sábado - 23/04
        </option>
        <option value="domingo" aria-label="Domingo - 24/04">
          Domingo - 24/04
        </option>
      </select>
      <ul v-if="selectedDate">
        <li v-for="(item, index) in listBlocos">
          <p :aria-label="item.nome">
            <strong>{{ item.nome }}</strong>
          </p>
          <p :aria-label="item.local">{{ item.local }}</p>
          <p :aria-label="item.hora">{{ item.hora }}</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      listDate: [],
      listBlocos: [],
      selectedDate: "",
    };
  },
  methods: {
    loadDate() {
      axios
        .get("https://agenda-blocos-rj-default-rtdb.firebaseio.com/.json", {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => {
          this.listDate = res.data.content;
        });
    },
    onChangeDate(event) {
      const date = event.target.value;
      axios
        .get(
          `https://agenda-blocos-rj-default-rtdb.firebaseio.com/content/0/${date}/.json`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          this.listBlocos = res.data;
        });
    },
  },
};
</script>
<style scoped>
h1 {
  font-family: "Calistoga", cursive;
  font-size: 48px;
  padding-bottom: 40px;
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

label {
  display: block;
  font-size: 20px;
  padding-bottom: 10px;
}

select {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 40px;
  padding: 0 10px;
  font-size: 20px;
}

@media (min-device-width: 768px) {
  select {
    width: 50%;
  }
}

option {
  font-size: 20px;
}

ul {
  font-size: 20px;
  list-style-type: none;
  width: 100%;
}

@media (min-device-width: 768px) {
  ul {
    width: 50%;
  }
}

li {
  border-bottom: 1px solid #000;
  padding: 20px;
  font-weight: 400;
}

li:last-child {
  border-bottom: none;
}
</style>
