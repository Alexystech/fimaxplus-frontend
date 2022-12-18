<template>
  <el-row :gutter="20">
    <el-col :span="8" :sm="7">
      <el-card shadow="always">
        <el-select v-model="selectedSpecialist" placeholder="Especialista" style="width: 100%">
          <el-option v-for="item in especialistas" :key="item.id" :label="item.name" :value="item.id" />
        </el-select>
      </el-card>
    </el-col>
    <el-col :sm="17">
      <el-card shadow="always" style="height: 72px">
        <el-tooltip content="Gestion de Citas" placement="top">
          <el-button type="primary" class="mdi mdi-file-document-check" />
        </el-tooltip>
      </el-card>
    </el-col>
    <el-col sm="12" style="margin-top: 10px">
      <el-card shadow="always">
        <h3>Agenda una Cita</h3>
        <dataTable stripe :headers="horariosHeader" :items="horarios" name="horarios" height="54vh" style="margin-top: 20px">
          <template #sDia="{ item }">
            {{ item.sDia }}
          </template>
          <template #nOcho="{}">
            <el-check-tag checked="true" size="small" @click="drawerAgendarCita = true">08:00</el-check-tag>
          </template>
          <template #nNueve="{}">
            <el-check-tag checked="true" size="small">09:00</el-check-tag>
          </template>
          <template #nDiez="{}">
            <el-check-tag checked="true" size="small">10:00</el-check-tag>
          </template>
          <template #nOnce="{}">
            <el-check-tag checked="true" size="small">11:00</el-check-tag>
          </template>
          <template #nDoce="{}">
            <el-check-tag checked="true" size="small">12:00</el-check-tag>
          </template>
          <template #nTrece="{}">
            <el-check-tag checked="true" size="small">13:00</el-check-tag>
          </template>
          <template #nCatorce="{}">
            <el-check-tag checked="true" size="small">14:00</el-check-tag>
          </template>
          <template #nQuince="{}">
            <el-check-tag checked="true" size="small">15:00</el-check-tag>
          </template>
          <template #nDieciseis="{}">
            <el-check-tag checked="true" size="small">16:00</el-check-tag>
          </template>
          <template #nDiecisiete="{}">
            <el-check-tag checked="true" size="small">17:00</el-check-tag>
          </template>
          <template #nDieciocho="{}">
            <el-check-tag checked="true" size="small">18:00</el-check-tag>
          </template>
          <template #nDiecinueve="{}">
            <el-check-tag checked="true" size="small">19:00</el-check-tag>
          </template>
        </dataTable>
      </el-card>
      <el-drawer v-model="drawerAgendarCita" direction="rtl">
        <template #header>
          <h3>Agendar Cita</h3>
        </template>
        <template #default>
        </template>
      </el-drawer>
    </el-col>
  </el-row>
</template>

<script lang="ts" async setup>
import {ref} from 'vue';

let selectedSpecialist = ref({})
let especialistas = ref([
  {name: 'Lic Jared Lavin Jiménez', id: 0},
  {name: 'Lic Nancy Ivonne Cruz Hernández', id: 0}
]);
let horarios = ref([
  {sDia: 'Lunes 19 Dic'},
  {sDia: 'Martes 20 Dic'},
  {sDia: 'Miercoles 21 Dic'},
  {sDia: 'Jueves 22 Dic'},
  {sDia: 'Viernes 23 Dic'},
  {sDia: 'Sabado 24 Dic'},
]);
let horariosHeader = [
  {label: 'Dia', value: 'sDia', align: 'center'},
  {label: '08:00:00', value: 'nOcho', align: 'center'},
  {label: '09:00:00', value: 'nNueve', align: 'center'},
  {label: '10:00:00', value: 'nDiez', align: 'center'},
  {label: '11:00:00', value: 'nOnce', align: 'center'},
  {label: '12:00:00', value: 'nDoce', align: 'center'},
  {label: '13:00:00', value: 'nTrece', align: 'center'},
  {label: '14:00:00', value: 'nCatorce', align: 'center'},
  {label: '15:00:00', value: 'nQuince', align: 'center'},
  {label: '16:00:00', value: 'nDieciseis', align: 'center'},
  {label: '17:00:00', value: 'nDiecisiete', align: 'center'},
  {label: '18:00:00', value: 'nDieciocho', align: 'center'},
  {label: '19:00:00', value: 'nDiecinueve', align: 'center'}
];

let drawerAgendarCita = ref(false);

</script>

<style scoped>

</style>
