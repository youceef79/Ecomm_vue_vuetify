<template>
   <v-container>
      <v-row>
         <v-col v-for="n in 4" :key="n" cols="3">
           <v-skeleton-loader
          v-bind="attrs"
          type="card-avatar, article, actions"
        ></v-skeleton-loader>
         </v-col>
      </v-row>
   </v-container> 
</template>

<script>
export default {
  data () {
    return {
       attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
    }
  }
}
</script>

<style lang="css" scoped>
</style>