<template>
    <b-button size="sm" variant="danger" @click="delete_user(pk_user)" ><i class="fa fa-trash-o"></i> Eliminar Usuario</b-button>
</template>
<script lang="ts">
import swal from 'sweetalert2'
import api from './services/api_users'
export default ({
    //falta pk
    props: ['position','list','pk_user'],
    methods: {
        delete_user(pk_user){
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
                //return api.DeleteAPIUser(pk_user).then(res => {
                //    this.list.splice(this.position,1)
                    //swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Usuario ha sido eliminado.'})
                //})
                this.list.splice(this.position,1)
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Usuario ha sido eliminado.'})
            }         
        })
        }
    }
});
</script>
