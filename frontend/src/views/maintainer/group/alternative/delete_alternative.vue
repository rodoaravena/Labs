<template>
    <b-button @click="delete_alternative" :disabled="state_alternative==1" variant="outline-danger"><i class="fa fa-times"></i></b-button>
</template>
<script lang="ts">
import swal from 'sweetalert2'
import api from './services/alternative'

export default ({
    //falta pk
    props: ['position','pk_alternative','state_alternative','list_alternative'],
    methods: {
        delete_alternative(){
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
                return api.DeleteAPIAlternative(this.pk_alternative).then(res => {
                    this.list_alternative.splice(this.position,1)
                    swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Alternativa ha sido eliminada.'})
                })
            }         
        })
        }
    }
});
</script>