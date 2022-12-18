<template>
  <el-aside :style="{ width: (flagMenu ? '64px' : '256px' ) }">
    <div class="logo-container">
      <img v-if="!flagMenu" src="@/assets/img/logo.png" class="logo" alt="fisiomax-logo">
      <img v-if="flagMenu" src="@/assets/img/emblema.png" class="emblema" alt="fisiomax-emblema">
    </div>
    <el-scrollbar>
      <el-menu :collapse="flagMenu" :collapse-transition="false" unique-opened router>
        <template v-for="(item, index) in datosMenu">
          <template v-if="item.hijos">
            <el-sub-menu :key="`${index}`" :index="`${index}`">
              <template #title>
                <i :class="item.icon" />
                <span>{{ item.tag }}</span>
              </template>
              <el-menu-item-group>
                <template v-if="flagMenu" #title>
                  <span>{{ item.tag }}</span>
                </template>
                <template v-for="(subitem, subindex) in item.hijos" :key="`${index}-${subindex}`">
                  <el-menu-item :index="`${index}-${subindex}`" :route="subitem.ruta">
                    <span>{{ subitem.tag }}</span>
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </el-sub-menu>
          </template>

          <template v-else>
            <el-menu-item :key="`${index}`" :index="`${index}`" :route="item.ruta">
              <i :class="item.icon" />
              <template #title>{{ item.tag }}</template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import menu from '../utils/menu'

// eslint-disable-next-line no-undef, @typescript-eslint/no-unused-vars
const props = defineProps({
  flagMenu: { type: Boolean, default: false }
})

const datosMenu = menu
</script>

<!-- <script lang="ts">
import menu from '../utils/menu'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    flagMenu: { type: Boolean, default: false }
  },
  setup () {
    const datosMenu = menu
    return { datosMenu }
  }
})
</script> -->
