import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}

api.PostAPIAlternative = function (name,id_group,id_alternative) {
    return nbServ.post('api/evaluation/group/alternative/create/',{name_alternative:name,id_group:id_group,id_alternative:id_alternative},{
        headers: configHeader.headers 
    }).then(res => res.data).catch(error =>  {console.log(error)})
}

api.DeleteAPIAlternative = function (id_alternative) {
    return nbServ.delete('api/evaluation/group/alternative/delete/',{
        headers: configHeader.headers,
        data:{id_alternative} 
    }).then(res => res.data).catch(error => {console.log(error)})
}
api.PutAPIAlternativePosition = function(position,id_alternative) {
    return nbServ.put(`/api/evaluation/group/alternative/put/`, { position: position, id_alternative: id_alternative}, {
        headers: configHeader.headers,
    }).then(res => res).catch(error => { console.log(error) })
}
export default api