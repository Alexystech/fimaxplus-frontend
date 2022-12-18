<template>
  <el-config-provider :locale="es">
    <el-container v-if="login === false">
      <div class="banner">
        <div class="banner__video">
          <video autoplay muted loop>
            <source src="https://ti.gwldx.com/biostar-temp/vid/biostar-intro.mp4"
                    type="video/mp4">
          </video>
        </div>
        <div class="form_login">
          <el-form :model="loginForm" :label-position="'top'">
            <el-form-item>
              <label>USUARIO</label>
              <el-input v-model="loginForm.usuario" />
            </el-form-item>
            <el-form-item>
              <label>CONTRASEÑA</label>
              <el-input v-model="loginForm.contrasenia" type="password" />
            </el-form-item>
            <el-button @click="initSession()" type="primary" size="large">INICIAR SESIÓN</el-button>
          </el-form>
        </div>
      </div>
    </el-container>
    <el-container v-else class="layout-container" style="height: 100vh;">
      <Sidebar :flag-menu="flagMenu" />
      <el-container>
        <el-header>
          <el-row align="middle">
            <el-col :span="23">
              <i class="mdi mdi-menu" @click="flagMenu = !flagMenu" />
              <div style="display: inline-flex"> {{ nombreVista }} </div>
              <div class="flex-grow-1" />
              <el-dropdown trigger="click">
                <div>{{ loginForm.usuario }}<span class="mdi mdi-account"/></div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="login = false">Cerrar sesion</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-scrollbar>
            <div class="container-fluid py-3" style="width: 95%;">
              <router-view />
            </div>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import es from 'element-plus/lib/locale/lang/es'
import {useRoute} from "vue-router";
import Sidebar from '@/components/sidebar.vue'
import axios from "axios";
import {ElMessage} from "element-plus";

let login = ref(false);
let flagMenu = ref(false);
let loginForm = ref({
  usuario: '',
  contrasenia: ''
})

let nombreVista = ref('')
const route = useRoute();

let credentials = ref({
  user: 'AlexisV',
  password: '123*'
});

watch(() => route.name, () => {
  nombreVista.value = route.name ? String(route.name) : '404'
})

function initSession() {
  if (loginForm.value.usuario === credentials.value.user && loginForm.value.contrasenia === credentials.value.password) {
    successMessage('Bienvenido ' + loginForm.value.usuario)
    login.value = true
  } else {
    errorMessage('Usuario o contraseña incorrectos')
  }
}

function successMessage(message: string) {
  ElMessage({
    showClose: true,
    message: message,
    type: 'success'
  })
}

function limpiarLoginForm() {
  loginForm.value.usuario = '';
  loginForm.value.contrasenia = '';
}

function errorMessage(message: string) {
  ElMessage({
    showClose: true,
    message: message,
    type: 'error'
  })
}
</script>

<!-- <script lang="ts">
import { defineComponent, ref } from 'vue'
import sidebar from '@/components/sidebar.vue'

export default defineComponent({
  components: {
    sidebar
  },
  setup () {
    let flagMenu = ref(false)

    return { flagMenu }
  }
})
</script> -->
