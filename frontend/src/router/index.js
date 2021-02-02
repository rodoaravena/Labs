import Vue from 'vue';
import Router from 'vue-router';

// Containers
const DefaultContainer = () =>
    import ('@/containers/DefaultContainer');

// Views
const Login = () =>
    import ('@/views/Login');
const Index = () =>
    import ('@/views/Index');
const Report = () =>
    import ('@/views/report/general_report');
const Course = () =>
    import ('@/views/courses/list_course');
const ResultDiagnosis = () =>
    import ('@/views/diagnosis/results/Ver');
const Roadmap = () =>
    import ('@/views/diagnosis/results/Roadmap');
const Evaluation_unit = () =>
    import ('@/views/evaluation/evaluation_init');
const Diagnosis = () =>
    import ('@/views/evaluation/evaluation_diagnosis');
const Bulk_load = () =>
    import ('@/views/maintainer/bulk_load');
const Thematic = () =>
    import ('@/views/maintainer/thematic');
const New_activity = () =>
    import ('@/views/maintainer/activity/activity');
const Users = () =>
    import ('@/views/maintainer/users');

Vue.use(Router);

export default new Router({
    mode: 'hash', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: '/login',
            name: 'Login',
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: 'login',
                name: 'inicio_Sesion',
                component: Login
              }
            ]
          },
        {
            path: '/',
            redirect: '/index',
            name: 'Inicio',
            component: DefaultContainer,
            children: [{
                path: 'index',
                name: 'Resumen',
                component: Index
            }
           ]
        },
        {
            path: '/',
            redirect: '/evaluation_init/diagnosis',
            name: 'Diagnóstico',
            component: DefaultContainer,
            children: [
            {
                path: 'evaluation_init/diagnosis',
                name: 'Ver diagnóstico',
                component: Diagnosis
            },
           ]
        },
        {
            path: '/',
            redirect: '/course',
            name: 'Cursos',
            component: DefaultContainer,
            children: [{
                path: 'course',
                name: 'Ver cursos',
                component: Course
            },
            { 
                path: 'report/',
                name: 'Reporte General',
                component: Report
            },
            {
                path: 'report/results',
                name: 'Ver resultados',
                component: ResultDiagnosis
            }
            ]
        },

        //{
        //    path: '/',
        //    redirect: '/results/ver',
        //    name: 'Resultado',
        //    component: DefaultContainer,
        //    children: [{
        //        path: 'results/ver',
        //        name: 'Ver resultados',
        //        component: ResultDiagnosis
        //    }, 
        //    {
        //        path: 'results/ver/roadmap',
        //        name: 'Roadmap',
        //        component: Roadmap
        //    }
        // ]
        //},

        {
            path: '/',
            redirect: '/roadmap',
            name: 'Roadmap',
            component: DefaultContainer,
            children: [{
                path: 'roadmap',
                name: 'Ver Roadmap',
                component: Roadmap
            }]
        },



       
        {
            path: '/',
            redirect: '/evaluation_init',
            name: 'Evaluation',
            component: {
              render (c) { return c('router-view') }
            },
            children: [
              {
                path: 'evaluation_init',
                name: 'Evaluation_init',
                component: Evaluation_unit
              }
            ]
        },
        {
            path: '/',
            redirect: '/maintainer/thematic',
            name: 'Administración',
            component: DefaultContainer,
            children: [
            {
                path: 'maintainer/thematic',
                name: 'Temática',
                component: Thematic
            },
            {
                path: 'maintainer/bulk_load',
                name: 'Carga de Datos', 
                component: Bulk_load
            },
            {
                path: 'maintainer/users',
                name: 'Usuarios', 
                component: Users  
            },
            {
                path: 'thematic/new_activity/',
                name: 'Crear actividades',
                component: New_activity
            },
         ]
        },
    ]
});