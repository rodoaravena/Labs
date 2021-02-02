<template>
    <div class="wrapper">
        <div class="animated fadeIn">
            <b-row>
                <b-col sm xs md="12">
                    <b-card
                      header="Primary"
                      header-bg-variant="primary"
                      header-text-variant="white"
                      align="left"
                    >
                    <div slot="header">
                        <strong class="text-white"><i class="fa fa-book"></i> Evaluación de Diagnóstico </strong>
                        <div class="card-header-actions">
                            <b-button @click="Post_result()" block pressed variant="outline-success" class="card-header-action" aria-pressed="true"><i class="fa fa-plus-circle"></i> Enviar</b-button>
                        </div>
                    </div>

                    <b-row>
                        <b-col sm xs md="12" class="table-responsive">
                            <table class="table table-bordered" v-for="(listn,index) in list_evaluation" :key="index">
                                <thead class="bg-secondary" style="color:white">
                                  <th class="text-center">Preguntas</th>
                                  <th v-for="(level,index2) in listn.Level" :key="index2" class="text-center">{{level.text}}</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(questions,index3) in listn.question" :key="index3">
                                        <td style="width:15%" class="text-center">{{questions.question}}</td>
                                        <td class="text-center" v-for="(level2,index4) in questions.Level" :key="index4">
                                            <switches v-if="level2.type_answer=='RA'" class="answer-box" v-bind:valueid="level2.type_answer+'-'+level2.id + '-' +level2.id_question" @click.native="getSwitch(level2,listn.question,index3)"  v-model="level2.answer_boolean" theme ="bootstrap" :color="level2.color" ></switches>
                                            <switches v-if="level2.type_answer=='RC'" class="answer-box" v-bind:valueid="level2.type_answer+'-'+level2.id + '-' +level2.id_question" @click.native="getSwitchRC(level2)" v-model="level2.answer_boolean" theme ="bootstrap" :color="level2.color" ></switches>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>  
                        </b-col>

                        <b-col sm xs md="12" class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="bg-secondary" style="color:white">
                                  <th class="text-center">Preguntas</th>
                                  <th class="text-center">Respuestas</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(list_developing,index) in list_question_developing" :key="index">
                                        <td style="width:15%" class="text-center"><p v-html="list_developing.question"></p></td>
                                        <td class="text-center">
                                            <b-form-textarea name="reply"
                                                type="text"
                                                :placeholder="'Respuesta '+(index+1)"
                                                min="5"
                                                max="300"
                                                :state="validateNameAnswer(list_developing.answer)" 
                                                v-model="list_developing.answer"
                                                id="reply" class="form-control">
                                            </b-form-textarea>
                                            <b-form-invalid-feedback align="left" id="reply">Respuesta requerida</b-form-invalid-feedback>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>  
                        </b-col>

                    </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<script>
