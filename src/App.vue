<template>
  <div id="app">
    <ElMenu mode="horizontal">
      <ElMenuItem>Site Name</ElMenuItem>
      <ElMenuItem>About</ElMenuItem>
      <ElMenuItem>Contacts</ElMenuItem>
      <ElMenuItem>Blog</ElMenuItem>
    </ElMenu>
    <TotalBalance :total="TotalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
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
</style>
