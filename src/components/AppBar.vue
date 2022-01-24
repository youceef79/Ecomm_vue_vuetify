<template>
	<v-toolbar
      app
      color="#DE8B10"
      height="70" 
      dark
    >
      <div class="d-flex">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

       <div class="text-h3 shrink mt-1 hidden-sm-and-down">
        <span class="red--text">YO</span><span class="orange--text">Sh</span><span class="purple--text">op</span>
      </div>
     </div>
      <v-text-field
            outlined = "false"
            class="mt-8 ml-10"
            min-width="100"
            placeholder="Search"
            prepend-inner-icon="mdi-shopping-search"
          > 
      </v-text-field>
  
      <v-spacer></v-spacer>
       
       <v-row justify="start" class="mt-2 pl-5" no-gutters>

        <v-col xs="1" sm="3" md="3">
          <Menu menu="heart" />
         </v-col>
               
         <v-col xs="1" sm="3" md="3">
          <Menu menu="cart" />
          </v-col>
         
        <v-col sm="4" md="5">
         <v-btn @click="$router.push('/user/login')" :icon="isIcon" v-if="!loggedIn" class="mt-1" color="primary"><v-icon class="mr-md-2">mdi-{{iconLogin}}</v-icon><span class="hidden-sm-and-down">Sign in</span></v-btn>  
         <MenuAccount v-else/>
        </v-col>
    </v-row>
         
    </v-toolbar>
</template>

<script>


import Menu from './Menu';
import MenuAccount from './MenuAccount';

export default {

  components: {
     Menu, MenuAccount
  },
  name: 'AppBar',

  data () {
    return {
       loggedIn: false,
    }
  }, 
  computed: { 
      isIcon () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return true 
          case 'sm': return true
          default: return false
        }
      },
      btnColor () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'white' 
          case 'sm': return 'white'
          default: return '#DE8B10'
        }
      },
       iconLogin() {
         switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 'menu' 
          case 'sm': return 'menu'
          default: return 'login'
        }
       }

    },
}
</script>

<style>
.cart_count {
    position: absolute;
    right: 0;
    top: 0;
    width: 23px;
    height: 23px;
    background: #0e8ce4;
    border-radius: 50%;
    text-align: center
}

.cart_count span {
    display: block;
    line-height: 23px;
    font-size: 12px;
    color: #FFFFFF;
    -webkit-transform: translateY(1px);
    -moz-transform: translateY(1px);
    -ms-transform: translateY(1px);
    -o-transform: translateY(1px);
    transform: translateY(1px)
}

</style>
