<template>
    <div class="wrapper">
        <b-button block pressed variant="outline-success" v-b-modal.modal-user class="card-header-action" aria-pressed="true"><i class="fa fa-plus-circle"></i> Nuevo Usuario</b-button>
        <b-modal
          centered="centered"
          header-bg-variant="success"
          ok-variant="success"
          size="lg"
          id="modal-user"
          ref="modal"
          title="Nuevo Usuario"
          @show="resetModalUser"
          @hidden="resetModalUser"
          @ok="handleUser"
        >     
            <b-row>
                <b-col  xs sm md="6">
                    <b-form-group
                      label-for="name_user_"
                      invalid-feedback="Nombre requerido">
                      <b-form-input name="name_user_"
                        type="text"
                        placeholder="Nombres"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="name_user"
                        :state="validateState('name_user_')" 
                        id="name_user_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
           
                <b-col xs sm md="6">
                    <b-form-group
                      label-for="last_name_"
                      invalid-feedback="Apellido requerido">
                      <b-form-input name="last_name_"
                        type="text"
                        placeholder="Apellidos"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="last_name"
                        :state="validateState('last_name_')" 
                        id="last_name_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col xs sm md="12">
                    <b-form-group
                      label-for="username_"
                      invalid-feedback="Username requerido">
                      <b-form-input name="username_"
                        type="text"
                        placeholder="Username"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="username"
                        :state="validateState('username_')" 
                        id="username_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col xs sm md="12">
                    <b-form-group
                      label-for="password_"
                      invalid-feedback="Contraseña requerida">
                      <b-form-input name="password_"
                        type="password"
                        placeholder="Contraseña"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="password"
                        :state="validateState('password_')" 
                        id="password_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
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
import api from './services/api_users'
import swal from 'sweetalert2'
export default {
    props: ['list'],
    data() {
        return {
            name_user:null,
            last_name:null,
            username:null,
            password:null
        };
    },
    methods: {
        validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }
            return null
        }, 
        resetModalUser() {
            this.name_user=null
            this.last_name=null
            this.username=null
            this.password=null
        },
        handleUser(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.onSubmit()
        },
        PostUser(){
            return api.PostAPIUser(this.name_user+" "+this.last_name,this.username,this.password).then(res => {   
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Registrado con éxito'})
                //Cuidado que en description deberia recibir la respuesta y no el dato como tal
                this.list.push({'username':this.username,'name':this.name_user+" "+this.last_name,'privilege':'director','password':this.password})
                this.$nextTick(() => {this.$refs.modal.hide()})
            })
        },
        onSubmit() {
            this.$validator.validateAll().then((result) => {
            if (!result) { 
                return
            }
            this.list.push({'username':this.username,'name':this.name_user+" "+this.last_name,'privilege':'director','password':this.password})
            //this.PostUser()  
            swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Registrado con éxito'})
             this.$nextTick(() => {this.$refs.modal.hide()})
            })
        },
    }
};
</script>
