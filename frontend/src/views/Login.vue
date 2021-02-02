<template>
  <div class="app flex-row align-items-center bg-login">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col sm xs md="4">
          <b-card-group>
            <b-card no-body class="p-4" style="background:  rgba(30, 70, 23, 0.54); border: white;">
              <b-card-body>
                <b-form  @submit.stop.prevent="onConfirmLogin">
                  <h1 class="text-white">Iniciar sesión</h1>
                  <p class="text-white">Iniciar sesión en su cuenta</p>
                   <b-input-group class="mb-3">
                      <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                      <b-form-input  
                      id="name_username"
                      name="name_username"
                      :state="validateState('name_username')" 
                      min="2" 
                      max="100" 
                      v-validate="{ required: true, min:2, max:100 }" 
                      v-model="username" type="text" class="form-control" 
                      placeholder="Ingrese su username"> </b-form-input>
                      <b-form-invalid-feedback align="right" id="name_username">Username requerido</b-form-invalid-feedback>
                    </b-input-group>

                    <b-input-group class="mb-4">
                      <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                      <b-form-input  
                      type="password"
                      id="name_password"
                      name="name_password"
                      :state="validateState('name_password')" 
                      min="2" 
                      max="100" 
                      v-validate="{ required: true, min:2, max:100 }" 
                      v-model="password" class="form-control" 
                      placeholder="Ingrese su password"> </b-form-input>
                      <b-form-invalid-feedback align="right" id="name_password">Password requerido</b-form-invalid-feedback>
                    </b-input-group>

                  <b-row v-if="loading!=null">
                    <b-col xs sm md="4"></b-col>
                    <b-col xs sm md="4" class="text-center">
                      <b-spinner variant="success"></b-spinner><br><br>
                    </b-col>
                    <b-col  xs sm md="4"></b-col>
                  </b-row>
                  <b-row>
                    <b-col cols="12">
                      <b-button type="submit" :disabled="veeErrors.any()"  block variant="success" class="px-4"><i class="fa fa-sign-in"></i> Ingresar</b-button>
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
import api from '../services/Login'
import configHeader from '../services/header'
export default {
  titlePage: 'Inicio de sesión',
  name: 'Login',
  components: {},
  data: () => ({
    loading:null,
    username: null,
    password: null,
  }),
  methods: {
      validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }
            return null
        },
        onConfirmLogin() {
            this.$validator.validateAll().then((result) => { 
                if (!result) { 
                    return
                }
                this.getToken()
            })
        },
        getToken(){
          this.loading=true
          return api.getApiToken({username:this.username, password: this.password}).then(res => {
            if(res.status == 200){
              console.log("loged!")
              this.$store.commit('LOGIN_SUCCESS', res);
              configHeader.headers.Authorization = 'Token '+this.$store.state.token;
              console.log(res.data)
              if(!res.data.student){
                  this.$router.push({ name: 'Inicio' })
                }else{
                  this.$router.push({ name: 'Evaluation_init' })
              }
            }else{
              this.loading=null
            }
          })
        }
  }
}
</script>
<style>
.bg-login {
    background-image: url("http://www.aljanh.net/data/archive/img/2925555907.jpeg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.margin-custom{
margin: 4px;
}
</style>
