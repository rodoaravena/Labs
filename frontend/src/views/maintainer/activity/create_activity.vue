<template>
    <b-form @submit.stop.prevent="onSubmitActivity">
        <b-row>
          <b-col xs sm md="2">
          </b-col>
          <b-col xs sm md="8">
            <b-input-group
            label-for="name_activity"
            invalid-feedback="Actividad requerida">
              <b-form-input name="name_activity"
                type="text"
                placeholder="Actividad"
                v-validate="{ required: true, min:3, max:100 }"
                min="3"
                max="100"
                v-model="activity"
                :state="validateState('name_activity')" 
                id="name_activity" class="form-control"> 
              </b-form-input>
              <b-input-group-append>
                <b-button type="submit" :disabled="veeErrors.any()" variant="outline-success"><i class="fa fa-plus"></i> Agregar actividad</b-button>
              </b-input-group-append>
            </b-input-group>

            <b-form-group
                class="salto-lin"
                label-for="_description"
                :state="validateState('_description')"
                invalid-feedback="Descripción requerida">
                <quill-editor 
                    class="quill-editor-example"
                    v-validate="{ required: true, min:100, max:3000 }" 
                    min="100"
                    max="3000"
                    :state="validateState('_description')" 
                    id="_description"
                    name="_description"
                    :options="editorOption" 
                    v-model="description"></quill-editor>
             </b-form-group>

          </b-col>
          <b-col xs sm md="2"></b-col>
        </b-row>
    </b-form>
</template>

<script>
import api from './services/activity'
import swal from 'sweetalert2'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
    props: ['list','id_thematic'],
    components:{quillEditor},
    data() {
        return {
            description:null,
            activity:null,
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
        PostActivity(){
            return api.PostAPIActivity(this.activity,this.description,this.id_thematic).then(res => {
                //console.log("data",res.data)
                this.list.push({'id_thematic':this.id_thematic,'id_activity':res.data.id,'name_activity':res.data.name,'description':res.data.description,'questions':[]})
                this.activity=null
                this.description=null
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Actividad registrada con éxito'})
            }) 
        }, 
        onSubmitActivity() { 
            this.$validator.validateAll().then((result) => {
                if (!result) { 
                    return
                }
            this.PostActivity()
            })
        },
    }
};
</script>
<style>
.quill-editor:not(.bubble) .ql-container,
.quill-editor:not(.bubble) .ql-container .ql-editor {
  height: 7rem;
  padding-bottom: 1rem;
}

.salto-lin{
    padding-top: 15px
}
</style>