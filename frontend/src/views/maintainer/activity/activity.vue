<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
            <div slot="header" class=" d-none d-lg-block">
              <strong class="text-white"><i class="fa fa-question-circle"></i> Administración de Actividades</strong>  
              <div class="card-header-actions">
                <b-button :style="'color:white;'" :disabled="list==''" v-b-modal.modal-preview variant="info" style="margin-right:5px" class=" card-header-action color-button"><i class="fa fa-eye"></i> Vista previa</b-button>
                <b-button :disabled="list==''" @click="finish()" variant="success" class=" card-header-action color-button"><i class="fa fa-sign-in"></i> Finalizar</b-button>
              </div>
            </div>

            <div slot="header" class="d-lg-none" mobile align="center">
              <strong class="text-white middle-custom"><i class="fa fa-question-circle"></i> Administración de Actividades</strong>  
              <b-button :style="'color:white;'" :disabled="list==''"  v-b-modal.modal-preview variant="info" style="margin-right:5px" class=" card-header-action color-button"><i class="fa fa-eye"></i> Vista previa</b-button>
              <b-button :disabled="list==''" @click="finish()" variant="success" class="card-header-action color-button"><i class="fa fa-sign-in"></i> Finalizar</b-button>
            </div>
            <b-row>
              <b-col xs sm md="2"></b-col>
              <b-col xs sm md="8">
                <swatches v-model="color" :colors="colors"
                  v-on:input="change_color"
                  row-length="5"
                  shapes="circles"
                  fallback-input-type="color"
                  show-fallback
                  show-border
                  popover-to="left">
                  <b-card slot="trigger" class="text-center" :style="'color:white; background-color:'+color+';'" >
                    <blockquote class="card-blockquote">
                      <footer>
                        <h1 class="inline">Elemento {{$route.params.name}}</h1>
                      </footer>
                    </blockquote>
                  </b-card>
                </swatches>
              </b-col>
              <b-col xs sm md="2"></b-col>
            </b-row>
               
            <b-row>
              <b-col xs sm md="2"></b-col>
              <b-col xs sm md="8">
                <b-form-group
                    label-for="image_id">
                    <b-form-file 
                        type="file" 
                        id="image_id" 
                        name="image_id" 
                        v-model="imageData"  
                        @change="previewImage"
                        accept=".bmp, .jpeg, .jpg , .png" size="sm">
                    </b-form-file>
                </b-form-group>
              </b-col>
              <b-col xs sm md="2"></b-col>
            </b-row>

            <Create_activity :list="list" :id_thematic="thematic_id"></Create_activity><br>
           
            <b-row class="salto-linea-custom" :show="list" v-for="(list_init,index) in list" :key="index" >
              <b-col xs sm md="2"></b-col>
              <b-col xs sm md="8">
                <b-card
                  header="secondary"
                  header-bg-variant="secondary" 
                  header-text-variant="white"
                  :no-body="list_init.questions.length==0"
                >
                  <div slot="header" class="d-none d-lg-block">
                    <strong class="text-white middle-custom"><span>{{list_init.name_activity}}</span></strong>
                    <div class="card-header-actions">
                      <b-button @click="questions_and_type(index,list_init.id_activity)" variant="success" class="margin-custom card-header-action color-button" ><i class="fa fa-plus-circle"></i> Nueva Pregunta</b-button>
                      <b-button @click="get_activity_edit(list_init.name_activity,index,list_init.description,list_init.id_activity)" v-b-modal.modal-edit-activity variant="warning" class="margin-custom card-header-action color-button" ><i class="fa fa-edit"></i> Editar Actividad</b-button>
                      <Delete_activity :list="list" :position="index"  class="margin-custom" :pk_activity="list_init.id_activity"></Delete_activity>
                    </div>
                  </div>

                  <div slot="header" class="d-lg-none" mobile align="center">
                    <strong class="text-white middle-custom"><span><u>{{list_init.name_activity}}</u></span></strong>
                    <div class="card-header-actions">
                      <b-button @click="questions_and_type(index,list_init.id_activity)" variant="success" class="margin-custom card-header-action color-button" ><i class="fa fa-plus-circle"></i> Nueva Pregunta</b-button>
                      <b-button @click="get_activity_edit(list_init.name_activity,index,list_init.description,list_init.id_activity)" v-b-modal.modal-edit-activity variant="warning" class="margin-custom card-header-action color-button" ><i class="fa fa-edit"></i> Editar Actividad</b-button>
                      <Delete_activity :list="list" :position="index"  class="margin-custom" :pk_activity="list_init.id_activity"></Delete_activity>
                    </div>
                  </div>

                  <Questions :list_group="list_group" :list_questions="list_init.questions"></Questions>
                
                </b-card>
              </b-col> 
              <b-col xs sm md="2"></b-col> 
            </b-row>

          </b-card>
        </b-col>
      </b-row>
    </div>
    <Preview :image="imageData" :list_activity="list" :name_element="$route.params.name" :color_preview="color"></Preview>
    <Edit_activity :position="position_edit" :list="list" :name_activity="name_edit_activity" :description="description_edit" :id_activity="id_activity_edit"></Edit_activity>
  </div>
