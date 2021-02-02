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
              <strong class="text-white"><i class="fa fa-th-list"></i> Cursos</strong>
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
              :items="list_course" :fields="fields"
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
                  <b-button @click="get_api_code(data.item.id)" v-b-modal.modal-code size="sm"  variant="success"><i class="fa fa-info-circle"></i> Ver Detalle</b-button>
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
    <Select_code :list_code="list_code"></Select_code>
  </div>
</template>

<script>
import api from '../courses/services/course'
import moment from 'moment';
import Select_code from '../courses/select_code'
import swal from 'sweetalert2'
export default {
  titlePage: "Administración de Cursos",
  components:{
    Select_code
  }, 
  data () {
    return {
      list_code:[],
      fields: [
          {key: 'id', label:'N°', sortable: true},
          {key: 'course', label: 'Curso', sortable: true},
          {key: 'year', label: 'Año', sortable: true},
          {key: 'school', label: 'Colegio', sortable: true},
          {key: 'action', label:'Acciones'},
      ],
      list_course: [],
      currentPage: 1,
      perPage: 5,
      totalItems: 5,
      filter: null,
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
      //this.getDeliveries()
      this.getDataCourse()
    },
  methods: {
    get_api_code(id){
      this.list_code=[]
      return api.GetApiCode(id).then(res => {
        this.list_code=res.data.evaluations
        console.log(res.data)
        })
    },
    getDataCourse(){
        var year=moment().format("YYYY")
        var school=this.$store.state.school
        var n;
        //this.list_course.push({'id':1,'name':'Primero B','description':'Curso ...'})
        return api.GetApiCourse(year,school).then(res => {
          console.log(res.data)
         for (var i=0;i<res.data.length;i++){
          n=i+1
          this.list_course.push({'id':res.data[i]['id'],'course':res.data[i]['grade']+'º'+res.data[i]['section']+' '+res.data[i]['type_grade'],'year':res.data[i]['year'],'school':res.data[i]['school']})
        }
        this.totalItems=n
        //for (var i=0;i<res.data.length;i++){
        //  this.list_course.push({'id':i+1,'name':res.data[i]['name'],'description':'Temática relacionada con la vinculación'})
        //}
      })
    }
  }
}
</script>
<style>
.col-form-label {
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0rem + 0px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}
</style>