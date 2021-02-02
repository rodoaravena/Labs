<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <b-col cols="12">
          <b-card
            header="Primary"
            header-bg-variant="primary"
            header-text-variant="white"
            align="left"
          >
          <div slot="header">
            <strong class="text-white"><i class="fa fa fa-sitemap"></i> Ver Roadmap</strong>
          </div>
          <b-row>
            <b-col xs sm md="12">
              <h1 class="text-center"><u>Roadmap</u></h1><br>
            </b-col>
            <b-col xs sm md="4"> </b-col>
            <b-col xs sm md="4">
              <Timeline
                :timeline-items="dataTimeline"
                :message-when-no-items="messageWhenNoItems"
              />
            </b-col>
            <b-col xs sm md="4"> </b-col>
          </b-row>
          </b-card>
         </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Timeline from '../Timeline/Timeline.vue'

export default {
  titlePage: "Roadmap",
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'No articles found.',
    dataTimeline: [
      {
        from: new Date(2019, 2),
        name:'Pre-Test',
        title_special: 'Diagnóstico Personalizado',
      },
      {
        from: new Date(2019, 2),
        name:'Tierra',
        title: 'name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 3),
        name:'Agua',
        title: 'name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 4),
        name:'Aire',
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 5),
        name:'Fuego',
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 7),
        name:'Tierra',
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 8),
        name:'Agua',
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 9),
        name:'Aire',
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 10),
        name:'Fuego',
        title: 'Name',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
      },
      {
        from: new Date(2019, 2),
        name:'Re-Test',
        title_special: 'Evaluación Personalizada',
      }
    ]
  })
}
</script>

<style lang="scss">
* {
  outline: none;
  box-sizing: border-box;
}
</style>
