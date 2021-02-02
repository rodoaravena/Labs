<template>
    <div class="wrapper">
    <b-row v-for="(list_questionss,index1) in list_questions" :key="index1" >
        <b-col xs sm md="12">
            <b-card header="secondary"
                header-bg-variant="info" 
                header-text-variant="white">
                <div slot="header" class="d-none d-lg-block">
                <strong class="text-white middle-custom"><span> Pregunta N°{{index1+1}}: </span><span v-if="list_questionss.type_questions=='RE'">Párrafo</span><span v-if="list_questionss.type_questions=='RC'">Casilla de verificación</span><span v-if="list_questionss.type_questions=='RA'">Selección multiple</span></strong>
                    <div class="card-header-actions">
                        <b-button v-if="list_questionss.type_questions!='RE'" v-show="list_questionss.state==1" :disabled="validateName(list_questionss.name_questions,list_questionss.type_questions)==false || validateType(list_questionss.type_questions)==false || validateGroup(list_questionss.select_group)==false" @click="onSubmitQuestions(list_questionss,index1)"  size="sm" class="mr-1" pill pressed variant="outline-success" v-b-popover.hover="'Guardar pregunta'"><i class="color-button fa fa-plus"></i></b-button>
                        <b-button v-else v-show="list_questionss.state==1" :disabled="validateName(list_questionss.name_questions,list_questionss.type_questions)==false || validateType(list_questionss.type_questions)==false " @click="onSubmitQuestions(list_questionss,index1)"  size="sm" class="mr-1" pill pressed variant="outline-success" v-b-popover.hover="'Guardar pregunta'"><i class="color-button fa fa-plus"></i></b-button>
                        <b-button v-show="list_questionss.state==2" size="sm" class="mr-1" @click="EditQuestions(list_questionss)" pill pressed variant="outline-warning" v-b-popover.hover="'Editar pregunta'"><i class="color-button fa fa-edit"></i></b-button>
                        <Delete_questions :position="index1" :list="list_questions" :state="list_questionss.state" :pk_questions="list_questionss.id_question"></Delete_questions>
                    </div>
                </div>
                <div slot="header" class="d-lg-none" mobile align="center">
                     <strong class="text-white middle-custom"><span><u>Pregunta N°{{index1+1}}: </u></span><u><span v-if="list_questionss.type_questions=='RE'">Párrafo</span></u><u><span v-if="list_questionss.type_questions=='RC'">Casilla de verificación</span></u><u><span v-if="list_questionss.type_questions=='RA'">Selección multiple</span></u></strong>
                    <div>
                        <b-button v-if="list_questionss.type_questions!='RE'" v-show="list_questionss.state==1" :disabled="validateName(list_questionss.name_questions,list_questionss.type_questions)==false || validateType(list_questionss.type_questions)==false || validateGroup(list_questionss.select_group)==false" @click="onSubmitQuestions(list_questionss,index1)"  size="sm" class="mr-1" pill pressed variant="outline-success" v-b-popover.hover="'Guardar pregunta'"><i class="color-button fa fa-plus"></i></b-button>
                        <b-button v-else v-show="list_questionss.state==1" :disabled="validateName(list_questionss.name_questions,list_questionss.type_questions)==false || validateType(list_questionss.type_questions)==false " @click="onSubmitQuestions(list_questionss,index1)"  size="sm" class="mr-1" pill pressed variant="outline-success" v-b-popover.hover="'Guardar pregunta'"><i class="color-button fa fa-plus"></i></b-button>
                        <b-button v-show="list_questionss.state==2" size="sm" class="mr-1" @click="EditQuestions(list_questionss)" pill pressed variant="outline-warning" v-b-popover.hover="'Editar pregunta'"><i class="color-button fa fa-edit"></i></b-button>
                        <Delete_questions :position="index1" :list="list_questions" :state="list_questionss.state" :pk_questions="list_questionss.id_question"></Delete_questions>
                    </div>
                </div>

                <b-row>
                    <b-col v-bind:class="{'col-md-12': list_questionss.type_questions=='RE'} || {'col-md-6': list_questionss.type_questions!='RE'}">
                        <b-form-group
                        label-for="select_type_questions"
                        invalid-feedback="Tipo pregunta requerida">
                            <b-form-select name="select_type_questions" 
                            :disabled="list_questionss.state==2"
                            @change="change_select(index1,list_questionss.type_questions,list_questionss.select_group)"
                              v-model="list_questionss.type_questions" 
                              :state="validateType(list_questionss.type_questions)" 
                              id="select_type_questions" class="form-control">
                              <option selected disabled :value="null">Seleccione tipo pregunta</option>
                              <option selected :disabled="list_questionss.state_type==3" value="RA">Selección multiple</option>      
                              <option selected :disabled="list_questionss.state_type==3" value="RC">Casillas de verificación</option>
                              <option selected :disabled="list_questionss.state_type==2" value="RE">Párrafo</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col xs sm md="6" v-if="list_questionss.type_questions=='RC' || list_questionss.type_questions=='RA'">
                        <b-form-group
                        label-for="name_questions"
                        invalid-feedback="Pregunta requerida">
                            <b-form-input name="name_questions"
                                :disabled="list_questionss.state==2"
                                type="text"
                                placeholder="Pregunta"
                                min="3"
                                max="200"
                                v-model="list_questionss.name_questions"
                                :state="validateName(list_questionss.name_questions,list_questionss.type_questions)" 
                                id="name_questions" class="form-control"> 
                            </b-form-input>
                        </b-form-group>   
                    </b-col>


                    <b-col xs sm md="12" v-if="list_questionss.type_questions=='RC' || list_questionss.type_questions=='RA'">
                        <b-input-group
                        label-for="select_group_id">
                            <b-form-select name="select_group_id" 
                                :disabled="list_questionss.state==2"
                                v-model="list_questionss.select_group" 
                                :state="validateGroup(list_questionss.select_group)"  
                                id="select_group_id" class="form-control">
                                <option selected disabled :value="null">Seleccione grupo</option>
                                <option v-for="(group,index) in list_group" :key="index" v-bind:value="{id_group:group.id_group, name_group:group.name_group,alternatives:group.alternatives}" > {{group.name_group}}</option>
                            </b-form-select>
                            <b-input-group-append class="d-none d-lg-block">
                                <b-button variant="outline-success" :disabled="list_questionss.state==2" @click="openModal"><i class="fa fa-plus-circle"></i> Nuevo grupo</b-button>
                            </b-input-group-append>
                            <b-form-invalid-feedback align="left" id="select_group_id">Grupo requerido</b-form-invalid-feedback>
                        </b-input-group>
                        <b-form-group class="d-lg-none salto-linea-custom" mobile>
                         <b-button variant="outline-success" class="btn-block" :disabled="list_questionss.state==2" @click="openModal"><i class="fa fa-plus-circle"></i> Nuevo grupo</b-button>
                        </b-form-group>
                    </b-col>
                </b-row>

                <b-row v-if="list_questionss.type_questions=='RE'">
                    <b-col xs sm md="12" class="salto-linea-custom">
                        <b-form-group
                            label-for="name_questions"
                            :state="validateName(list_questionss.name_questions,list_questionss.type_questions)"
                            invalid-feedback="Párrafo requerido">
                            <quill-editor 
                                class="quill-editor-example"
                                v-validate="{ required: true, min:30, max:3000 }" 
                                min="100"
                                max="3000"
                                :disabled="list_questionss.state==2"
                                :state="validateName(list_questionss.name_questions,list_questionss.type_questions)" 
                                name="name_questions"
                                :options="editorOption" 
                                v-model="list_questionss.name_questions"
                                id="name_questions"></quill-editor>
                        </b-form-group>
                    </b-col>
                </b-row>
               
            </b-card>
        </b-col>
    </b-row>
   
    <b-modal
        scrollable
        centered="centered"
        header-bg-variant="success"
        ok-variant="success"
        size="lg"
        id=""
        ref="modal-group"
        title="Administración de Grupos"
        >
        <Group :list_group="list_group"></Group>
        <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button @click="closeModal" size="sm"  variant="secondary"><i class="fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
        </template> 
    </b-modal>

    </div>
