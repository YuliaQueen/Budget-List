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
    <ElMenuItem>
      <ElButton @click="drawer = true" type="primary" size="mini" style="margin-left: 16px">
        Open menu
      </ElButton>
      <ElDrawer title="Hello! it`s Menu" :visible.sync="drawer" size="30%">
        <div>Menu</div>          
      </ElDrawer>
    </ElMenuItem>
  </ElMenu>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      drawer: false,
      innerDrawer: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("You still have unsaved data, proceed?")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
}
</style>