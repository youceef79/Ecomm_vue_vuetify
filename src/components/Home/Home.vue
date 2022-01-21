<template>
  <div>
  <v-row justify="center">
   <v-card color="basil" width="80%" class="mb-5 mt-3">
    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
        @click="filterCat"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-progress-linear
      indeterminate 
      class="mt-1"
      color="grey"
       v-if="loadingItems"
    ></v-progress-linear> 
  </v-card>
</v-row>
   <transition name="slide-fade">
          <Carousels v-if="showCar"/>
   </transition> 
      <v-row v-if="loadingItems" justify="center" align="end">
           <Skeleton />
      </v-row>    
     <Items v-else/>

 </div>
</template>

<script>
import Items from './Items';
import Carousels from './Carousels';
import Skeleton from './Skeleton';
export default {
   components: {
        Carousels, Items, Skeleton
       },
   data () {
      return {
        tab: null,
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails','Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        showCar: true,
        loadingItems: false,
      }
    },
     methods: {
         filterCat(){
          if (this.showCar) {
            this.showCar = false;
          }
          this.loadingItems = true;
          setTimeout(() => (this.loadingItems = false), 1000)
        }

     }
  
}
</script>


<style scoped>
  .slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 1s ease-in-out;
   }

.slide-fade-enter, .slide-fade-leave-to
 {
  transform: translateX(500px);
  opacity: 0;
 }
</style>