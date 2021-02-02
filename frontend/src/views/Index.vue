<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col xs sm md="6">
          <b-card
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
            <div slot="header">
              <strong class="text-white">
                <i class="fa fa-list-alt"></i> Resumen última sesión
              </strong>
              <div class="card-header-actions">
                <b-button block pressed variant="outline-success" class="card-header-action" aria-pressed="true"><i class="fa fa-plus"></i> Tribu</b-button>
              </div>
            </div>
            <b-row>
              <b-col xs sm md="6">
                <b-card class="bg-success">
                  <div class="h6 text-center">Tribu 1: 75%</div>
                  <div class="h2 text-center"><i class="fa-3x fa fa-smile-o"></i></div>
                  <b-progress :value="75" variant="secondary" :striped="true" class="progress-xs my-3"></b-progress>
                </b-card>
              </b-col>
              <b-col xs sm md="6">
                <b-card class="bg-warning">
                  <div class="h6 text-center">Tribu 2: 10%</div>
                  <div class="h2 text-center"><i class="fa-3x fa fa-wheelchair"></i></div>
                  <b-progress :value="10" variant="secondary" :striped="true" class="progress-xs my-3"></b-progress>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col xs sm md="6">
                <b-card class="bg-info">
                  <div class="h6 text-center">Tribu 3: 50%</div>
                  <div class="h2 text-center"><i class="fa-3x fa fa-male"></i></div>
                  <b-progress :value="50" variant="secondary" :striped="true" class="progress-xs my-3"></b-progress>
                </b-card>
              </b-col>
              <b-col xs sm md="6">
                <b-card class="bg-danger">
                  <div class="h6 text-center">Tribu 4: 0%</div>
                  <div class="h2 text-center"><i class="fa-3x fa fa-frown-o"></i></div>
                  <b-progress :value="0" variant="secondary" :striped="true" class="progress-xs my-3"></b-progress>
                </b-card>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col xs sm md="6" class="d-none d-lg-block">
          <b-card
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
            <div slot="header">
              <strong class="text-white">
                <i class="fa fa-calendar"></i> Calendario
              </strong>
              <div class="card-header-actions"></div>
            </div>
            <b-row>
              <b-col md lg xs sm="12">
               <FullCalendar
                  class="demo-app-calendar"
                  ref="fullCalendar"
                  locale="es"
                  defaultView="dayGridMonth"
                  :height = "10" 
                  :header="{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth'
                  }"
                  :plugins="calendarPlugins"
                  />
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <!--/.col-->
      </b-row>
      <b-row>
        <b-col xs sm md="6">
          <b-card
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
            <div slot="header">
              <strong class="text-white">
                <i class="fa fa-th-list"></i> Mi roadmap
              </strong>
              <div class="card-header-actions"></div>
            </div>
            <b-list-group>
              <b-list-group-item variant="success">Mi Road Map</b-list-group-item>
              <b-list-group-item variant="primary">Sesiones</b-list-group-item>
              <b-list-group-item variant="secondary">Temática</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col xs sm md="6">
          <b-card
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
            <div slot="header">
              <strong class="text-white">
                <i class="fa fa-file-text-o"></i> Tribus y proyectos
              </strong>
              <div class="card-header-actions"></div>
            </div>
            <b-card-group deck>
              <b-card header="secondary"
                  header-bg-variant="secondary"
                  header-text-variant="white">
                <div slot="header"><b>Tribus</b></div>
                <b-list-group flush>
                  <b-list-group-item class="color--custom" href="#">Tribu 1</b-list-group-item>
                  <b-list-group-item class="color--custom" href="#">Tribu 2</b-list-group-item>
                  <b-list-group-item class="color--custom" href="#">Tribu 3</b-list-group-item>
                  <b-list-group-item class="color--custom" href="#">Tribu 4</b-list-group-item>
                </b-list-group>
              </b-card>
              <b-card header="seconary"
                  header-bg-variant="secondary"
                  header-text-variant="white">
                <div slot="header"><b>Proyectos</b></div>
                <b-list-group flush>
                  <b-list-group-item class="color--custom" href="#">Proyecto 1</b-list-group-item>
                  <b-list-group-item class="color--custom" href="#">Proyecto 2</b-list-group-item>
                  <b-list-group-item class="color--custom" href="#">Proyecto 3</b-list-group-item>
                  <b-list-group-item class="color--custom" href="#">Proyecto 4</b-list-group-item>
                </b-list-group>
              </b-card>

            </b-card-group>
          </b-card>
       <!--   <b-button  class="mr-1" pill pressed variant="outline-success"><i class="fa fa-caret-square-o-down"></i> Iniciar siguiente sesión</b-button>-->
        </b-col>
        <!--/.col-->
      </b-row>
      <!--/.row-->
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  titlePage: 'Inicio',
  data() {
    return {
      calendarPlugins: [ dayGridPlugin ],
      items: [],
      fields: [
        {
          key: "postId",
          label: "N°",
          sortable: true
        },
        {
          key: "id",
          label: "ID",
          sortable: true
        },
        {
          key: "name",
          label: "Name",
          sortable: true
        },
        {
          key: "email",
          label: "Email",
          sortable: true
        },
        {
          key: "body",
          label: "Body",
          sortable: true
        }
      ],
      currentPage: 1,
      perPage: 5,
      totalItems: 0,
      pageOptions: [5, 10, 15],
      filter: null
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    this.totalRows = this.items.length;
    this.fetchData().catch(error => {
      console.error(error);
    });
  },
  methods: {
    async fetchData() {
      this.items = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${this.currentPage}&_limit=${this.perPage}`
      )
        .then(res => {
          this.totalItems = parseInt(res.headers.get("x-total-count"), 10);

          return res.json();
        })
        .then(items => items);
    }
  },
  watch: {
    currentPage: {
      handler: function(value) {
        this.fetchData().catch(error => {
          console.error(error);
        });
      }
    }
  }
};
</script>
<style lang='scss'>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
</style>
<style>
.color--custom:hover{
  background-color:#20A8D8;
  color:white;
}

</style>