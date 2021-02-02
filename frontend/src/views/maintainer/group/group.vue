<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>  
        <b-col xs sm md="12">
          <Create_group :list="list_group"></Create_group>
            <b-row class="salto-linea-custom" :v-show="list_group.length!=0" v-for="(list,index) in list_group" :key="index" >
              <b-col xs sm md="12">
                <b-card
                  header="secondary"
                  header-bg-variant="secondary" 
                  header-text-variant="white"
                  :no-body="list.alternatives.length==0"
                >
                <div slot="header" class="d-none d-lg-block">
                  <strong class="text-white middle-custom"><span>{{list.name_group}}</span></strong>
                  <div class="card-header-actions">
                    <b-button :disabled="validatelist(list.alternatives)==false" @click="new_alternative(list)" variant="success" class=" card-header-action color-button"><i class="fa fa-plus"></i> Nueva Alternativa</b-button>
                    <b-button @click="get_edit_group(index,list.id_group,list.name_group)" v-b-modal.modal-edit-group variant="warning" class="margin-custom card-header-action color-button"><i class="fa fa-edit"></i> Editar Grupo</b-button>
                    <Delete_group :list="list_group" :position="index" :id_group="list.id_group" ></Delete_group>
                  </div>
                </div>
                <div slot="header" class="d-lg-none" mobile align="center">
                  <strong class="text-white middle-custom"><span>{{list.name_group}}</span></strong>
                  <div class="card-header-actions">
                    <b-button :disabled="validatelist(list.alternatives)==false" @click="new_alternative(list)" variant="success" class=" card-header-action color-button"><i class="fa fa-plus"></i> Nueva Alternativa</b-button>
                    <b-button @click="get_edit_group(index,list.id_group,list.name_group)" v-b-modal.modal-edit-group variant="warning" class="margin-custom card-header-action color-button"><i class="fa fa-edit"></i> Editar Grupo</b-button>
                    <Delete_group :list="list_group" :position="index" :id_group="list.id_group" ></Delete_group>
                  </div>
                </div>
                <Alternative :list_grou="list"></Alternative>
                </b-card>
              </b-col> 
            </b-row>
          </b-col>
      </b-row>
    </div>

    <Edit_group :list="list_group" :name_group="name_group_edit" :position="position_edit" :id_group="id_group_edit"></Edit_group>
  </div>
</template>

<script>
import Create_group from '../group/create_group'
import Edit_group from '../group/edit_group'
import Delete_group from '../group/delete_group'
import Alternative from '../group/alternative/alternative'

export default {
  props: ['list_group'],
  components:{
    Create_group,
    Edit_group,
    Delete_group,
    Alternative
  }, 
  data() {
      return {
        //list_group:[],
        position_edit:null,
        id_group_edit:null,
        name_group_edit:null
      }; 
  }, 
  methods: {
    get_edit_group(position,id,name){
      this.position_edit=position
      this.id_group_edit=id
      this.name_group_edit=name
    },
    new_alternative(list){
      list.alternatives.push({'id_group':list.id_group,'id_alternative':0,'name':'','state_alternative':1})
    }, 
    validatelist(list){
      var n=0
      for(n in list){
          if(list[n]['name']==false){
              return false
          } 
          n++
      }
    },
  }
};
</script>
<style>
.salto-linea-custom{
    padding-top: 8px
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
</style>