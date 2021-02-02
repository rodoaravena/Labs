<template>
    <b-modal
        scrollable
        centered="centered"
        header-bg-variant="success"
        ok-variant="success"
        size="lg"
        id="modal-code"
        ref="modal"
        title="Reporte General"
        >
        <b-table               
            show-empty
            :items="list_code" :fields="fields"
            responsive 
            striped 
            hover 
            bordered
            class="text-center"
            >
            <template slot="id" slot-scope="data">
              {{ data.index + 1 }}
            </template>
            <template slot="action" slot-scope="data">
                <div>
                    <b-button :to="{ name: 'Reporte General',params: {course: data.item.course,code:data.item.code}}" class="margin-custom" size="sm"  variant="success"><i class="fa fa-bar-chart-o"></i> Reporte GeneraL</b-button>
                    <b-button :to="{ name: 'Ver resultados',params: {course: data.item.course,code:data.item.code}}" size="sm"  variant="primary"><i class="fa fa-pie-chart"></i> Ver Resultados</b-button>
                </div> 
            </template>
        </b-table>
        <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button @click="$refs.modal.hide()" size="sm"  variant="secondary"><i class="fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
        </template> 
    </b-modal>
</template>

<script>
//import api from './services/course'
import swal from 'sweetalert2'
export default {
    props: ['list_code'],
    data() {
        return {
            fields: [
                {key: 'id', label:'N°'},
                {key: 'course', label: 'Curso'},
                {key: 'start', label: 'Inicio'},
                {key: 'end', label: 'Termino'},
                {key: 'action', label:'Acción'},
            ],
        };
    },
};
</script>
