import nbServ from '@/services/nb'
import configHeader from '@/services/header'
const api = {}

api.PostAPIQuestions = function (name_questions,type_questions,id_activity,id_question,select_group) {
    console.log("aqui valor",select_group)
    return nbServ.post('api/evaluation/question/create/',{text:name_questions,type:type_questions,activity:id_activity,id_question:id_question,group_level:select_group},{
        headers: configHeader.headers 
    }).then(res => res.data).catch(error =>  {console.log(error)})
}

api.DeleteAPIQuestions = function (id_question) {
    return nbServ.delete('api/evaluation/question/delete/',{
        headers: configHeader.headers,
        data:{id_question} 
    }).then(res => res.data).catch(error => {console.log(error)})
}
export default api