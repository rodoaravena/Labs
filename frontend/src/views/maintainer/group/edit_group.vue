<template>
    <b-modal
        centered="centered"
        header-bg-variant="warning"
        ok-variant="warning"
        id="modal-edit-group"
        ref="modal"
        title="Actualizar Grupo"
        @show="resetModalEditGroup"
        @hidden="resetModalEditGroup"
        @ok="handleEditGroup">
        <b-form-group
            label-for="name_group_edit_id"
            invalid-feedback="Grupo requerido">
            <b-form-input name="name_group_edit_id"
                type="text"
                placeholder="Grupo"
                v-validate="{ required: true, min:3, max:100 }" 
                min="3"
                max="100"
                v-model="name_group_edit"
                :state="validateState('name_group_edit_id')" 
                id="name_group_edit_id" class="form-control"> 
            </b-form-input>
        </b-form-group>
        <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button :disabled="veeErrors.any()" class="margin-custom color-button"  @click="onSubmitEditGroup" size="sm" variant="warning"><i class="fa fa-edit"></i> Actualizar</b-button>
                    <b-button @click="$refs.modal.hide()" size="sm" variant="secondary"><i class=" fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
        </template>
    </b-modal>
</template>

<script>
import api from './services/group'
import swal from 'sweetalert2'

export default {
    props: ['name_group','id_group','list','position'],
    data() {
        return {
            name_group_edit:null,
        };
    },
    methods: {
        validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }
            return null
        }, 
        resetModalEditGroup() {
            this.name_group_edit=this.name_group
        },
        handleEditGroup(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.onSubmitEditGroup()
        },
        PutGroup(){
            return api.PutApiGroup(this.id_group,this.name_group_edit).then(res => {
                this.list[this.position].name_group=res.data.name
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Grupo actualizado con éxito'})
                this.$nextTick(() => {this.$refs.modal.hide()})
            })
        }, 
        onSubmitEditGroup() {
            this.$validator.validateAll().then((result) => {
            if (!result) {
                return
            }
            this.PutGroup()
            })
        }
    }
};
</script>