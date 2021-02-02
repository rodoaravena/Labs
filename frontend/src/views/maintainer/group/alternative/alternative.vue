<template>
    <draggable 
        :disabled="aux_disabled==true"
        :move="checkMove"
        :state="disableDraggable"
        class="list-group"
        ghost-class="ghost"
        v-bind:class="{'cursor': aux_disabled==false}"
        :list="list_grou.alternatives"
        >
        <b-col xs sm md="12" class="salto-linea-custom" v-for="(list_alternative,index2) in list_grou.alternatives" :key="index2" >
            <b-input-group
                label-for="name_alternative"
                invalid-feedback="Alternativa requerida">
                <b-form-input name="name_alternative"
                  type="text"
                  :placeholder="'Alternativa'+' '+(index2+1)"
                  min="1"
                  max="300"
                  :disabled="list_alternative.state_alternative==2"
                  v-model="list_alternative.name"
                  :state="validateNameAlternative(list_alternative.name)" 
                  id="name_alternative" class="form-control"> 
                </b-form-input>
                <b-input-group-append>
                    <b-button @click="save_alternative(list_alternative,index2)" :disabled="validateNameAlternative(list_alternative.name)==false || list_alternative.state_alternative==2" variant="outline-success"><i class="fa fa-plus"></i></b-button>
                    <b-button @click="edit_alternative(list_alternative)" :disabled="list_alternative.state_alternative==1"  variant="outline-warning" v-bind:class="{'cedit': list_alternative.state_alternative==2}"><i class=" fa fa-edit"></i></b-button>
                    <DeleteAlternative :state_alternative="list_alternative.state_alternative" :list_alternative="list_grou.alternatives" :pk_alternative="list_alternative.id_alternative" :position="index2"></DeleteAlternative>
                </b-input-group-append>
            </b-input-group>        
        </b-col>
    </draggable>

</template>
<script>
//estate es de la lista anterior
import draggable from 'vuedraggable'
import swal from 'sweetalert2'
import DeleteAlternative from '../alternative/delete_alternative'
import api from './services/alternative'
export default ({
    components:{
        draggable,
        DeleteAlternative
    },
    props: ['list_grou'],
    data:function(){
        return{
            aux_disabled:false
        }
    }, 
    computed: {
        disableDraggable(){
            for (var i=0;i<this.list_grou.alternatives.length;i++){
                if(this.list_grou.alternatives[i]['state_alternative']==1){
                    this.aux_disabled=true
                }
            }
            return this.aux_disabled
        },
    },
    methods: {
        checkMove: function(e) {
            return api.PutAPIAlternativePosition(e.draggedContext.futureIndex+1,e.draggedContext.element.id_alternative).then(res => {
            console.log(res)
            })
        },
        validateNameAlternative(name) {
            return name.length >0 && name.length < 300 ? true:false 
        },
        PostAlternative(list,index){
            //console.log("list",this.list_grou)
            return api.PostAPIAlternative(list.name,list.id_group,list.id_alternative).then(res => {
               swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Alternativa guardada con éxito.'})
               this.list_grou.alternatives[index].id_alternative=res.id
               this.list_grou.alternatives[index].name=res.text
            })
        },
        save_alternative(list,index){ 
            if(this.validateNameAlternative(list.name) != false) {
                list.state_alternative=2
                this.aux_disabled=false
                this.PostAlternative(list,index)
            }
        },
        edit_alternative(list){
            list.state_alternative=1
        },
    }
});
</script>
<style>
.cedit{
  color:#ffc107
}
.cedit:hover{
  color:white;
}
.ghost {
  opacity: 0.5;
  background: #D0D1D2;
}
.cursor{
    cursor: move;
}
</style>