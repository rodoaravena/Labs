<template>
</template>
<script>
export default {
    props: ['items'],
    data () {
    return {
        type_students:this.$store.state.student,
        type_director:this.$store.state.director,
        type_admin:this.$store.state.admin,
        type_manager:this.$store.state.manager,
        type_teacher:this.$store.state.teacher,
        type_default:true
        }
    },
    mounted(){
        this.get_nav()
    },
    methods: {
        get_nav(){
            if(this.type_students==true){
                this.items.push({
                    title: true,
                    name: 'Menu',
                    class: '',
                    wrapper: {
                        element: '',
                        attributes: {}
                    }
                },
                {
                    name: 'Diagnóstico',
                    url: '/evaluation_init/diagnosis',
                    icon: 'fa fa-book'
                })
            }else{
                if(this.type_default==true){
                    this.items.push({
                        title: true,
                        name: 'Menu',
                        class: '',
                        wrapper: {
                        element: '',
                        attributes: {}
                    }
                    },
                    {
                      name: 'Inicio',
                      url: '/index',
                      icon: 'fa fa-home'
                    })
                }
                if(this.type_director==true || this.type_teacher==true){
                    this.items.push({
                        name: 'Cursos',
                        url: '/course',
                        icon: 'fa fa-th-list'
                    })
                }
                if(this.type_admin==true){
                    this.items.push({
                        name: 'Administración',
                        url: '/maintainer',
                        icon: 'fa fa-cogs',
                        children: [{
                            name: 'Temática',
                            url: '/maintainer/thematic',
                            icon: 'fa fa-dedent'
                        },
                        {
                            name: 'Usuarios',
                            url: '/maintainer/users',
                            icon: 'fa fa-user'
                        },{
                            name: 'Carga de Datos',
                            url: '/maintainer/bulk_load',
                            icon: 'fa fa-cloud-upload'
                        }] 
                    })
                }
                if(this.type_manager==true){
                    this.items.push(
                    //{
                    //    name: 'Resultados',
                    //    url: '/results',
                    //    icon: 'fa fa-check-square-o',
                    //    children: [{
                    //        name: 'Ver',
                    //        url: '/results/ver',
                    //        icon: 'fa fa-list'
                    //    }]
                    //}
                    {
                        name: 'Roadmap',
                        url: '/roadmap',
                        icon: 'fa fa-sitemap'
                    }
                    )
                }
            }
        }
    },
}
</script>
