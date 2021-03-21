<template>
  <ElMenu class="menu" mode="horizontal" background-color="#113">
    <ElMenuItem>SIMPLE BUDGET LIST</ElMenuItem>
    <ElMenuItem>About</ElMenuItem>
    <ElMenuItem>Contacts</ElMenuItem>
    <ElMenuItem>Blog</ElMenuItem>
    <ElMenuItem>
      <el-row>
        <ElAvatar
          class="avatar"
          size="large"
          shape="square"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        Julia Koroleva
      </el-row>
    </ElMenuItem>
  </ElMenu>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
}
.avatar {
}
</style>