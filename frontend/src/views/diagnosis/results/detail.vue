<template>
    <div class="wrapper">
        <b-modal
        scrollable
          centered="centered"
          header-bg-variant="success"
          ok-variant="success"
          id="modal-detail"
          ref="modal"
          title="Detalle"
          @ok="handle">
           <b-container v-for="(list_result,index) in list" :key="index">
            <b-row>
                <b-col xs sm md="3" align="center"> 
                    <img v-if="image!=''" width="68" :src="urls+'/media/'+image">
                    <img v-else width="68" src="img/images.png">
                </b-col>
                <b-col xs sm md="9">
                   <h6>{{index + 1}}. {{list_result.name}}</h6>
                    <h5 v-if="color!=null" :style="'color:'+color+';'">Elemento {{element}}</h5>
                    <h5 v-else style="color:#8080C0;">Elemento {{element}}</h5>

                   <p v-if="list_result.description!=''" class="justify" v-html="list_result.description"></p>
                    <p v-else class="justify">Descripción en proceso de elaboración.</p>
                </b-col>
            </b-row>
             </b-container>
            <template v-slot:modal-footer> 
            <div class="w-100">
                <div class="text-right">
                    <b-button :to="{ name: 'Roadmap' }" size="sm" class="margin-custom" variant="success"><i class="fa fa-sitemap"></i> Ver Roadmap</b-button>
                    <b-button @click="$refs.modal.hide()" size="sm" variant="secondary"><i class=" fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
            </template>
        </b-modal>
  </div> 
</template>

<script>
import configTheme from '@/services/config'
export default {
    props: ['list','element','image','color'],
    data() {
        return {
            urls:configTheme.apiUrl,
        };
    },
    methods: { 
        handle(bvModalEvt) {
            bvModalEvt.preventDefault()
        },
    }
};
</script>
<style>
.justify{
  text-align: justify
}
</style>