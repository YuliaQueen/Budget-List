<template>
  <div class="total-value">Balance: {{ total }} руб.</div>
</template>

<script>
export default {
  name: "Total Balance",
  props: {
    total: {
      total: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>