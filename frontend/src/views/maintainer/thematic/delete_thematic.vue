<template>
    <b-button size="sm" variant="danger" @click="delete_thematic(pk_thematic)" ><i class="fa fa-trash-o"></i> Eliminar Temática</b-button>
</template>
<script lang="ts">
import swal from 'sweetalert2'
import api from './services/api_thematic'

export default ({
    props: ['position','list','pk_thematic'],
    methods: {
        delete_thematic(pk_thematic){
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
                return api.DeleteAPIThematic(pk_thematic).then(res => {
                    this.list.splice(this.position,1)
                    swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Temática ha sido eliminado'})
                })
            }         
        })
        }
    }
});
</script>
