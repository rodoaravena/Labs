import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}

api.DeleteAPIUser = function (pk_user) {
    return nbServ.delete('api/users/delete_user',{
        data:{pk_user}
    }).then(res => res.data).catch(error => {console.log(error)})
}

api.GetApiUser = function () {
    return nbServ.get(`api/users/all/`,{
        headers: configHeader.headers 
    }
    ).then(res => res).catch(error =>  {console.log(error)})
}
api.PostAPIUser = function (name_user,username,password) {
    return nbServ.post('api/users/create/',{name:name_user,username:username,password:password},{
        headers: configHeader.headers 
    }).then(res => res.data).catch(error =>  {console.log(error)})
}
api.PutAPIEditUser=function (name_user,username,password) {
    return nbServ.put('api/users/put_user',{name:name_user,username:username,password:password},{
        headers: configHeader.headers
    }).then(res => res.data).catch(error => {console.log(error)})
}
export default api