import Switches from 'vue-switches';
import api from '../evaluation/services/api_evaluation'
import swal from 'sweetalert2'
import apilogin from '@/services/Login'
export default {
    components:{
        Switches
    },
    data:function(){
        return{
            list_evaluation:[],
            list_result:[],
            list_question_developing:[],
        }
    },
    mounted(){
        this.getlist()
        this.getlistdeveloping()
    },
    methods:{
        validateNameAnswer(name) {
            return name.trim().length > 5 && name.trim().length < 300 ? true:false
        },
        //Recorrer listas
        getlist(){
            for(var i=0;i<this.$store.state.list_evaluation.length;i++){
                this.list_evaluation.push({'name':this.$store.state.list_evaluation[i]['name'],'Level':[],'question':[]})
                for(var j=0;j<this.$store.state.list_evaluation[i]['Level'].length;j++){
                    this.list_evaluation[i]['Level'].push({'id':this.$store.state.list_evaluation[i]['Level'][j]['id'],'text':this.$store.state.list_evaluation[i]['Level'][j]['text']})
                }
                for(var h=0;h<this.$store.state.list_evaluation[i]['question'].length;h++){
                    this.list_evaluation[i]['question'].push({'id':this.$store.state.list_evaluation[i]['question'][h]['id'],'type_question':this.$store.state.list_evaluation[i]['question'][h]['type_question'],'question':this.$store.state.list_evaluation[i]['question'][h]['question'],'Level':[]})
                    for(var k=0;k<this.$store.state.list_evaluation[i]['Level'].length;k++){
                        if(this.$store.state.list_evaluation[i]['question'][h]['type_question']=='RA'){
                            this.list_evaluation[i]['question'][h]['Level'].push({'type_answer':this.$store.state.list_evaluation[i]['question'][h]['type_question'],'id_question':this.$store.state.list_evaluation[i]['question'][h]['id'],'id':this.$store.state.list_evaluation[i]['Level'][k]['id'],'answer_boolean':false,'color':'primary'}) 
                        }else if(this.$store.state.list_evaluation[i]['question'][h]['type_question']=='RC'){
                             this.list_evaluation[i]['question'][h]['Level'].push({'type_answer':this.$store.state.list_evaluation[i]['question'][h]['type_question'],'id_question':this.$store.state.list_evaluation[i]['question'][h]['id'],'id':this.$store.state.list_evaluation[i]['Level'][k]['id'],'answer_boolean':false,'color':'warning'}) 
                        }
                    }
                }
           }
        },
        getlistdeveloping(){
            for(var i=0;i<this.$store.state.list_question_developing.length;i++){
                this.list_question_developing.push({'id':this.$store.state.list_question_developing[i]['id'],'type_answer':this.$store.state.list_question_developing[i]['type_question'],'question':this.$store.state.list_question_developing[i]['question'],'answer':''})
            }
        },

        getLogout(){
            return apilogin.getApiTokenLogout().then(res => {
            if(res.status == 200){
                console.log(res.data)
                this.$router.push({ name: 'Login' })
                }
            })
        }, 

        //Guardar respuestas RA Y RC nueva lista 
        post_answer(){
            var answer_box = document.getElementsByClassName("answer-box");
            for(var i = 0; i < answer_box.length; i++){
                if(answer_box[i].children[0].checked==true){
                    this.list_result.push({
                        'type_answer':answer_box[i].getAttribute('valueid').split('-')[0],
                        'id_question':answer_box[i].getAttribute('valueid').split('-')[2],
                        'id':answer_box[i].getAttribute('valueid').split('-')[1]
                    });
                }
            }
        },
        //Guarda y valida respuestas de desarrollo
        getlistanswer(){
            for(var i=0;i<this.list_question_developing.length;i++){
                 if(this.validateNameAnswer(this.list_question_developing[i]['answer']) ) {
                     this.list_result.push({
                         'type_answer':this.list_question_developing[i]['type_answer'],
                         'id_question':this.list_question_developing[i]['id'],
                         'answer':this.list_question_developing[i]['answer']
                     });
                    
                }else {
                    this.list_result = []
                    swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'error',title: 'Respuesta de desarrollo incompleta.'})
                    break;
                }
            }

            if(this.list_result.length != 0){
                this.post_answer();
                this.PostAnswers();
            }
        },

        //Envia los resultados
        Post_result(){
            swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                type: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Enviar'
            }).then((result) => {
            if(result.value) {
                this.getlistanswer()
            }         
        })
        },
        PostAnswers(){
            var data = {
                code: this.$store.state.code,
                list:this.list_result
            }
            return api.PostAPIAnswers(data).then(res => {
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Sus respuestas fueron enviadas con éxito.'}).then((result) => { this.getLogout() })
            })
        },
        getSwitch(list,list_questions,position){
            if(list.answer_boolean!=true){
                list.color="success"
            }else{
                list.color="primary"
            }
            for(var i=0;i<list_questions[position]['Level'].length;i++){
                if(list_questions[position]['Level'][i]['answer_boolean']==true){
                    list_questions[position]['Level'][i]['answer_boolean']=false
                    list_questions[position]['Level'][i]['color']="primary"
                }
            }
          
        },
        getSwitchRC(list){
            if(list.answer_boolean!=true){
                list.color="success"
            }else{
                list.color="warning"
            }
        }

    }
}
</script>
<style>
.table th, .table td {
    padding: 0.75rem;
    vertical-align: middle; 
    border-top: 1px solid #c8ced3;
}
</style>