<template>
    <div class="wrapper">
        <b-modal
          centered="centered"
          header-bg-variant="warning"
          ok-variant="warning"
          size="lg"
          id="modal-edit-thematic"
          ref="modal"
          title="Actualizar Temática"
          @show="resetModalEditThematic"
          @hidden="resetModalEditThematic"
          @ok="handleEditThematic">
                <b-form-group
                    label-for="name_edit_thematic_"
                    invalid-feedback="Temática requerida">
                    <b-form-input name="name_edit_thematic_"
                        type="text"
                        placeholder="Temática"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="300"
                        v-model="name_thematic_edit"
                        :state="validateState('name_edit_thematic_')" 
                        id="name_edit_thematic_" class="form-control"> 
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    label-for="name_description_edit"
                    invalid-feedback="Descripción requerido">
                    <b-form-textarea name="name_description_edit"
                    type="text"
                    placeholder="Descripción"
                    v-validate="{ required: true, min:5, max:200 }" 
                    min="5"
                    max="300"
                    v-model="description_edit"
                    :state="validateState('name_description_edit')" 
                    id="name_description_edit" class="form-control"> 
                    </b-form-textarea>
                </b-form-group>        
            <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button :disabled="veeErrors.any()" class="margin-custom color-button"  @click="onSubmitEditThematic" size="sm" variant="warning"><i class="fa fa-edit"></i> Actualizar</b-button>
                    <b-button @click="$refs.modal.hide()" size="sm" variant="secondary"><i class=" fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
            </template>
        </b-modal>
  </div> 
</template>

<script>
import api from './services/api_thematic'
import swal from 'sweetalert2'
export default {
    props: ['name_thematic_edit_father','description_edit_father','list','position','pk_edit_thematic'],
    data() {
        return {
            name_thematic_edit:null,
            description_edit:null
        };
    },
    methods: { 
        validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }
            return null
        }, 
        resetModalEditThematic() {
            this.name_thematic_edit=this.name_thematic_edit_father
            this.description_edit=this.description_edit_father
        },
        handleEditThematic(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.onSubmitEditThematic()
        },
        PutThematic(){
            return api.PutApiThematic(this.name_thematic_edit,this.description_edit,this.pk_edit_thematic).then(res => {
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Actualizado con éxito'})
                this.list[this.position].name=res.name
                this.list[this.position].description=res.description
                this.$nextTick(() => {this.$refs.modal.hide()})
            })
        },
        onSubmitEditThematic() {
            this.$validator.validateAll().then((result) => {
            if (!result) { 
                return
            }
            this.PutThematic()  
            })
        }
    }
};
</script>