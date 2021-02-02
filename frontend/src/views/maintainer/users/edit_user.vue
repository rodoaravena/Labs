<template>
    <div class="wrapper">
        <b-modal
          centered="centered"
          header-bg-variant="warning"
          ok-variant="warning"
          size="lg"
          id="modal-user_edit"
          ref="modal"
          title="Actualizar Usuario"
          @show="resetModalEditUser"
          @hidden="resetModalEditUser"
          @ok="handleEditUser"
        >
            <b-row>
                <b-col  xs sm md="6">
                    <b-form-group
                      label-for="name_user_edit_"
                      invalid-feedback="Nombre requerido">
                      <b-form-input name="name_user_edit_"
                        type="text"
                        placeholder="Nombres"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="name_user_edit"
                        :state="validateState('name_user_edit_')" 
                        id="name_user_edit_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
           
                <b-col xs sm md="6">
                    <b-form-group
                      label-for="last_name_edit_"
                      invalid-feedback="Apellido requerido">
                      <b-form-input name="last_name_edit_"
                        type="text"
                        placeholder="Apellidos"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="last_name_edit"
                        :state="validateState('last_name_edit_')" 
                        id="last_name_edit_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col xs sm md="12">
                    <b-form-group
                      label-for="username_edit_"
                      invalid-feedback="Username requerido">
                      <b-form-input name="username_edit_"
                        type="text"
                        placeholder="Username"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="username_edit_"
                        :state="validateState('username_edit_')" 
                        id="username_edit_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
                <b-col xs sm md="12">
                    <b-form-group
                      label-for="password_edit_"
                      invalid-feedback="Contraseña requerida">
                      <b-form-input name="password_edit_"
                        type="password"
                        placeholder="Contraseña"
                        v-validate="{ required: true, min:3, max:100 }" 
                        min="3"
                        max="100"
                        v-model="password_edit_"
                        :state="validateState('password_edit_')" 
                        id="password_edit_" class="form-control"> 
                    </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <template v-slot:modal-footer>
            <div class="w-100">
                <div class="text-right">
                    <b-button :disabled="veeErrors.any()" class="margin-custom color-button"  @click="onSubmitEdit" size="sm" variant="warning"><i class="fa fa-edit"></i> Actualizar</b-button>
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
    props: ['list','name_edit','username_edit','password_edit','position'],
    data() {
        return {
            name_user_edit:null,
            last_name_edit:null,
            username_edit_:null,
            password_edit_:null
        };
    },
    methods: {
        validateState(ref) {
            if(this.veeFields[ref] && (this.veeFields[ref].dirty || this.veeFields[ref].validated)){
                return !this.veeErrors.has(ref)
            }
            return null
        }, 
        resetModalEditUser() {
            this.name_user_edit=this.name_edit
            this.last_name_edit=this.name_edit
            this.username_edit_=this.username_edit
            this.password_edit_=this.password_edit
        },
        handleEditUser(bvModalEvt) {
            bvModalEvt.preventDefault()
            this.onSubmitEdit()
        },
        PutEditUser(){
            return api.PutAPIEditUser(this.name_user_edit+" "+this.last_name_edit,this.username_edit_,this.password_edit_).then(res => {   
                swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Registrado con éxito'}) 
                //Cuidado que en description deberia recibir la respuesta y no el dato como tal
                this.list[this.position].username=this.username_edit_
                this.list[this.position].name=this.name_user_edit
                this.list[this.position].password=this.password_edit_
                this.$nextTick(() => {this.$refs.modal.hide()})
            })
        },
        onSubmitEdit() {
            this.$validator.validateAll().then((result) => {
            if (!result) { 
                return
            }
            //this.PutEditUser() 
            this.list[this.position].username=this.username_edit_
            this.list[this.position].name=this.name_user_edit
            this.list[this.position].password=this.password_edit_
            swal.fire({toast: true,position: 'top-end',showConfirmButton: false,timer: 3000,type: 'success',title: 'Registrado con éxito'}) 
             this.$nextTick(() => {this.$refs.modal.hide()})
            })
        },
    }
};
</script>
