<template>
  <v-menu 
        open-on-hover
        min-width="150"
        offset-y
        >
        <template v-slot:activator="{ on }">
           <v-btn :icon="isIcon" v-on="on" height="40" small :color="btnColor"
           @click="menu=='cart'?$router.push('cart'):$router.push('/')" class="mr-2 mt-2">
          <v-container class="flex-column">
        <div><v-icon>mdi-{{menu}}-outline</v-icon>
        <div class="cart_count mr-md-2"><span>0</span></div></div>
        <div v-if="menu=='heart'" class="hidden-sm-and-down">wishes</div>
        <div class="hidden-sm-and-down" v-else>cart</div> 
          </v-container>
        </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="text-center">
            <BarDropDown :title="menu=='heart'?'wishes':'cart'"/>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
</template>

<script>
import BarDropDown from './BarDropDown';
export default {

  name: 'Menu',
  components: { BarDropDown }
,
  props: ["menu"], 

  data () {
    return {

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