<template>
  <apexchart align="center" type="pie" width="460" :options="chartOptions"  :series="series"/>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
    props: ['data'],
    components: {
      apexchart: VueApexCharts,
    },
    data() {
      return {
        list:[],
        chartOptions: {
          labels:[],
        },
        //series:[this.data['1'],this.data['2'],this.data['3'],this.data['4'],this.data['5']]
        series:[]
      }
    },
    mounted(){
     // console.log("lista_resultados",this.data)
      this.GetDataGraphic()
    },
    methods:{
      Burbuja(lista){
         const bubbleSortDict = arr => {
          const l = arr.length;
          for (let i = 0; i < l; i++ ) {
            for (let j = 0; j < l - 1 - i; j++ ) {
              if ( arr[ j ].level_info > arr[ j + 1 ].level_info ) {
                [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
              }
            }
          }
          return arr;
        };
        const grafico = bubbleSortDict(lista);
        return grafico;
      },
      GetDataGraphic(){
        let respaldo_grafico = [];
        let respaldo_grafico_group=[];
        let grafico_list = [];
        let respuestas = this.data
        console.log("holaa",respuestas);

        for(var i=0;i<respuestas.length;i++){
          if(!(respaldo_grafico.includes(respuestas[i].level_info))){
            if(respuestas[i].level_info!=null){
              grafico_list.push({'level_info':respuestas[i].level_info,'a_user':respuestas[i].a_user, 'activity':respuestas[i].activity}); 
              respaldo_grafico.push(respuestas[i].level_info);
              //this.chartOptions.labels.push(this.data[i].a_user)
            }
          }
        }

        console.log('grafiquio',grafico_list)
        
       // this.chartOptions.labels.sort()
       
        let grafico = this.Burbuja(grafico_list)
        var aux=0
        let list=[]
        
        for(var i=0;i<grafico.sort().length;i++){

          for(var j=0;j<this.data.length;j++){

            if(grafico[i].level_info==this.data[j].level_info){
              aux+=this.data[j].level_info
            }

          }
          this.chartOptions.labels.push(grafico[i].a_user)
          this.series.push(aux)
          //list.push({"suma":aux,"valor":grafico[i].a_user})
        }
       // console.log("ss",list)
      
      }
    },
}
</script>

<style>
  .apexcharts-legend {
    width:40%;
  }
</style>
