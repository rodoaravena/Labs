<template>
    <b-button @click="delete_activity(position,pk_activity)" variant="danger" class="card-header-action color-button" ><i class="fa fa-times"></i> Eliminar Actividad</b-button>
</template>
<script lang="ts">
import swal from 'sweetalert2'
import api from './services/activity'

export default ({
    props: ['position','list','pk_activity'],
    methods: {
        delete_activity(position){
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
                return api.DeleteAPIActivity(this.pk_activity).then(res => {
                    this.list.splice(position,1)
                    swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Actividad ha sido eliminada.'})
                })
            }         
        })
        }
    }
});
</script>
