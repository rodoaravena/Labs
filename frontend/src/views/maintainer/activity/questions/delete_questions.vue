<template>
    <b-button v-show="state==2" @click="delete_questions()" size="sm" class="mr-1" pill pressed variant="outline-danger" v-b-popover.hover="'Eliminar pregunta'"><i class="fa fa-times-circle" ></i></b-button>
</template>
<script lang="ts">
import swal from 'sweetalert2'
import api from './services/questions'

export default ({
    //falta pk
    props: ['position','list','pk_questions','state'],
    methods: {
        delete_questions(){
            swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                type: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Bórralo!'
            }).then((result) => {
            if(result.value) {
                return api.DeleteAPIQuestions(this.pk_questions).then(res => {
                    this.list.splice(this.position,1)
                    swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Pregunta ha sido eliminada.'})
                })
                //this.list.splice(this.position,1)
                //swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Pregunta ha sido eliminada.'})
            }         
        })
        }
    }
});
</script>