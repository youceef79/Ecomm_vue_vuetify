<template>
    <v-container class="py-10">
         <v-row justify="center" align="row">       
        <v-card>
        <v-card-title class="justify-center text-uppercase"> Page Not Found </v-card-title>
             <v-card-text>
                <v-img max-width="100%" height="50%" src="@/assets/404.png" alt="404">
           </v-img>
             </v-card-text>
           </v-card>  
         </v-row>	  
     </v-container>    
</template>

<script>
export default {

  name: 'NotFound',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>