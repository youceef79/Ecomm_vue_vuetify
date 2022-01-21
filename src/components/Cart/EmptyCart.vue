<template>
	<v-container class="py-5">
	<v-row justify="center" align="row">  <v-img src="https://i.imgur.com/dCdflKN.png" max-width="300" height="300" class="img-fluid mb-4 mr-3 text-center">
          </v-img>
      </v-row> 
        <v-row class="text-center mb-4" justify="center" align="center">
                        <h3><strong>Your Cart is Empty</strong></h3>
       </v-row>
       <v-row class="text-center mb-4" justify="center" align="center">

                        <h4>Add something to make me happy :)</h4> 
       </v-row>
             <v-row class="text-center mb-2" justify="center" align="center">
            <v-btn @click="$router.push('/')" success>continue shopping
                    </v-btn>
              </v-row>      
   </v-container>
</template>

<script>
export default {

  name: 'EmptyCart',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>