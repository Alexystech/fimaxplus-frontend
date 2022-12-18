<template>
  <div style="height: 800px;">
    {{ count }}
    <br>
    <el-button type="success" size="default" @click="multiply()">dale</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

let count = ref(1)

function multiply () {
  count.value = count.value * 2
}
</script>

<!-- EJEMPLO OPTIONS API
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent ({
  data () {
    return {
      count: 1
    }
  },
  methods: {
    multiply () {
      this.count = this.count * 2
    }
  }
})
</script> -->