</template>
<script>
import Create_activity from '../activity/create_activity'
import Edit_activity from '../activity/edit_activity'
import Delete_activity from '../activity/delete_activity'
import Questions from '../activity/questions/questions'
import Swatches from 'vue-swatches'
import "vue-swatches/dist/vue-swatches.min.css"
import ImageUploader from 'vue-image-upload-resize'
import swal from 'sweetalert2'
import Preview from '../activity/preview'
import api from '../thematic/services/api_thematic'
import apigroup from '../group/services/group'
export default {
  titlePage: "Crear Actividades",
  components:{
    Create_activity,
    Edit_activity,
    Delete_activity,
    Questions,
    Swatches,
    ImageUploader,
    Preview
  }, 
  data() {
    return {
      list_group:[],
      thematic_id:this.$route.params.id_thematic,
      imageData: '',
      color: '#8080C0',
      colors: ['#4DBD74', '#20A8D8', '#63C2DE', '#F86C6B'],
      list:[],
      name_edit_activity:null,
      description_edit:null,
      position_edit:null,
      id_activity_edit:null
    };
  },
  created(){
    this.get_activity()
    this.get_group()
  },
  methods: {
    get_group(){
      return apigroup.GetGroup().then(res => {
        for (var i=0;i<res.data.length;i++){
          this.list_group.push({'id_group':res.data[i].id,'name_group':res.data[i].name,'alternatives':[]})
          for (var j=0;j<res.data[i]['Level'].length;j++){ 
            this.list_group[i]['alternatives'].push({'id_group':res.data[i].id,'id_alternative':res.data[i]['Level'][j]['id'],'name':res.data[i]['Level'][j]['text'],'state_alternative':2})
          }
        }
      })
    },
    get_activity(){
      return api.GetActivityThematic(this.thematic_id).then(res => {
        this.color=res.data.color
        this.imageData=res.data.icon
        for (var i=0;i<res.data.activities.length;i++){ 
          this.list.push({'id_thematic':this.thematic_id,'id_activity':res.data.activities[i]['id'],'name_activity':res.data.activities[i]['name'],'description':res.data.activities[i]['description'],'questions':[]})
        
          for(var j=0;j<res.data.activities[i]['questions'].length;j++){ 
            if(res.data.activities[i]['questions'][j]['type_question']!='RE'){
              this.list[i]['questions'].push({'changer_type':true,'id_activity':res.data.activities[i]['id'],'id_question':res.data.activities[i]['questions'][j]['id'],'name_questions':res.data.activities[i]['questions'][j]['question'],'type_questions':res.data.activities[i]['questions'][j]['type_question'],'state':2,'alternative':[],'state_type':2,'select_group':null})
            
              this.list[i]['questions'][j]['select_group']={'id_group':res.data.activities[i]['questions'][j]['group_level']['id'],'name_group':res.data.activities[i]['questions'][j]['group_level']['name'],'alternatives':[]}
              
              for(var h=0;h<res.data.activities[i]['questions'][j]['group_level']['Level'].length;h++){
                this.list[i]['questions'][j]['select_group']['alternatives'].push({ "id_group": res.data.activities[i]['questions'][j]['group_level']['id'], "id_alternative": res.data.activities[i]['questions'][j]['group_level']['Level'][h]['id'], "name": res.data.activities[i]['questions'][j]['group_level']['Level'][h]['text'], "state_alternative": 2 })
              }
            
            }else{ 
              this.list[i]['questions'].push({'changer_type':false,'id_activity':res.data.activities[i]['id'],'id_question':res.data.activities[i]['questions'][j]['id'],'name_questions':res.data.activities[i]['questions'][j]['question'],'type_questions':res.data.activities[i]['questions'][j]['type_question'],'state':2,'alternative':[],'state_type':3,'select_group':null})
            }
          }


        }
      }) 
    },
 
    change_color(){
      return api.PostChangeColor(this.thematic_id,this.color).then(res => {
        swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Color registrado con éxito'})
      })
    },
    change_image(){
      return api.PutChangeImage(this.thematic_id,this.imageData).then(res=>{
        this.imageData="/media/"+res
        swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Imagen registrada con éxito'})
      })
    },
    previewImage: function(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
        this.imageData = e.target.result;
        this.change_image()
      }
      reader.readAsDataURL(input.files[0]);
      }
    }, 
    get_activity_edit(activity,position,description,id_activity){
      this.id_activity_edit=id_activity
      this.name_edit_activity=activity
      this.description_edit=description
      this.position_edit=position
    },
    questions_and_type(position,id_activity){
      //ojo con el state creo que deberia sacarse
      this.list[position]['questions'].push({'changer_type':true,'id_activity':id_activity,'id_question':0,'name_questions':'','type_questions':null,'state':1,'state_type':1,'select_group':null})
    },
    finish(){
      swal.fire({
          title: '¿Estás seguro?',
          text: "¡Los datos que no se han guardado no se guardarán!",
          type: 'warning',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Finalizar!'
      }).then((result) => {
      if(result.value) {
          swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Has finalizado el formulario.'}).then((result) => { this.$router.push({ name: 'Temática' })})
      }
    })
    }
  }
};
</script>
<style>
.salto-linea-custom{
    padding-top: 10px
}
.color-button{
  color:white
}
.color-button:hover{
  color:white;
}
.margin-custom{
margin: 3px;
}
.middle-custom{
   vertical-align:middle 
}
.inline{
  display: inline
}
img{
    vertical-align: 0;
    border-style: none;
    margin-right: 5px;
}
</style>