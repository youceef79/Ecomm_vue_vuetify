<template>
  <v-container>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(img, i) in images"
      :key="i"
    >
      <v-img
        :src="img"
        height="100%"
      >
         <v-row
          class="fill-height"
          align="center"
          justify="center"
        > 
          <div :class='colors[Math.floor(Math.random() * 5)]'>
            {{ desc[i] }}
          </div>
             <br/>

        </v-row>
          <div 
            class="red lighten-3 pb-10"
          > </div>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</v-container>
</template>

<script>
  export default {
    //props: ["height"],
    data () {
      return {
        colors: [
          'indigo--text text-h2',
          'warning--text text-h2',
          'pink darken-2--text text-h2',
          'red lighten-1--text text-h2',
          'deep-purple accent-4--text text-h2',
        ],
        desc: [
          'Description 1',
          'Description 2',
          'Description 3'
        ],
        images: [
          'https://i.imgur.com/NwKcuYO.jpg',
          'https://i.imgur.com/DDTs3zs.jpg',
          'https://i.imgur.com/aFfL7MV.jpg'
        ],
      }
    },
  }
</script>