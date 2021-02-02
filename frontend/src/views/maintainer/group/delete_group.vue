<template>
    <b-button @click="delete_group(position,id_group)" variant="danger" class="card-header-action color-button" ><i class="fa fa-times"></i> Eliminar Grupo</b-button>
</template>
<script lang="ts">
import swal from 'sweetalert2'
import api from './services/group'

export default ({
    props: ['position','list','id_group'],
    methods: {
        delete_group(position){
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
                return api.DeleteAPIGroup(this.id_group).then(res => {
                    this.list.splice(position,1)
                    swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Grupo ha sido eliminada.'})
                })
            }         
        })
        }
    }
});
</script>
