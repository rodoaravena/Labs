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
              <strong class="text-white"><i class="fa fa-user"></i> Usuarios</strong>
              <div class="card-header-actions">
                <Create_user :list="list"></Create_user>
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
              
              <template slot="action" slot-scope="data">
                <div>
                    <b-button @click="get_data_edit_user(data.item.name,data.item.username,data.item.password,data.index)" size="sm" variant="warning" v-b-modal.modal-user_edit class="color-button"><i class="fa fa-pencil-square-o"></i> Editar Usuario</b-button>
                    <Delete_user class="margin-custom" :position="data.index" :list="list" :pk_user="1"></Delete_user>
                </div>
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
          </b-card>
        </b-col>
      </b-row>
    </div>
    <Edit_user :position="position_edit" :name_edit="name_edit" :username_edit="username_edit" :password_edit="password_edit" :list="list"></Edit_user>
  </div>
</template>

<script> 
import Delete_user from '../maintainer/users/delete_user'
import Create_user from '../maintainer/users/create_user'
import Edit_user from '../maintainer/users/edit_user'
import api from '../maintainer/users/services/api_users'

export default {
  titlePage: "Administración de Usuarios",
  components:{
    Delete_user,
    Create_user,
    Edit_user
  }, 
  data () {
    return {
      fields: [
            {key: 'id', label:'N°', sortable: true},
            {key: 'username', label: 'Username', sortable: true},
            {key: 'name', label: 'Nombres', sortable: true},
            {key: 'privilege', label: 'Privilegios', sortable: true},
            {key: 'action', label:'Acciones'},
    ],
    list: [],
    currentPage: 1,
    perPage: 5,
    totalItems: 0,
    filter: null,
    pageOptions: [5, 10, 15],
    name_edit:null,
    username_edit:null,
    password_edit:null,
    position_edit:null
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
      this.getDataUsers()
    },
  methods: {
    get_data_edit_user(name,username,password,position){
        this.name_edit=name
        this.username_edit=username
        this.password_edit=password
        this.position_edit=position
    },
    getDataUsers(){
        this.totalItems=2
        this.list.push({'username':'director','name':'Eduardo Quiroga','privilege':'director','password':'1234'})
      //var n;
      //return api.GetApiUser().then(res => {
      //  //this.list=res.data
      //  for (var i=0;i<res.data.length;i++){
      //    n=i+1
      //    this.list.push({'name':res.data[i]['name'],'description':'Temática relacionada con la vinculación'})
      //  }
      //  this.totalItems=n
      //})
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
</style>