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
              <strong class="text-white"><i class="fa fa-pie-chart"></i> Resultados {{$route.params.course}} - Colegio {{$store.state.school_name}} </strong>
              <div class="card-header-actions"> 
                  <!--<b-button :to="{ name: 'Roadmap' }" block pressed variant="outline-success" class="card-header-action" aria-pressed="true"><i class="fa fa-sitemap"></i> Ver Roadmap</b-button>-->
              </div>
            </div>

            <b-row>
            <b-col xs sm md="12">
              <b-card class="bg-primary text-center">
                <blockquote class="card-blockquote">
                  <h1>Tu curso está en nivel 1</h1>
                  <footer>
                  </footer>
                </blockquote>
              </b-card>
            </b-col>
            </b-row>
     
            <b-row>
              <b-col xs sm md="12">
                <b-form-group>
                  <h2 class="text-center"><u>Escoja una temática</u></h2>
                </b-form-group>
              </b-col>
            </b-row>

            <b-row> 
              <b-col cols="12" sm="6" lg="3" v-for="list_thematic in list" :key="list_thematic.name">
                <b-card :no-body="true">
                  <b-card-body v-if="list_thematic.color!=null" class="p-3 clearfix" :style="'background-color:'+list_thematic.color+';color:white'"> 
                    <img v-if="list_thematic.icon!=''" class="float-left" :src="urls+'/media/'+list_thematic.icon" width="68">
                    <img v-else width="68"  class="float-left" src="img/images.png">
                   <!-- <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>-->
                    <div class="h5 text-white mb-0 mt-2">{{list_thematic.name}}</div>
                    <a v-if="list_thematic.result.length!=0" href="#" v-b-modal.modal-detail @click="get_list(list_thematic.result,list_thematic.name,list_thematic.icon,list_thematic.color)" class="text-white text-uppercase font-weight-bold font-xs">Ver detalle</a>
                    <a v-else href="#" v-b-popover.hover="'Sin actividades'" class="text-white text-uppercase font-weight-bold font-xs">Ver detalle</a>
                  </b-card-body>

                  <b-card-body v-else class="p-3 clearfix" style="background-color:#8080C0;color:white"> 
                    <img v-if="list_thematic.icon!=''" class="float-left" :src="urls+'/media/'+list_thematic.icon" width="68">
                    <img v-else width="68" class="float-left" src="img/images.png">
                   <!-- <i class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>-->
                    <div class="h5 text-white mb-0 mt-2">{{list_thematic.name}}</div>
                    <a v-if="list_thematic.result.length!=0" href="#" v-b-modal.modal-detail @click="get_list(list_thematic.result,list_thematic.name,list_thematic.icon,list_thematic.color)" class="text-white text-uppercase font-weight-bold font-xs">Ver detalle</a>
                    <a v-else href="#" v-b-popover.hover="'Sin actividades'" class="text-white text-uppercase font-weight-bold font-xs">Ver detalle</a>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>

            </b-card>
        </b-col>
      </b-row>
    </div>
    <Detail :list="list_result" :element="name" :color="color_father" :image="icon_father"></Detail>
  </div>
</template>

<script>
import api from '@/views/report/services/report'
import Detail from '../results/detail'
import configTheme from '@/services/config'
export default {
  titlePage: "Ver resultados",
  components:{Detail},
  data() {
    return {
      urls:configTheme.apiUrl,
      list:[],
      list_result:[],
      name:null,
      color_father:null,
      icon_father:null,
    };
  },
  created(){
    this.getData()
  },
  methods: {
    get_list(list_result,name,icon,color){
      this.list_result=list_result
      this.name=name
      this.color_father=color
      this.icon_father=icon
    },
    getData(){
      return api.GetApiReport(this.$route.params.code).then(res => {
        this.list=res.report.result
        console.log(res.report.result)
      })
    }
  }
};
</script>