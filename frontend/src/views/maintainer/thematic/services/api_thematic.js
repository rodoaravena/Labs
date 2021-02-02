import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}

api.PostAPIThematic = function (name_thematic,description) {
    return nbServ.post('api/evaluation/domain/create/',{name:name_thematic,description:description},{
        headers: configHeader.headers 
    }).then(res => res.data).catch(error =>  {console.log(error)})
}

api.GetApiThematic = function () {
    return nbServ.get(`api/evaluation/domain/all/detail/`,{  
        headers: configHeader.headers 
    }
    ).then(res => res).catch(error =>  {console.log(error)})
}

api.DeleteAPIThematic = function (id_domain) {
    return nbServ.delete('api/evaluation/domain/delete/',{
        headers: configHeader.headers,
        data:{id_domain}
    }).then(res => res.data).catch(error => {console.log(error)})
}

api.PutApiThematic=function (name,description,id_domain) {
    return nbServ.put('api/evaluation/domain/edit/',{name:name,description:description,id_domain:id_domain},{
        headers: configHeader.headers
    }).then(res => res.data).catch(error => {console.log(error)})
}

api.PostChangeColor= function(id_domain,color) {
    return nbServ.post('api/evaluation/domain/color/create/',{id_domain:id_domain,color:color},{
        headers: configHeader.headers 
    }).then(res => res.data).catch(error => { console.log(error) })
}

api.PutChangeImage=function (id_domain,image) {
    return nbServ.put('api/evaluation/domain/image/create/',{id_domain:id_domain,image:image},{
        headers: configHeader.headers
    }).then(res => res.data).catch(error => {console.log(error)})
}

api.GetActivityThematic = function (id_domain) {
    return nbServ.get(`api/evaluation/domain/${id_domain}/detail/`,{  
        headers: configHeader.headers
    } 
    ).then(res => res).catch(error =>  {console.log(error)})
}
export default api 
