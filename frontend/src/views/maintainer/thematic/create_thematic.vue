<template>
    <div class="wrapper">
        <b-button block pressed variant="outline-success" v-b-modal.modal-thematic class="card-header-action" aria-pressed="true"><i class="fa fa-plus-circle"></i> Nueva Temática</b-button>
        <b-modal
          centered="centered"
          header-bg-variant="success"
          ok-variant="success"
          size="lg"
          id="modal-thematic"
          ref="modal"
          title="Nueva Temática"
          @show="resetModalThematic"
          @hidden="resetModalThematic"
          @ok="handleThematic"
        >
        
             <b-form-group
              label-for="name_thematic_"
              invalid-feedback="Temática requerida">
              <b-form-input name="name_thematic_"
                type="text"
                placeholder="Temática"
                v-validate="{ required: true, min:5, max:100 }" 
                min="5"
                max="300"
                v-model="name_thematic"
                :state="validateState('name_thematic_')" 
                id="name_thematic_" class="form-control"> 
            </b-form-input>
            </b-form-group>        
            <b-form-group
              label-for="name_description"
              invalid-feedback="Descripción requerido">
              <b-form-textarea name="name_description"
                type="text"
                placeholder="Descripción"
                v-validate="{ required: true, min:5, max:200 }" 
                min="5"
                max="300" 
                v-model="description"
                :state="validateState('name_description')" 
                id="name_description" class="form-control"> 
            </b-form-textarea>
            </b-form-group>        
        
        <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button :disabled="veeErrors.any()" class="margin-custom"  @click="onSubmit" size="sm" variant="success"><i class="fa fa-save"></i> Guardar</b-button>
                    <b-button @click="$refs.modal.hide()" size="sm" variant="secondary"><i class=" fa fa-times"></i> Cerrar</b-button>
                </div>
            </div>
        </template>
      </b-modal>
  </div>
</template>

<script>
import api from './services/api_thematic'
import swal from 'sweetalert2'
export default {
    props: ['list'],
    data() {
        return {
            name_thematic:null,
            description:null
        };
    }, 
    methods: {
        validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }  
            return null
        }, 
        resetModalThematic() {
            this.name_thematic=null
            this.description=null
        },
        handleThematic(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.onSubmit()
        },
        PostThematic(){
            return api.PostAPIThematic(this.name_thematic,this.description).then(res => {
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Registrado con éxito'})
                this.list.push({'color':res.color,'image':res.icon,'id':res.id,'name':res.name,'description':res.description,'activities':[]})
                this.$nextTick(() => {this.$refs.modal.hide()})
            })
        },
        onSubmit() {
            this.$validator.validateAll().then((result) => {
            if (!result) { 
                return
            }
            this.PostThematic()  
            })
        },
    }
};
</script>
