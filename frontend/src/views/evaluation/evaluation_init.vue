<template>
  <div class="app flex-row align-items-center bg-login">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col sm xs md="4">
          <b-card-group>
            <b-card no-body class="p-4" style="background:  rgba(30, 70, 23, 0.54); border: white;">
              <b-card-body>
                <b-form @submit.stop.prevent="onConfirm">
                  <b-form-group>
                    <h2 class="text-center text-white">Evaluación cognitiva</h2>
                  </b-form-group>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="fa fa-qrcode"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      id="name_code"
                      name="name_code"
                      type="password"
                      :state="validateState('name_code')"
                      min="5"
                      max="100"
                      v-validate="{ required: true, min:5, max:100 }"
                      v-model="code_evaluation"
                      class="form-control"
                      placeholder="Ingrese su código"
                    ></b-form-input>
                    <b-form-invalid-feedback align="right" id="name_code">Código requerido</b-form-invalid-feedback>
                  </b-input-group>
                  <b-row v-if="loading!=null">
                    <b-col xs sm md="4"></b-col>
                    <b-col xs sm md="4" class="text-center">
                      <b-spinner variant="success"></b-spinner>
                      <br />
                      <br />
                    </b-col>
                    <b-col xs sm md="4"></b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12">
                      <b-button
                        type="submit"
                        :disabled="veeErrors.any()"
                        block
                        variant="success"
                        class="px-4"
                      >
                        <i class="fa fa-sign-in"></i> Comenzar
                      </b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import api from "../evaluation/services/api_evaluation";
import swal from "sweetalert2";
import moment from "moment";
export default {
  titlePage: "Evaluación cognitiva",
  name: "evaluation_init",
  components: {},
  data: () => ({
    loading: null,
    code_evaluation: null
  }),
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      } 
      return null;
    },
    getCode() {
      this.loading = true;
      var date_today = moment().format("YYYY-MM-DD");
      return api.GetApiCode(this.code_evaluation).then(res => {
        if (res.status == 200) {
          console.log(res.data);
          var data_end = res.data.evaluation.end;
          //console.log(new Date(date_today).getTime(),"hol",new Date(data_end).getTime())
          if (new Date(date_today) <= new Date(data_end)){
            this.$store.commit('CODE_EVALUATION', res);
            this.$router.push({name: "Diagnóstico"});
            //console.log(res.data);
            //localStorage.setItem(
            //  "evaluation",
            //  JSON.stringify(res.data.questions)
            //);
            //localStorage.setItem("code", res.data.evaluation.code);
          } else {
            swal.fire({
              toast: true,
              position: "center",
              showConfirmButton: false,
              timer: 3000,
              type: "warning",
              title: "Evaluación caducada"
            });
            this.loading = null;
          }
        } else {
          this.loading = null;
        }
      });
    },
    onConfirm() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.getCode();
      });
    }
  }
};
</script>
<style>
.bg-login {
  background-image: url("http://www.aljanh.net/data/archive/img/2925555907.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>