<template>
  <v-sheet>
    <v-slide-group
      show-arrows
      v-model="model"
      class="pa-4"
      active-class="success"
    >
      <v-slide-item
        v-for="n in 10"
        :key="n"
      >
        <v-card
          style="z-index:0"
          width="300"  
          class="ma-4"
          height="200"
          :color="active ? undefined : 'grey lighten-1'"
          @click="null"
        >  
           <v-img 
               height="150"
               style="z-index:-1"
                src="@/assets/cooking.png"
               >
          
        </v-img>
           <v-row 
                align="start"
                justify="center"
                class=" orange lighten-3"
              >  
               <v-row class="pt-5" justify="space-around center"> 
               <v-btn text class="text-uppercases" color="primary"> more infos ... </v-btn>
               <v-btn text class="text-uppercases" color="primary"> Add to cart </v-btn>
             </v-row>
                  <v-col :md="12" :sm="12"
                   offset-md="8" offset-sm="8">
                   <span class="white--text font-italic font-weight-normal"> $14.99 </span>
                   </v-col>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
    methods: {

    } 
  }
</script>