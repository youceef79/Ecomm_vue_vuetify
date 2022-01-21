<template> 
  <v-container class="mb-n10">
     <v-row v-for="n in page" :key="n">
          <v-col :sm="6" :md="3"
          v-for="m in 4" :key="m">
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    >
       <v-hover v-slot="{ hover }">
       <div  class="text-center 
       d-flex align-center orange v-card--not-reveal white--text text-h5">
             <v-icon>shop-price</v-icon> <span class="text-align-center"> Price </span> 	
               <v-expand-transition> 
            <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange v-card--reveal text-h2 white--text"
          >
              $14.99 
            </div>    
         </v-expand-transition> 
       </div>
       </v-hover>
      </v-img>  
    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Italian, Cafe
      </div>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Read more ...
      </v-btn>
    </v-card-actions>
  </v-card>  	 
   </v-col>
    </v-row>  
  </v-container>

</template>

<script>
 
export default {

  props: ["page"],
  data () {
    return {
          loading: false,
          selection: 1,
          page2: 1
    }
  }, 
  methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
}
</script>

<style>
  .v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 200px;
}
 .v-card--not-reveal {
      align-items: center;
      bottom: 0;
      justify-content: center;
      opacity: .6;
      position: absolute;
      width: 100%;
      height: 20%;
 }
 .heart {
  width: 130px;
  height: 130px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: url(/assets/wishList/heart.png) no-repeat;
  background-position: 0 0;
  z-index: 2;
  cursor: pointer;
}
.heart-line {
  background-position: -3628px 0;
  transition: background 1s steps(28);
}
</style>