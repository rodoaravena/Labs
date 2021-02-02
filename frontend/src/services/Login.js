import nbServ from '../services/nb'
import swal from 'sweetalert2'
import configHeader from '../services/header'
const api = {}
api.getApiToken = function(post_data) {
    return nbServ.post('api/auth/login/', post_data, {}).then(res => res).catch(error =>  swal.fire({toast: true,position: 'center',showConfirmButton: false,timer: 3000,type: 'error',title: 'Credenciales incorrectas'}))
}

api.getApiTokenLogout = function() {
    var response = nbServ.post('api/auth/logout/', {}, {
        headers: configHeader.headers
    });
    return response;
}

export default api