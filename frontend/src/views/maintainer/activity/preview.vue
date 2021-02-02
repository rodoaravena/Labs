<template>
    <b-modal
        scrollable
        centered="centered"
        header-bg-variant="success"
        ok-variant="success"
        id="modal-preview"
        ref="modal"
        title="Vista previa"
        @ok="handle"
    >
        <b-container v-for="(list,index) in list_activity" :key="index">
            <b-row>
                <b-col xs sm md="3" align="right" class="d-none d-lg-block">
                    <div class="image-preview" v-if="image!=null">
                        <img class="preview" width="60" :src="urls+image">
                    </div>
                    <div class="image-preview" v-else>
                        <img class="preview" width="60" src="img/images.png">
                    </div>
                </b-col>
                <b-col xs sm md="3" align="center" class="d-lg-none" mobile>
                    <div class="image-preview" v-if="image!=null">
                        <img class="preview" width="60" :src="urls+image"> 
                    </div>
                    <div class="image-preview" v-else>
                        <img class="preview" width="60" src="img/images.png">
                    </div> 
                </b-col> 
                <b-col xs sm md="8">
                    <h5>{{index+1}}. {{list.name_activity}}</h5>
                    <h6 :style="'color:'+color_preview+';'">Elemento {{name_element}}</h6>
                    <p class="justify" v-html="list.description"></p>
                </b-col>
                <b-col xs sm md="1"></b-col>
            </b-row>

            <b-container v-for="(list_questions,index1) in list.questions" :key="index1">
                <b-row >
                    <b-col xs sm md="1"></b-col>
                    <b-col xs sm md="10">
                        <h5> Pregunta N°{{index1+1}}: </h5><h6 v-if="list_questions.type_questions==1">Selección multiple</h6><h6 v-if="list_questions.type_questions==2">Casilla de verificación</h6><h6 v-if="list_questions.type_questions==3">Párrafo</h6>
                        <p class="justify" v-html="list_questions.name_questions"></p>
                    </b-col>
                    <b-col xs sm md="1"></b-col>
                </b-row>

                <b-container v-if="list_questions.select_group!=null">
                    <b-row  v-for="(list_group,index2) in list_questions.select_group.alternatives" :key="index2">
                        <b-col xs sm md="1"></b-col>
                        <b-col xs sm md="10">
                            <p class="justify">- {{list_group.name}}</p>
                        </b-col>
                        <b-col xs sm md="1"></b-col>
                    </b-row>
                </b-container>
                
<!--
                <b-row v-for="(list_group,index2) in list_questions.select_group" :key="index2">
                    <b-col xs sm md="1"></b-col>
                    <b-col xs sm md="10">
                        <p class="justify">{{index2+1}}. {{list_alternative}}</p>
                    </b-col>
                    <b-col xs sm md="1"></b-col>
                </b-row>-->
             </b-container>
        </b-container>

        <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button @click="finish()" class="margin-custom" size="sm" variant="success"><i class="fa fa-sign-in"></i> Finalizar</b-button>
                    <b-button @click="$refs.modal.hide()" size="sm" variant="secondary"><i class=" fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
        </template>
    </b-modal>
</template>

<script>
import swal from 'sweetalert2'
import configTheme from '@/services/config'
export default {
    props: ['name_element','color_preview','list_activity','image'],
    data() {
        return {
            urls:configTheme.apiUrl,
        };
    },
    methods: {
        handle(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.finish()
        },
        finish(){
            swal.fire({
            title: '¿Estás seguro?',
            text: "¡Los datos que no se han guardado no se guardarán!",
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Finalizar!'
            }).then((result) => {
                if(result.value) {
                    swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Has finalizado el formulario.'}).then((result) => { this.$router.push({ name: 'Temática' })})
                }
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