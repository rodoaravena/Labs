import Vuex from "vuex";
import Vue from 'vue';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       token:null,
       name:null,
       school:null,
       student:null,
       admin:null,
       director:null,
       teacher:null,
       manager:null,
       image:null,
       list_evaluation:[],
       list_question_developing:[],
       code:null,
    },
    mutations: {
        LOGIN_SUCCESS(state, response) {
            state.token = response.data.key
            state.name = response.data.user.first_name +" "+ response.data.user.last_name
            state.school= (("school" in response.data.info) ? response.data.info.school.id : null)
            state.student=response.data.student
            state.school_name=(("school" in response.data.info) ? response.data.info.school.name : null)
            state.admin=response.data.info.profile.is_admin
            state.director=response.data.info.profile.director_access
            state.teacher=response.data.info.profile.teacher_access
            state.manager=response.data.info.profile.manager_access
            state.image=response.data.info.profile.image_profile
        },
        CODE_EVALUATION(state,response){
            state.list_evaluation=response.data.group
            state.code=response.data.evaluation.code
            state.list_question_developing=response.data.question_developing
        }
    }
}) 