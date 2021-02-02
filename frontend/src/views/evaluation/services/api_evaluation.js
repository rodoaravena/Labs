import nbServ from '@/services/nb'
import swal from 'sweetalert2'
import configHeader from '@/services/header'
const api = {}

api.GetApiCode = function(code_evaluation) {
    return nbServ.get(`api/evaluation/show/${code_evaluation}`, {
        headers: configHeader.headers
    }).then(res => res).catch(error => swal.fire({toast: true,position: 'center',showConfirmButton: false,timer: 3000,type: 'error',title: 'Código incorrecto'}))
}

api.PostAPIAnswers = function(list_answers) {
    return nbServ.post('api/evaluation/answers/save/', { answers: list_answers }, {
        headers: configHeader.headers
    }).then(res => res.data).catch(error => { console.log(error) })
}
export default api