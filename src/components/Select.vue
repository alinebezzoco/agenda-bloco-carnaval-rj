<template>
  <label>Selecione um dia</label>
  <select
    v-model="selectedDate"
    @change="onChangeDate"
    aria-label="Selecionar uma opção"
  >
    <option value="quarta" selected>Quarta - 20/04</option>
    <option value="quinta">Quinta - 21/04</option>
    <option value="sexta">Sexta - 22/04</option>
    <option value="sabado">Sábado - 23/04</option>
    <option value="domingo">Domingo - 24/04</option>
  </select>
  <ul v-if="selectedDate">
    <li v-for="(item, index) in listBlocos">
      <p>
        <strong>{{ item.nome }}</strong>
      </p>
      <p>{{ item.local }}</p>
      <p>{{ item.hora }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Select",
  data() {
    return {
      listDate: [],
      listBlocos: [],
      selectedDate: "quarta",
    };
  },
  mounted() {
    this.onChangeDate();
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
      const date = event === undefined ? "quarta" : event.target.value;
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
});
</script>
<style scoped>
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