</template>

<script>
import swal from 'sweetalert2'
import Delete_questions from '../questions/delete_questions'
import Group from '@/views/maintainer/group/group'

import api from './services/questions'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default { 
    props: ['list_questions','list_group'],
    components:{
        Delete_questions,
        Group,
        quillEditor
    }, 
    data() {
        return {
            editorOption: {
            placeholder:"Ingrese párrafo",
            modules: {
                toolbar: [
                    [{ 'size': ['small', false, 'large'] }],
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'align': [] }]]
                }
            }
        }; 
    },
    methods: {
        openModal(){
            this.$refs['modal-group'].show();
        },
        closeModal(){
            this.$refs['modal-group'].hide();
        },
        change_select(index,type,group){
            if(type=='RE'){
                this.list_questions[index]['changer_type']=false
                this.list_questions[index]['name_questions']=''
                this.list_questions[index]['select_group']=null
            }else if(type!=3 && this.list_questions[index]['changer_type']==false){
                this.list_questions[index]['changer_type']=true
                this.list_questions[index]['name_questions']=''
            }
        },
        validateName(name,type) {
            if(type=='RE'){
                return name.length >30 && name.length < 3000 ? true:false
            }
            return name.length >3 && name.length < 200 ? true:false
        },
        validateType(type) {
            return type!=null ? true:false
        }, 
        validateGroup(type) {
            return type!=null ? true:false
        },
        PostQuestions(list,index){
            var aux_select=0
            if(list.select_group!=null){
                aux_select=list.select_group.id_group
            } 
            return api.PostAPIQuestions(list.name_questions,list.type_questions,list.id_activity,list.id_question,aux_select).then(res => {
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Pregunta guardada con éxito.'})
                this.list_questions[index].id_question=res.id
                console.log("hola",res)
            })
        }, 
        onSubmitQuestions(list,index) {
            //list_state, changer_type ok
            list.state=2 
            //list.state_alternative=true
            if(list.type_questions!='RE'){
                list.state_type=2
                if(this.validateName(list.name_questions,list.type_questions) != false || this.validateType(list.type_questions)!=false || this.validateGroup(list.select_group)!=false) {
                    this.PostQuestions(list,index)
                }
            }else{
                list.state_type=3
                if(this.validateName(list.name_questions,list.type_questions) != false || this.validateType(list.type_questions)!=false) {
                    this.PostQuestions(list,index)
                }
            }
        },
        EditQuestions(list){
            list.state=1
        }
    }
};
</script>
<style>
.salto-linea-custom{
    padding-top: 2px
}
.color_button:hover{
  color:white;
}
</style>