<template>
  <div id="app">
    <Menu />
    <div class="container">
      <div class="left-col"><Form @submitForm="onFormSubmit" /></div>
      <div class="right-col">       
        <BudgetList :list="list" @deleteItem="onDeleteItem" />
         <TotalBalance :total="TotalBalance" />
      </div>
    </div>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import Menu from "@/components/Menu";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    Menu
  },
  data: () => ({
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Отдали долг",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -25,
        comment: "Купил пирожок",
        id: 2,
      },
    },
  }),
  computed: {
    TotalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random),
      };
      this.$set(this.list, newObj.id, newObj);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}
.left-col {
  width: 50%;
}
.right-col {
  width: 50%;
}
</style>
