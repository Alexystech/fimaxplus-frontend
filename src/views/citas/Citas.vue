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
      <!--DRAWER AGENDAR CITA-->
      <el-drawer v-model="drawerAgendarCita" direction="rtl">
        <template #header>
          <h3>Agendar Cita</h3>
        </template>
        <template #default>
          <el-form :label="formAgendarCita" :label-position="'top'">
            <el-form-item label="¿Para quien es la cita?">
              <el-select v-model="formAgendarCita.bTipoCita" placeholder="Especialista" style="width: 100%">
                <el-option v-for="item in tipoCitas" :key="item.id" :label="item.name" :value="item.id" />
              </el-select>
            </el-form-item>
            <el-form-item label="Motivo de la visita">
              <el-input v-model="formAgendarCita.sMotivoVisita" placeholder="Motivo de visita" disabled />
            </el-form-item>
            <el-form-item label="Aseguradora">
              <el-input v-model="formAgendarCita.sAseguradora" placeholder="Aseguradora" disabled />
            </el-form-item>
            <el-form-item label="Informacion paciente">
              <el-input v-model="formAgendarCita.sNombrePersonalPaciente" placeholder="Nombre" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="formAgendarCita.sApellidoPersonalPaciente" placeholder="Apellido" />
            </el-form-item>
            <el-form-item label="Informacion contacto">
              <el-input v-model="formAgendarCita.sNumeroCelContacto" placeholder="Numero de celular" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="formAgendarCita.sEmail" placeholder="Email" type="email" />
            </el-form-item>
            <el-card v-if="formAgendarCita.bTipoCita === 1">
              <el-collapse>
                <el-collapse-item title="Campos adicionales">
                  <el-form-item label="Nombre">
                    <el-input v-model="formAgendarCita.sNombrePersonalContacto" placeholder="Nombre" />
                  </el-form-item>
                  <el-form-item label="Apellidos">
                    <el-input v-model="formAgendarCita.sApellidoPersonalContacto" placeholder="Apellidos" />
                  </el-form-item>
                </el-collapse-item>
              </el-collapse>
            </el-card>
            <el-form-item label="¿Tienes fiebre, tos, falta de aire o dificultad para respirar, o has estado en contacto con alguien que pueda presentar alguno de estos síntomas?" class="mt-3">
              <el-radio-group v-model="formAgendarCita.nFrstCuestionario">
                <el-radio :label="1">Si</el-radio>
                <el-radio :label="2">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="¿Es tu primera visita con este especialista?">
              <el-radio-group v-model="formAgendarCita.nScndCuestionario">
                <el-radio :label="1">Si</el-radio>
                <el-radio :label="2">No</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Comentario">
              <el-input v-model="formAgendarCita.sComentario" type="textarea" />
            </el-form-item>
            <el-button class="mdi mdi-content-save" @click="dialogAgregarCita = true" type="primary" />
          </el-form>
        </template>
      </el-drawer>
      <!--DIALOG AGENDAR CITA-->
      <el-dialog v-model="dialogAgregarCita" title="Atención" width="30" align-center :show-close="false">
        <span>¿Estas seguro de agendar la cita?</span>
        <template #footer>
          <span>
            <el-button @click="dialogAgregarCita = false">Cancelar</el-button>
            <el-button type="primary" @click="dialogAgregarCita = false; drawerAgendarCita = false; successMessage('Se ha agendado la cita')">Agregar</el-button>
          </span>
        </template>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script lang="ts" async setup>
import {ref} from 'vue';
import {ElMessage} from "element-plus";

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

let formAgendarCita = ref({
  bTipoCita: 0,
  sMotivoVisita: 'Fisioterapia $400',
  sAseguradora: 'Visita privada',
  sNombrePersonalPaciente: '',
  sApellidoPersonalPaciente: '',
  sNombrePersonalContacto: '',
  sApellidoPersonalContacto: '',
  sNumeroCelContacto: '',
  sEmail: '',
  nFrstCuestionario: 0,
  nScndCuestionario: 0,
  sComentario: ''
});
let tipoCitas = ref([
  {name: 'Para mi', id: 0},
  {name: 'Para otra persona', id: 1}
]);

let dialogAgregarCita = ref(false);

function successMessage(message: string) {
  ElMessage({
    showClose: true,
    message: message,
    type: 'success'
  });
}
</script>

<style scoped>

</style>
