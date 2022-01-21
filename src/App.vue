<template>
  <v-app style="background-color: #EFEFEF;">
    <AppBar />
     
    <v-main>
       <router-view>
       </router-view>
    </v-main>
      <Footer />   
  </v-app>
</template>

<script>


import Footer from './components/Footer';

import AppBar from './components/AppBar';

export default {
  name: 'App',
  
  components: {
     Footer, AppBar
  },
  data: () => ({
      
  })
};
</script>
<style>
.heart {
  width: 300px;
  height: 300px;
  position: relative;
  left: 50%;
  background: url(/@/assets/heart.png) no-repeat;
  background-position: 0 0;
  z-index: 2;
  cursor: pointer;
}
.heart-line {
  background-position: -3628px 0;
  transition: background 1s steps(28);
}
</style>