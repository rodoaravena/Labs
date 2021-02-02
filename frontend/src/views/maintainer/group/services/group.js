import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}

api.PostAPIGroup = function(name) {
    return nbServ.post('api/evaluation/group/create/', { name: name}, {
        headers: configHeader.headers
    }).then(res => res).catch(error => { console.log(error) })
}

api.PutApiGroup = function(id,name) {
    return nbServ.put(`/api/evaluation/group/edit/`, { id_group: id, name: name}, {
        headers: configHeader.headers,
    }).then(res => res).catch(error => { console.log(error) })
}

api.DeleteAPIGroup = function(id_group) {
    return nbServ.delete('api/evaluation/group/delete/', {
        headers: configHeader.headers,
        data: { id_group }
    }).then(res => res.data).catch(error => { console.log(error) })
}

api.GetGroup = function () {
    return nbServ.get(`/api/evaluation/group/all/detail/`,{
        headers: configHeader.headers
    }
    ).then(res => res).catch(error =>  {console.log(error)})
}
export default api
