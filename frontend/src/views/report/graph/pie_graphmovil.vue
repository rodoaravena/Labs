<script>
import { Pie } from 'vue-chartjs'

export default {
    props: ['data'],
    extends: Pie,
    data() {
      return {
        list_labels:[],
        series:[]
      }
    },
    mounted () {
       this.GetDataGraphic()
    this.renderChart({
      labels: this.list_labels,
      datasets: [
        {
          backgroundColor: [
            '#DD1B16',
            '#E46651',
            '#e4c71b',
            '#00D8FF',
            '#41B883',
            '#FFDA33',
            '#33FF83',
            '#3396FF',
            '#5B33FF',
            '#B533FF',
            '#FFA233',
            '#FF6B33',
            '#33F6FF',
          ],
          data:this.series
        }
      ]
    }, {responsive: true, maintainAspectRatio: true})
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
        let grafico_list = [];
        let respuestas = this.data
        console.log("movil",respuestas);

        for(var i=0;i<respuestas.length;i++){
          if(!(respaldo_grafico.includes(respuestas[i].level_info))){
            if(respuestas[i].level_info!=null){
              grafico_list.push({'level_info':respuestas[i].level_info,'a_user':respuestas[i].a_user, 'activity':respuestas[i].activity}); 
              respaldo_grafico.push(respuestas[i].level_info);
              //this.chartOptions.labels.push(this.data[i].a_user)
            }
          }
        }

        console.log('movil_grafiquio',grafico_list)
        
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
          this.list_labels.push(grafico[i].a_user)
          this.series.push(aux)
          //list.push({"suma":aux,"valor":grafico[i].a_user})
        }
       // console.log("ss",list)
      
      }
    },
}
</script>
 