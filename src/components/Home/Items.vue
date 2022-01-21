<template>
  <v-container>
          
    <ListItems class="transition" :page="page"/> 
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="6"
    ></v-pagination>
  </div>
  </v-container>
</template>

<script>
 import ListItems from './ListItems';
  export default {
    components: { ListItems },
    data () {
      return {
        page: 1,
      }
    },
  };
</script>

<style>
  
</style>