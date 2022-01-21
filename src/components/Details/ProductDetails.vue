<template>
	<v-container class="mt-4">
      <v-card class="mx-auto">
        <div>
          <v-card-title class="justify-center">
            Product Name
         </v-card-title>
           <div 
            class="grey lighten-3 pb-2 mb-5"
          > </div>
          </div>
          <v-container height="300"> 
            <v-row justify="space-around" align="center">
              <v-col :sm="12" :md="5"> 
                 <v-img 
                  class="mb-5 mainImage"
                  height="300"
                  :src="require(`@/assets/${mainImage}`)"
               > </v-img>
                 <v-row justify="space-around">
                     <v-col cols="4" v-for="(image, index) in images"
                      :key="index">
                     <v-img
                     :src="require(`@/assets/${image}`)"
                     height="100" 
                     class="imageDown"
                     @click="switchImage(index)" 
                   > </v-img>  
                     </v-col>
                 </v-row>
            </v-col>

            <v-col :xs="12" :sm="12" :md="5">
               <p class="black--text weight-normal darken-4 text-h5"> 
                Description</p>
                <p class="black--text weight-normal lighten-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et. Sed pulvinar proin gravida hendrerit lectus a. Vel eros.</p>
                <v-divider class="mb-5"></v-divider> 
                <v-row> 
                <v-col cols="3"> 
                <p class="black--text weight-normal darken-4 text-h5"> Price</p> 
               </v-col>
               <v-col class="ml-5 mt-1" lg="3" md="4">
               <span class="black--text weight-normal lighten-1"> $14.99 </span> 
               </v-col>
              </v-row>
              <v-divider class="mb-5"></v-divider>
               <p class="black--text weight-normal darken-4 text-h5"> Quantitiy </p>
               <v-row> 
               <v-col cols="8"> 
                <v-row justify="start">
                  <v-col cols="2">
                <v-btn @click="function(){ if(quantity>0) quantity--;}" color="white">-</v-btn>
                  </v-col>
                <v-col cols="4">
                <v-text-field
                  min="0"
                  class="ml-8 mt-n2 black--text weight-normal lighten-1"
                  :value="quantity" 
                  type="number"
                ></v-text-field>
              </v-col>
                <v-col cols="2">
                <v-btn @click="quantity++" color="white">+</v-btn>
              </v-col>
                </v-row> 
               </v-col>
                <v-col lg="4" md="4">
                   <v-select
                    class="ml-5 mt-n4 black--text weight-normal lighten-1"
                  :items="['S','M','L']"
                   label="scale"
                    ></v-select>
                </v-col>
              </v-row> 
              
            </v-col>
         </v-row> 
       </v-container>

       <v-card-actions class="pa-5">
      <v-spacer></v-spacer>

       <v-btn
        width="150"
        color="primary lighten-2"
        
      > 
        <v-icon small>mdi-cart</v-icon>
         Add To Cart
      </v-btn>

      <v-btn
        color="primary lighten-2"
        width="150"
        text
      > 
        Buy Now
      </v-btn>

    </v-card-actions>
      </v-card>	  
      <v-card  class="my-10">
        <div>
          <v-card-title class="justify-center">
            Related Products
         </v-card-title>
           <div 
            class="grey lighten-3 pb-2 mb-5"
          > </div>
          </div>
         <RelatedProducts />
      </v-card>   
	</v-container> 
</template>

<script>
 import RelatedProducts from './RelatedProducts';
export default {

  name: 'ProductDetails',
  components: { RelatedProducts },
  data () {
    return {
       images: ["image0.jpg", "image1.jpg" , "image2.jpg"],
       mainImage: "cooking.png",
       srcImage: '', 
       quantity: 0,
    }
  },
   methods: {
      switchImage(index) {        
           
        this.srcImage = this.images[index]; 
          for (var i =0 ; i < this.images.length; i++) {
               if (this.images[i] == this.srcImage) {
                    this.images[i] = this.mainImage;
               }
          }
          this.mainImage = this.srcImage;
        
        
      },
   }
}
</script>

<style lang="css" scoped>
.imageDown {
  cursor: pointer;
}
</style>