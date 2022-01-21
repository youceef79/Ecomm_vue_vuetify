<template>
  <v-container class="mt-5">
    <v-card  width="70%" class="my-10 mx-auto py-5" style="border-left:10px solid purple;border-right:10px solid purple;">

     <v-card-title class="justify-center mb-5 font-weight-bold text-uppercase"> 
       Login
      </v-card-title>
  
   <v-card-text class=""> 
       <v-text-field
            outlined
            label="Email"
            type="email"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
           <v-text-field
            outlined
            label="Password"
            prepend-inner-icon="mdi-lock"
            :append-icon="hidden ? 'mdi-eye' : 'mdi-eye-off'"
             @click:append="() => (hidden = !hidden)"
          :type="hidden ? 'password' : 'text'"
           hint="At least 8 characters"
          ></v-text-field>  
     </v-card-text>
     <v-card-text class="pb-5">	 
       <v-row justify="space-around">
         <a class="text-decoration-underline">Forgot My Password</a>
         <div>
         <v-btn color="primary">login</v-btn>
        <v-btn @click="$router.push('/user/register')" text class="ml-2" color="primary">Sign Up</v-btn>
         </div>
       </v-row>
     </v-card-text>
       </v-card>
      </v-container>
</template>

<script>
export default {

  name: 'Login',

  data () {
    return {
        hidden: true,
    }
  }
};
</script>

<style>
   
 
</style>