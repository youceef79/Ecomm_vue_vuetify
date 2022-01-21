<template>
  <v-container class="my-5">
      <v-card v-if="numberItems>0"  max-width="90%" class="mx-auto">
         <v-list three-line>
        <v-subheader class="font-weight-bold justify-center">
            <v-icon class="mr-2">mdi-cart</v-icon> <span class="text-uppercase" > Cart </span> 
        </v-subheader>
        <v-row>
          <v-col cols="4"> 
         <div style="height:5px;" class="red"></div></v-col>
         <v-col cols="4"><div style="height:5px;" class="orange"></div></v-col>
          <v-col cols="4"><div style="height:5px;" class="purple"></div></v-col>
       </v-row>
          <template  v-for="(n , index) in numberItems">  
          <v-list-item
           class="listHover"
          :key="index"
        >  
         <v-row>
          <v-col md="2" sm="6" xs="12">  
          <v-list-item-avatar tile width="100" height="100">
            <v-img src="@/assets/cooking.png"></v-img>
          </v-list-item-avatar>
        </v-col>
            <v-col md="10" sm="10" xs="12">
              <v-list-item-content>
             <v-row class="mt-2 text-center" justify="start" align="start">
               <v-col md="2" xs="12" sm="6">  
                    <v-list-tile-title>Name</v-list-tile-title>
                    <div class="mt-5">
                    subTitle subTitle</div>       
               </v-col>
                 <v-col md="2" xs="12" sm="6">
                    <v-list-tile-title>Price</v-list-tile-title>
                    <div class="mt-5">$40.99</div>
               </v-col>
               <v-col md="4" xs="12" sm="6">
                    <v-list-tile-title class="ml-5">Quantity</v-list-tile-title> 
                <v-row justify="center" align="center">
                  <v-col md="2" sm="2" xs="12">
                <v-btn @click="decrement(index)" color="white">-</v-btn>
                  </v-col>
                <v-col md="4" sm="4" xs="12"> 
                <v-text-field
                  type="number"
                  min="0"
                  :key="index"
                  v-model="quantities[index]['q'+index]"
                  style="width:40px;"
                  class="ml-8 black--text weight-normal lighten-1" 
                ></v-text-field>
              </v-col>
                <v-col md="2" sm="2" xs="12">
                <v-btn @click="quantities[index]['q'+index]++" color="white">+</v-btn>
              </v-col>
                </v-row>
               </v-col>
                 <v-col md="2" xs="12" sm="6">
                    <v-list-tile-title>Total Purchases</v-list-tile-title>
                    <div class="mt-4">$100.99</div>
               </v-col>
               <v-col md="2" xs="12" sm="6">
                    <v-list-tile-title>Actions</v-list-tile-title>
                    <div class="mt-4"><v-btn icon color="success"><v-icon>mdi-refresh-circle</v-icon></v-btn> <v-btn @click="cartMinus" icon color="error"><v-icon>mdi-trash-can-outline</v-icon></v-btn></div>
               </v-col>
             </v-row>
          </v-list-item-content>
            </v-col>
        </v-row>
        </v-list-item>
            <v-divider :key="index" v-if="index != numberItems-1"></v-divider>
      </template>
      <v-divider></v-divider>
      <v-row class
      ="pa-4" justify="end"> 
        <v-col md="3" sm="4" xs="6">  <v-list-item-content>      <Checkout />  
         </v-list-item-content>
        </v-col>
      </v-row>   
    </v-list>
      </v-card>



      <v-card v-if="numberItems>0" max-width="90%" class="ma-8 mx-auto"> 
          <v-subheader class="font-weight-bold justify-center">
           <i class="fa fa-bullhorn fa-lg mr-2" aria-hidden="true"></i><span class="text-uppercase"> coupon code</span>
          </v-subheader>

         <v-divider></v-divider>
         <v-row align="center" justify="start">
          <v-col md="8" sm="6" xs="12">
          <v-card-text>
              <v-text-field
                name="promo"
                v-model="promo"
                label="coupon code"
                id="id"
              ></v-text-field>
           </v-card-text>                     
            </v-col>
            <v-col md="4" sm="6" xs="12">
              <v-card-text>
               <v-btn
                :disabled="!promo" color="primary"><i class="fa fa-search mr-2" aria-hidden="true"></i>search</v-btn>
               </v-card-text>  
            </v-col>
          </v-row>  
      </v-card> 
      <v-card v-if="numberItems==0" max-width="90%" class="ma-8 mx-auto">
       <v-subheader class="font-weight-bold justify-center">
            <v-icon class="mr-2">mdi-cart</v-icon> <span class="text-uppercase" > Cart </span> 
        </v-subheader>
        <v-row>
          <v-col cols="4"> 
         <div style="height:5px;" class="red"></div></v-col>
         <v-col cols="4"><div style="height:5px;" class="orange"></div></v-col>
          <v-col cols="4"><div style="height:5px;" class="purple"></div></v-col>
       </v-row>
         <EmptyCart />
      </v-card>      
</v-container>
</template>

<script>
  import EmptyCart from './EmptyCart'
  import Checkout from './Checkout'
  export default {
    components: { EmptyCart, Checkout },
    data () {
      return {
          numberItems: 4,
          quantities: [
            {q0 : 0},
            {q1 : 0},
            {q2 : 0},
            {q3 : 0}
          ], 
           promo: null
      }
    },
    methods: {
      decrement(index) {
         if(this.quantities[index]['q'+index]>0){
          this.quantities[index]['q'+index]--;
         }
       }, 
         cartMinus() {
            this.numberItems--;
         }  
      }
         
       /*watch: {
      quantities: function (val) {
            return;
         },
      }*/
}; 
</script>
<style scoped>
  .listHover:hover {
      background-color: #EFEFEF;
  }
</style>