<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
     
      <img 
        src="img/avatars/6.jpg" 
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Configuración</strong>
      </b-dropdown-header>
      <b-dropdown-item><i class="fa fa-shield" /> Bloquear cuenta</b-dropdown-item>
      <b-dropdown-item @click="getLogout"><i class="fa fa-lock" /> Cerrar sesión</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import api from '../services/Login'

export default {
  name: 'DefaultHeaderDropdownAccnt', 
  components: {
    AppHeaderDropdown
  },
  data: () => {
    return {
    }
  },
  methods: {
    getLogout(){
      return api.getApiTokenLogout().then(res => {
        if(res.status == 200){
          console.log(res.data)
          this.$router.push({ name: 'Login' })
        }
      })
    }
  }
}
</script>
