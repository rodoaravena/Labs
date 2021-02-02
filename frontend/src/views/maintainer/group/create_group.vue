<template>
    <b-form @submit.stop.prevent="onSubmitGroup">
        <b-row>
            <b-col xs sm md="12">
                <b-input-group
                label-for="name_group_id"
                invalid-feedback="Grupo requerido">
                    <b-form-input name="name_group_id"
                      type="text"
                      placeholder="Grupo"
                      v-validate="{ required: true, min:3, max:100 }"
                      min="3"
                      max="100"
                      v-model="name_group"
                      :state="validateState('name_group_id')" 
                      id="name_group_id" class="form-control"> 
                    </b-form-input>
                    <b-input-group-append>
                        <b-button type="submit" :disabled="veeErrors.any()" variant="outline-success"><i class="fa fa-plus"></i> Agregar grupo</b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-col>
        </b-row>
    </b-form>
</template>

<script>
import api from './services/group'
import swal from 'sweetalert2'

export default {
    props: ['list'],
    data() {
        return {
            name_group:null,
        }; 
    }, 
    methods: {
        validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }
        return null
        }, 
        PostGroup(){
            return api.PostAPIGroup(this.name_group).then(res => {
                this.list.push({'id_group':res.data.id,'name_group':res.data.name,'alternatives':[]})
                this.name_group=null
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Grupo registrado con éxito'})
            }) 
        },  
        onSubmitGroup() { 
            this.$validator.validateAll().then((result) => { 
                if (!result) { 
                    return
                }
            this.PostGroup()
            })
        },
    }
};
</script>