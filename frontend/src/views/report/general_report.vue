<template>
  <div class="wrapper">
    <div class="animated fadeIn"> 
      <b-row>
        <b-col xs sm md="12">
          <b-card
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
          <div slot="header">
            <strong class="text-white"><i class="fa fa-bar-chart-o"></i> Reporte {{$route.params.course}} - Colegio {{$store.state.school_name}} </strong>
          </div>
          <b-row>
            <b-col xs sm md="12">
              <h1 class="text-center"><u>Habilidades Socioemocionales</u></h1><br>
            </b-col>
          </b-row>


          <b-container v-for="(list,position) in list_result_report" :key="position">
            <b-row v-for="(list_activity,position2) in list.activity" :key="position2">
              <b-col xs sm md="1" align="center">
              </b-col>
              <b-col xs sm md="1" align="center">
                <img v-if="list.icon!=''" width="68"  :src="urls+'/media/'+list.icon">
                <img v-else width="68" src="img/images.png">
              </b-col>
              <b-col xs sm md="9"> 
                <h4>{{list_activity.number}}. {{list_activity.activity_name}}</h4>
                <h5 v-if="list.color!=null" :style="'color:'+list.color+';'">Elemento {{list.domain_name}}</h5>
                <h5 v-else style="color:#8080C0;">Elemento {{list.domain_name}}</h5>
                <p v-if="list_activity.activity_description!=''" class="justify" v-html="list_activity.activity_description"></p>
                <p v-else class="justify">Descripción en proceso de elaboración.</p>
              </b-col>
              <b-col xs sm md="1" align="center">
              </b-col> 
            </b-row> 
          </b-container>


          <b-row v-for="list in list_result_report" :key="list.color" >
            <b-col xs sm md="10" style="margin-left:auto; margin-right:auto;">
              <b-card v-if="list.color!=null" class="text-center" :style="'background-color:'+list.color+';color:white'">
                <blockquote class="card-blockquote">
                  <h2>Resultados Gráficos:</h2>
                  <footer>
                    <h1>Elemento {{list.domain_name}}</h1>
                    <h6 v-if="list.activity.length==0">
                      (Sin actividades)
                    </h6>
                  </footer>
                </blockquote>
              </b-card>
              <b-card v-else class="text-center" style="background-color:#8080C0;color:white">
                <blockquote class="card-blockquote">
                  <h2>Resultados Gráficos:</h2>
                  <footer>
                    <h1>Elemento {{list.domain_name}}</h1>
                    <h6 v-if="list.activity.length==0">
                      (Sin actividades)
                    </h6>
                  </footer>
                </blockquote>
              </b-card>
            </b-col>

            <b-col xs sm md="8" class="d-none d-lg-block" v-for="list_activity in list.activity" :key="list_activity.activity" style="margin-left:auto; margin-right:auto;">
              <b-card header="Secondary"
                header-bg-variant="secondary"
                header-text-variant="white"
                align="center"
                >
                <div slot="header">
                  <strong class="text-white"> {{list_activity.activity_name}}</strong>
                </div>
                 
                <div class="chart-wrapper" v-if="list_activity.list_answers.length!=0">
                  <Piegraph :data="list_activity.list_answers" ></Piegraph>
                </div>
                <div v-else>
                  <u><h6>Sin resultados</h6></u>
                </div>
              </b-card>
            </b-col>


            <b-col xs sm md="8" class="d-lg-none" mobile v-for="list_activity in list.activity" :key="list_activity.activity_name" style="margin-left:auto; margin-right:auto;">
              <b-card header="Secondary"
                header-bg-variant="secondary"
                header-text-variant="white"
                align="center">
                <div slot="header">
                    <strong class="text-white"> {{list_activity.activity_name}}</strong>
                </div>
                <div class="chart-wrapper" v-if="list_activity.list_answers.length!=0">
                  <Piegraphmovil :data="list_activity.list_answers" :width="4" :height="4"></Piegraphmovil>
                </div>
                <div v-else>
                  <u><h6>Sin resultados</h6></u> 
                </div>
              </b-card>
            </b-col>
            
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</div>
</template>
<script>
import Piegraph from './graph/pie_graph'
import Piegraphmovil from './graph/pie_graphmovil'
import api from './services/report'
import configTheme from '@/services/config'
export default {
  titlePage: "Reporte General",
  data() {
    return {
      urls:configTheme.apiUrl,
      list_result_report:[]
    };
  },
  components:{
    Piegraph,
    Piegraphmovil
  },
  created(){
    this.getDataReport()
  },
  methods: {
    getDataReport(){
      return api.GetApiReport(this.$route.params.code).then(res => {
        console.log("holo",res)
        var list_answer=[]
        for (var i=0;i<res.report.answers.length;i++){
          list_answer.push({'level_info':res.report.answers[i].level_info,'a_user':res.report.answers[i].a_user,'activity':res.report.answers[i].activity,'group':res.report.answers[i].group})  
        }

        let respaldo_actividad = [];
        let actividad = [];
        var cont=1;
        res.report.answers.forEach(function(word) {
          if(!(respaldo_actividad.includes(word.activity))){
            actividad.push({"domain":word.domain,"activity": word.activity, "activity_name": word.activity_name,'activity_description':word.activity_description,'number':cont})
            respaldo_actividad.push(word.activity);
            cont++
          }
         
        });

        let respaldo_tematica = [];
        let tematica = [];
        res.report.answers.forEach(function(word) {
          if(!(respaldo_tematica.includes(word.domain))){
            tematica.push({"domain": word.domain,"icon":word.icon,"color":word.color, "domain_name": word.domain_name,'activity':[]})
            respaldo_tematica.push(word.domain);
          }
        });

        for (var i=0;i<tematica.length;i++){
           for (var j=0;j<actividad.length;j++){
            if(tematica[i].domain==actividad[j].domain){
              tematica[i].activity.push({'number':actividad[j].number,'activity':actividad[j].activity,'activity_name':actividad[j].activity_name,'activity_description':actividad[j].activity_description,'list_answers':[]})
            }
           }
        }

        for (var i=0;i<tematica.length;i++){
             for (var j=0;j<tematica[i].activity.length;j++){
                for (var h=0;h<list_answer.length;h++){
                  if(tematica[i].activity[j].activity==list_answer[h].activity){
                    tematica[i].activity[j].list_answers.push({"level_info":list_answer[h].level_info,"a_user":list_answer[h].a_user, "activity":list_answer[h].activity,'group':list_answer[h].group})
                  }
              }
          }
        }
        this.list_result_report=tematica
    })
    }
  }
};
</script>

<style>
.justify{
  text-align: justify
}
</style>