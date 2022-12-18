<template>
  <el-row align="middle">
    <el-col :span="24">
      <div class="header">
        <img src="@/assets/img/logo-tinktax.png" class="logo" >
        <div class="flex-grow-1" />
        <h2 class="header__text">{{nombreVista}}</h2>
        <el-dropdown>
          <div class="mdi mdi-account-circle">
            <span class="header__user">{{username}}</span>
          </div>
          <span class="el-dropdown-link">
            <div class="mdi mdi-arrow-down-drop-circle-outline" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="login">Cerrar Sesión</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>

const props = defineProps({
  nombreVista: { type: String, default: '404' },
  username: { type: String, default: '' },
  login: { type: Boolean, default: false }
})
</script>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
