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
            <div slot="header">
              <strong class="text-white"><i class="fa fa fa-dedent"></i> Temáticas</strong>
              <div class="card-header-actions">
                <Create_thematic :totalItemss="totalItems" :list="list"></Create_thematic>
              </div>
            </div>

            <b-row>
              <b-col xs sm md="3">
                <b-form-group label-cols-sm="3" label="Mostrar" class="text-center">
                  <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
                </b-form-group> 
              </b-col>
              <b-col xs sm md="9">
                <b-form-group label-cols-sm="7">
                  <b-input-group>
                    <b-form-input v-model="filter" placeholder="Buscar..."></b-form-input>
                    <b-input-group-append>
                      <b-button :disabled="!filter" @click="filter = ''"><i class="fa fa-eraser"></i></b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            
            <b-table               
              show-empty
              :items="list" :fields="fields"
              responsive 
              striped  
              hover 
              bordered
              class="text-center"
              :current-page="currentPage" 
              :per-page="perPage" 
              :filter="filter" 
              >
              <template slot="id" slot-scope="data">
                {{ data.index + 1 }}
              </template>
 
              <template slot="image" slot-scope="data">
                <img v-if="data.item.image!=null" align="center" width="35" :src="urls+data.item.image">
                <img v-else align="center" width="35" src="img/images.png">
              </template>
              
              <template slot="action" slot-scope="data"> 
                <div>
                  <b-button :to="{ name: 'Crear actividades',params: {name: data.item.name,id_thematic:data.item.id}}" size="sm" variant="success"><i class="fa fa-plus"></i> Nueva Actividad</b-button>
                  <b-button v-if="data.item.activities.length!=0" @click="data.toggleDetails" size="sm" variant="info" class="color-button margin-custom"><i class="fa fa-eye"></i> {{ data.detailsShowing ? 'Ocultar' : 'Ver'}} Detalle</b-button>
                  <b-button v-else v-b-popover.hover="'Sin actividades'" size="sm" variant="info" class="color-button margin-custom"><i class="fa fa-eye"></i> Ver Detalle</b-button>
                  <b-button @click="get_data_edit_thematic(data.item.name,data.item.description,data.index,data.item.id)" size="sm" variant="warning" v-b-modal.modal-edit-thematic class="color-button"><i class="fa fa-pencil-square-o"></i> Editar Temática</b-button>
                  <Delete_thematic class="margin-custom" :position="data.index" :list="list" :pk_thematic="data.item.id"></Delete_thematic>
                </div>
              </template>
              
              <template v-slot:row-details="row">
                <b-card v-if="row.item.color!=null" :style="'background-color:'+row.item.color+';'"> 
                  <b-list-group>
                  <b-list-group-item href="#" class="flex-column align-items-start" v-for="(list_activities,index2) in row.item.activities" :key="index2">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{ list_activities.name_activity }}</h5>
                    </div>
                    <p v-if="list_activities.description_activity!=''" class="justify" v-html="list_activities.description_activity"></p>
                    <p v-else class="justify">Descripción en proceso de elaboración.</p>
                  </b-list-group-item>
                </b-list-group>
              </b-card>
              <b-card v-else style='background-color:#8080C0;'> 
                  <b-list-group>
                  <b-list-group-item href="#" class="flex-column align-items-start" v-for="(list_activities,index2) in row.item.activities" :key="index2">
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{ list_activities.name_activity }}</h5>
                    </div>
                    <p v-if="list_activities.description_activity!=''" class="justify" v-html="list_activities.description_activity"></p>
                    <p v-else class="justify">Descripción en proceso de elaboración.</p>
                  </b-list-group-item> 
                </b-list-group>
              </b-card>
            </template>

            </b-table>
            <b-pagination 
              size="md" 
              :total-rows="totalItems" 
              v-model="currentPage" 
              :per-page="perPage"  
              align="center"
            > 
            </b-pagination>
            <Edit_thematic :pk_edit_thematic="pk_thematic_edit" :position="position_edit" :name_thematic_edit_father="name_thematic_edit" :description_edit_father="description_edit" :list="list"></Edit_thematic>
          </b-card>
        </b-col>
      </b-row>
      
    </div>
  </div>
</template>

<script>
import api from '../maintainer/thematic/services/api_thematic'
import Create_thematic from '../maintainer/thematic/create_thematic'
import Delete_thematic from '../maintainer/thematic/delete_thematic'
import Edit_thematic from '../maintainer/thematic/edit_thematic'
import configTheme from '@/services/config'
export default {
  titlePage: "Administración de Temáticas",
  components:{
    Create_thematic,
    Delete_thematic,
    Edit_thematic 
  }, 
  data () {
    return {
      urls:configTheme.apiUrl,
      fields: [
          {key: 'id', label:'N°', sortable: true},
          {key: 'image', label:'Imagen', sortable: true},
          {key: 'name', label: 'Temática', sortable: true},
          {key: 'description', label: 'Descripción', sortable: true},
          {key: 'action', label:'Acciones'},
      ],
      list: [],
      name_thematic_edit:null,
      description_edit:null,
      position_edit:null,
      pk_thematic_edit:null,
      currentPage: 1,
      perPage: 5,
      totalItems: 0,
      filter: null,
      n:true,
      pageOptions: [5, 10, 15]
    }
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  created(){
      this.getDataThematic()
    },
  methods: {
    get_data_edit_thematic(name,description,position,pk_thematic){
      this.name_thematic_edit=name 
      this.description_edit=description
      this.position_edit=position
      this.pk_thematic_edit=pk_thematic
    },
    getDataThematic(){
      //const path = `http://127.0.0.1:8000/api/evaluation/domain/all/detail/` 
      //axios.get(path).then((response)=> {
      //  for (var i=0;i<response.data.length;i++){
      //    this.list.push({'id':i+1,'name':response.data[i]['name'],'description':'Temática relacionada con la vinculación'})
      //  }
      //  //console.log(response.data)
      //  //this.list = response.data
      //})
      //.catch((error) =>{
      //    console.log(error)
      //}) 
    //
      var aux;
      return api.GetApiThematic().then(res => {
        //this.list=res.data  
        console.log(res.data)
        for (var i=0;i<res.data.length;i++){ 
          aux=i+1
          this.list.push({_showDetails: false,'color':res.data[i]['color'],'image':res.data[i]['icon'],'id':res.data[i]['id'],'name':res.data[i]['name'],'description':res.data[i]['description'],'activities':[]})
          for(var j=0;j<res.data[i]['activities'].length;j++){
          this.list[i]['activities'].push({'name_activity':res.data[i]['activities'][j]['name'],'description_activity':res.data[i]['activities'][j]['description']})
          }
        }
        this.totalItems=aux
      })
    }
  }
}
</script>
<style>
.margin-custom{
margin: 4px;
}
.color-button{
  color:white
}
.color-button:hover{
  color:white;
}
.col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0rem + 0px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}
.justify{
  text-align: justify
}
</style>