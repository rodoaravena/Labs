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
            <strong class="text-white"><i class="fa fa-cloud-upload"></i> Carga de Datos</strong>
          </div>
           <b-form @submit.stop.prevent="onSubmit">
            <b-row>
              <b-col xs sm md="12">
                <b-form-group
                  label-for="file_id">
                  <b-form-file 
                    type="file" 
                    id="file_id" 
                    name="file_id" 
                    size="sm" 
                    v-model="fileData" 
                    v-validate="{ required: true }" 
                    :state="validateState('file_id')">
                  </b-form-file>
                </b-form-group>
              </b-col>
              <b-col xs sm md="12">
                <b-form-group>
                  <b-button type="submit" :disabled="veeErrors.any()" class="btn-block" variant="primary"><i class="fa fa-download"></i> Comenzar Carga de Datos</b-button>     
                </b-form-group>
              </b-col>
            </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  titlePage: "Carga de Datos",
  data() {
    return {
      fileData:''
    };
  },
  computed: {
   
  },
  methods: {
    validateState(ref) {
      if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
        return !this.veeErrors.has(ref)
      }
      return null
    },
    onSubmit() {
      this.$validator.validateAll().then((result) => {
      if (!result) { 
        return
      }
      })
    }, 
  }
};
</script>