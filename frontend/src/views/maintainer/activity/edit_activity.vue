<template>
    <b-modal
      centered="centered"
      header-bg-variant="warning"
      ok-variant="warning"
      id="modal-edit-activity"
      ref="modal"
      title="Actualizar Actividad"
      @show="resetModalEditActivity"
      @hidden="resetModalEditActivity"
      @ok="handleEditActivity">
            <b-form-group
                label-for="name_edit_activity"
                invalid-feedback="Actividad requerida">
                <b-form-input name="name_edit_activity"
                    type="text"
                    placeholder="Actividad"
                    v-validate="{ required: true, min:3, max:100 }" 
                    min="3"
                    max="100"
                    v-model="name_activity_edit"
                    :state="validateState('name_edit_activity')" 
                    id="name_edit_activity" class="form-control"> 
                </b-form-input>
            </b-form-group>
            <b-form-group
                label-for="_description_edit"
                :state="validateState('_description_edit')"
                invalid-feedback="Descripción requerida">
                <quill-editor 
                    class="quill-editor-example"
                    v-validate="{ required: true, min:100, max:3000 }" 
                    min="100"
                    max="3000"
                    :state="validateState('_description_edit')" 
                    id="_description_edit"
                    name="_description_edit"
                    :options="editorOption" 
                    v-model="description_edit"></quill-editor>
             </b-form-group>
        <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button :disabled="veeErrors.any()" class="margin-custom color-button"  @click="onSubmitEditActivity" size="sm" variant="warning"><i class="fa fa-edit"></i> Actualizar</b-button>
                    <b-button @click="$refs.modal.hide()" size="sm" variant="secondary"><i class=" fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
        </template>
    </b-modal>
</template>

<script>
import api from './services/activity'
import swal from 'sweetalert2'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
    props: ['name_activity','description','position','list','id_activity'],
    components:{quillEditor},
    data() {
        return {
            name_activity_edit:null,
            description_edit:null,
            editorOption: {
            placeholder:"Ingrese descripción de la actividad",
            modules: {
                toolbar: [
                    [{ 'size': ['small', false, 'large'] }],
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'align': [] }]]
                    //['image']]
                }
            }
        };
    },
    methods: {
        validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }
            return null
        }, 
        resetModalEditActivity() {
            this.name_activity_edit=this.name_activity
            this.description_edit=this.description
        },
        handleEditActivity(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.onSubmitEditActivity()
        },
        PutActivity(){
            return api.PutApiActivity(this.name_activity_edit,this.description_edit,this.id_activity).then(res => {
                this.list[this.position].name_activity=res.data.name
                this.list[this.position].description=res.data.description
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Actividad actualizada con éxito'})
                this.$nextTick(() => {this.$refs.modal.hide()})
            })
        },
        onSubmitEditActivity() {
            this.$validator.validateAll().then((result) => {
            if (!result) {
                return
            }
            this.PutActivity()  
            })
        }
    }
};
</script>