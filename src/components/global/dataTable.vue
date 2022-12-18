<template>
  <!-- Se le pueden pasar más atributos de el-table ya que es el componente raíz -->
  <el-table class="table-small-font" style="width: 100%" size="small" :resizable="false" :data="itemsPaginados" v-bind="$attrs">
    <template v-for="(col, index) in headers" :key="`${name}-${index}`">
      <el-table-column
        :fixed="col.fixed || false" :label="col.label" :prop="col.value" :width="col.width || 'auto'" :align="col.align || 'center'"
        :sortable="col.sortable"
      >
        <template #default="scope">
          <slot :item="scope.row" :name="col.value">
            {{ scope.row[col.value] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>

  <el-pagination
    class="mt-2" background small :page-sizes="pages" :default-page-size="15"
    layout="sizes, prev, pager, next" :total="filterTableData.length" @current-change="setPage"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Solo hacer const props = withDefaults(defineProps<Props>(), {}) si se planea leer dentro del script
export interface Props {
  items?: Object[]
  headers?: { sortable: false, fixed: false, value: string, label: string, width: string, align: string }[]
  name?: string
  search?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  headers: () => [],
  name: () => '',
  search: () => ''
})

const filterTableData = computed(() => {
  const res = props.items.filter((data) => {
    if (props.search) {
      const objectValues = Object.values(data)
      const filtro = objectValues.filter(val => String(val).toLowerCase().includes(props.search.toLowerCase()))
      if (filtro.length > 0) return data
    } else {
      return data
    }
  })
  return res
})

let pages = ref([15, 30, 60, 100])
let page = ref(1)
let pageSize = ref(15)

const itemsPaginados = computed(() => {
  return filterTableData.value.slice(pageSize.value * page.value - pageSize.value, pageSize.value * page.value)
})

function setPage (val: number) {
  page.value = val
}
</script>
