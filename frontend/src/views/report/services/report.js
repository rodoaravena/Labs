import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}
api.GetApiReport = function (code) {
    return nbServ.get(`/api/evaluation/report/${code}/`,{
        headers: configHeader.headers
    }
    ).then(res => res.data).catch(error =>  {console.log(error)})
}
export default api 