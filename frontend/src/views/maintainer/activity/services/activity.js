import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}

api.PostAPIActivity = function(name, description, id_thematic) {
    return nbServ.post('api/evaluation/activity/create/', { name: name, domain: id_thematic, description: description }, {
        headers: configHeader.headers
    }).then(res => res).catch(error => { console.log(error) })
}

api.PutApiActivity = function(name, description,id_activity) {
    return nbServ.put(`/api/evaluation/activity/edit/`, { name: name, description: description,id_activity:id_activity }, {
        headers: configHeader.headers,
    }).then(res => res).catch(error => { console.log(error) })
}

api.DeleteAPIActivity = function(id_activity) {
    return nbServ.delete('api/evaluation/activity/delete/', {
        headers: configHeader.headers,
        data: { id_activity }
    }).then(res => res.data).catch(error => { console.log(error) })
}
export default api