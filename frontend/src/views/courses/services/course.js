import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}
api.GetApiCourse = function (year,school) {
    return nbServ.get(`/api/core/${year}/${school}/courses`,{
        headers: configHeader.headers
    }
    ).then(res => res).catch(error =>  {console.log(error)})
}

api.GetApiCode = function (id) {
    return nbServ.get(`/api/evaluation/course/${id}/`,{
        headers: configHeader.headers
    }
    ).then(res => res).catch(error =>  {console.log(error)})
}
export default api  